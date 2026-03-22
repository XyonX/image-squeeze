import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
	title: "Free Online Image Editors: 17 Tools You Need (2025)",
	description: "Discover the best free online image editing tools for compression, conversion, resizing, and editing without installing software.",
	keywords: [
		"free online image editors",
		"best image editing tools",
		"online photo editor",
		"free image compressor",
		"web-based image tools",
	],
	openGraph: {
		title: "Free Online Image Editors: 17 Tools You Need (2025)",
		description: "Discover the best free online image editing tools for compression, conversion, resizing, and editing without installing software.",
	},
};

export default function ImageEditorsPage() {
	return (
		<article className="max-w-4xl mx-auto">
			<header className="mb-8">
				<div className="flex items-center gap-3 mb-4">
					<span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
						Tools
					</span>
					<div className="flex items-center gap-4 text-sm text-slate-500">
						<span className="flex items-center gap-1">
							<Calendar className="w-4 h-4" />
							March 15, 2025
						</span>
						<span className="flex items-center gap-1">
							<Clock className="w-4 h-4" />
							7 min read
						</span>
					</div>
				</div>
				
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
					Free Online Image Editors: 17 Tools You Need (2025)
				</h1>
				
				<p className="text-lg text-slate-600 mb-6">
					No software installation needed! These free online tools handle everything from basic editing to advanced optimization.
				</p>
			</header>

			<div className="prose prose-slate max-w-none">
				<section className="mb-8">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Top Free Image Tools</h2>
					
					<div className="grid sm:grid-cols-2 gap-4 my-6">
						<div className="bg-white border border-slate-200 rounded-xl p-5">
							<h3 className="font-bold text-slate-900 mb-2">Compression Tools</h3>
							<ul className="space-y-2 text-slate-600">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500" />
									<Link href="/compress-jpg" className="text-primary hover:underline">JPG Compressor</Link>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500" />
									<Link href="/compress-png" className="text-primary hover:underline">PNG Compressor</Link>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500" />
									<Link href="/compress-webp" className="text-primary hover:underline">WebP Compressor</Link>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500" />
									<Link href="/bulk-compress" className="text-primary hover:underline">Bulk Compression</Link>
								</li>
							</ul>
						</div>
						
						<div className="bg-white border border-slate-200 rounded-xl p-5">
							<h3 className="font-bold text-slate-900 mb-2">Conversion Tools</h3>
							<ul className="space-y-2 text-slate-600">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500" />
									<Link href="/convert-to-webp" className="text-primary hover:underline">WebP Converter</Link>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500" />
									<Link href="/convert-to-jpg" className="text-primary hover:underline">JPG Converter</Link>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500" />
									<Link href="/convert-to-png" className="text-primary hover:underline">PNG Converter</Link>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500" />
									<Link href="/svg-to-png" className="text-primary hover:underline">SVG to PNG</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Editing & Optimization</h2>
					
					<div className="space-y-4">
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Resize Images</h3>
								<p className="text-slate-600">Change dimensions without quality loss</p>
								<Link href="/resize-image" className="text-primary hover:underline text-sm">Try tool →</Link>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Crop Images</h3>
								<p className="text-slate-600">Remove unwanted parts of photos</p>
								<Link href="/crop-image" className="text-primary hover:underline text-sm">Try tool →</Link>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Rotate Images</h3>
								<p className="text-slate-600">Fix orientation and flip images</p>
								<Link href="/rotate-image" className="text-primary hover:underline text-sm">Try tool →</Link>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Remove EXIF Data</h3>
								<p className="text-slate-600">Protect your privacy by stripping metadata</p>
								<Link href="/remove-exif" className="text-primary hover:underline text-sm">Try tool →</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-12 pt-8 border-t border-slate-200">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Why Use Online Tools?</h2>
					
					<div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
						<h3 className="font-bold text-slate-900 mb-3">✅ Advantages</h3>
						<ol className="space-y-3 text-slate-700">
							<li>1. <strong>No installation</strong> - works in any browser</li>
							<li>2. <strong>Cross-platform</strong> - Windows, Mac, Linux, mobile</li>
							<li>3. <strong>Always updated</strong> - no manual updates needed</li>
							<li>4. <strong>Privacy focused</strong> - many tools work locally in browser</li>
							<li>5. <strong>Free to use</strong> - no subscriptions or payments</li>
						</ol>
					</div>
					
					<div className="mt-6">
						<Link 
							href="/" 
							className="px-5 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
						>
							Explore All Tools
						</Link>
					</div>
				</section>
			</div>
		</article>
	);
}