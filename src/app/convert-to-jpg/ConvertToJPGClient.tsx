"use client";

import { useState, useCallback } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Download, Package, Loader2, Check, AlertCircle } from "lucide-react";
import { UploadZone, type UploadedFile } from "@/components/ui/UploadZone";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { FAQ } from "@/components/ui/FAQ";
import { formatFileSize } from "@/lib/tools";

interface ConvertedResult {
	id: string;
	originalName: string;
	originalSize: number;
	convertedSize: number;
	convertedBlob: Blob;
	preview: string;
}

const faqItems = [
	{
		question: "Why convert to JPG?",
		answer: "JPG is the most universally supported image format. It works everywhere — websites, email, documents, social media, and printing services. It's also typically smaller than PNG for photos.",
	},
	{
		question: "Will I lose transparency?",
		answer: "Yes. JPG does not support transparency. Any transparent areas in your PNG or WebP will be filled with a white background during conversion.",
	},
	{
		question: "What quality is used?",
		answer: "We use 92% quality by default, which provides an excellent balance between file size and visual quality. The result is virtually indistinguishable from the original.",
	},
	{
		question: "Is my data safe?",
		answer: "All conversion happens in your browser using the Canvas API. Your files are never uploaded to any server.",
	},
];

function convertToJPG(file: File, quality = 0.92): Promise<Blob> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = img.naturalWidth;
			canvas.height = img.naturalHeight;
			const ctx = canvas.getContext("2d");
			if (!ctx) { reject(new Error("Canvas not supported")); return; }
			// Fill white background for transparency
			ctx.fillStyle = "#FFFFFF";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, 0, 0);
			canvas.toBlob(
				(blob) => { if (blob) resolve(blob); else reject(new Error("Conversion failed")); },
				"image/jpeg",
				quality
			);
		};
		img.onerror = () => reject(new Error("Failed to load image"));
		img.src = URL.createObjectURL(file);
	});
}

export function ConvertToJPGClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [quality, setQuality] = useState(0.92);
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState({ current: 0, total: 0 });
	const [results, setResults] = useState<ConvertedResult[]>([]);
	const [error, setError] = useState<string | null>(null);

	const handleConvert = useCallback(async () => {
		if (files.length === 0) return;
		setIsProcessing(true); setResults([]); setError(null);
		setProgress({ current: 0, total: files.length });

		const converted: ConvertedResult[] = [];
		for (let i = 0; i < files.length; i++) {
			try {
				setProgress({ current: i + 1, total: files.length });
				const blob = await convertToJPG(files[i].file, quality);
				converted.push({
					id: files[i].id,
					originalName: files[i].file.name,
					originalSize: files[i].file.size,
					convertedSize: blob.size,
					convertedBlob: blob,
					preview: URL.createObjectURL(blob),
				});
			} catch (err) {
				console.error(err);
				setError(`Failed to convert ${files[i].file.name}.`);
			}
		}
		setResults(converted); setIsProcessing(false);
	}, [files, quality]);

	const downloadSingle = (r: ConvertedResult) => saveAs(r.convertedBlob, r.originalName.replace(/\.[^.]+$/, "") + ".jpg");
	const downloadAll = async () => {
		if (results.length <= 1) { if (results[0]) downloadSingle(results[0]); return; }
		const zip = new JSZip();
		results.forEach((r) => zip.file(r.originalName.replace(/\.[^.]+$/, "") + ".jpg", r.convertedBlob));
		saveAs(await zip.generateAsync({ type: "blob" }), "converted-jpg-images.zip");
	};

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					Convert to <span className="text-primary">JPG</span> Online
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">Convert PNG, WebP, BMP, GIF to JPG format. Free, private, no signup.</p>
				<div className="mt-4"><TrustBadges /></div>
			</div>

			<UploadZone accept=".png,.webp,.bmp,.gif,image/png,image/webp,image/bmp,image/gif" files={files} onFilesChange={(f) => { setFiles(f); setResults([]); setError(null); }} />

			{files.length > 0 && !isProcessing && results.length === 0 && (
				<div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl space-y-6">
					<div>
						<div className="flex items-center justify-between mb-2">
							<label className="text-sm font-semibold text-slate-900">JPG Quality</label>
							<span className="text-sm text-slate-500">{Math.round(quality * 100)}%</span>
						</div>
						<input type="range" min="10" max="100" value={quality * 100} onChange={(e) => setQuality(Number(e.target.value) / 100)} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" />
					</div>
					<button onClick={handleConvert} className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg">
						Convert {files.length} Image{files.length !== 1 ? "s" : ""} to JPG
					</button>
				</div>
			)}

			{isProcessing && (
				<div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-4">
					<Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
					<p className="font-semibold text-slate-900">Converting {progress.current} of {progress.total}...</p>
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
						<p className="font-bold text-xl text-slate-900">Converted {results.length} image{results.length !== 1 ? "s" : ""} to JPG!</p>
					</div>
					{results.map((r) => (
						<div key={r.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={r.preview} alt={r.originalName} className="w-14 h-14 object-cover rounded-lg" />
							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium truncate text-slate-900">{r.originalName.replace(/\.[^.]+$/, "")}.jpg</p>
								<p className="text-xs text-slate-500">{formatFileSize(r.originalSize)} → {formatFileSize(r.convertedSize)}</p>
							</div>
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
						Convert more images
					</button>
				</div>
			)}

			<section className="mt-16"><h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2><FAQ items={faqItems} /></section>
			<RelatedTools currentToolId="convert-to-jpg" />
		</div>
	);
}
