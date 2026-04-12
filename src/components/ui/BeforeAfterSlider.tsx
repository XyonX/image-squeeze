"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Split, Sliders, Eye, EyeOff } from "lucide-react";
import { formatFileSize } from "@/lib/tools";

export interface BeforeAfterSliderProps {
	beforeSrc: string | Blob;
	afterSrc: string | Blob;
	beforeLabel?: string;
	afterLabel?: string;
	showStats?: boolean;
	mode?: "slider" | "side-by-side" | "toggle";
	beforeFileName?: string;
	afterFileName?: string;
	beforeSize?: number;
	afterSize?: number;
	beforeDimensions?: { width: number; height: number };
	afterDimensions?: { width: number; height: number };
	className?: string;
}

export function BeforeAfterSlider({
	beforeSrc,
	afterSrc,
	beforeLabel = "Original",
	afterLabel = "Compressed",
	showStats = true,
	mode = "slider",
	beforeFileName,
	afterFileName,
	beforeSize,
	afterSize,
	beforeDimensions,
	afterDimensions,
	className = "",
}: BeforeAfterSliderProps) {
	const [sliderPosition, setSliderPosition] = useState(50);
	const [isDragging, setIsDragging] = useState(false);
	const [beforeImageSrc, setBeforeImageSrc] = useState<string>("");
	const [afterImageSrc, setAfterImageSrc] = useState<string>("");
	const [beforeLoaded, setBeforeLoaded] = useState(false);
	const [afterLoaded, setAfterLoaded] = useState(false);
	const [viewMode, setViewMode] = useState<"slider" | "side-by-side" | "toggle">(mode);
	const [showBefore, setShowBefore] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Convert Blobs to URLs and handle cleanup
	useEffect(() => {
		let beforeUrl = "";
		let afterUrl = "";

		if (beforeSrc instanceof Blob) {
			beforeUrl = URL.createObjectURL(beforeSrc);
			setBeforeImageSrc(beforeUrl);
		} else {
			setBeforeImageSrc(beforeSrc);
		}

		if (afterSrc instanceof Blob) {
			afterUrl = URL.createObjectURL(afterSrc);
			setAfterImageSrc(afterUrl);
		} else {
			setAfterImageSrc(afterSrc);
		}

		return () => {
			if (beforeUrl) URL.revokeObjectURL(beforeUrl);
			if (afterUrl) URL.revokeObjectURL(afterUrl);
		};
	}, [beforeSrc, afterSrc]);

	// Handle slider drag
	const handleMouseDown = () => {
		setIsDragging(true);
		document.body.style.cursor = "col-resize";
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		document.body.style.cursor = "";
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
		setSliderPosition(percentage);
	};

	// Add/remove global event listeners
	useEffect(() => {
		const handleGlobalMouseUp = () => {
			if (isDragging) {
				setIsDragging(false);
				document.body.style.cursor = "";
			}
		};

		const handleGlobalMouseMove = (e: MouseEvent) => {
			if (!isDragging || !containerRef.current) return;
			
			const rect = containerRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
			setSliderPosition(percentage);
		};

		if (isDragging) {
			document.addEventListener("mousemove", handleGlobalMouseMove);
			document.addEventListener("mouseup", handleGlobalMouseUp);
		}

		return () => {
			document.removeEventListener("mousemove", handleGlobalMouseMove);
			document.removeEventListener("mouseup", handleGlobalMouseUp);
		};
	}, [isDragging]);

	// Calculate savings
	const savings = beforeSize && afterSize ? ((beforeSize - afterSize) / beforeSize) * 100 : 0;
	const sizeReduction = beforeSize && afterSize ? beforeSize - afterSize : 0;

	// Mode buttons
	const modeButtons = [
		{ id: "slider", label: "Slider", icon: Sliders },
		{ id: "side-by-side", label: "Side by Side", icon: Split },
		{ id: "toggle", label: "Toggle", icon: showBefore ? EyeOff : Eye },
	];

	return (
		<div className={`space-y-4 ${className}`}>
			{/* Mode selector */}
			<div className="flex flex-wrap gap-2 justify-center">
				{modeButtons.map((btn) => {
					const Icon = btn.icon;
					const isActive = viewMode === btn.id || (btn.id === "toggle" && viewMode === "toggle");
					
					return (
						<button
							key={btn.id}
							onClick={() => {
								if (btn.id === "toggle") {
									setShowBefore(!showBefore);
								}
								setViewMode(btn.id as any);
							}}
							className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
								isActive
									? "border-primary bg-primary/10 text-primary"
									: "border-slate-200 hover:border-primary/30 text-slate-700"
							}`}
						>
							<Icon className="w-4 h-4" />
							{btn.label}
						</button>
					);
				})}
			</div>

			{/* Stats bar */}
			{showStats && beforeSize && afterSize && (
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
					<div className="text-center">
						<p className="text-sm font-medium text-slate-900">{beforeLabel}</p>
						<p className="text-lg font-bold text-slate-700">{formatFileSize(beforeSize)}</p>
						{beforeDimensions && (
							<p className="text-xs text-slate-500">
								{beforeDimensions.width}×{beforeDimensions.height}px
							</p>
						)}
					</div>
					<div className="text-center">
						<p className="text-sm font-medium text-slate-900">Savings</p>
						<p className="text-lg font-bold text-emerald-600">{Math.round(savings)}%</p>
						<p className="text-xs text-slate-500">{formatFileSize(sizeReduction)} saved</p>
					</div>
					<div className="text-center">
						<p className="text-sm font-medium text-slate-900">{afterLabel}</p>
						<p className="text-lg font-bold text-slate-700">{formatFileSize(afterSize)}</p>
						{afterDimensions && (
							<p className="text-xs text-slate-500">
								{afterDimensions.width}×{afterDimensions.height}px
							</p>
						)}
					</div>
				</div>
			)}

			{/* Comparison area */}
			<div
				ref={containerRef}
				className={`no-select comparison-container relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 ${
					viewMode === "slider" ? "cursor-col-resize" : ""
				}`}
				style={{ minHeight: "300px" }}
				onMouseMove={viewMode === "slider" ? handleMouseMove : undefined}
				onMouseLeave={viewMode === "slider" ? handleMouseUp : undefined}
			>
				{/* Loading overlay */}
				{(!beforeLoaded || !afterLoaded) && (
					<div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10">
						<div className="text-center">
							<div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-2" />
							<p className="text-sm text-slate-500">Loading comparison...</p>
						</div>
					</div>
				)}

				{/* Slider mode */}
				{viewMode === "slider" && (
					<>
						{/* Before image (full) */}
						<div className="absolute inset-0">
							<img
								src={beforeImageSrc}
								alt="Before"
								onLoad={() => setBeforeLoaded(true)}
								className="no-select w-full h-full object-contain"
							/>
						</div>

						{/* After image (clipped) */}
						<div
							className="absolute inset-0 overflow-hidden"
							style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
						>
							<img
								src={afterImageSrc}
								alt="After"
								onLoad={() => setAfterLoaded(true)}
								className="no-select w-full h-full object-contain"
							/>
						</div>

						{/* Slider handle */}
						<div
							className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 flex items-center justify-center"
							style={{ left: `${sliderPosition}%` }}
							onMouseDown={handleMouseDown}
						>
							<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center">
								<ChevronLeft className="w-3 h-3 text-slate-500" />
								<ChevronRight className="w-3 h-3 text-slate-500 -ml-1" />
							</div>
						</div>

						{/* Labels */}
						<div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 text-white text-sm font-medium rounded-lg backdrop-blur-sm">
							{beforeLabel}
						</div>
						<div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 text-white text-sm font-medium rounded-lg backdrop-blur-sm">
							{afterLabel}
						</div>
					</>
				)}

				{/* Side-by-side mode */}
				{viewMode === "side-by-side" && (
					<div className="flex h-full">
						<div className="flex-1 border-r border-slate-200 relative">
							<img
								src={beforeImageSrc}
								alt="Before"
								onLoad={() => setBeforeLoaded(true)}
								className="no-select w-full h-full object-contain"
							/>
							<div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 text-white text-sm font-medium rounded-lg backdrop-blur-sm">
								{beforeLabel}
							</div>
						</div>
						<div className="flex-1 relative">
							<img
								src={afterImageSrc}
								alt="After"
								onLoad={() => setAfterLoaded(true)}
								className="no-select w-full h-full object-contain"
							/>
							<div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 text-white text-sm font-medium rounded-lg backdrop-blur-sm">
								{afterLabel}
							</div>
						</div>
					</div>
				)}

				{/* Toggle mode */}
				{viewMode === "toggle" && (
					<div className="relative w-full h-full">
						{/* Before image */}
						<img
							src={beforeImageSrc}
							alt="Before"
							onLoad={() => setBeforeLoaded(true)}
							className={`no-select w-full h-full object-contain transition-opacity duration-300 ${
								showBefore ? "opacity-100" : "opacity-0 absolute inset-0"
							}`}
						/>
						{/* After image */}
						<img
							src={afterImageSrc}
							alt="After"
							onLoad={() => setAfterLoaded(true)}
							className={`no-select w-full h-full object-contain transition-opacity duration-300 ${
								!showBefore ? "opacity-100" : "opacity-0 absolute inset-0"
							}`}
						/>
						{/* Toggle button */}
						<button
							onClick={() => setShowBefore(!showBefore)}
							className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 hover:bg-black/80 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-colors flex items-center gap-2"
						>
							{showBefore ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
							{showBefore ? `Show ${afterLabel}` : `Show ${beforeLabel}`}
						</button>
						{/* Current label */}
						<div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 text-white text-sm font-medium rounded-lg backdrop-blur-sm">
							{showBefore ? beforeLabel : afterLabel}
						</div>
					</div>
				)}
			</div>

			{/* Instructions */}
			<div className="text-center text-sm text-slate-500">
				{viewMode === "slider" && (
					<p>Drag the slider left/right to compare before and after</p>
				)}
				{viewMode === "side-by-side" && (
					<p>View original and processed images side by side</p>
				)}
				{viewMode === "toggle" && (
					<p>Click the button below to toggle between before and after</p>
				)}
			</div>
		</div>
	);
}