"use client";

import { useState, useCallback } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Download, Package, Loader2, Check, AlertCircle, Sliders, Palette } from "lucide-react";
import { UploadZone, type UploadedFile } from "@/components/ui/UploadZone";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { FAQ } from "@/components/ui/FAQ";
import { formatFileSize } from "@/lib/tools";

interface FilterSettings {
	brightness: number;
	contrast: number;
	saturation: number;
	blur: number;
	filter: "none" | "grayscale" | "sepia" | "vintage" | "invert";
}

interface FilterResult {
	id: string;
	originalName: string;
	originalSize: number;
	filteredSize: number;
	filteredBlob: Blob;
	preview: string;
}

const filterPresets = [
	{ id: "none", label: "None", brightness: 100, contrast: 100, saturation: 100, blur: 0 },
	{ id: "grayscale", label: "Black & White", brightness: 100, contrast: 110, saturation: 0, blur: 0 },
	{ id: "sepia", label: "Sepia", brightness: 90, contrast: 90, saturation: 50, blur: 0 },
	{ id: "vintage", label: "Vintage", brightness: 80, contrast: 120, saturation: 80, blur: 1 },
	{ id: "invert", label: "Invert", brightness: 100, contrast: 100, saturation: 100, blur: 0 },
];

const faqItems = [
	{
		question: "How do image filters work?",
		answer: "The tool uses HTML Canvas API to apply filters and adjustments to your images. All processing happens in your browser — no files are uploaded to any server.",
	},
	{
		question: "Can I apply multiple filters at once?",
		answer: "Yes! You can combine brightness, contrast, saturation, and blur adjustments with preset filters for unique effects.",
	},
	{
		question: "Will applying filters reduce image quality?",
		answer: "Filters are applied as image processing operations, so there's minimal quality loss. The output format matches your input format.",
	},
	{
		question: "Can I filter multiple images at once?",
		answer: "Yes! You can upload up to 20 images and apply the same filter settings to all of them. You'll get individual downloads plus a ZIP file option.",
	},
	{
		question: "Is my data safe?",
		answer: "Absolutely. All processing happens in your browser. We never upload, store, or see your files. When you close the tab, all data is gone.",
	},
];

