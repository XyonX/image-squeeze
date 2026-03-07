"use client";

import { useState, useCallback } from "react";
import { Download, Package, Loader2, Check, AlertCircle } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
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
	width: number;
	height: number;
}

const scaleOptions = [
	{ label: "1×", value: 1 },
	{ label: "2×", value: 2 },
	{ label: "3×", value: 3 },
	{ label: "4×", value: 4 },
];

const faqItems = [
	{
		question: "Why convert SVG to PNG?",
		answer: "Some platforms (email, social media, older apps) don't support SVG. Converting to PNG gives you a raster image that works everywhere while preserving the look of your SVG.",
	},
	{
		question: "What does the scale option do?",
		answer: "SVGs are vector and resolution-independent. The scale option lets you export at higher resolutions — 2× gives you double the pixels (great for retina displays), 4× gives ultra-high resolution.",
	},
	{
		question: "Will transparency be preserved?",
		answer: "Yes! If your SVG has transparent areas, they will be preserved in the PNG output. PNG supports full alpha transparency.",
	},
	{
		question: "Is my data safe?",
		answer: "All conversion happens in your browser using the Canvas API. Your files never leave your device.",
	},
];

function svgToPng(file: File, scale: number): Promise<{ blob: Blob; width: number; height: number }> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			const svgText = reader.result as string;
			const img = new Image();
			img.onload = () => {
				const w = img.naturalWidth * scale;
				const h = img.naturalHeight * scale;
				const canvas = document.createElement("canvas");
				canvas.width = w;
				canvas.height = h;
				const ctx = canvas.getContext("2d");
				if (!ctx) { reject(new Error("Canvas not supported")); return; }
				ctx.drawImage(img, 0, 0, w, h);
				canvas.toBlob(
					(blob) => { if (blob) resolve({ blob, width: w, height: h }); else reject(new Error("Conversion failed")); },
					"image/png"
				);
			};
			img.onerror = () => reject(new Error("Failed to render SVG"));
			// Use data URI to avoid CORS issues
			const encoded = btoa(unescape(encodeURIComponent(svgText)));
			img.src = `data:image/svg+xml;base64,${encoded}`;
		};
		reader.onerror = () => reject(new Error("Failed to read file"));
		reader.readAsText(file);
	});
}

export function SvgToPngClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [scale, setScale] = useState(2);
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
				const { blob, width, height } = await svgToPng(files[i].file, scale);
				converted.push({
					id: files[i].id,
					originalName: files[i].file.name,
					originalSize: files[i].file.size,
					convertedSize: blob.size,
					convertedBlob: blob,
					preview: URL.createObjectURL(blob),
					width,
					height,
				});
			} catch (err) {
				console.error(err);
				setError(`Failed to convert ${files[i].file.name}. Make sure it's a valid SVG file.`);
			}
		}
		setResults(converted); setIsProcessing(false);
	}, [files, scale]);

	const downloadSingle = (r: ConvertedResult) => saveAs(r.convertedBlob, r.originalName.replace(/\.svg$/i, "") + `.png`);
	const downloadAll = async () => {
		if (results.length <= 1) { if (results[0]) downloadSingle(results[0]); return; }
		const zip = new JSZip();
		results.forEach((r) => zip.file(r.originalName.replace(/\.svg$/i, "") + ".png", r.convertedBlob));
		saveAs(await zip.generateAsync({ type: "blob" }), "svg-to-png-images.zip");
	};

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					SVG to <span className="text-primary">PNG</span> Converter
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">Convert SVG vector files to PNG at any resolution. Free, private, no signup.</p>
				<div className="mt-4"><TrustBadges /></div>
			</div>

			<UploadZone accept=".svg,image/svg+xml" files={files} onFilesChange={(f) => { setFiles(f); setResults([]); setError(null); }} />

			{files.length > 0 && !isProcessing && results.length === 0 && (
				<div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl space-y-6">
					<div>
						<label className="text-sm font-semibold text-slate-900 block mb-3">Output Scale</label>
						<div className="flex gap-2">
							{scaleOptions.map((s) => (
								<button
									key={s.value}
									onClick={() => setScale(s.value)}
									className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all ${
										scale === s.value
											? "border-primary bg-primary/10 text-primary"
											: "border-slate-200 hover:border-primary/30 text-slate-700"
									}`}
								>
									{s.label}
								</button>
							))}
						</div>
						<p className="text-xs text-slate-400 mt-2">Higher scale = more pixels. 2× is recommended for retina displays.</p>
					</div>
					<button onClick={handleConvert} className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg">
						Convert {files.length} SVG{files.length !== 1 ? "s" : ""} to PNG
					</button>
				</div>
			)}

			{isProcessing && (
				<div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-4">
					<Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
					<p className="font-semibold text-slate-900">Converting {progress.current} of {progress.total}...</p>
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
						<p className="font-bold text-xl text-slate-900">Converted {results.length} SVG{results.length !== 1 ? "s" : ""} to PNG!</p>
					</div>
					{results.map((r) => (
						<div key={r.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={r.preview} alt={r.originalName} className="w-14 h-14 object-contain rounded-lg bg-slate-50" />
							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium truncate text-slate-900">{r.originalName.replace(/\.svg$/i, "")}.png</p>
								<p className="text-xs text-slate-500">{r.width}×{r.height} • {formatFileSize(r.convertedSize)}</p>
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
						Convert more SVGs
					</button>
				</div>
			)}

			<section className="mt-16"><h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2><FAQ items={faqItems} /></section>
			<RelatedTools currentToolId="svg-to-png" />
		</div>
	);
}
