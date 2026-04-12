"use client";

import { useCallback, useState, useRef, useEffect } from "react";
import { Upload, X, ImageIcon } from "lucide-react";
import { formatFileSize } from "@/lib/tools";

export interface UploadedFile {
	id: string;
	file: File;
	preview: string;
	width: number;
	height: number;
}

interface UploadZoneProps {
	accept: string;
	maxFiles?: number;
	files: UploadedFile[];
	onFilesChange: (files: UploadedFile[]) => void;
}

function generateId() {
	return Math.random().toString(36).substring(2, 9);
}

async function loadImageDimensions(file: File): Promise<{ width: number; height: number }> {
	return new Promise((resolve) => {
		const url = URL.createObjectURL(file);
		const img = new Image();
		img.onload = () => {
			resolve({ width: img.naturalWidth, height: img.naturalHeight });
			URL.revokeObjectURL(url);
		};
		img.onerror = () => {
			resolve({ width: 0, height: 0 });
			URL.revokeObjectURL(url);
		};
		img.src = url;
	});
}

export function UploadZone({ accept, maxFiles = 20, files, onFilesChange }: UploadZoneProps) {
	const [isDragging, setIsDragging] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const processFiles = useCallback(
		async (newFiles: FileList | File[]) => {
			const fileArray = Array.from(newFiles).slice(0, maxFiles - files.length);
			const uploaded: UploadedFile[] = await Promise.all(
				fileArray.map(async (file) => {
					const dims = await loadImageDimensions(file);
					return {
						id: generateId(),
						file,
						preview: URL.createObjectURL(file),
						width: dims.width,
						height: dims.height,
					};
				})
			);
			onFilesChange([...files, ...uploaded]);
		},
		[files, maxFiles, onFilesChange]
	);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			setIsDragging(false);
			if (e.dataTransfer.files.length) {
				processFiles(e.dataTransfer.files);
			}
		},
		[processFiles]
	);

	const removeFile = (id: string) => {
		const updated = files.filter((f) => f.id !== id);
		onFilesChange(updated);
	};

	const clearAll = () => {
		files.forEach((f) => URL.revokeObjectURL(f.preview));
		onFilesChange([]);
	};

	// Paste from clipboard
	useEffect(() => {
		const handlePaste = (e: ClipboardEvent) => {
			const items = e.clipboardData?.items;
			if (!items) return;
			const imageFiles: File[] = [];
			for (const item of Array.from(items)) {
				if (item.type.startsWith("image/")) {
					const file = item.getAsFile();
					if (file) imageFiles.push(file);
				}
			}
			if (imageFiles.length) processFiles(imageFiles);
		};
		window.addEventListener("paste", handlePaste);
		return () => window.removeEventListener("paste", handlePaste);
	}, [processFiles]);

	return (
		<div className="space-y-4">
			{/* Drop zone */}
			<div
				className={`relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 ${
					isDragging
						? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 dropzone-active"
						: "border-slate-300/50 hover:border-primary/50 hover:bg-gradient-to-br from-primary/5 to-primary/2"
				}`}
				onDragOver={(e) => {
					e.preventDefault();
					setIsDragging(true);
				}}
				onDragLeave={() => setIsDragging(false)}
				onDrop={handleDrop}
				onClick={() => inputRef.current?.click()}
			>
				{/* Animated background on drag */}
				{isDragging && (
					<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent rounded-2xl animate-pulse"></div>
				)}
				
				{/* Glow effect */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
				
				<input
					ref={inputRef}
					type="file"
					accept={accept}
					multiple
					className="hidden"
					onChange={(e) => {
						if (e.target.files) processFiles(e.target.files);
						e.target.value = "";
					}}
				/>
				<div className="flex flex-col items-center gap-3">
					<div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
						<Upload className="w-7 h-7 text-primary" />
					</div>
					<div>
						<p className="font-semibold text-lg">
							{isDragging ? "Drop your images here!" : "Drag & drop images here"}
						</p>
						<p className="text-sm text-slate-500 mt-1">
							or click to browse • paste from clipboard (Ctrl+V) • up to {maxFiles} files
						</p>
					</div>
					<p className="text-xs text-slate-400">Accepts: {accept}</p>
				</div>
			</div>

			{/* File list */}
			{files.length > 0 && (
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<p className="text-sm font-medium text-slate-700">
							{files.length} file{files.length !== 1 ? "s" : ""} selected
						</p>
						<button onClick={clearAll} className="text-sm text-red-500 hover:underline">
							Clear all
						</button>
					</div>
					<div className="grid gap-2 max-h-[300px] overflow-y-auto pr-1">
						{files.map((f) => (
							<div
								key={f.id}
								className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200"
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={f.preview}
									alt={f.file.name}
									className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
								/>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium text-slate-900 truncate">{f.file.name}</p>
									<p className="text-xs text-slate-500">
										{f.width}×{f.height} • {formatFileSize(f.file.size)}
									</p>
								</div>
								<button
									onClick={(e) => {
										e.stopPropagation();
										removeFile(f.id);
									}}
									className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"
								>
									<X className="w-4 h-4" />
								</button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
