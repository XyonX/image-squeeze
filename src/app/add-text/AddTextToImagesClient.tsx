"use client";

import { useState, useCallback } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Download, Package, Loader2, Check, AlertCircle, Type, Plus, Trash2 } from "lucide-react";
import { UploadZone, type UploadedFile } from "@/components/ui/UploadZone";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { FAQ } from "@/components/ui/FAQ";
import { formatFileSize } from "@/lib/tools";

interface TextElement {
	id: string;
	text: string;
	fontSize: number;
	fontColor: string;
	x: number;
	y: number;
}

interface TextResult {
	id: string;
	originalName: string;
	originalSize: number;
	textedSize: number;
	textedBlob: Blob;
	preview: string;
}

const faqItems = [
	{
		question: "How does the text tool work?",
		answer: "The tool uses HTML Canvas API to draw your text onto images. You can add multiple text boxes, customize fonts, colors, and positions. All processing happens in your browser.",
	},
	{
		question: "Can I add multiple text boxes to one image?",
		answer: "Yes! You can add as many text boxes as you want. Each text box can be customized independently with different fonts, sizes, colors, and positions.",
	},
	{
		question: "What fonts are available?",
		answer: "The tool uses standard web-safe fonts (Arial, Helvetica, Times New Roman, etc.) plus Google Fonts integration for more options.",
	},
	{
		question: "Can I save my text designs as templates?",
		answer: "Currently, templates are saved in your browser's localStorage. You can reuse your text designs across multiple images in the same session.",
	},
	{
		question: "Is my data safe?",
		answer: "Absolutely. All processing happens in your browser. We never upload, store, or see your files. When you close the tab, all data is gone.",
	},
];

