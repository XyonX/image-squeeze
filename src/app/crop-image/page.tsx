import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { RelatedTools } from "@/components/ui/RelatedTools";

export const metadata: Metadata = {
	title: "Crop Image Online — Free & Private",
	description: "Crop images with custom or preset aspect ratios for social media, profiles, and more. 100% private — files never leave your browser.",
};

export default function CropImagePage() {
	return (
		<div>
			<div className="text-center mb-8">
				<div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
					<Clock className="w-8 h-8 text-amber-500" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Crop Image — Coming Soon</h1>
				<p className="text-slate-500 max-w-lg mx-auto">
					A visual image cropper with drag-to-select, preset aspect ratios (1:1, 16:9, 4:3, story), and social media presets for Instagram, Facebook, Twitter, and LinkedIn. All processing in your browser.
				</p>
			</div>

			<div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8">
				<h2 className="text-lg font-bold text-slate-900 mb-4">In the meantime, try these alternatives:</h2>
				<ul className="space-y-3 text-sm text-slate-600">
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/resize-image" className="text-primary font-semibold hover:underline">Resize Image</Link> — Resize to exact dimensions with social media presets.</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/compress-jpg" className="text-primary font-semibold hover:underline">Compress JPG</Link> — Compress images after cropping them in another app.</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/rotate-image" className="text-primary font-semibold hover:underline">Rotate / Flip</Link> — Rotate or mirror your images before sharing.</span>
					</li>
				</ul>
			</div>

			<RelatedTools currentToolId="crop-image" />
		</div>
	);
}
