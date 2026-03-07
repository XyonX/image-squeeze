import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { RelatedTools } from "@/components/ui/RelatedTools";

export const metadata: Metadata = {
	title: "Reduce Image to Target Size — Free & Private",
	description: "Compress images to a specific file size like 100KB, 200KB, or 500KB. 100% private — files never leave your browser.",
};

export default function ReduceImageSizePage() {
	return (
		<div>
			<div className="text-center mb-8">
				<div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
					<Clock className="w-8 h-8 text-amber-500" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Reduce to Target Size — Coming Soon</h1>
				<p className="text-slate-500 max-w-lg mx-auto">
					Need to get an image under 100KB, 200KB, or a custom file size? This tool will automatically find the best quality setting to hit your target. Smart compression with iterative optimization.
				</p>
			</div>

			<div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8">
				<h2 className="text-lg font-bold text-slate-900 mb-4">In the meantime, try these alternatives:</h2>
				<p className="text-sm text-slate-500 mb-4">You can manually adjust quality to reach your target size:</p>
				<ul className="space-y-3 text-sm text-slate-600">
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/compress-jpg" className="text-primary font-semibold hover:underline">Compress JPG</Link> — Use the quality slider to reduce file size. Lower quality = smaller files.</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/resize-image" className="text-primary font-semibold hover:underline">Resize Image</Link> — Reducing dimensions dramatically reduces file size.</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/convert-to-webp" className="text-primary font-semibold hover:underline">Convert to WebP</Link> — WebP is 30-50% smaller than JPG at the same visual quality.</span>
					</li>
				</ul>
			</div>

			<RelatedTools currentToolId="reduce-image-size" />
		</div>
	);
}
