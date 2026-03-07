import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { RelatedTools } from "@/components/ui/RelatedTools";

export const metadata: Metadata = {
	title: "Compress WebP Online — Free & Private",
	description: "Compress WebP images online for free. Reduce WebP file size while maintaining quality. 100% private — files never leave your browser.",
};

export default function CompressWebPPage() {
	return (
		<div>
			<div className="text-center mb-8">
				<div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
					<Clock className="w-8 h-8 text-amber-500" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Compress WebP — Coming Soon</h1>
				<p className="text-slate-500 max-w-lg mx-auto">
					We&apos;re building a dedicated WebP compressor that will let you reduce WebP file sizes while preserving quality and transparency. It&apos;ll support batch processing and custom quality settings.
				</p>
			</div>

			<div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8">
				<h2 className="text-lg font-bold text-slate-900 mb-4">In the meantime, try these alternatives:</h2>
				<ul className="space-y-3 text-sm text-slate-600">
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/compress-jpg" className="text-primary font-semibold hover:underline">Compress JPG</Link> — Convert your WebP to JPG first, then compress for maximum file size reduction.</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/compress-png" className="text-primary font-semibold hover:underline">Compress PNG</Link> — Great for images with transparency that need to stay lossless.</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-primary font-bold mt-0.5">→</span>
						<span><Link href="/convert-to-jpg" className="text-primary font-semibold hover:underline">Convert to JPG</Link> — WebP to JPG conversion often reduces file size significantly.</span>
					</li>
				</ul>
			</div>

			<RelatedTools currentToolId="compress-webp" />
		</div>
	);
}
