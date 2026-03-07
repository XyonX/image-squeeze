import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { RelatedTools } from "@/components/ui/RelatedTools";

export const metadata: Metadata = {
	title: "Bulk Image Compressor — Free & Private",
	description: "Compress up to 50 images at once in batch. Supports JPG, PNG, and WebP. 100% private — files never leave your browser.",
};

export default function BulkCompressPage() {
	return (
		<div>
			<div className="text-center mb-8">
				<div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
					<Clock className="w-8 h-8 text-amber-500" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Bulk Compress — Coming Soon</h1>
				<p className="text-slate-500 max-w-lg mx-auto">
					A dedicated bulk compressor for handling up to 50+ images at once with smart format detection, parallel processing, and a single ZIP download. We&apos;re building this to be fast and powerful.
				</p>
			</div>

			<div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8">
				<h2 className="text-lg font-bold text-slate-900 mb-4">In the meantime, try these alternatives:</h2>
				<p className="text-sm text-slate-500 mb-4">Our existing tools already support batch processing (up to 20 files at once):</p>
				<ul className="space-y-3 text-sm text-slate-600">
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/compress-jpg" className="text-primary font-semibold hover:underline">Compress JPG</Link> — Upload up to 20 JPG images, compress all at once, download as ZIP.</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/compress-png" className="text-primary font-semibold hover:underline">Compress PNG</Link> — Batch compress PNG files with transparency support.</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/resize-image" className="text-primary font-semibold hover:underline">Resize Image</Link> — Batch resize with social media presets.</span>
					</li>
				</ul>
			</div>

			<RelatedTools currentToolId="bulk-compress" />
		</div>
	);
}
