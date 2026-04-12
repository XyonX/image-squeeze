"use client";

import { useState } from "react";
import { UploadZone } from "@/components/ui/UploadZone";
import type { UploadedFile } from "@/components/ui/UploadZone";

interface MetadataItem {
	label: string;
	value: string;
	category: string;
}

export function ImageMetadataClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [metadata, setMetadata] = useState<MetadataItem[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleAnalyze = async () => {
		if (files.length === 0) return;
		
		setIsLoading(true);
		
		// TODO: Implement actual EXIF data extraction
		// For now, show sample metadata
		const sampleMetadata: MetadataItem[] = [
			{ label: "Camera Model", value: "iPhone 14 Pro", category: "Camera" },
			{ label: "Lens", value: "26mm f/1.5", category: "Camera" },
			{ label: "Aperture", value: "f/1.8", category: "Exposure" },
			{ label: "Shutter Speed", value: "1/250s", category: "Exposure" },
			{ label: "ISO", value: "100", category: "Exposure" },
			{ label: "Focal Length", value: "26mm", category: "Camera" },
			{ label: "Date Taken", value: "2024-12-04 15:30:22", category: "Date/Time" },
			{ label: "GPS Coordinates", value: "Not available (privacy protected)", category: "Location" },
			{ label: "Image Size", value: "4032 × 3024", category: "Image" },
			{ label: "File Format", value: "JPEG", category: "Image" },
			{ label: "Color Space", value: "sRGB", category: "Image" },
			{ label: "Software", value: "iOS 17.2", category: "Software" },
		];
		
		setMetadata(sampleMetadata);
		setIsLoading(false);
	};

	const clearAnalysis = () => {
		setMetadata([]);
	};

	return (
		<div className="space-y-6">
			{/* Upload Section */}
			<div>
				<h2 className="text-lg font-semibold text-slate-900 mb-3">Upload Image to View Metadata</h2>
				<UploadZone
					accept=".jpg,.jpeg,.png,.webp,.heic,.heif"
					maxFiles={1}
					files={files}
					onFilesChange={(newFiles) => {
						setFiles(newFiles);
						setMetadata([]); // Clear previous metadata when new file is uploaded
					}}
				/>
			</div>

			{/* Action Button */}
			{files.length > 0 && metadata.length === 0 && (
				<div className="flex justify-center">
					<button
						onClick={handleAnalyze}
						disabled={isLoading}
						className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isLoading ? (
							<span className="flex items-center gap-2">
								<svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
									<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
									<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
								</svg>
								Analyzing Metadata...
							</span>
						) : (
							"View Image Metadata"
						)}
					</button>
				</div>
			)}

			{/* Metadata Display */}
			{metadata.length > 0 && (
				<div className="bg-white border border-slate-200 rounded-xl p-5">
					<div className="flex items-center justify-between mb-6">
						<h3 className="font-semibold text-slate-900 text-lg">Image Metadata</h3>
						<button
							onClick={clearAnalysis}
							className="text-sm text-slate-500 hover:text-slate-700"
						>
							Clear
						</button>
					</div>

					{/* Group metadata by category */}
					{Array.from(new Set(metadata.map(m => m.category))).map(category => (
						<div key={category} className="mb-6 last:mb-0">
							<h4 className="font-medium text-slate-700 mb-3 pb-2 border-b border-slate-200">{category}</h4>
							<div className="grid md:grid-cols-2 gap-3">
								{metadata
									.filter(m => m.category === category)
									.map((item, index) => (
										<div key={index} className="bg-slate-50 rounded-lg p-3">
											<div className="text-xs text-slate-500 mb-1">{item.label}</div>
											<div className="font-medium text-slate-900">{item.value}</div>
										</div>
									))}
							</div>
						</div>
					))}

					{/* Privacy Note */}
					<div className="mt-6 pt-6 border-t border-slate-200">
						<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
							<h4 className="font-medium text-blue-800 mb-1">About Image Metadata</h4>
							<p className="text-sm text-blue-700 mb-2">
								Image metadata (EXIF data) contains information about how, when, and where a photo was taken. 
								This includes camera settings, date/time, and sometimes GPS location.
							</p>
							<p className="text-sm text-blue-700">
								<strong>Privacy Tip:</strong> Use our <a href="/remove-exif" className="text-blue-800 underline">EXIF removal tool</a> to strip metadata before sharing photos online.
							</p>
						</div>
					</div>
				</div>
			)}

			{/* Features */}
			<div className="grid md:grid-cols-3 gap-4 mt-8">
				<div className="bg-white border border-slate-200 rounded-xl p-4">
					<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
						<span className="text-blue-600 text-lg">📷</span>
					</div>
					<h4 className="font-semibold text-slate-900 mb-1">Camera Info</h4>
					<p className="text-sm text-slate-600">View camera model, lens, and settings used.</p>
				</div>
				
				<div className="bg-white border border-slate-200 rounded-xl p-4">
					<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
						<span className="text-emerald-600 text-lg">📍</span>
					</div>
					<h4 className="font-semibold text-slate-900 mb-1">Location Data</h4>
					<p className="text-sm text-slate-600">Check if GPS coordinates are embedded in photos.</p>
				</div>
				
				<div className="bg-white border border-slate-200 rounded-xl p-4">
					<div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
						<span className="text-amber-600 text-lg">🔒</span>
					</div>
					<h4 className="font-semibold text-slate-900 mb-1">Privacy Check</h4>
					<p className="text-sm text-slate-600">Identify what personal data your photos contain.</p>
				</div>
			</div>
		</div>
	);
}