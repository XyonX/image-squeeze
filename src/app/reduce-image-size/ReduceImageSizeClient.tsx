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

interface ReducedResult {
	id: string;
	originalName: string;
	originalSize: number;
	reducedSize: number;
	reducedBlob: Blob;
	preview: string;
	saved: number;
	finalQuality: number;
}

const targetPresets = [
	{ label: "50 KB", value: 50 },
	{ label: "100 KB", value: 100 },
	{ label: "200 KB", value: 200 },
	{ label: "500 KB", value: 500 },
	{ label: "1 MB", value: 1024 },
	{ label: "2 MB", value: 2048 },
];

const faqItems = [
	{
		question: "How does target size compression work?",
		answer: "The tool uses an iterative binary-search approach — it tries different quality levels until it finds one that produces a file at or just under your target size. This gives you the best possible quality within your size constraint.",
	},
	{
		question: "Can I get an exact file size?",
		answer: "The result will be at or slightly below your target. Due to how image compression works, it's not possible to hit an exact byte count, but we get as close as possible.",
	},
	{
		question: "What if my image is already smaller than the target?",
		answer: "If your image is already below the target size, the tool will let you know — no unnecessary re-compression.",
	},
	{
		question: "Is my data safe?",
		answer: "Yes. All processing happens in your browser using the Canvas API. Your files never leave your device.",
	},
];

function reduceToTarget(file: File, targetKB: number): Promise<{ blob: Blob; quality: number }> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = img.naturalWidth;
			canvas.height = img.naturalHeight;
			const ctx = canvas.getContext("2d");
			if (!ctx) { reject(new Error("Canvas not supported")); return; }
			ctx.drawImage(img, 0, 0);

			const targetBytes = targetKB * 1024;
			let low = 0.01;
			let high = 1.0;
			let bestBlob: Blob | null = null;
			let bestQuality = 0.5;
			let iterations = 0;
			const maxIterations = 15;

			const tryQuality = (q: number): Promise<Blob> => {
				return new Promise((res, rej) => {
					canvas.toBlob(
						(blob) => { if (blob) res(blob); else rej(new Error("Encoding failed")); },
						"image/jpeg",
						q
					);
				});
			};

			const search = async () => {
				while (iterations < maxIterations && high - low > 0.01) {
					const mid = (low + high) / 2;
					const blob = await tryQuality(mid);
					iterations++;

					if (blob.size <= targetBytes) {
						bestBlob = blob;
						bestQuality = mid;
						low = mid;
					} else {
						high = mid;
					}
				}

				if (!bestBlob) {
					bestBlob = await tryQuality(low);
					bestQuality = low;
				}

				resolve({ blob: bestBlob, quality: bestQuality });
			};

			search().catch(reject);
		};
		img.onerror = () => reject(new Error("Failed to load image"));
		img.src = URL.createObjectURL(file);
	});
}

