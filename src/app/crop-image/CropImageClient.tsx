"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { saveAs } from "file-saver";
import { Download, Loader2, RotateCcw } from "lucide-react";
import { UploadZone, type UploadedFile } from "@/components/ui/UploadZone";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { FAQ } from "@/components/ui/FAQ";

const aspectPresets = [
	{ label: "Free", value: null },
	{ label: "1:1", value: 1 },
	{ label: "4:3", value: 4 / 3 },
	{ label: "3:4", value: 3 / 4 },
	{ label: "16:9", value: 16 / 9 },
	{ label: "9:16", value: 9 / 16 },
];

const faqItems = [
	{
		question: "How does the crop tool work?",
		answer: "Upload an image, then drag the crop handles to select the area you want to keep. Choose a preset aspect ratio or crop freely. Click 'Crop & Download' to save the result.",
	},
	{
		question: "Does cropping reduce image quality?",
		answer: "No. The crop is performed at full resolution using the Canvas API. The cropped area is exported as a PNG at its original pixel dimensions.",
	},
	{
		question: "Can I crop to a specific aspect ratio?",
		answer: "Yes! Choose from presets like 1:1 (square), 4:3, 16:9, or crop freely with no constraints.",
	},
	{
		question: "Is my data safe?",
		answer: "Absolutely. All cropping happens in your browser. Your images never leave your device.",
	},
];

interface CropArea {
	x: number;
	y: number;
	width: number;
	height: number;
}

