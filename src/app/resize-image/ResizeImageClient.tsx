"use client";

import { useState, useCallback } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Download, Package, Loader2, Check, AlertCircle, Lock, Unlock } from "lucide-react";
import { UploadZone, type UploadedFile } from "@/components/ui/UploadZone";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { FAQ } from "@/components/ui/FAQ";
import { formatFileSize } from "@/lib/tools";

interface ResizedResult {
	id: string;
	originalName: string;
	originalSize: number;
	resizedSize: number;
	resizedBlob: Blob;
	preview: string;
	newWidth: number;
	newHeight: number;
}

type ResizeMode = "percentage" | "dimensions";

const presetPercentages = [25, 50, 75];
const presetDimensions = [
	{ label: "Instagram (1080×1080)", w: 1080, h: 1080 },
	{ label: "Facebook Cover (820×312)", w: 820, h: 312 },
	{ label: "Twitter Header (1500×500)", w: 1500, h: 500 },
	{ label: "HD (1280×720)", w: 1280, h: 720 },
	{ label: "Full HD (1920×1080)", w: 1920, h: 1080 },
];

const faqItems = [
	{ question: "Does resizing affect image quality?", answer: "Resizing down (making smaller) generally preserves quality. Resizing up (enlarging) can cause blurriness as the browser interpolates new pixels." },
	{ question: "What does 'lock aspect ratio' mean?", answer: "When aspect ratio is locked, changing one dimension automatically adjusts the other to keep the image's original proportions, preventing distortion." },
	{ question: "Is my data safe?", answer: "All resizing happens locally in your browser using the Canvas API. Your files are never uploaded anywhere." },
];

function resizeImage(file: File, width: number, height: number): Promise<Blob> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = width;
			canvas.height = height;
			const ctx = canvas.getContext("2d");
			if (!ctx) { reject(new Error("Canvas not supported")); return; }
			ctx.drawImage(img, 0, 0, width, height);
			const mimeType = file.type === "image/png" ? "image/png" : file.type === "image/webp" ? "image/webp" : "image/jpeg";
			canvas.toBlob(
				(blob) => { if (blob) resolve(blob); else reject(new Error("Resize failed")); },
				mimeType, 0.92
			);
		};
		img.onerror = () => reject(new Error("Failed to load image"));
		img.src = URL.createObjectURL(file);
	});
}