export function ImageFiltersClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [settings, setSettings] = useState<FilterSettings>({
		brightness: 100,
		contrast: 100,
		saturation: 100,
		blur: 0,
		filter: "none",
	});
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState({ current: 0, total: 0 });
	const [results, setResults] = useState<FilterResult[]>([]);
	const [error, setError] = useState<string | null>(null);

	const applyFiltersToImage = useCallback(async (imageFile: File): Promise<Blob> => {
		return new Promise((resolve, reject) => {
			const img = new Image();
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d")!;
			
			img.onload = () => {
				canvas.width = img.width;
				canvas.height = img.height;
				
				// Apply blur first if needed
				if (settings.blur > 0) {
					ctx.filter = `blur(${settings.blur}px)`;
				}
				ctx.drawImage(img, 0, 0);
				
				// Get image data for pixel manipulation
				const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
				const data = imageData.data;
				
				// Apply brightness, contrast, saturation
				for (let i = 0; i < data.length; i += 4) {
					let r = data[i];
					let g = data[i + 1];
					let b = data[i + 2];
					
					// Apply brightness
					r = (r * settings.brightness) / 100;
					g = (g * settings.brightness) / 100;
					b = (b * settings.brightness) / 100;
					
					// Apply contrast
					const contrastFactor = (259 * (settings.contrast + 255)) / (255 * (259 - settings.contrast));
					r = contrastFactor * (r - 128) + 128;
					g = contrastFactor * (g - 128) + 128;
					b = contrastFactor * (b - 128) + 128;
					
					// Apply saturation (simplified)
					if (settings.saturation !== 100) {
						const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;
						r = gray + (settings.saturation / 100) * (r - gray);
						g = gray + (settings.saturation / 100) * (g - gray);
						b = gray + (settings.saturation / 100) * (b - gray);
					}
					
					// Apply filter presets
					if (settings.filter === "grayscale") {
						const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;
						r = g = b = gray;
					} else if (settings.filter === "sepia") {
						const tr = 0.393 * r + 0.769 * g + 0.189 * b;
						const tg = 0.349 * r + 0.686 * g + 0.168 * b;
						const tb = 0.272 * r + 0.534 * g + 0.131 * b;
						r = tr; g = tg; b = tb;
					} else if (settings.filter === "invert") {
						r = 255 - r;
						g = 255 - g;
						b = 255 - b;
					}
					
					// Clamp values
					data[i] = Math.max(0, Math.min(255, r));
					data[i + 1] = Math.max(0, Math.min(255, g));
					data[i + 2] = Math.max(0, Math.min(255, b));
				}
				
				ctx.putImageData(imageData, 0, 0);
				
				canvas.toBlob((blob) => {
					if (blob) resolve(blob);
					else reject(new Error("Failed to apply filters"));
				}, imageFile.type);
			};
			
			img.onerror = () => reject(new Error("Failed to load image"));
			img.src = URL.createObjectURL(imageFile);
		});
	}, [settings]);

	const handleApplyFilters = useCallback(async () => {
		if (files.length === 0) return;
		setIsProcessing(true);
		setResults([]);
		setError(null);
		setProgress({ current: 0, total: files.length });

		const processed: FilterResult[] = [];

		for (let i = 0; i < files.length; i++) {
			try {
				setProgress({ current: i + 1, total: files.length });
				const filteredBlob = await applyFiltersToImage(files[i].file);
				const preview = URL.createObjectURL(filteredBlob);

				processed.push({
					id: files[i].id,
					originalName: files[i].file.name,
					originalSize: files[i].file.size,
					filteredSize: filteredBlob.size,
					filteredBlob,
					preview,
				});
			} catch (err) {
				console.error(`Failed to apply filters to ${files[i].file.name}:`, err);
				setError(`Failed to apply filters to ${files[i].file.name}. Try a different file.`);
			}
		}

		setResults(processed);
		setIsProcessing(false);
	}, [files, applyFiltersToImage]);

	const downloadSingle = (result: FilterResult) => {
		const name = result.originalName.replace(/\.[^.]+$/, "") + "-filtered" + 
			(result.originalName.match(/\.[^.]+$/) || [".jpg"])[0];
		saveAs(result.filteredBlob, name);
	};

	const downloadAll = async () => {
		if (results.length === 0) return;
		if (results.length === 1) {
			downloadSingle(results[0]);
			return;
		}
		const zip = new JSZip();
		results.forEach((r) => {
			const name = r.originalName.replace(/\.[^.]+$/, "") + "-filtered" + 
				(r.originalName.match(/\.[^.]+$/) || [".jpg"])[0];
			zip.file(name, r.filteredBlob);
		});
		const blob = await zip.generateAsync({ type: "blob" });
		saveAs(blob, "filtered-images.zip");
	};

	const applyPreset = (presetId: string) => {
		const preset = filterPresets.find(p => p.id === presetId);
		if (preset) {
			setSettings(prev => ({
				...prev,
				brightness: preset.brightness,
				contrast: preset.contrast,
				saturation: preset.saturation,
				blur: preset.blur,
				filter: presetId as any,
			}));
		}
	};

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					Image <span className="text-primary">Filters</span> & Effects
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">
					Apply filters, adjust brightness, contrast, and add effects to images. Free, private, no signup.
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
					{/* Filter Presets */}
					<div>
						<label className="text-sm font-semibold block mb-3">Filter Presets</label>
						<div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
							{filterPresets.map((preset) => (
								<button
									key={preset.id}
									onClick={() => applyPreset(preset.id)}
									className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all ${
										settings.filter === preset.id
											? "border-primary bg-primary/10 text-primary"
											: "border-slate-200 hover:border-primary/30"
									}`}
								>
									{preset.label}
								</button>
							))}
						</div>
					</div>

					{/* Adjustments */}
					<div className="space-y-4">
						<div>
							<div className="flex items-center justify-between mb-2">
								<label className="text-sm font-semibold">Brightness</label>
								<span className="text-sm text-slate-500">{settings.brightness}%</span>
							</div>
							<input
								type="range"
								min="0"
								max="200"
								value={settings.brightness}
								onChange={(e) => setSettings(prev => ({ ...prev, brightness: Number(e.target.value) }))}
								className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
							/>
						</div>

						<div>
							<div className="flex items-center justify-between mb-2">
								<label className="text-sm font-semibold">Contrast</label>
								<span className="text-sm text-slate-500">{settings.contrast}%</span>
							</div>
							<input
								type="range"
								min="0"
								max="200"
								value={settings.contrast}
								onChange={(e) => setSettings(prev => ({ ...prev, contrast: Number(e.target.value) }))}
								className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
							/>
						</div>

						<div>
							<div className="flex items-center justify-between mb-2">
								<label className="text-sm font-semibold">Saturation</label>
								<span className="text-sm text-slate-500">{settings.saturation}%</span>
							</div>
							<input
								type="range"
								min="0"
								max="200"
								value={settings.saturation}
								onChange={(e) => setSettings(prev => ({ ...prev, saturation: Number(e.target.value) }))}
								className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
							/>
						</div>

						<div>
							<div className="flex items-center justify-between mb-2">
								<label className="text-sm font-semibold">Blur</label>
								<span className="text-sm text-slate-500">{settings.blur}px</span>
							</div>
							<input
								type="range"
								min="0"
								max="10"
								step="0.5"
								value={settings.blur}
								onChange={(e) => setSettings(prev => ({ ...prev, blur: Number(e.target.value) }))}
								className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
							/>
						</div>
					</div>

					<button
						onClick={handleApplyFilters}
						className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg"
					>
						Apply Filters to {files.length} Image{files.length !== 1 ? "s" : ""}
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
						<p className="font-bold text-xl text-slate-900">Applied filters to {results.length} image{results.length !== 1 ? "s" : ""}</p>
					</div>
					
					{results.map((r) => (
						<div key={r.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
							<img src={r.preview} alt={r.originalName} className="w-14 h-14 object-cover rounded-lg" />
							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium truncate text-slate-900">{r.originalName}</p>
								<p className="text-xs text-slate-500">{formatFileSize(r.originalSize)} → {formatFileSize(r.filteredSize)}</p>
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
						Apply filters to more images
					</button>
				</div>
			)}

			<section className="mt-16">
				<h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
				<FAQ items={faqItems} />
			</section>
			
			<RelatedTools currentToolId="image-filters" />
		</div>
	);
}
					