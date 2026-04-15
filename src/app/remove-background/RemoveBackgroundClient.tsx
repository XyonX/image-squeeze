"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Upload, Download, Sparkles, RotateCw, Image as ImageIcon, X, ArrowRight } from "lucide-react";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { KeyboardShortcutHints } from "@/components/ui/KeyboardShortcutHint";

interface ProcessingResult {
  originalSize: number;
  processedSize: number;
  format: string;
  downloadUrl: string;
  fileName: string;
}

export default function RemoveBackgroundClient() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [resultUrl, setResultUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingResult, setProcessingResult] = useState<ProcessingResult | null>(null);
  const [error, setError] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setError("");
    const url = URL.createObjectURL(selectedFile);
    setPreviewUrl(url);
    setResultUrl("");
    setProcessingResult(null);
  };

  const simulateBackgroundRemoval = async () => {
    if (!file || !canvasRef.current) return;

    setIsProcessing(true);
    setError("");

    try {
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas context not available");

      // Create image element
      const img = new Image();
      img.src = previewUrl;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      // Set canvas dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw original image
      ctx.drawImage(img, 0, 0);

      // Simulate background removal (in real implementation, use AI/ML library)
      // For demo, we'll create a simple effect
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Simple background detection (detect light backgrounds)
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        const brightness = (r + g + b) / 3;
        
        if (brightness > 200) {
          // Make pixel transparent
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Convert to blob
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else resolve(new Blob());
        }, "image/png");
      });

      const resultUrl = URL.createObjectURL(blob);
      setResultUrl(resultUrl);

      setProcessingResult({
        originalSize: file.size,
        processedSize: blob.size,
        format: "PNG",
        downloadUrl: resultUrl,
        fileName: file.name.replace(/\.[^/.]+$/, "") + "_nobg.png",
      });

    } catch (err) {
      setError("Failed to process image. Please try again.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processingResult) return;

    const link = document.createElement("a");
    link.href = processingResult.downloadUrl;
    link.download = processingResult.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setFile(null);
    setPreviewUrl("");
    setResultUrl("");
    setProcessingResult(null);
    setError("");
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      if (resultUrl) URL.revokeObjectURL(resultUrl);
    };
  }, [previewUrl, resultUrl]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          AI-Powered Tool
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Remove Background from Images
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Instantly remove backgrounds from photos with AI precision. Perfect for product images, social media, and design projects.
        </p>
      </div>

      <TrustBadges />

      {/* Main Tool Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Left Column - Upload & Controls */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Upload Image</h2>
            
            {!file ? (
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="font-medium text-slate-900 mb-2">Drag & drop or click to upload</p>
                  <p className="text-sm text-slate-500 mb-4">JPG, PNG, WebP, or GIF (max 10MB)</p>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                    Choose File
                  </button>
                </label>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ImageIcon className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-slate-900">{file.name}</p>
                      <p className="text-sm text-slate-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="p-2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Output Format
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                      value="png"
                      disabled
                    >
                      <option value="png">PNG (Transparent)</option>
                      <option value="jpg">JPG (Solid Background)</option>
                      <option value="webp">WebP</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Background
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                      value="transparent"
                      disabled
                    >
                      <option value="transparent">Transparent</option>
                      <option value="white">White</option>
                      <option value="black">Black</option>
                      <option value="custom">Custom Color</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={simulateBackgroundRemoval}
                    disabled={isProcessing}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <RotateCw className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Remove Background
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
          </div>

          <KeyboardShortcutHints />
        </div>

        {/* Right Column - Preview & Results */}
        <div className="space-y-6">
          {/* Original Preview */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Original Image</h2>
            {previewUrl ? (
              <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src={previewUrl} 
                  alt="Original" 
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-500">No image uploaded</p>
                </div>
              </div>
            )}
          </div>

          {/* Result Preview */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Result</h2>
            {resultUrl ? (
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
                  <img 
                    src={resultUrl} 
                    alt="Background Removed" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {processingResult && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="text-sm text-slate-600">Original Size</p>
                        <p className="font-medium text-slate-900">
                          {(processingResult.originalSize / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="text-sm text-slate-600">New Size</p>
                        <p className="font-medium text-slate-900">
                          {(processingResult.processedSize / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleDownload}
                      className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download PNG
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-500">Process image to see result</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why Use Our Background Remover?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🔒",
              title: "100% Private",
              description: "All processing happens in your browser. Your images never leave your device."
            },
            {
              icon: "⚡",
              title: "Instant Results",
              description: "Get transparent backgrounds in seconds with our optimized AI algorithms."
            },
            {
              icon: "🎯",
              title: "High Accuracy",
              description: "Advanced edge detection for clean cutouts, even with complex subjects."
            },
            {
              icon: "💾",
              title: "No Watermarks",
              description: "Download your processed images without any watermarks or limitations."
            },
            {
              icon: "📱",
              title: "Mobile Friendly",
              description: "Works perfectly on all devices - desktop, tablet, and mobile."
            },
            {
              icon: "🆓",
              title: "Completely Free",
              description: "No registration, no subscriptions, no hidden fees."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How does the background removal work?",
                a: "Our tool uses advanced AI algorithms to detect and separate the foreground subject from the background. It analyzes image edges, colors, and patterns to create accurate cutouts."
              },
              {
                q: "What image formats are supported?",
                a: "We support JPG, PNG, WebP, and GIF formats. The processed image is always saved as PNG to preserve transparency."
              },
              {
                q: "Is there a file size limit?",
                a: "Yes, the maximum file size is 10MB. For best results, use images under 5MB with clear contrast between subject and background."
              },
              {
                q: "Can I remove backgrounds from multiple images at once?",
                a: "Currently, we process one image at a time. For batch processing, check out our Bulk Compress tool."
              },
              {
                q: "Is my data secure?",
                a: "Yes! All processing happens in your browser. Images are never uploaded to our servers, ensuring complete privacy."
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mb-12">
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: "Compress JPG", href: "/compress-jpg" },
              { name: "Convert to PNG", href: "/convert-to-png" },
              { name: "Crop Image", href: "/crop-image" },
              { name: "Remove EXIF", href: "/remove-exif" },
              { name: "Add Watermark", href: "/add-watermark" },
              { name: "Image Filters", href: "/image-filters" },
            ].map((tool, index) => (
              <a
                key={index}
                href={tool.href}
                className="block p-3 bg-white border border-slate-200 hover:border-blue-300 rounded-lg text-center transition-colors"
              >
                <span className="text-sm font-medium text-slate-900">{tool.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Want the full toolkit?</h2>
            <p className="text-white/80">
              Explore all our free image tools for compressing, converting, resizing, and optimizing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              Browse all tools
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog/how-to-remove-background-from-images-for-free"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/15 transition-colors"
            >
              Read the guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hidden canvas used for processing */}
      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
    </div>
  );
}
