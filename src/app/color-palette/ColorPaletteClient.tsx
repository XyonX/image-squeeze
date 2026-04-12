"use client";

import { useState } from "react";
import { UploadZone } from "@/components/ui/UploadZone";
import type { UploadedFile } from "@/components/ui/UploadZone";

interface Color {
	hex: string;
	rgb: string;
	hsl: string;
	percentage: number;
}

export function ColorPaletteClient() {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [colors, setColors] = useState<Color[]>([]);
	const [numColors, setNumColors] = useState(5);
	const [isLoading, setIsLoading] = useState(false);

	const handleExtract = async () => {
		if (files.length === 0) return;
		
		setIsLoading(true);
		
		// TODO: Implement actual color extraction algorithm
		// For now, show sample colors
		const sampleColors: Color[] = [
			{ hex: "#3B82F6", rgb: "rgb(59, 130, 246)", hsl: "hsl(217, 91%, 60%)", percentage: 32 },
			{ hex: "#10B981", rgb: "rgb(16, 185, 129)", hsl: "hsl(160, 84%, 39%)", percentage: 24 },
			{ hex: "#F59E0B", rgb: "rgb(245, 158, 11)", hsl: "hsl(38, 92%, 50%)", percentage: 18 },
			{ hex: "#EF4444", rgb: "rgb(239, 68, 68)", hsl: "hsl(0, 84%, 60%)", percentage: 15 },
			{ hex: "#8B5CF6", rgb: "rgb(139, 92, 246)", hsl: "hsl(258, 90%, 66%)", percentage: 11 },
		];
		
		setColors(sampleColors);
		setIsLoading(false);
	};

	const clearPalette = () => {
		setColors([]);
	};

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		// Could add a toast notification here
		alert(`Copied: ${text}`);
	};

	return (
		<div className="space-y-6">
			{/* Upload Section */}
			<div>
				<h2 className="text-lg font-semibold text-slate-900 mb-3">Upload Image to Extract Colors</h2>
				<UploadZone
					accept=".jpg,.jpeg,.png,.webp,.svg"
					maxFiles={1}
					files={files}
					onFilesChange={(newFiles) => {
						setFiles(newFiles);
						setColors([]); // Clear previous palette when new file is uploaded
					}}
				/>
			</div>

			{/* Settings */}
			{files.length > 0 && colors.length === 0 && (
				<div className="bg-white border border-slate-200 rounded-xl p-5">
					<h3 className="font-semibold text-slate-900 mb-4">Extraction Settings</h3>
					
					<div className="space-y-4">
						{/* Number of Colors Slider */}
						<div>
							<div className="flex items-center justify-between mb-2">
								<label className="text-sm font-medium text-slate-700">Number of Colors</label>
								<span className="text-sm font-semibold text-primary">{numColors}</span>
							</div>
							<input
								type="range"
								min="3"
								max="10"
								step="1"
								value={numColors}
								onChange={(e) => setNumColors(parseInt(e.target.value))}
								className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
							/>
							<div className="flex justify-between text-xs text-slate-500 mt-1">
								<span>Minimal</span>
								<span>Detailed</span>
							</div>
						</div>

						{/* Info Box */}
						<div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
							<h4 className="font-medium text-purple-800 mb-1">How Color Extraction Works</h4>
							<p className="text-sm text-purple-700">
								Our algorithm analyzes your image to find the most dominant colors. 
								The percentage shows how much of the image is covered by each color.
								Perfect for design projects, branding, and color scheme inspiration.
							</p>
						</div>
					</div>
				</div>
			)}

			{/* Action Button */}
			{files.length > 0 && colors.length === 0 && (
				<div className="flex justify-center">
					<button
						onClick={handleExtract}
						disabled={isLoading}
						className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isLoading ? (
							<span className="flex items-center gap-2">
								<svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
									<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
									<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
								</svg>
								Extracting Colors...
							</span>
						) : (
							`Extract ${numColors} Colors`
						)}
					</button>
				</div>
			)}

			{/* Color Palette Display */}
			{colors.length > 0 && (
				<div className="bg-white border border-slate-200 rounded-xl p-5">
					<div className="flex items-center justify-between mb-6">
						<h3 className="font-semibold text-slate-900 text-lg">Extracted Color Palette</h3>
						<button
							onClick={clearPalette}
							className="text-sm text-slate-500 hover:text-slate-700"
						>
							Clear
						</button>
					</div>

					{/* Color Swatches */}
					<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
						{colors.map((color, index) => (
							<div key={index} className="flex flex-col items-center">
								<div 
									className="w-full h-24 rounded-lg mb-3 border border-slate-200"
									style={{ backgroundColor: color.hex }}
								/>
								<div className="text-center space-y-1">
									<div className="font-semibold text-slate-900">{color.hex}</div>
									<div className="text-xs text-slate-500">{color.percentage}%</div>
								</div>
							</div>
						))}
					</div>

					{/* Color Details */}
					<div className="space-y-4">
						<h4 className="font-medium text-slate-700">Color Values</h4>
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="border-b border-slate-200">
										<th className="text-left py-2 px-3 text-sm font-medium text-slate-700">Color</th>
										<th className="text-left py-2 px-3 text-sm font-medium text-slate-700">HEX</th>
										<th className="text-left py-2 px-3 text-sm font-medium text-slate-700">RGB</th>
										<th className="text-left py-2 px-3 text-sm font-medium text-slate-700">HSL</th>
										<th className="text-left py-2 px-3 text-sm font-medium text-slate-700">Actions</th>
									</tr>
								</thead>
								<tbody>
									{colors.map((color, index) => (
										<tr key={index} className="border-b border-slate-100 last:border-0">
											<td className="py-3 px-3">
												<div className="flex items-center gap-2">
													<div className="w-6 h-6 rounded border border-slate-200" style={{ backgroundColor: color.hex }} />
													<span className="text-sm text-slate-900">Color {index + 1}</span>
												</div>
											</td>
											<td className="py-3 px-3 text-sm font-mono text-slate-900">{color.hex}</td>
											<td className="py-3 px-3 text-sm font-mono text-slate-900">{color.rgb}</td>
											<td className="py-3 px-3 text-sm font-mono text-slate-900">{color.hsl}</td>
											<td className="py-3 px-3">
												<button
													onClick={() => copyToClipboard(color.hex)}
													className="text-xs text-primary hover:text-purple-700"
												>
													Copy HEX
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					{/* Export Options */}
					<div className="mt-6 pt-6 border-t border-slate-200">
						<h4 className="font-medium text-slate-700 mb-3">Export Palette</h4>
						<div className="flex flex-wrap gap-3">
							<button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm transition-colors">
								Copy All HEX
							</button>
							<button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm transition-colors">
								Copy All RGB
							</button>
							<button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm transition-colors">
								Copy All HSL
							</button>
							<button className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm transition-colors">
								Download Palette
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Features */}
			<div className="grid md:grid-cols-3 gap-4 mt-8">
				<div className="bg-white border border-slate-200 rounded-xl p-4">
					<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
						<span className="text-purple-600 text-lg">🎨</span>
					</div>
					<h4 className="font-semibold text-slate-900 mb-1">Design Ready</h4>
					<p className="text-sm text-slate-600">Get HEX, RGB, and HSL values for design tools.</p>
				</div>
				
				<div className="bg-white border border-slate-200 rounded-xl p-4">
					<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
						<span className="text-emerald-600 text-lg">📊</span>
					</div>
					<h4 className="font-semibold text-slate-900 mb-1">Smart Analysis</h4>
					<p className="text-sm text-slate-600">Algorithm finds most dominant colors accurately.</p>
				</div>
				
				<div className="bg-white border border-slate-200 rounded-xl p-4">
					<div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
						<span className="text-amber-600 text-lg">📋</span>
					</div>
					<h4 className="font-semibold text-slate-900 mb-1">Easy Export</h4>
					<p className="text-sm text-slate-600">Copy values or download palette for your projects.</p>
				</div>
			</div>
		</div>
	);
}