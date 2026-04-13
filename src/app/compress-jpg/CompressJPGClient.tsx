"use client";

import { useState, useCallback } from "react";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Download, Package, Loader2, Check, AlertCircle } from "lucide-react";
import { UploadZone, type UploadedFile } from "@/components/ui/UploadZone";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { FAQ } from "@/components/ui/FAQ";
import { ImagePreview } from "@/components/ui/ImagePreview";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { UploadPreviewLayout } from "@/components/ui/TwoColumnLayout";
import { formatFileSize } from "@/lib/tools";

interface CompressedResult {
	id: string;
	originalName: string;
	originalSize: number;
	compressedSize: number;
	compressedBlob: Blob;
	preview: string;
	saved: number;
	originalBlob?: Blob;
	originalDimensions?: { width: number; height: number };
	compressedDimensions?: { width: number; height: number };
}

const qualityPresets = [
	{ label: "Web Optimized", value: 0.6, description: "Best for websites" },
	{ label: "Email Friendly", value: 0.7, description: "Good for email attachments" },
	{ label: "Social Media", value: 0.75, description: "Ideal for Instagram, Facebook" },
	{ label: "High Quality", value: 0.85, description: "Minimal quality loss" },
];

const faqItems = [
	{
		question: "How does JPG compression work?",
		answer:
			"JPG compression works by reducing the amount of detail stored in the image. Our tool uses advanced algorithms to find the best balance between file size and visual quality, removing data that the human eye is less likely to notice.",
	},
	{
		question: "Will I lose image quality?",
		answer:
			"Some quality loss is inherent in JPG compression (it's lossy), but at 60-80% quality settings, the difference is virtually invisible to the human eye while achieving 50-80% file size reduction.",
	},
	{
		question: "Is my data safe?",
		answer:
			"Absolutely. Your images are compressed entirely in your browser using JavaScript. Nothing is uploaded to any server. When you close this tab, all data is gone.",
	},
	{
		question: "What's the maximum file size I can compress?",
		answer: "There's no hard limit, but very large files (50MB+) may take longer to process depending on your device's capabilities. We recommend files under 25MB for the best experience.",
	},
	{
		question: "Can I compress multiple JPG files at once?",
		answer:
			"Yes! You can upload up to 20 JPG images at once. Each will be compressed with your chosen settings, and you can download them all as a ZIP file.",
	},
];

