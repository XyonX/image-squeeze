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

const faqItems = [
	{
		question: "Does PNG compression lose transparency?",
		answer: "No. PNG compression preserves the alpha channel (transparency) in your images. Your transparent backgrounds will remain intact.",
	},
	{
		question: "What's the difference between lossless and lossy PNG compression?",
		answer: "Lossless compression reduces file size without any quality loss by optimizing how data is stored. Lossy reduces size more aggressively by removing some color information, which may be visible on close inspection.",
	},
	{
		question: "Is my data safe?",
		answer: "Absolutely. All processing happens in your browser. We never upload, store, or see your files.",
	},
];

export function CompressPNGClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [quality, setQuality] = useState(0.8);
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState({ current: 0, total: 0 });
	const [results, setResults] = useState<CompressedResult[]>([]);
	const [error, setError] = useState<string | null>(null);

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
				const compressedFile = await imageCompression(files[i].file, {
					maxSizeMB: 50,
					initialQuality: quality,
					useWebWorker: true,
					fileType: "image/png",
				});
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
				setError(`Failed to compress ${files[i].file.name}.`);
			}
		}
		setResults(compressed);
		setIsProcessing(false);
	}, [files, quality]);

	const downloadSingle = (result: CompressedResult) => {
		saveAs(result.compressedBlob, result.originalName.replace(/\.[^.]+$/, "") + "-compressed.png");
	};

	const downloadAll = async () => {
		if (results.length <= 1) { if (results[0]) downloadSingle(results[0]); return; }
		const zip = new JSZip();
		results.forEach((r) => zip.file(r.originalName.replace(/\.[^.]+$/, "") + "-compressed.png", r.compressedBlob));
		saveAs(await zip.generateAsync({ type: "blob" }), "compressed-png-images.zip");
	};

	const totalSaved = results.reduce((acc, r) => acc + (r.originalSize - r.compressedSize), 0);

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					Compress <span className="text-primary">PNG</span> Online
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">Reduce PNG file size with transparency support. Free, private, no signup.</p>
				<div className="mt-4"><TrustBadges /></div>
			</div>

			<UploadZone accept=".png,image/png" files={files} onFilesChange={(f) => { setFiles(f); setResults([]); setError(null); }} />

			{files.length > 0 && !isProcessing && results.length === 0 && (
				<div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl space-y-6">
					<div>
						<div className="flex items-center justify-between mb-2">
							<label className="text-sm font-semibold text-slate-900">Quality</label>
							<span className="text-sm text-slate-500">{Math.round(quality * 100)}%</span>
						</div>
						<input type="range" min="10" max="100" value={quality * 100} onChange={(e) => setQuality(Number(e.target.value) / 100)} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" />
					</div>
					<button onClick={handleCompress} className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg">
						Compress {files.length} Image{files.length !== 1 ? "s" : ""}
					</button>
				</div>
			)}

			{isProcessing && (
				<div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-4">
					<Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
					<p className="font-semibold text-slate-900">Processing {progress.current} of {progress.total}...</p>
					<div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
						<div className="h-full bg-primary rounded-full transition-all duration-300 relative progress-bar-shine" style={{ width: `${(progress.current / progress.total) * 100}%` }} />
					</div>
				</div>
			)}

			{error && (
				<div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
					<AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" /><p className="text-sm text-red-500">{error}</p>
				</div>
			)}

			{results.length > 0 && (
				<div className="mt-8 space-y-4">
					<div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
						<Check className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
						<p className="font-bold text-xl text-slate-900">Saved {formatFileSize(totalSaved)} across {results.length} image{results.length !== 1 ? "s" : ""}</p>
					</div>
					{results.map((r) => (
						<div key={r.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={r.preview} alt={r.originalName} className="w-14 h-14 object-cover rounded-lg" />
							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium truncate text-slate-900">{r.originalName}</p>
								<p className="text-xs text-slate-500">{formatFileSize(r.originalSize)} → {formatFileSize(r.compressedSize)}</p>
							</div>
							<span className="text-sm font-bold text-emerald-600">-{Math.round(r.saved)}%</span>
							<button onClick={() => downloadSingle(r)} className="flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
								<Download className="w-4 h-4" />Download
							</button>
						</div>
					))}
					{results.length > 1 && (
						<button onClick={downloadAll} className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg">
							<Package className="w-5 h-5" />Download All as ZIP
						</button>
					)}
					<button onClick={() => { setFiles([]); setResults([]); setError(null); }} className="w-full py-3 border border-slate-200 hover:bg-slate-50 text-sm font-medium rounded-xl transition-colors text-slate-700">
						Compress more images
					</button>
				</div>
			)}

			<section className="mt-16"><h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2><FAQ items={faqItems} /></section>
			<RelatedTools currentToolId="compress-png" />
		</div>
	);
}
