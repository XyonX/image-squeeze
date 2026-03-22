import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
	title: "Image Optimization for WordPress: Complete Guide (2025)",
	description: "Step-by-step guide to optimizing images for WordPress. Plugins, manual methods, and best practices for faster loading sites.",
	keywords: [
		"wordpress image optimization",
		"wordpress image compression",
		"wordpress speed optimization",
		"wordpress performance",
		"wordpress seo images",
	],
	openGraph: {
		title: "Image Optimization for WordPress: Complete Guide (2025)",
		description: "Step-by-step guide to optimizing images for WordPress. Plugins, manual methods, and best practices for faster loading sites.",
	},
};

export default function WordPressGuidePage() {
	return (
		<article className="max-w-4xl mx-auto">
			<header className="mb-8">
				<div className="flex items-center gap-3 mb-4">
					<span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
						WordPress
					</span>
					<div className="flex items-center gap-4 text-sm text-slate-500">
						<span className="flex items-center gap-1">
							<Calendar className="w-4 h-4" />
							March 12, 2025
						</span>
						<span className="flex items-center gap-1">
							<Clock className="w-4 h-4" />
							10 min read
						</span>
					</div>
				</div>
				
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
					Image Optimization for WordPress: Complete Guide (2025)
				</h1>
				
				<p className="text-lg text-slate-600 mb-6">
					Slow WordPress site? Images are usually the culprit. This guide shows you exactly how to optimize images for maximum speed.
				</p>
			</header>

			<div className="prose prose-slate max-w-none">
				<section className="mb-8">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Why WordPress Needs Image Optimization</h2>
					
					<div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
						<h3 className="font-bold text-slate-900 mb-3">📊 The Problem</h3>
						<ul className="space-y-2 text-slate-700">
							<li>• Images account for 50-80% of page weight</li>
							<li>• Unoptimized images slow down page loads</li>
							<li>• Slow sites hurt SEO rankings and conversions</li>
							<li>• Mobile users suffer most with large images</li>
						</ul>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Step-by-Step Optimization</h2>
					
					<div className="space-y-4">
						<div className="flex items-start gap-3">
							<div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
							<div>
								<h3 className="font-medium text-slate-900">Compress Before Uploading</h3>
								<p className="text-slate-600">Use our <Link href="/compress-jpg" className="text-primary hover:underline">compression tools</Link> before uploading to WordPress</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
							<div>
								<h3 className="font-medium text-slate-900">Use WebP Format</h3>
								<p className="text-slate-600">Convert images to WebP for 30% smaller files</p>
								<Link href="/convert-to-webp" className="text-primary hover:underline text-sm">Convert to WebP →</Link>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
							<div>
								<h3 className="font-medium text-slate-900">Resize to Correct Dimensions</h3>
								<p className="text-slate-600">Don't upload 4000px images for 800px display</p>
								<Link href="/resize-image" className="text-primary hover:underline text-sm">Resize images →</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-12 pt-8 border-t border-slate-200">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Checklist</h2>
					
					<div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
						<h3 className="font-bold text-slate-900 mb-3">✅ WordPress Image Checklist</h3>
						<ol className="space-y-3 text-slate-700">
							<li>1. <strong>Compress</strong> all images before uploading</li>
							<li>2. Use <strong>WebP format</strong> when possible</li>
							<li>3. <strong>Resize</strong> to exact display dimensions</li>
							<li>4. Add <strong>alt text</strong> for SEO and accessibility</li>
							<li>5. Use <strong>lazy loading</strong> for below-fold images</li>
						</ol>
					</div>
					
					<div className="mt-6">
						<Link 
							href="/bulk-compress" 
							className="px-5 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
						>
							Bulk Compress Images
						</Link>
					</div>
				</section>
			</div>
		</article>
	);
}