export function CompressJPGClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [quality, setQuality] = useState(0.7);
	const [stripMetadata, setStripMetadata] = useState(true);
	const [maxWidth, setMaxWidth] = useState<number | null>(null);
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState({ current: 0, total: 0 });
	const [results, setResults] = useState<CompressedResult[]>([]);
	const [error, setError] = useState<string | null>(null);

	const qualityLabel = quality <= 0.3 ? "Low" : quality <= 0.6 ? "Medium" : quality <= 0.8 ? "High" : "Maximum";

	const handleCompress = useCallback(async () => {
		if (files.length === 0) return;
		setIsProcessing(true);
		setResults([]);
		setError(null);
		setProgress({ current: 0, total: files.length });

		const compressed: CompressedResult[] = [];

		for (let i = 0; i < files.length; i++) {
			try {
				setProgress({ current: i + 1, total: files.length });

				const options: Parameters<typeof imageCompression>[1] = {
					maxSizeMB: 50,
					initialQuality: quality,
					useWebWorker: true,
					fileType: "image/jpeg",
					preserveExif: !stripMetadata,
				};

				if (maxWidth) {
					options.maxWidthOrHeight = maxWidth;
				}

				const compressedFile = await imageCompression(files[i].file, options);
				const preview = URL.createObjectURL(compressedFile);
				const saved = ((files[i].file.size - compressedFile.size) / files[i].file.size) * 100;

				// Get image dimensions
				const getImageDimensions = (blob: Blob): Promise<{ width: number; height: number }> => {
					return new Promise((resolve) => {
						const img = new Image();
						img.onload = () => {
							resolve({ width: img.naturalWidth, height: img.naturalHeight });
						};
						img.src = URL.createObjectURL(blob);
					});
				};

				const originalDimensions = await getImageDimensions(files[i].file);
				const compressedDimensions = await getImageDimensions(compressedFile);

				compressed.push({
					id: files[i].id,
					originalName: files[i].file.name,
					originalSize: files[i].file.size,
					compressedSize: compressedFile.size,
					compressedBlob: compressedFile,
					originalBlob: files[i].file,
					originalDimensions,
					compressedDimensions,
					preview,
					saved: Math.max(0, saved),
				});
			} catch (err) {
				console.error(`Failed to compress ${files[i].file.name}:`, err);
				setError(`Failed to compress ${files[i].file.name}. Try a different file.`);
			}
		}

		setResults(compressed);
		setIsProcessing(false);
	}, [files, quality, stripMetadata, maxWidth]);

	const downloadSingle = (result: CompressedResult) => {
		const name = result.originalName.replace(/\.[^.]+$/, "") + "-compressed.jpg";
		saveAs(result.compressedBlob, name);
	};

	const downloadAll = async () => {
		if (results.length === 0) return;
		if (results.length === 1) {
			downloadSingle(results[0]);
			return;
		}
		const zip = new JSZip();
		results.forEach((r) => {
			const name = r.originalName.replace(/\.[^.]+$/, "") + "-compressed.jpg";
			zip.file(name, r.compressedBlob);
		});
		const blob = await zip.generateAsync({ type: "blob" });
		saveAs(blob, "compressed-images.zip");
	};

	const totalSaved = results.reduce((acc, r) => acc + (r.originalSize - r.compressedSize), 0);

	// Controls section
	const controlsSection = (
		<div className="text-xs sm:text-sm space-y-6">
			{/* Quality slider */}
			<div>
				<div className="flex items-center justify-between mb-2 gap-2">
					<label className="font-bold text-slate-900 text-sm">Quality</label>
					<span className="text-slate-600 text-xs whitespace-nowrap">
						{Math.round(quality * 100)}% — {qualityLabel}
					</span>
				</div>
				<input
					type="range"
					min="10"
					max="100"
					value={quality * 100}
					onChange={(e) => setQuality(Number(e.target.value) / 100)}
					className="w-full h-2 bg-slate-200 rounded appearance-none cursor-pointer accent-slate-900"
				/>
				{/* Presets */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
				{qualityPresets.map((p) => (
					<button
						key={p.label}
						onClick={() => setQuality(p.value)}
						className={`preset-button px-3 py-2 font-bold text-center border transition-all text-xs min-w-fit ${
							quality === p.value
								? "border-slate-900 bg-slate-900 text-white"
								: "border-slate-300 hover:border-slate-400 text-slate-900"
						}`}
						title={p.description}
					>
						{p.label}
					</button>
				))}
				</div>
			</div>

				{/* Max Width */}
				<div>
					<label className="font-bold block mb-2 text-slate-900 text-sm">Max Width (optional)</label>
					<div className="flex flex-wrap gap-2">
						{[null, 1920, 1280, 800, 640].map((w) => (
							<button
								key={w ?? "none"}
								onClick={() => setMaxWidth(w)}
								className={`px-3 py-2 font-bold text-center border transition-all text-xs min-w-fit ${
									maxWidth === w
										? "border-slate-900 bg-slate-900 text-white"
										: "border-slate-300 hover:border-slate-400 text-slate-900"
								}`}
								title={w ? `${w}px` : "No resize"}
							>
								{w ? `${w}px` : "No resize"}
							</button>
						))}
					</div>
				</div>

			{/* Strip metadata */}
			<label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-300">
				<input
					type="checkbox"
					checked={stripMetadata}
					onChange={(e) => setStripMetadata(e.target.checked)}
					className="w-4 h-4 mt-0.5 flex-shrink-0"
				/>
				<div>
					<span className="font-bold text-slate-900 block text-sm">Strip EXIF metadata</span>
					<p className="text-slate-600 text-xs mt-0.5">Remove camera info, GPS, timestamps</p>
				</div>
			</label>

			{/* Compress button */}
			<button
				onClick={handleCompress}
				disabled={files.length === 0 || isProcessing}
				className="w-full py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold transition-colors text-sm"
			>
				{isProcessing ? "Compressing..." : `Compress ${files.length} Image${files.length !== 1 ? "s" : ""}`}
			</button>
		</div>
	);

	// Preview section
	const previewSection = files.length > 0 && (
		<div className="space-y-4 flex flex-col items-center">
			{files.map((file) => (
				<div key={file.id} className="w-full flex justify-center">
					<ImagePreview
						src={file.file}
						fileName={file.file.name}
						fileSize={file.file.size}
						dimensions={{ width: file.width, height: file.height }}
						size="lg"
						zoomable={true}
						downloadable={false}
					/>
				</div>
			))}
		</div>
	);

	// Results section
	const resultsSection = results.length > 0 && (
		<div className="space-y-8">
			{/* Summary */}
			<div className="p-6 bg-slate-50 border border-slate-300 text-center">
				<Check className="w-8 h-8 text-slate-700 mx-auto mb-2" />
				<p className="font-bold text-lg text-slate-900">
					Saved {formatFileSize(totalSaved)} across {results.length} image{results.length !== 1 ? "s" : ""}
				</p>
				<p className="text-xs text-slate-600 mt-1">
					Average reduction: {Math.round(results.reduce((a, r) => a + r.saved, 0) / results.length)}%
				</p>
			</div>

			{/* Individual results with Before/After comparison */}
			<div className="space-y-8">
				{results.map((result) => (
					<div key={result.id} className="space-y-4">
						<div className="flex items-center justify-between gap-2">
							<h3 className="text-sm font-bold text-slate-900 truncate">{result.originalName}</h3>
							<div className="flex items-center gap-3 flex-shrink-0">
								<span className="text-xs font-bold text-slate-700 whitespace-nowrap">-{Math.round(result.saved)}%</span>
								<button
									onClick={() => downloadSingle(result)}
									className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
								>
									<Download className="w-4 h-4" />
									Download
								</button>
							</div>
						</div>

						{/* Before/After comparison */}
						{result.originalBlob && (
							<BeforeAfterSlider
								beforeSrc={result.originalBlob}
								afterSrc={result.compressedBlob}
								beforeLabel="Original"
								afterLabel="Compressed"
								beforeSize={result.originalSize}
								afterSize={result.compressedSize}
								beforeDimensions={result.originalDimensions}
								afterDimensions={result.compressedDimensions}
								mode="slider"
								className="mt-4"
							/>
						)}

						{/* Stats */}
						<div className="grid grid-cols-2 gap-3 text-xs">
							<div className="p-3 bg-white border border-slate-300">
								<p className="font-bold text-slate-900 mb-1">Original</p>
								<p className="text-slate-600">{formatFileSize(result.originalSize)}</p>
								{result.originalDimensions && (
									<p className="text-slate-600 mt-0.5">
										{result.originalDimensions.width}×{result.originalDimensions.height}px
									</p>
								)}
							</div>
							<div className="p-3 bg-white border border-slate-300">
								<p className="font-bold text-slate-900 mb-1">Compressed</p>
								<p className="text-slate-600">{formatFileSize(result.compressedSize)}</p>
								{result.compressedDimensions && (
									<p className="text-slate-600 mt-0.5">
										{result.compressedDimensions.width}×{result.compressedDimensions.height}px
									</p>
								)}
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Download all and reset buttons */}
			<div className="space-y-2">
				{results.length > 1 && (
					<button
						onClick={downloadAll}
						className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors flex items-center justify-center gap-2 text-sm"
					>
						<Package className="w-4 h-4" />
						Download All as ZIP
					</button>
				)}
				<button
					onClick={() => {
						setFiles([]);
						setResults([]);
						setError(null);
					}}
					className="w-full py-3 border border-slate-300 hover:bg-slate-50 text-xs font-bold transition-colors text-slate-900"
				>
					Compress more images
				</button>
			</div>
		</div>
	);

	// Processing section
	const processingSection = isProcessing && (
		<div className="mt-6 p-6 bg-white border border-slate-300 text-center space-y-3">
			<Loader2 className="w-8 h-8 text-slate-700 animate-spin mx-auto" />
			<div>
				<p className="font-bold text-base text-slate-900">
					Processing {progress.current} of {progress.total}...
				</p>
				<div className="w-full bg-slate-200 h-2 mt-3 overflow-hidden">
					<div
						className="h-full bg-slate-900 transition-all duration-300"
						style={{ width: `${(progress.current / progress.total) * 100}%` }}
					/>
				</div>
			</div>
		</div>
	);

	// Error section
	const errorSection = error && (
		<div className="mt-4 p-4 bg-slate-50 border border-slate-300 flex items-start gap-3">
			<AlertCircle className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
			<p className="text-xs text-slate-700">{error}</p>
		</div>
	);

	// Upload section
	const uploadSection = (
		<UploadZone
			accept=".jpg,.jpeg,image/jpeg"
			files={files}
			onFilesChange={(f) => {
				setFiles(f);
				setResults([]);
				setError(null);
			}}
		/>
	);

	return (
		<div>
			{/* Header */}
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					Compress <span className="text-primary">JPG</span> Online
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">
					Reduce JPG file size by up to 80% without visible quality loss. Free, private, no signup.
				</p>
				<div className="mt-4">
					<TrustBadges />
				</div>
			</div>

			{/* Main layout using UploadPreviewLayout */}
			<UploadPreviewLayout
				uploadSection={uploadSection}
				previewSection={previewSection}
				controlsSection={controlsSection}
				resultsSection={resultsSection}
				showPreview={files.length > 0}
			/>

			{/* Processing and error sections */}
			{processingSection}
			{errorSection}

			{/* FAQ */}
			<section className="mt-16">
				<h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
				<FAQ items={faqItems} />
			</section>

			{/* Related Tools */}
			<RelatedTools currentToolId="compress-jpg" />
		</div>
	);
}
			
