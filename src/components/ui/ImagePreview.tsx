"use client";

import { useState, useRef, useEffect } from "react";
import { Download, ZoomIn, ZoomOut, X } from "lucide-react";
import { formatFileSize } from "@/lib/tools";

export interface ImagePreviewProps {
	src: string | Blob;
	alt?: string;
	size?: "sm" | "md" | "lg" | "xl";
	showInfo?: boolean;
	zoomable?: boolean;
	downloadable?: boolean;
	fileName?: string;
	fileSize?: number;
	dimensions?: { width: number; height: number };
	onDownload?: () => void;
	className?: string;
}

export function ImagePreview({
	src,
	alt = "Preview",
	size = "md",
	showInfo = true,
	zoomable = true,
	downloadable = true,
	fileName,
	fileSize,
	dimensions,
	onDownload,
	className = "",
}: ImagePreviewProps) {
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomLevel, setZoomLevel] = useState(1);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
	const [imageSrc, setImageSrc] = useState<string>("");
	const imgRef = useRef<HTMLImageElement>(null);
	const zoomContainerRef = useRef<HTMLDivElement>(null);

	// Convert Blob to URL and handle cleanup
	useEffect(() => {
		let objectUrl = "";
		
		if (src instanceof Blob) {
			objectUrl = URL.createObjectURL(src);
			setImageSrc(objectUrl);
		} else {
			setImageSrc(src);
		}

		return () => {
			if (objectUrl) {
				URL.revokeObjectURL(objectUrl);
			}
		};
	}, [src]);

	// Get image dimensions when loaded
	const handleImageLoad = () => {
		setImageLoaded(true);
		if (imgRef.current) {
			const { naturalWidth, naturalHeight } = imgRef.current;
			setImageDimensions({ width: naturalWidth, height: naturalHeight });
		}
	};

	// Size classes
	const sizeClasses = {
		sm: "w-16 h-16",
		md: "w-24 h-24",
		lg: "w-48 h-48",
		xl: "w-64 h-64",
	};

	// Zoom controls
	const handleZoomIn = () => {
		setZoomLevel((prev) => Math.min(prev + 0.25, 3));
	};

	const handleZoomOut = () => {
		setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
	};

	const handleResetZoom = () => {
		setZoomLevel(1);
	};

	// Close zoom modal
	const handleCloseZoom = () => {
		setIsZoomed(false);
		setZoomLevel(1);
	};

	// Handle download
	const handleDownloadClick = () => {
		if (onDownload) {
			onDownload();
		} else if (src instanceof Blob) {
			const link = document.createElement("a");
			const url = URL.createObjectURL(src);
			link.href = url;
			link.download = fileName || "image.jpg";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}
	};

	// Display dimensions
	const displayDimensions = dimensions || imageDimensions;
	const displayFileSize = fileSize || (src instanceof Blob ? src.size : undefined);
	const displayFileName = fileName || (src instanceof Blob ? "image.jpg" : "Preview");

	return (
		<>
			<div className={`relative group ${className}`}>
				{/* Preview container */}
				<div className={`relative ${sizeClasses[size]} rounded-lg overflow-hidden border border-slate-200 bg-slate-50`}>
					{/* Image */}
					<img
						ref={imgRef}
						src={imageSrc}
						alt={alt}
						onLoad={handleImageLoad}
						className="w-full h-full object-contain"
					/>

					{/* Loading overlay */}
					{!imageLoaded && (
						<div className="absolute inset-0 flex items-center justify-center bg-slate-100">
							<div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
						</div>
					)}

					{/* Hover overlay with actions */}
					{zoomable && (
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
							<div className="flex gap-2">
								{zoomable && (
									<button
										onClick={() => setIsZoomed(true)}
										className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors"
										title="Zoom"
									>
										<ZoomIn className="w-4 h-4 text-slate-700" />
									</button>
								)}
								{downloadable && (
									<button
										onClick={handleDownloadClick}
										className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors"
										title="Download"
									>
										<Download className="w-4 h-4 text-slate-700" />
									</button>
								)}
							</div>
						</div>
					)}
				</div>

				{/* Info below image */}
				{showInfo && (
					<div className="mt-2 space-y-1">
						{displayFileName && (
							<p className="text-xs font-medium text-slate-900 truncate" title={displayFileName}>
								{displayFileName}
							</p>
						)}
						<div className="flex items-center gap-2 text-xs text-slate-500">
							{displayDimensions && (
								<span>
									{displayDimensions.width}×{displayDimensions.height}
								</span>
							)}
							{displayFileSize && (
								<>
									{displayDimensions && <span>•</span>}
									<span>{formatFileSize(displayFileSize)}</span>
								</>
							)}
						</div>
					</div>
				)}
			</div>

			{/* Zoom modal */}
			{isZoomed && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
					<div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden">
						{/* Controls bar */}
						<div className="absolute top-4 right-4 z-10 flex items-center gap-2">
							{zoomable && (
								<>
									<button
										onClick={handleZoomOut}
										disabled={zoomLevel <= 0.5}
										className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors disabled:opacity-50"
										title="Zoom Out"
									>
										<ZoomOut className="w-5 h-5 text-slate-700" />
									</button>
									<span className="px-2 py-1 bg-white/90 rounded text-sm font-medium">
										{Math.round(zoomLevel * 100)}%
									</span>
									<button
										onClick={handleZoomIn}
										disabled={zoomLevel >= 3}
										className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors disabled:opacity-50"
										title="Zoom In"
									>
										<ZoomIn className="w-5 h-5 text-slate-700" />
									</button>
									<button
										onClick={handleResetZoom}
										className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors"
										title="Reset Zoom"
									>
										<span className="text-sm font-medium">1:1</span>
									</button>
								</>
							)}
							{downloadable && (
								<button
									onClick={handleDownloadClick}
									className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors"
									title="Download"
								>
									<Download className="w-5 h-5 text-slate-700" />
								</button>
							)}
							<button
								onClick={handleCloseZoom}
								className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors"
								title="Close"
							>
								<X className="w-5 h-5 text-slate-700" />
							</button>
						</div>

						{/* Zoomable image container */}
						<div
							ref={zoomContainerRef}
							className="w-full h-full flex items-center justify-center p-8 overflow-auto"
							style={{ cursor: zoomLevel > 1 ? "grab" : "default" }}
						>
							<img
								src={imageSrc}
								alt={alt}
								className="max-w-full max-h-full object-contain transition-transform duration-200"
								style={{ transform: `scale(${zoomLevel})` }}
							/>
						</div>

						{/* Info footer */}
						<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm text-white bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
							<div>
								<span className="font-medium">{displayFileName}</span>
								{displayDimensions && (
									<span className="ml-3">
										{displayDimensions.width}×{displayDimensions.height}px
									</span>
								)}
							</div>
							{displayFileSize && (
								<span className="font-medium">{formatFileSize(displayFileSize)}</span>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}