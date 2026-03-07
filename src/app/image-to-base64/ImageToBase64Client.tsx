"use client";

import { useState, useCallback } from "react";
import { Copy, Check, Download, Loader2, AlertCircle } from "lucide-react";
import { UploadZone, type UploadedFile } from "@/components/ui/UploadZone";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { FAQ } from "@/components/ui/FAQ";
import { formatFileSize } from "@/lib/tools";

interface Base64Result {
	id: string;
	originalName: string;
	originalSize: number;
	base64: string;
	dataUri: string;
	preview: string;
}

const faqItems = [
	{
		question: "What is Base64 encoding?",
		answer: "Base64 is a way to represent binary data (like images) as ASCII text. It's commonly used to embed images directly in HTML, CSS, or JSON without needing a separate file.",
	},
	{
		question: "When should I use Base64 images?",
		answer: "Base64 is great for small images (icons, tiny logos) that you want to inline in HTML/CSS to save HTTP requests. For large images, regular files are more efficient since Base64 increases size by ~33%.",
	},
	{
		question: "What's the difference between Base64 and Data URI?",
		answer: "Raw Base64 is just the encoded string. A Data URI wraps it with the MIME type prefix (e.g., data:image/png;base64,...) so browsers know how to display it. We provide both.",
	},
	{
		question: "Is my data safe?",
		answer: "All encoding happens locally in your browser using the FileReader API. Your files never leave your device.",
	},
];

function fileToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			const result = reader.result as string;
			resolve(result);
		};
		reader.onerror = () => reject(new Error("Failed to read file"));
		reader.readAsDataURL(file);
	});
}

export function ImageToBase64Client() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [isProcessing, setIsProcessing] = useState(false);
	const [results, setResults] = useState<Base64Result[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [copiedId, setCopiedId] = useState<string | null>(null);
	const [copyType, setCopyType] = useState<"base64" | "datauri" | "img" | "css" | null>(null);

	const handleConvert = useCallback(async () => {
		if (files.length === 0) return;
		setIsProcessing(true); setResults([]); setError(null);

		const converted: Base64Result[] = [];
		for (let i = 0; i < files.length; i++) {
			try {
				const dataUri = await fileToBase64(files[i].file);
				const base64 = dataUri.split(",")[1] || "";
				converted.push({
					id: files[i].id,
					originalName: files[i].file.name,
					originalSize: files[i].file.size,
					base64,
					dataUri,
					preview: files[i].preview,
				});
			} catch (err) {
				console.error(err);
				setError(`Failed to encode ${files[i].file.name}.`);
			}
		}
		setResults(converted); setIsProcessing(false);
	}, [files]);

	const copyToClipboard = async (text: string, id: string, type: "base64" | "datauri" | "img" | "css") => {
		try {
			await navigator.clipboard.writeText(text);
			setCopiedId(id);
			setCopyType(type);
			setTimeout(() => { setCopiedId(null); setCopyType(null); }, 2000);
		} catch {
			setError("Failed to copy to clipboard.");
		}
	};

	const downloadAsText = (r: Base64Result) => {
		const blob = new Blob([r.dataUri], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = r.originalName.replace(/\.[^.]+$/, "") + "-base64.txt";
		a.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					Image to <span className="text-primary">Base64</span> Converter
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">Convert images to Base64 encoded strings for embedding in HTML, CSS, or JSON. Free, private, no signup.</p>
				<div className="mt-4"><TrustBadges /></div>
			</div>

			<UploadZone accept=".jpg,.jpeg,.png,.webp,.gif,.svg,.bmp,image/jpeg,image/png,image/webp,image/gif,image/svg+xml,image/bmp" files={files} onFilesChange={(f) => { setFiles(f); setResults([]); setError(null); }} />

			{files.length > 0 && !isProcessing && results.length === 0 && (
				<div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl">
					<button onClick={handleConvert} className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg">
						Encode {files.length} Image{files.length !== 1 ? "s" : ""} to Base64
					</button>
				</div>
			)}

			{isProcessing && (
				<div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-4">
					<Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
					<p className="font-semibold text-slate-900">Encoding...</p>
				</div>
			)}

			{error && (
				<div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
					<AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" /><p className="text-sm text-red-500">{error}</p>
				</div>
			)}

			{results.length > 0 && (
				<div className="mt-8 space-y-6">
					{results.map((r) => (
						<div key={r.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
							{/* Header */}
							<div className="flex items-center gap-4 p-4 border-b border-slate-100">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={r.preview} alt={r.originalName} className="w-12 h-12 object-cover rounded-lg" />
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium truncate text-slate-900">{r.originalName}</p>
									<p className="text-xs text-slate-500">{formatFileSize(r.originalSize)} → {formatFileSize(r.base64.length)} (Base64)</p>
								</div>
							</div>

							{/* Base64 preview */}
							<div className="p-4">
								<div className="bg-slate-50 border border-slate-200 rounded-lg p-3 max-h-[120px] overflow-auto">
									<code className="text-xs text-slate-600 break-all font-mono">{r.dataUri.substring(0, 500)}{r.dataUri.length > 500 ? "..." : ""}</code>
								</div>
							</div>

							{/* Copy buttons */}
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 pt-0">
								<button
									onClick={() => copyToClipboard(r.base64, r.id, "base64")}
									className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
										copiedId === r.id && copyType === "base64" ? "border-emerald-300 bg-emerald-50 text-emerald-600" : "border-slate-200 hover:border-primary/30 text-slate-700"
									}`}
								>
									{copiedId === r.id && copyType === "base64" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
									Raw Base64
								</button>
								<button
									onClick={() => copyToClipboard(r.dataUri, r.id, "datauri")}
									className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
										copiedId === r.id && copyType === "datauri" ? "border-emerald-300 bg-emerald-50 text-emerald-600" : "border-slate-200 hover:border-primary/30 text-slate-700"
									}`}
								>
									{copiedId === r.id && copyType === "datauri" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
									Data URI
								</button>
								<button
									onClick={() => copyToClipboard(`<img src="${r.dataUri}" alt="${r.originalName}" />`, r.id, "img")}
									className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
										copiedId === r.id && copyType === "img" ? "border-emerald-300 bg-emerald-50 text-emerald-600" : "border-slate-200 hover:border-primary/30 text-slate-700"
									}`}
								>
									{copiedId === r.id && copyType === "img" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
									HTML &lt;img&gt;
								</button>
								<button
									onClick={() => copyToClipboard(`background-image: url(${r.dataUri});`, r.id, "css")}
									className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
										copiedId === r.id && copyType === "css" ? "border-emerald-300 bg-emerald-50 text-emerald-600" : "border-slate-200 hover:border-primary/30 text-slate-700"
									}`}
								>
									{copiedId === r.id && copyType === "css" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
									CSS bg
								</button>
							</div>

							{/* Download as text */}
							<div className="px-4 pb-4">
								<button onClick={() => downloadAsText(r)} className="flex items-center justify-center gap-1.5 w-full py-2 border border-slate-200 hover:bg-slate-50 rounded-lg text-xs font-medium text-slate-700 transition-colors">
									<Download className="w-3.5 h-3.5" />Download as .txt
								</button>
							</div>
						</div>
					))}

					<button onClick={() => { setFiles([]); setResults([]); setError(null); }} className="w-full py-3 border border-slate-200 hover:bg-slate-50 text-sm font-medium rounded-xl transition-colors text-slate-700">
						Encode more images
					</button>
				</div>
			)}

			<section className="mt-16"><h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2><FAQ items={faqItems} /></section>
			<RelatedTools currentToolId="image-to-base64" />
		</div>
	);
}
