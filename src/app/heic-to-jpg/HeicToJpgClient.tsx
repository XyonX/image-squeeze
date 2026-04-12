"use client";

import { useState } from "react";
import { UploadZone } from "@/components/ui/UploadZone";
import type { UploadedFile } from "@/components/ui/UploadZone";

export function HeicToJpgClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [quality, setQuality] = useState(85);
	const [isProcessing, setIsProcessing] = useState(false);

	const handleConvert = async () => {
		if (files.length === 0) return;
		
		setIsProcessing(true);
		// TODO: Implement HEIC to JPG conversion logic
		// For now, show a message
		alert("HEIC to JPG conversion will be implemented soon! This is a placeholder.");
		setIsProcessing(false);
	};

	return (
		<div className="space-y-6">
			{/* Upload Section */}
			<div>
				<h2 className="text-lg font-semibold text-slate-900 mb-3">Upload HEIC/HEIF Images</h2>
				<UploadZone
					accept=".heic,.heif"
					maxFiles={10}
					files={files}
					onFilesChange={setFiles}
				/>
			</div>

			{/* Settings */}
			{files.length > 0 && (
				<div className="bg-white border border-slate-200 rounded-xl p-5">
					<h3 className="font-semibold text-slate-900 mb-4">Conversion Settings</h3>
					
					<div className="space-y-4">
						{/* Quality Slider */}
						<div>
							<div className="flex items-center justify-between mb-2">
								<label className="text-sm font-medium text-slate-700">JPG Quality</label>
								<span className="text-sm font-semibold text-primary">{quality}%</span>
							</div>
							<input
								type="range"
								min="10"
								max="100"
								step="5"
								value={quality}
								onChange={(e) => setQuality(parseInt(e.target.value))}
								className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
							/>
							<div className="flex justify-between text-xs text-slate-500 mt-1">
								<span>Smaller file</span>
								<span>Better quality</span>
							</div>
						</div>

						{/* Info Box */}
						<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
							<h4 className="font-medium text-blue-800 mb-1">About HEIC Format</h4>
							<p className="text-sm text-blue-700">
								HEIC (High Efficiency Image Format) is Apple's default photo format for iPhone and iPad. 
								It offers better compression than JPG but isn't widely supported outside Apple devices.
								Convert to JPG for universal compatibility.
							</p>
						</div>
					</div>
				</div>
			)}

			{/* Action Button */}
			{files.length > 0 && (
				<div className="flex justify-center">
					<button
						onClick={handleConvert}
						disabled={isProcessing}
						className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isProcessing ? (
							<span className="flex items-center gap-2">
								<svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
									<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
									<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
								</svg>
								Converting...
							</span>
						) : (
							`Convert ${files.length} HEIC file${files.length > 1 ? 's' : ''} to JPG`
						)}
					</button>
				</div>
			)}

			{/* Features */}
			<div className="grid md:grid-cols-3 gap-4 mt-8">
				<div className="bg-white border border-slate-200 rounded-xl p-4">
					<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
						<span className="text-blue-600 text-lg">📱</span>
					</div>
					<h4 className="font-semibold text-slate-900 mb-1">iPhone Compatible</h4>
					<p className="text-sm text-slate-600">Convert photos directly from your iPhone or iPad.</p>
				</div>
				
				<div className="bg-white border border-slate-200 rounded-xl p-4">
					<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
						<span className="text-emerald-600 text-lg">🔒</span>
					</div>
					<h4 className="font-semibold text-slate-900 mb-1">100% Private</h4>
					<p className="text-sm text-slate-600">Files never leave your browser. No uploads to servers.</p>
				</div>
				
				<div className="bg-white border border-slate-200 rounded-xl p-4">
					<div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
						<span className="text-amber-600 text-lg">⚡</span>
					</div>
					<h4 className="font-semibold text-slate-900 mb-1">Fast Conversion</h4>
					<p className="text-sm text-slate-600">Convert multiple HEIC files to JPG in seconds.</p>
				</div>
			</div>
		</div>
	);
}