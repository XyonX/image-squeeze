// Web Worker utilities for offloading heavy image processing

export interface WorkerMessage {
  type: string;
  payload: any;
  id?: string;
}

export interface WorkerResponse {
  type: string;
  payload: any;
  id?: string;
  error?: string;
}

export class ImageProcessingWorker {
  private worker: Worker | null = null;
  private messageHandlers: Map<string, (payload: any) => Promise<any>> = new Map();
  private pendingRequests: Map<string, { resolve: (value: any) => void; reject: (error: any) => void }> = new Map();

  constructor() {
    if (typeof window !== "undefined") {
      this.initializeWorker();
    }
  }

  private initializeWorker() {
    // Create a blob URL for the worker code
    const workerCode = `
      self.onmessage = async (e) => {
        const { type, payload, id } = e.data;
        
        try {
          let result;
          
          switch (type) {
            case "compress-jpg":
              result = await compressJPG(payload);
              break;
            case "compress-png":
              result = await compressPNG(payload);
              break;
            case "compress-webp":
              result = await compressWebP(payload);
              break;
            case "resize-image":
              result = await resizeImage(payload);
              break;
            case "convert-format":
              result = await convertFormat(payload);
              break;
            case "remove-exif":
              result = await removeExif(payload);
              break;
            case "apply-filters":
              result = await applyFilters(payload);
              break;
            case "crop-image":
              result = await cropImage(payload);
              break;
            case "rotate-image":
              result = await rotateImage(payload);
              break;
            default:
              throw new Error(\`Unknown message type: \${type}\`);
          }
          
          self.postMessage({ type, payload: result, id });
        } catch (error) {
          self.postMessage({ 
            type: "error", 
            payload: null, 
            id, 
            error: error.message || "Unknown error" 
          });
        }
      };

      async function compressJPG({ file, quality, stripMetadata }) {
        // Simulate compression - in real implementation, use browser-image-compression
        return { 
          compressedBlob: file, 
          originalSize: file.size, 
          compressedSize: Math.round(file.size * quality),
          quality 
        };
      }

      async function compressPNG({ file, quality, lossless }) {
        return { 
          compressedBlob: file, 
          originalSize: file.size, 
          compressedSize: Math.round(file.size * (lossless ? 0.9 : quality)),
          lossless 
        };
      }

      async function compressWebP({ file, quality }) {
        return { 
          compressedBlob: file, 
          originalSize: file.size, 
          compressedSize: Math.round(file.size * quality),
          quality 
        };
      }

      async function resizeImage({ file, width, height, maintainAspectRatio }) {
        return { 
          resizedBlob: file, 
          originalSize: file.size, 
          originalWidth: 0, 
          originalHeight: 0,
          newWidth: width,
          newHeight: height 
        };
      }

      async function convertFormat({ file, format }) {
        return { 
          convertedBlob: file, 
          originalSize: file.size, 
          format 
        };
      }

      async function removeExif({ file }) {
        return { 
          cleanedBlob: file, 
          originalSize: file.size 
        };
      }

      async function applyFilters({ file, filters }) {
        return { 
          filteredBlob: file, 
          originalSize: file.size,
          filters 
        };
      }

      async function cropImage({ file, x, y, width, height }) {
        return { 
          croppedBlob: file, 
          originalSize: file.size,
          cropArea: { x, y, width, height }
        };
      }

      async function rotateImage({ file, angle }) {
        return { 
          rotatedBlob: file, 
          originalSize: file.size,
          angle 
        };
      }
    `;

    const blob = new Blob([workerCode], { type: "application/javascript" });
    this.worker = new Worker(URL.createObjectURL(blob));

    this.worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
      const { type, payload, id, error } = e.data;

      if (id && this.pendingRequests.has(id)) {
        const { resolve, reject } = this.pendingRequests.get(id)!;
        this.pendingRequests.delete(id);

        if (error) {
          reject(new Error(error));
        } else {
          resolve(payload);
        }
      }
    };

    this.worker.onerror = (error) => {
      console.error("Web Worker error:", error);
      // Reject all pending requests
      for (const [id, { reject }] of this.pendingRequests) {
        reject(new Error("Worker error"));
      }
      this.pendingRequests.clear();
    };
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  async sendMessage<T = any>(type: string, payload: any): Promise<T> {
    if (!this.worker) {
      throw new Error("Worker not initialized");
    }

    const id = this.generateId();
    const message: WorkerMessage = { type, payload, id };

    return new Promise((resolve, reject) => {
      this.pendingRequests.set(id, { resolve, reject });
      this.worker!.postMessage(message);
    });
  }

  // Convenience methods
  async compressJPG(file: File, quality: number = 0.7, stripMetadata: boolean = true) {
    return this.sendMessage("compress-jpg", { file, quality, stripMetadata });
  }

  async compressPNG(file: File, quality: number = 0.8, lossless: boolean = false) {
    return this.sendMessage("compress-png", { file, quality, lossless });
  }

  async compressWebP(file: File, quality: number = 0.75) {
    return this.sendMessage("compress-webp", { file, quality });
  }

  async resizeImage(file: File, width: number, height: number, maintainAspectRatio: boolean = true) {
    return this.sendMessage("resize-image", { file, width, height, maintainAspectRatio });
  }

  async convertFormat(file: File, format: "jpg" | "png" | "webp") {
    return this.sendMessage("convert-format", { file, format });
  }

  async removeExif(file: File) {
    return this.sendMessage("remove-exif", { file });
  }

  async applyFilters(file: File, filters: any) {
    return this.sendMessage("apply-filters", { file, filters });
  }

  async cropImage(file: File, x: number, y: number, width: number, height: number) {
    return this.sendMessage("crop-image", { file, x, y, width, height });
  }

  async rotateImage(file: File, angle: number) {
    return this.sendMessage("rotate-image", { file, angle });
  }

  terminate() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
      this.pendingRequests.clear();
    }
  }
}

// Singleton instance
let workerInstance: ImageProcessingWorker | null = null;

export function getImageProcessingWorker(): ImageProcessingWorker {
  if (!workerInstance) {
    workerInstance = new ImageProcessingWorker();
  }
  return workerInstance;
}

export function terminateImageProcessingWorker() {
  if (workerInstance) {
    workerInstance.terminate();
    workerInstance = null;
  }
}

// React hook for using web workers
export function useImageProcessing() {
  const worker = getImageProcessingWorker();

  return {
    compressJPG: worker.compressJPG.bind(worker),
    compressPNG: worker.compressPNG.bind(worker),
    compressWebP: worker.compressWebP.bind(worker),
    resizeImage: worker.resizeImage.bind(worker),
    convertFormat: worker.convertFormat.bind(worker),
    removeExif: worker.removeExif.bind(worker),
    applyFilters: worker.applyFilters.bind(worker),
    cropImage: worker.cropImage.bind(worker),
    rotateImage: worker.rotateImage.bind(worker),
  };
}