export function ReduceImageSizeClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [targetKB, setTargetKB] = useState(200);
	const [customTarget, setCustomTarget] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState({ current: 0, total: 0 });
	const [results, setResults] = useState<ReducedResult[]>([]);
	const [error, setError] = useState<string | null>(null);

	const activeTarget = customTarget ? Number(customTarget) : targetKB;

	const handleReduce = useCallback(async () => {
		if (files.length === 0 || !activeTarget) return;
		setIsProcessing(true);
		setResults([]);
		setError(null);
		setProgress({ current: 0, total: files.length });

		const reduced: ReducedResult[] = [];
		for (let i = 0; i < files.length; i++) {
			try {
				setProgress({ current: i + 1, total: files.length });
				const file = files[i].file;

				if (file.size <= activeTarget * 1024) {
					const preview = URL.createObjectURL(file);
					reduced.push({
						id: files[i].id,
						originalName: file.name,
						originalSize: file.size,
						reducedSize: file.size,
						reducedBlob: file,
						preview,
						saved: 0,
						finalQuality: 100,
					});
					continue;
				}

				const { blob, quality } = await reduceToTarget(file, activeTarget);
				const preview = URL.createObjectURL(blob);
				const saved = ((file.size - blob.size) / file.size) * 100;
				reduced.push({
					id: files[i].id,
					originalName: file.name,
					originalSize: file.size,
					reducedSize: blob.size,
					reducedBlob: blob,
					preview,
					saved: Math.max(0, saved),
					finalQuality: Math.round(quality * 100),
				});
			} catch (err) {
				console.error(`Failed to reduce ${files[i].file.name}:`, err);
				setError(`Failed to process ${files[i].file.name}. Try a different file.`);
			}
		}
		setResults(reduced);
		setIsProcessing(false);
	}, [files, activeTarget]);

	const downloadSingle = (result: ReducedResult) => {
		saveAs(result.reducedBlob, result.originalName.replace(/\.[^.]+$/, "") + "-reduced.jpg");
	};

	const downloadAll = async () => {
		if (results.length <= 1) { if (results[0]) downloadSingle(results[0]); return; }
		const zip = new JSZip();
		results.forEach((r) => zip.file(r.originalName.replace(/\.[^.]+$/, "") + "-reduced.jpg", r.reducedBlob));
		saveAs(await zip.generateAsync({ type: "blob" }), "reduced-images.zip");
	};

	const totalSaved = results.reduce((acc, r) => acc + (r.originalSize - r.reducedSize), 0);

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					Reduce Image to <span className="text-primary">Target Size</span>
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">Compress images to a specific file size — 50KB, 100KB, 200KB, or any custom target. Free and private.</p>
				<div className="mt-4"><TrustBadges /></div>
			</div>

			<UploadZone accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" files={files} onFilesChange={(f) => { setFiles(f); setResults([]); setError(null); }} />

			{files.length > 0 && !isProcessing && results.length === 0 && (
				<div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl space-y-6">
					<div>
						<label className="font-bold text-slate-900 block mb-3 text-sm">Target File Size</label>
						<div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
							{targetPresets.map((p) => (
								<button
									key={p.value}
									onClick={() => { setTargetKB(p.value); setCustomTarget(""); }}
									className={`preset-button px-3 py-2 text-xs font-bold text-center border transition-all min-w-fit ${
										!customTarget && targetKB === p.value
											? "border-slate-900 bg-slate-900 text-white"
											: "border-slate-300 hover:border-slate-400 text-slate-900"
									}`}
									title={p.label}
								>
									{p.label}
								</button>
							))}
						</div>
						<div className="flex items-center gap-2">
							<span className="text-xs font-bold text-slate-900">Custom:</span>
							<input
								type="number"
								placeholder="e.g. 150"
								value={customTarget}
								onChange={(e) => setCustomTarget(e.target.value)}
								className="w-24 px-3 py-2 border border-slate-300 text-sm focus:outline-none focus:border-slate-400"
							/>
							<span className="text-xs font-bold text-slate-900">KB</span>
						</div>
					</div>
					<button onClick={handleReduce} disabled={files.length === 0 || isProcessing} className="w-full py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold transition-colors text-sm">
						{isProcessing ? "Optimizing..." : `Reduce to ${activeTarget >= 1024 ? `${activeTarget / 1024} MB` : `${activeTarget} KB`}`}
					</button>
				</div>
			)}

			{isProcessing && (
				<div className="mt-6 p-6 bg-white border border-slate-300 text-center space-y-3">
					<Loader2 className="w-8 h-8 text-slate-700 animate-spin mx-auto" />
					<p className="font-bold text-slate-900 text-base">Optimizing {progress.current} of {progress.total}...</p>
					<div className="w-full bg-slate-200 h-2 overflow-hidden">
						<div className="h-full bg-slate-900 transition-all duration-300" style={{ width: `${(progress.current / progress.total) * 100}%` }} />
					</div>
				</div>
			)}

			{error && (
				<div className="mt-4 p-4 bg-slate-50 border border-slate-300 flex items-start gap-3">
					<AlertCircle className="w-4 h-4 text-slate-700 flex-shrink-0" /><p className="text-xs text-slate-700">{error}</p>
				</div>
			)}

			{results.length > 0 && (
				<div className="mt-6 space-y-3">
					<div className="p-6 bg-slate-50 border border-slate-300 text-center">
						<Check className="w-8 h-8 text-slate-700 mx-auto mb-2" />
						<p className="font-bold text-lg text-slate-900">Saved {formatFileSize(totalSaved)} across {results.length} image{results.length !== 1 ? "s" : ""}</p>
						<p className="text-xs text-slate-600 mt-1">Average reduction: {Math.round(results.reduce((a, r) => a + r.saved, 0) / results.length)}%</p>
					</div>
					{results.map((r) => (
						<div key={r.id} className="flex items-center gap-3 p-3 bg-white border border-slate-300">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={r.preview} alt={r.originalName} className="w-12 h-12 object-cover flex-shrink-0" />
							<div className="flex-1 min-w-0">
								<p className="text-xs font-bold truncate text-slate-900">{r.originalName}</p>
								<p className="text-xs text-slate-600 mt-0.5">
									{formatFileSize(r.originalSize)} → {formatFileSize(r.reducedSize)}
									{r.saved === 0 && " (already under target)"}
								</p>
							</div>
							<span className="text-xs font-bold text-slate-700 whitespace-nowrap flex-shrink-0">{r.saved > 0 ? `-${Math.round(r.saved)}%` : "✓"}</span>
							<button onClick={() => downloadSingle(r)} className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex-shrink-0">
								<Download className="w-4 h-4" />Download
							</button>
						</div>
					))}
					{results.length > 1 && (
						<button onClick={downloadAll} className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors flex items-center justify-center gap-2 text-sm">
							<Package className="w-4 h-4" />Download All as ZIP
						</button>
					)}
					<button onClick={() => { setFiles([]); setResults([]); setError(null); }} className="w-full py-3 border border-slate-300 hover:bg-slate-50 text-xs font-bold transition-colors text-slate-900">
						Reduce more images
					</button>
				</div>
			)}

			<section className="mt-16"><h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2><FAQ items={faqItems} /></section>
			<RelatedTools currentToolId="reduce-image-size" />
		</div>
	);
}