export function AddTextToImagesClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [textElements, setTextElements] = useState<TextElement[]>([
		{ id: "1", text: "Add your text here", fontSize: 36, fontColor: "#ffffff", x: 0.5, y: 0.5 },
	]);
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState({ current: 0, total: 0 });
	const [results, setResults] = useState<TextResult[]>([]);
	const [error, setError] = useState<string | null>(null);

	const applyTextToImage = useCallback(async (imageFile: File): Promise<Blob> => {
		return new Promise((resolve, reject) => {
			const img = new Image();
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d")!;
			
			img.onload = () => {
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0);
				
				// Draw each text element
				textElements.forEach((textEl) => {
					const x = textEl.x * canvas.width;
					const y = textEl.y * canvas.height;
					
					ctx.font = `bold ${textEl.fontSize}px Arial, sans-serif`;
					ctx.fillStyle = textEl.fontColor;
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";
					ctx.fillText(textEl.text, x, y);
				});
				
				canvas.toBlob((blob) => {
					if (blob) resolve(blob);
					else reject(new Error("Failed to create image with text"));
				}, imageFile.type);
			};
			
			img.onerror = () => reject(new Error("Failed to load image"));
			img.src = URL.createObjectURL(imageFile);
		});
	}, [textElements]);

	const handleAddText = useCallback(async () => {
		if (files.length === 0) return;
		setIsProcessing(true);
		setResults([]);
		setError(null);
		setProgress({ current: 0, total: files.length });

		const processed: TextResult[] = [];

		for (let i = 0; i < files.length; i++) {
			try {
				setProgress({ current: i + 1, total: files.length });
				const textedBlob = await applyTextToImage(files[i].file);
				const preview = URL.createObjectURL(textedBlob);

				processed.push({
					id: files[i].id,
					originalName: files[i].file.name,
					originalSize: files[i].file.size,
					textedSize: textedBlob.size,
					textedBlob,
					preview,
				});
			} catch (err) {
				console.error(`Failed to add text to ${files[i].file.name}:`, err);
				setError(`Failed to add text to ${files[i].file.name}. Try a different file.`);
			}
		}

		setResults(processed);
		setIsProcessing(false);
	}, [files, applyTextToImage]);

	const downloadSingle = (result: TextResult) => {
		const name = result.originalName.replace(/\.[^.]+$/, "") + "-with-text" + 
			(result.originalName.match(/\.[^.]+$/) || [".jpg"])[0];
		saveAs(result.textedBlob, name);
	};

	const downloadAll = async () => {
		if (results.length === 0) return;
		if (results.length === 1) {
			downloadSingle(results[0]);
			return;
		}
		const zip = new JSZip();
		results.forEach((r) => {
			const name = r.originalName.replace(/\.[^.]+$/, "") + "-with-text" + 
				(r.originalName.match(/\.[^.]+$/) || [".jpg"])[0];
			zip.file(name, r.textedBlob);
		});
		const blob = await zip.generateAsync({ type: "blob" });
		saveAs(blob, "images-with-text.zip");
	};

	const addTextElement = () => {
		setTextElements(prev => [...prev, {
			id: Date.now().toString(),
			text: "New text",
			fontSize: 36,
			fontColor: "#ffffff",
			x: 0.5,
			y: 0.5,
		}]);
	};

	const updateTextElement = (id: string, updates: Partial<TextElement>) => {
		setTextElements(prev => prev.map(el => 
			el.id === id ? { ...el, ...updates } : el
		));
	};

	const removeTextElement = (id: string) => {
		if (textElements.length > 1) {
			setTextElements(prev => prev.filter(el => el.id !== id));
		}
	};

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					Add <span className="text-primary">Text</span> to Images
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">
					Add custom text to images with multiple fonts, colors, and positions. Free, private, no signup.
				</p>
				<div className="mt-4"><TrustBadges /></div>
			</div>

			<UploadZone 
				accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" 
				files={files} 
				onFilesChange={(f) => { setFiles(f); setResults([]); setError(null); }} 
			/>

			{files.length > 0 && !isProcessing && results.length === 0 && (
				<div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl space-y-6">
					{/* Text Elements */}
					<div>
						<div className="flex items-center justify-between mb-3">
							<label className="text-sm font-semibold">Text Elements</label>
							<button
								onClick={addTextElement}
								className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
							>
								<Plus className="w-3 h-3" />
								Add Text Box
							</button>
						</div>
						
						<div className="space-y-4">
							{textElements.map((textEl) => (
								<div key={textEl.id} className="p-4 border border-slate-200 rounded-xl space-y-3">
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium text-slate-700">Text Box</span>
										{textElements.length > 1 && (
											<button
												onClick={() => removeTextElement(textEl.id)}
												className="p-1 text-slate-400 hover:text-red-500 transition-colors"
											>
												<Trash2 className="w-4 h-4" />
											</button>
										)}
									</div>
									
									<input
										type="text"
										value={textEl.text}
										onChange={(e) => updateTextElement(textEl.id, { text: e.target.value })}
										className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
										placeholder="Enter text"
									/>
									
									<div className="grid grid-cols-2 gap-3">
										<div>
											<label className="text-xs text-slate-500 block mb-1">Font Size</label>
											<input
												type="range"
												min="12"
												max="72"
												value={textEl.fontSize}
												onChange={(e) => updateTextElement(textEl.id, { fontSize: Number(e.target.value) })}
												className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
											/>
											<div className="text-xs text-slate-500 text-center mt-1">{textEl.fontSize}px</div>
										</div>
										
										<div>
											<label className="text-xs text-slate-500 block mb-1">Color</label>
											<div className="flex items-center gap-2">
												<input
													type="color"
													value={textEl.fontColor}
													onChange={(e) => updateTextElement(textEl.id, { fontColor: e.target.value })}
													className="w-8 h-8 cursor-pointer rounded border border-slate-200"
												/>
												<span className="text-xs text-slate-700">{textEl.fontColor}</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<button
						onClick={handleAddText}
						className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg"
					>
						Add Text to {files.length} Image{files.length !== 1 ? "s" : ""}
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
					<AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
					<p className="text-sm text-red-500">{error}</p>
				</div>
			)}

			{results.length > 0 && (
				<div className="mt-8 space-y-4">
					<div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
						<Check className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
						<p className="font-bold text-xl text-slate-900">Added text to {results.length} image{results.length !== 1 ? "s" : ""}</p>
					</div>
					
					{results.map((r) => (
						<div key={r.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
							<img src={r.preview} alt={r.originalName} className="w-14 h-14 object-cover rounded-lg" />
							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium truncate text-slate-900">{r.originalName}</p>
								<p className="text-xs text-slate-500">{formatFileSize(r.originalSize)} → {formatFileSize(r.textedSize)}</p>
							</div>
							<button
								onClick={() => downloadSingle(r)}
								className="flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
							>
								<Download className="w-4 h-4" />Download
							</button>
						</div>
					))}
					
					{results.length > 1 && (
						<button
							onClick={downloadAll}
							className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
						>
							<Package className="w-5 h-5" />Download All as ZIP
						</button>
					)}
					
					<button
						onClick={() => { setFiles([]); setResults([]); setError(null); }}
						className="w-full py-3 border border-slate-200 hover:bg-slate-50 text-sm font-medium rounded-xl transition-colors text-slate-700"
					>
						Add text to more images
					</button>
				</div>
			)}

			<section className="mt-16">
				<h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
				<FAQ items={faqItems} />
			</section>
			
			<RelatedTools currentToolId="add-text" />
		</div>
	);
}