export function ResizeImageClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [mode, setMode] = useState<ResizeMode>("percentage");
	const [percentage, setPercentage] = useState(50);
	const [width, setWidth] = useState(800);
	const [height, setHeight] = useState(600);
	const [lockAspect, setLockAspect] = useState(true);
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState({ current: 0, total: 0 });
	const [results, setResults] = useState<ResizedResult[]>([]);
	const [error, setError] = useState<string | null>(null);

	const handleResize = useCallback(async () => {
		if (files.length === 0) return;
		setIsProcessing(true); setResults([]); setError(null);
		setProgress({ current: 0, total: files.length });

		const resized: ResizedResult[] = [];
		for (let i = 0; i < files.length; i++) {
			try {
				setProgress({ current: i + 1, total: files.length });
				let newW: number, newH: number;
				if (mode === "percentage") {
					newW = Math.round(files[i].width * (percentage / 100));
					newH = Math.round(files[i].height * (percentage / 100));
				} else {
					newW = width;
					newH = lockAspect ? Math.round((width / files[i].width) * files[i].height) : height;
				}
				const blob = await resizeImage(files[i].file, newW, newH);
				resized.push({
					id: files[i].id, originalName: files[i].file.name, originalSize: files[i].file.size,
					resizedSize: blob.size, resizedBlob: blob, preview: URL.createObjectURL(blob),
					newWidth: newW, newHeight: newH,
				});
			} catch (err) {
				console.error(err);
				setError(`Failed to resize ${files[i].file.name}.`);
			}
		}
		setResults(resized); setIsProcessing(false);
	}, [files, mode, percentage, width, height, lockAspect]);

	const downloadSingle = (r: ResizedResult) => {
		const ext = r.originalName.split(".").pop() || "jpg";
		saveAs(r.resizedBlob, r.originalName.replace(/\.[^.]+$/, "") + `-${r.newWidth}x${r.newHeight}.${ext}`);
	};
	const downloadAll = async () => {
		if (results.length <= 1) { if (results[0]) downloadSingle(results[0]); return; }
		const zip = new JSZip();
		results.forEach((r) => { const ext = r.originalName.split(".").pop() || "jpg"; zip.file(r.originalName.replace(/\.[^.]+$/, "") + `-${r.newWidth}x${r.newHeight}.${ext}`, r.resizedBlob); });
		saveAs(await zip.generateAsync({ type: "blob" }), "resized-images.zip");
	};

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					Resize <span className="text-primary">Images</span> Online
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">Resize by percentage or exact dimensions. Social media presets included.</p>
				<div className="mt-4"><TrustBadges /></div>
			</div>

			<UploadZone accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" files={files} onFilesChange={(f) => { setFiles(f); setResults([]); setError(null); }} />

			{files.length > 0 && !isProcessing && results.length === 0 && (
				<div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl space-y-6">
					{/* Mode toggle */}
					<div className="flex gap-2">
						<button onClick={() => setMode("percentage")} className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all ${mode === "percentage" ? "border-primary bg-primary/10 text-primary" : "border-slate-200"}`}>By Percentage</button>
						<button onClick={() => setMode("dimensions")} className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all ${mode === "dimensions" ? "border-primary bg-primary/10 text-primary" : "border-slate-200"}`}>By Dimensions</button>
					</div>

					{mode === "percentage" && (
						<div>
							<div className="flex items-center justify-between mb-2">
								<label className="text-sm font-semibold text-slate-900">Scale</label>
								<span className="text-sm text-slate-500">{percentage}%</span>
							</div>
							<input type="range" min="5" max="200" value={percentage} onChange={(e) => setPercentage(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" />
							<div className="flex gap-2 mt-3">
								{presetPercentages.map((p) => (
									<button key={p} onClick={() => setPercentage(p)} className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${percentage === p ? "border-primary bg-primary/10 text-primary" : "border-slate-200"}`}>{p}%</button>
								))}
							</div>
						</div>
					)}

					{mode === "dimensions" && (
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="flex-1">
									<label className="text-xs font-semibold text-slate-500 block mb-1">Width (px)</label>
									<input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900" />
								</div>
								<button onClick={() => setLockAspect(!lockAspect)} className="mt-5 p-2 rounded-lg hover:bg-slate-50 border border-slate-200">
									{lockAspect ? <Lock className="w-4 h-4 text-primary" /> : <Unlock className="w-4 h-4 text-slate-400" />}
								</button>
								<div className="flex-1">
									<label className="text-xs font-semibold text-slate-500 block mb-1">Height (px)</label>
									<input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} disabled={lockAspect} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 disabled:opacity-50" />
								</div>
							</div>
							<div>
								<p className="text-xs font-semibold text-slate-500 mb-2">Presets</p>
								<div className="flex flex-wrap gap-2">
									{presetDimensions.map((d) => (
										<button key={d.label} onClick={() => { setWidth(d.w); setHeight(d.h); setLockAspect(false); }} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 hover:border-primary/30 transition-all text-slate-700">{d.label}</button>
									))}
								</div>
							</div>
						</div>
					)}

					<button onClick={handleResize} className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg">
						Resize {files.length} Image{files.length !== 1 ? "s" : ""}
					</button>
				</div>
			)}

			{isProcessing && (
				<div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-4">
					<Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
					<p className="font-semibold text-slate-900">Resizing {progress.current} of {progress.total}...</p>
					<div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
						<div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${(progress.current / progress.total) * 100}%` }} />
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
						<p className="font-bold text-xl text-slate-900">Resized {results.length} image{results.length !== 1 ? "s" : ""} successfully!</p>
					</div>
					{results.map((r) => (
						<div key={r.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={r.preview} alt={r.originalName} className="w-14 h-14 object-cover rounded-lg" />
							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium truncate text-slate-900">{r.originalName}</p>
								<p className="text-xs text-slate-500">{r.newWidth}×{r.newHeight} • {formatFileSize(r.resizedSize)}</p>
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
						Resize more images
					</button>
				</div>
			)}

			<section className="mt-16"><h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2><FAQ items={faqItems} /></section>
			<RelatedTools currentToolId="resize-image" />
		</div>
	);
}
