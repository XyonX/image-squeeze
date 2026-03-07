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

interface StrippedResult {
	id: string;
	originalName: string;
	originalSize: number;
	strippedSize: number;
	strippedBlob: Blob;
	preview: string;
}

const faqItems = [
	{
		question: "What is EXIF data?",
		answer: "EXIF (Exchangeable Image File Format) is metadata embedded in image files by cameras and phones. It can include GPS coordinates, camera model, date/time, lens info, and more.",
	},
	{
		question: "Why should I remove EXIF data?",
		answer: "For privacy! Photos from your phone often contain your exact GPS location. Removing EXIF before sharing online prevents others from seeing where and when you took the photo.",
	},
	{
		question: "Does stripping EXIF affect image quality?",
		answer: "The image is re-encoded through the Canvas API at 95% quality for JPG. For most photos, the difference is imperceptible. PNG output is lossless.",
	},
	{
		question: "Is my data safe?",
		answer: "All processing happens locally in your browser. Your images and their metadata are never uploaded anywhere.",
	},
];

function stripExif(file: File): Promise<Blob> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = img.naturalWidth;
			canvas.height = img.naturalHeight;
			const ctx = canvas.getContext("2d");
			if (!ctx) { reject(new Error("Canvas not supported")); return; }
			ctx.drawImage(img, 0, 0);
			// Re-encoding through canvas strips all metadata
			const mimeType = file.type === "image/png" ? "image/png" : "image/jpeg";
			const quality = file.type === "image/png" ? undefined : 0.95;
			canvas.toBlob(
				(blob) => { if (blob) resolve(blob); else reject(new Error("Strip failed")); },
				mimeType,
				quality
			);
		};
		img.onerror = () => reject(new Error("Failed to load image"));
		img.src = URL.createObjectURL(file);
	});
}

export function RemoveExifClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState({ current: 0, total: 0 });
	const [results, setResults] = useState<StrippedResult[]>([]);
	const [error, setError] = useState<string | null>(null);

	const handleStrip = useCallback(async () => {
		if (files.length === 0) return;
		setIsProcessing(true); setResults([]); setError(null);
		setProgress({ current: 0, total: files.length });

		const stripped: StrippedResult[] = [];
		for (let i = 0; i < files.length; i++) {
			try {
				setProgress({ current: i + 1, total: files.length });
				const blob = await stripExif(files[i].file);
				stripped.push({
					id: files[i].id,
					originalName: files[i].file.name,
					originalSize: files[i].file.size,
					strippedSize: blob.size,
					strippedBlob: blob,
					preview: URL.createObjectURL(blob),
				});
			} catch (err) {
				console.error(err);
				setError(`Failed to process ${files[i].file.name}.`);
			}
		}
		setResults(stripped); setIsProcessing(false);
	}, [files]);

	const downloadSingle = (r: StrippedResult) => {
		const ext = r.originalName.split(".").pop() || "jpg";
		saveAs(r.strippedBlob, r.originalName.replace(/\.[^.]+$/, "") + `-clean.${ext}`);
	};
	const downloadAll = async () => {
		if (results.length <= 1) { if (results[0]) downloadSingle(results[0]); return; }
		const zip = new JSZip();
		results.forEach((r) => {
			const ext = r.originalName.split(".").pop() || "jpg";
			zip.file(r.originalName.replace(/\.[^.]+$/, "") + `-clean.${ext}`, r.strippedBlob);
		});
		saveAs(await zip.generateAsync({ type: "blob" }), "cleaned-images.zip");
	};

	const totalSaved = results.reduce((acc, r) => acc + (r.originalSize - r.strippedSize), 0);

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					Strip <span className="text-primary">EXIF</span> Data Online
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">Remove GPS location, camera info, timestamps from your photos. Free, private, no signup.</p>
				<div className="mt-4"><TrustBadges /></div>
			</div>

			<UploadZone accept=".jpg,.jpeg,.png,image/jpeg,image/png" files={files} onFilesChange={(f) => { setFiles(f); setResults([]); setError(null); }} />

			{files.length > 0 && !isProcessing && results.length === 0 && (
				<div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl">
					<div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
						<p className="text-sm text-amber-700 font-medium">🛡️ This will remove ALL metadata including GPS location, camera model, date/time, and lens information.</p>
					</div>
					<button onClick={handleStrip} className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg">
						Strip EXIF from {files.length} Image{files.length !== 1 ? "s" : ""}
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
						<p className="font-bold text-xl text-slate-900">Cleaned {results.length} image{results.length !== 1 ? "s" : ""}!</p>
						{totalSaved > 0 && <p className="text-sm text-slate-500 mt-1">Metadata removed — saved {formatFileSize(totalSaved)}</p>}
					</div>
					{results.map((r) => (
						<div key={r.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={r.preview} alt={r.originalName} className="w-14 h-14 object-cover rounded-lg" />
							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium truncate text-slate-900">{r.originalName}</p>
								<p className="text-xs text-slate-500">{formatFileSize(r.originalSize)} → {formatFileSize(r.strippedSize)} (EXIF removed)</p>
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
						Clean more images
					</button>
				</div>
			)}

			<section className="mt-16"><h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2><FAQ items={faqItems} /></section>
			<RelatedTools currentToolId="remove-exif" />
		</div>
	);
}
