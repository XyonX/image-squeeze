"use client";

import { useState, useCallback } from "react";
import { RotateCw, RotateCcw, FlipHorizontal, FlipVertical, Download, Package, Loader2, Check, AlertCircle } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { UploadZone, type UploadedFile } from "@/components/ui/UploadZone";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { FAQ } from "@/components/ui/FAQ";
import { formatFileSize } from "@/lib/tools";

type Transform = "rotate-90" | "rotate-180" | "rotate-270" | "flip-h" | "flip-v";

interface TransformedResult {
	id: string;
	originalName: string;
	originalSize: number;
	transformedSize: number;
	transformedBlob: Blob;
	preview: string;
}

const transforms: { value: Transform; label: string; icon: typeof RotateCw }[] = [
	{ value: "rotate-90", label: "Rotate 90° →", icon: RotateCw },
	{ value: "rotate-180", label: "Rotate 180°", icon: RotateCw },
	{ value: "rotate-270", label: "Rotate 90° ←", icon: RotateCcw },
	{ value: "flip-h", label: "Flip Horizontal", icon: FlipHorizontal },
	{ value: "flip-v", label: "Flip Vertical", icon: FlipVertical },
];

const faqItems = [
	{
		question: "Does rotating an image reduce quality?",
		answer: "Our rotation uses the Canvas API which re-encodes the image. For JPG, there is minimal quality loss at our default 92% quality setting. For PNG, the output is lossless.",
	},
	{
		question: "What's the difference between rotate and flip?",
		answer: "Rotating turns the image clockwise or counter-clockwise by a set angle. Flipping creates a mirror image — horizontal flip mirrors left-to-right, vertical flip mirrors top-to-bottom.",
	},
	{
		question: "Is my data safe?",
		answer: "All processing happens locally in your browser. Your files are never uploaded to any server.",
	},
];

function transformImage(file: File, transform: Transform): Promise<Blob> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			if (!ctx) { reject(new Error("Canvas not supported")); return; }

			const isRotate90or270 = transform === "rotate-90" || transform === "rotate-270";
			canvas.width = isRotate90or270 ? img.naturalHeight : img.naturalWidth;
			canvas.height = isRotate90or270 ? img.naturalWidth : img.naturalHeight;

			ctx.save();
			ctx.translate(canvas.width / 2, canvas.height / 2);

			switch (transform) {
				case "rotate-90": ctx.rotate(Math.PI / 2); break;
				case "rotate-180": ctx.rotate(Math.PI); break;
				case "rotate-270": ctx.rotate(-Math.PI / 2); break;
				case "flip-h": ctx.scale(-1, 1); break;
				case "flip-v": ctx.scale(1, -1); break;
			}

			ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
			ctx.restore();

			const mimeType = file.type === "image/png" ? "image/png" : file.type === "image/webp" ? "image/webp" : "image/jpeg";
			canvas.toBlob(
				(blob) => { if (blob) resolve(blob); else reject(new Error("Transform failed")); },
				mimeType,
				0.92
			);
		};
		img.onerror = () => reject(new Error("Failed to load image"));
		img.src = URL.createObjectURL(file);
	});
}

export function RotateImageClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [transform, setTransform] = useState<Transform>("rotate-90");
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState({ current: 0, total: 0 });
	const [results, setResults] = useState<TransformedResult[]>([]);
	const [error, setError] = useState<string | null>(null);

	const handleTransform = useCallback(async () => {
		if (files.length === 0) return;
		setIsProcessing(true); setResults([]); setError(null);
		setProgress({ current: 0, total: files.length });

		const transformed: TransformedResult[] = [];
		for (let i = 0; i < files.length; i++) {
			try {
				setProgress({ current: i + 1, total: files.length });
				const blob = await transformImage(files[i].file, transform);
				transformed.push({
					id: files[i].id,
					originalName: files[i].file.name,
					originalSize: files[i].file.size,
					transformedSize: blob.size,
					transformedBlob: blob,
					preview: URL.createObjectURL(blob),
				});
			} catch (err) {
				console.error(err);
				setError(`Failed to process ${files[i].file.name}.`);
			}
		}
		setResults(transformed); setIsProcessing(false);
	}, [files, transform]);

	const downloadSingle = (r: TransformedResult) => {
		const ext = r.originalName.split(".").pop() || "jpg";
		saveAs(r.transformedBlob, r.originalName.replace(/\.[^.]+$/, "") + `-${transform}.${ext}`);
	};
	const downloadAll = async () => {
		if (results.length <= 1) { if (results[0]) downloadSingle(results[0]); return; }
		const zip = new JSZip();
		results.forEach((r) => {
			const ext = r.originalName.split(".").pop() || "jpg";
			zip.file(r.originalName.replace(/\.[^.]+$/, "") + `-${transform}.${ext}`, r.transformedBlob);
		});
		saveAs(await zip.generateAsync({ type: "blob" }), "transformed-images.zip");
	};

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					Rotate & Flip <span className="text-primary">Images</span> Online
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">Rotate 90°, 180°, 270° or flip images horizontally/vertically. Free, private, no signup.</p>
				<div className="mt-4"><TrustBadges /></div>
			</div>

			<UploadZone accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" files={files} onFilesChange={(f) => { setFiles(f); setResults([]); setError(null); }} />

			{files.length > 0 && !isProcessing && results.length === 0 && (
				<div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl space-y-6">
					<div>
						<label className="text-sm font-semibold text-slate-900 block mb-3">Choose Transformation</label>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
							{transforms.map((t) => (
								<button
									key={t.value}
									onClick={() => setTransform(t.value)}
									className={`flex flex-col items-center gap-2 p-4 rounded-xl text-sm font-medium border transition-all ${
										transform === t.value
											? "border-primary bg-primary/10 text-primary"
											: "border-slate-200 hover:border-primary/30 text-slate-700"
									}`}
								>
									<t.icon className="w-5 h-5" />
									{t.label}
								</button>
							))}
						</div>
					</div>
					<button onClick={handleTransform} className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg">
						Apply to {files.length} Image{files.length !== 1 ? "s" : ""}
					</button>
				</div>
			)}

			{isProcessing && (
				<div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-4">
					<Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
					<p className="font-semibold text-slate-900">Processing {progress.current} of {progress.total}...</p>
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
						<p className="font-bold text-xl text-slate-900">Transformed {results.length} image{results.length !== 1 ? "s" : ""} successfully!</p>
					</div>
					{results.map((r) => (
						<div key={r.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={r.preview} alt={r.originalName} className="w-14 h-14 object-cover rounded-lg" />
							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium truncate text-slate-900">{r.originalName}</p>
								<p className="text-xs text-slate-500">{formatFileSize(r.transformedSize)}</p>
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
						Transform more images
					</button>
				</div>
			)}

			<section className="mt-16"><h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2><FAQ items={faqItems} /></section>
			<RelatedTools currentToolId="rotate-image" />
		</div>
	);
}
