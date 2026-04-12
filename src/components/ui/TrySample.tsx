"use client";

import { useState } from "react";
import { Upload, Image as ImageIcon, Sparkles } from "lucide-react";

interface TrySampleProps {
	toolId: string;
	onSampleSelect: (sampleUrl: string) => void;
	className?: string;
}

const SAMPLE_IMAGES = {
	"compress-jpg": [
		{ url: "/sample-images/landscape.jpg", name: "Landscape Photo", size: "2.4 MB" },
		{ url: "/sample-images/portrait.jpg", name: "Portrait Photo", size: "1.8 MB" },
		{ url: "/sample-images/product.jpg", name: "Product Image", size: "3.1 MB" },
	],
	"compress-png": [
		{ url: "/sample-images/logo.png", name: "Logo with Transparency", size: "1.2 MB" },
		{ url: "/sample-images/screenshot.png", name: "Screenshot", size: "3.5 MB" },
		{ url: "/sample-images/illustration.png", name: "Illustration", size: "2.8 MB" },
	],
	"compress-webp": [
		{ url: "/sample-images/webp-sample.webp", name: "WebP Sample", size: "1.1 MB" },
		{ url: "/sample-images/animation.webp", name: "Animated WebP", size: "2.3 MB" },
	],
	"resize-image": [
		{ url: "/sample-images/large-photo.jpg", name: "Large Photo", size: "4.2 MB", dimensions: "4000×3000" },
		{ url: "/sample-images/social-media.jpg", name: "Social Media", size: "2.1 MB", dimensions: "2000×1500" },
	],
	"convert-to-webp": [
		{ url: "/sample-images/jpg-to-webp.jpg", name: "JPG for WebP", size: "2.5 MB" },
		{ url: "/sample-images/png-to-webp.png", name: "PNG for WebP", size: "3.2 MB" },
	],
	default: [
		{ url: "/sample-images/demo.jpg", name: "Demo Image", size: "1.5 MB" },
		{ url: "/sample-images/demo.png", name: "Demo PNG", size: "2.0 MB" },
	],
};

export function TrySample({ toolId, onSampleSelect, className = "" }: TrySampleProps) {
	const [selectedSample, setSelectedSample] = useState<string | null>(null);
	const samples = SAMPLE_IMAGES[toolId as keyof typeof SAMPLE_IMAGES] || SAMPLE_IMAGES.default;

	const handleSampleClick = (sampleUrl: string) => {
		setSelectedSample(sampleUrl);
		onSampleSelect(sampleUrl);
	};

	return (
		<div className={`bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 ${className}`}>
			<div className="flex items-center gap-3 mb-4">
				<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
					<Sparkles className="w-5 h-5 text-blue-600" />
				</div>
				<div>
					<h3 className="font-semibold text-slate-900">Try with Sample Images</h3>
					<p className="text-sm text-slate-600">No need to upload — test with our demo images</p>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
				{samples.map((sample, index) => (
					<button
						key={index}
						onClick={() => handleSampleClick(sample.url)}
						className={`p-3 bg-white border rounded-lg text-left transition-all duration-200 hover:shadow-md hover:border-blue-300 ${
							selectedSample === sample.url 
								? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/20" 
								: "border-slate-200"
						}`}
					>
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
								<ImageIcon className="w-5 h-5 text-slate-500" />
							</div>
							<div className="flex-1 min-w-0">
								<div className="font-medium text-slate-900 text-sm truncate">{sample.name}</div>
								<div className="text-xs text-slate-500 mt-1">
									{sample.size}
									{"dimensions" in sample && sample.dimensions && ` • ${sample.dimensions}`}
								</div>
							</div>
						</div>
					</button>
				))}
			</div>

			<div className="flex items-center justify-between pt-4 border-t border-blue-200/50">
				<div className="text-sm text-slate-600">
					<span className="font-medium text-slate-900">Tip:</span> Click a sample to load it instantly
				</div>
				<div className="flex items-center gap-2 text-sm text-blue-600">
					<Upload className="w-4 h-4" />
					<span>Or upload your own</span>
				</div>
			</div>
		</div>
	);
}