export function CropImageClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [imgSize, setImgSize] = useState({ w: 0, h: 0, natW: 0, natH: 0 });
	const [crop, setCrop] = useState<CropArea>({ x: 0, y: 0, width: 0, height: 0 });
	const [aspect, setAspect] = useState<number | null>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
	const [result, setResult] = useState<string | null>(null);
	const imgRef = useRef<HTMLImageElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const initCrop = useCallback((w: number, h: number) => {
		const size = Math.min(w, h) * 0.8;
		let cw = size;
		let ch = size;
		if (aspect) {
			if (aspect >= 1) { cw = size; ch = size / aspect; }
			else { ch = size; cw = size * aspect; }
			if (cw > w * 0.9) { cw = w * 0.9; ch = cw / aspect; }
			if (ch > h * 0.9) { ch = h * 0.9; cw = ch * aspect; }
		}
		setCrop({ x: (w - cw) / 2, y: (h - ch) / 2, width: cw, height: ch });
	}, [aspect]);

	useEffect(() => {
		if (files.length > 0) {
			const url = URL.createObjectURL(files[0].file);
			setImageUrl(url);
			setResult(null);
		} else {
			setImageUrl(null);
		}
	}, [files]);

	const handleImageLoad = () => {
		if (!imgRef.current) return;
		const rect = imgRef.current.getBoundingClientRect();
		const s = { w: rect.width, h: rect.height, natW: imgRef.current.naturalWidth, natH: imgRef.current.naturalHeight };
		setImgSize(s);
		initCrop(s.w, s.h);
	};

	useEffect(() => {
		if (imgSize.w > 0) initCrop(imgSize.w, imgSize.h);
	}, [aspect, imgSize.w, imgSize.h, initCrop]);

	const handleMouseDown = (e: React.MouseEvent) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setIsDragging(true);
		setDragStart({ x: x - crop.x, y: y - crop.y });
	};

	const handleMouseMove = useCallback((e: React.MouseEvent) => {
		if (!isDragging || !containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		let nx = e.clientX - rect.left - dragStart.x;
		let ny = e.clientY - rect.top - dragStart.y;
		nx = Math.max(0, Math.min(nx, imgSize.w - crop.width));
		ny = Math.max(0, Math.min(ny, imgSize.h - crop.height));
		setCrop((prev) => ({ ...prev, x: nx, y: ny }));
	}, [isDragging, dragStart, imgSize, crop.width, crop.height]);

	const handleMouseUp = () => setIsDragging(false);

	const handleCrop = () => {
		if (!imgRef.current || !imageUrl) return;
		const scaleX = imgSize.natW / imgSize.w;
		const scaleY = imgSize.natH / imgSize.h;
		const canvas = document.createElement("canvas");
		const cw = Math.round(crop.width * scaleX);
		const ch = Math.round(crop.height * scaleY);
		canvas.width = cw;
		canvas.height = ch;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		ctx.drawImage(imgRef.current, crop.x * scaleX, crop.y * scaleY, cw, ch, 0, 0, cw, ch);
		const dataUrl = canvas.toDataURL("image/png");
		setResult(dataUrl);
	};

	const handleDownload = () => {
		if (!result || files.length === 0) return;
		const name = files[0].file.name.replace(/\.[^.]+$/, "") + "-cropped.png";
		fetch(result).then((r) => r.blob()).then((blob) => saveAs(blob, name));
	};

	return (
		<div>
			<div className="text-center mb-8">
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
					<span className="text-primary">Crop</span> Image Online
				</h1>
				<p className="text-slate-500 mt-3 max-w-xl mx-auto">Crop images with preset aspect ratios or freeform selection. Free, private, no signup.</p>
				<div className="mt-4"><TrustBadges /></div>
			</div>

			{!imageUrl && (
				<UploadZone accept=".jpg,.jpeg,.png,.webp,.svg,image/*" maxFiles={1} files={files} onFilesChange={(f) => { setFiles(f.slice(0, 1)); setResult(null); }} />
			)}

			{imageUrl && !result && (
				<div className="mt-6 space-y-4">
					{/* Aspect ratio presets */}
					<div className="flex flex-wrap gap-2 justify-center">
						{aspectPresets.map((p) => (
							<button
								key={p.label}
								onClick={() => setAspect(p.value)}
								className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
									aspect === p.value ? "border-primary bg-primary/10 text-primary" : "border-slate-200 hover:border-primary/30"
								}`}
							>
								{p.label}
							</button>
						))}
					</div>

					{/* Crop area */}
					<div
						ref={containerRef}
						className="relative inline-block mx-auto cursor-crosshair select-none bg-slate-100 rounded-xl overflow-hidden"
						onMouseMove={handleMouseMove}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
						style={{ display: "flex", justifyContent: "center" }}
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							ref={imgRef}
							src={imageUrl}
							alt="Source"
							onLoad={handleImageLoad}
							className="max-w-full max-h-[500px] block"
							draggable={false}
						/>
						{/* Overlay */}
						{imgSize.w > 0 && (
							<>
								{/* Dark overlay around crop */}
								<div className="absolute inset-0 bg-black/40 pointer-events-none" style={{ clipPath: `polygon(0% 0%, 0% 100%, ${(crop.x / imgSize.w) * 100}% 100%, ${(crop.x / imgSize.w) * 100}% ${(crop.y / imgSize.h) * 100}%, ${((crop.x + crop.width) / imgSize.w) * 100}% ${(crop.y / imgSize.h) * 100}%, ${((crop.x + crop.width) / imgSize.w) * 100}% ${((crop.y + crop.height) / imgSize.h) * 100}%, ${(crop.x / imgSize.w) * 100}% ${((crop.y + crop.height) / imgSize.h) * 100}%, ${(crop.x / imgSize.w) * 100}% 100%, 100% 100%, 100% 0%)` }} />
								{/* Crop selection box */}
								<div
									className="absolute border-2 border-white shadow-lg cursor-move"
									style={{ left: crop.x, top: crop.y, width: crop.width, height: crop.height }}
									onMouseDown={handleMouseDown}
								>
									{/* Grid lines */}
									<div className="absolute inset-0 pointer-events-none">
										<div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/40" />
										<div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/40" />
										<div className="absolute top-1/3 left-0 right-0 h-px bg-white/40" />
										<div className="absolute top-2/3 left-0 right-0 h-px bg-white/40" />
									</div>
									{/* Corner handles */}
									<div className="absolute -top-1 -left-1 w-3 h-3 bg-white border border-slate-400 rounded-sm" />
									<div className="absolute -top-1 -right-1 w-3 h-3 bg-white border border-slate-400 rounded-sm" />
									<div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white border border-slate-400 rounded-sm" />
									<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border border-slate-400 rounded-sm" />
								</div>
							</>
						)}
					</div>

					{/* Crop dimensions info */}
					<p className="text-xs text-slate-400 text-center">
						Crop: {Math.round(crop.width * (imgSize.natW / imgSize.w))} × {Math.round(crop.height * (imgSize.natH / imgSize.h))} px
					</p>

					{/* Actions */}
					<div className="flex gap-3">
						<button onClick={handleCrop} className="flex-1 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-lg">
							Crop &amp; Download
						</button>
						<button onClick={() => { setFiles([]); setImageUrl(null); setResult(null); }} className="px-4 py-3.5 border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors">
							<RotateCcw className="w-5 h-5 text-slate-500" />
						</button>
					</div>
				</div>
			)}

			{result && (
				<div className="mt-8 space-y-4">
					<div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
						<p className="font-bold text-xl text-slate-900 mb-4">Image Cropped Successfully!</p>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={result} alt="Cropped" className="max-w-full max-h-[400px] mx-auto rounded-lg border border-slate-200" />
					</div>
					<button onClick={handleDownload} className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg">
						<Download className="w-5 h-5" />Download Cropped Image
					</button>
					<button onClick={() => { setFiles([]); setImageUrl(null); setResult(null); }} className="w-full py-3 border border-slate-200 hover:bg-slate-50 text-sm font-medium rounded-xl transition-colors text-slate-700">
						Crop another image
					</button>
				</div>
			)}

			<section className="mt-16"><h2 className="text-xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2><FAQ items={faqItems} /></section>
			<RelatedTools currentToolId="crop-image" />
		</div>
	);
}
