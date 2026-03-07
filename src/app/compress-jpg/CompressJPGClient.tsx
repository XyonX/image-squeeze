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
import { formatFileSize } from "@/lib/tools";

interface CompressedResult {
	id: string;
	originalName: string;
	originalSize: number;
	compressedSize: number;
	compressedBlob: Blob;
	preview: string;
	saved: number;
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

				compressed.push({
					id: files[i].id,
					originalName: files[i].file.name,
					originalSize: files[i].file.size,
					compressedSize: compressedFile.size,
					compressedBlob: compressedFile,
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

			{/* Upload */}
			<UploadZone
				accept=".jpg,.jpeg,image/jpeg"
				files={files}
				onFilesChange={(f) => {
					setFiles(f);
					setResults([]);
					setError(null);
				}}
			/>

			{/* Controls */}
			{files.length > 0 && !isProcessing && results.length === 0 && (
				<div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl space-y-6">
					{/* Quality slider */}
					<div>
						<div className="flex items-center justify-between mb-2">
							<label className="text-sm font-semibold text-slate-900">Quality</label>
							<span className="text-sm text-slate-500">
								{Math.round(quality * 100)}% — {qualityLabel}
							</span>
						</div>
						<input
							type="range"
							min="10"
							max="100"
							value={quality * 100}
							onChange={(e) => setQuality(Number(e.target.value) / 100)}
							className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
						/>
						{/* Presets */}
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
							{qualityPresets.map((p) => (
								<button
									key={p.label}
									onClick={() => setQuality(p.value)}
									className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all ${
										quality === p.value
											? "border-primary bg-primary/10 text-primary"
											: "border-slate-200 hover:border-primary/30"
									}`}
								>
									{p.label}
								</button>
							))}
						</div>
					</div>

					{/* Max Width */}
					<div>
						<label className="text-sm font-semibold block mb-2">Max Width (optional)</label>
						<div className="flex flex-wrap gap-2">
							{[null, 1920, 1280, 800, 640].map((w) => (
								<button
									key={w ?? "none"}
									onClick={() => setMaxWidth(w)}
									className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all ${
										maxWidth === w
											? "border-primary bg-primary/10 text-primary"
											: "border-slate-200 hover:border-primary/30"
									}`}
								>
									{w ? `${w}px` : "No resize"}
								</button>
							))}
						</div>
					</div>

					{/* Strip metadata */}
					<label className="flex items-center gap-3 cursor-pointer">
						<input
							type="checkbox"
							checked={stripMetadata}
							onChange={(e) => setStripMetadata(e.target.checked)}
							className="w-4 h-4 accent-primary rounded"
						/>
						<div>
							<span className="text-sm font-medium text-slate-900">Strip EXIF metadata</span>
							<p className="text-xs text-slate-500">Remove camera info, GPS location, timestamps</p>
						</div>
					</label>

					{/* Compress button */}
					<button
						onClick={handleCompress}
						className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg"
					>
						Compress {files.length} Image{files.length !== 1 ? "s" : ""}
					</button>
				</div>
			)}

			{/* Processing */}
			{isProcessing && (
				<div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-4">
					<Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
					<div>
						<p className="font-semibold text-lg">
							Processing {progress.current} of {progress.total}...
						</p>
						<div className="w-full bg-slate-100 rounded-full h-3 mt-3 overflow-hidden">
							<div
								className="h-full bg-primary rounded-full transition-all duration-300 relative progress-bar-shine"
								style={{ width: `${(progress.current / progress.total) * 100}%` }}
							/>
						</div>
					</div>
				</div>
			)}

			{/* Error */}
			{error && (
				<div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
					<AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
					<p className="text-sm text-red-500">{error}</p>
				</div>
			)}

			{/* Results */}
			{results.length > 0 && (
				<div className="mt-8 space-y-4">
					{/* Summary */}
					<div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
						<Check className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
						<p className="font-bold text-xl">
							Saved {formatFileSize(totalSaved)} across {results.length} image{results.length !== 1 ? "s" : ""}
						</p>
						<p className="text-sm text-slate-500 mt-1">
							Average reduction: {Math.round(results.reduce((a, r) => a + r.saved, 0) / results.length)}%
						</p>
					</div>

					{/* Individual results */}
					<div className="space-y-3">
						{results.map((r) => (
							<div key={r.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={r.preview} alt={r.originalName} className="w-14 h-14 object-cover rounded-lg" />
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium truncate text-slate-900">{r.originalName}</p>
									<p className="text-xs text-slate-500">
										{formatFileSize(r.originalSize)} → {formatFileSize(r.compressedSize)}
									</p>
								</div>
								<div className="text-right flex-shrink-0">
									<span className="text-sm font-bold text-emerald-600">-{Math.round(r.saved)}%</span>
								</div>
								<button
									onClick={() => downloadSingle(r)}
									className="flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors flex-shrink-0"
								>
									<Download className="w-4 h-4" />
									Download
								</button>
							</div>
						))}
					</div>

					{/* Download all */}
					{results.length > 1 && (
						<button
							onClick={downloadAll}
							className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
						>
							<Package className="w-5 h-5" />
							Download All as ZIP
						</button>
					)}

					{/* Process more */}
					<button
						onClick={() => {
							setFiles([]);
							setResults([]);
							setError(null);
						}}
						className="w-full py-3 border border-slate-200 hover:bg-slate-50 text-sm font-medium rounded-xl transition-colors text-slate-700"
					>
						Compress more images
					</button>
				</div>
			)}

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
