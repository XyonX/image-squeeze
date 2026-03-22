import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
	title: "SVG to PNG Conversion: Best Practices & Tools (2025 Guide)",
	description: "Learn how to convert SVG to PNG properly. Resolution settings, transparency handling, and tool recommendations for perfect conversions.",
	keywords: [
		"svg to png conversion",
		"convert svg to png",
		"svg to png best practices",
		"vector to raster conversion",
		"svg png converter",
	],
	openGraph: {
		title: "SVG to PNG Conversion: Best Practices & Tools (2025 Guide)",
		description: "Learn how to convert SVG to PNG properly. Resolution settings, transparency handling, and tool recommendations for perfect conversions.",
	},
};

export default function SvgToPngGuidePage() {
	return (
		<article className="max-w-4xl mx-auto">
			<header className="mb-8">
				<div className="flex items-center gap-3 mb-4">
					<span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
						Conversion
					</span>
					<div className="flex items-center gap-4 text-sm text-slate-500">
						<span className="flex items-center gap-1">
							<Calendar className="w-4 h-4" />
							March 10, 2025
						</span>
						<span className="flex items-center gap-1">
							<Clock className="w-4 h-4" />
							4 min read
						</span>
					</div>
				</div>
				
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
					SVG to PNG Conversion: Best Practices & Tools (2025 Guide)
				</h1>
				
				<p className="text-lg text-slate-600 mb-6">
					Converting SVG to PNG seems simple, but doing it wrong can result in blurry images. Here's how to get perfect conversions every time.
				</p>
			</header>

			<div className="prose prose-slate max-w-none">
				<section className="mb-8">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">When to Convert SVG to PNG</h2>
					
					<div className="grid sm:grid-cols-2 gap-4 my-6">
						<div className="bg-white border border-slate-200 rounded-xl p-5">
							<h3 className="font-bold text-slate-900 mb-2">✅ Use PNG When...</h3>
							<ul className="space-y-2 text-slate-600">
								<li>• Need transparency support</li>
								<li>• Sharing on social media</li>
								<li>• Printing or physical media</li>
								<li>• Older browser compatibility</li>
								<li>• Email signatures</li>
							</ul>
						</div>
						
						<div className="bg-white border border-slate-200 rounded-xl p-5">
							<h3 className="font-bold text-slate-900 mb-2">❌ Keep SVG When...</h3>
							<ul className="space-y-2 text-slate-600">
								<li>• Using on websites (better performance)</li>
								<li>• Need infinite scalability</li>
								<li>• Animations or interactivity</li>
								<li>• Small file size is critical</li>
								<li>• Modern web applications</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Best Practices for Conversion</h2>
					
					<div className="space-y-4">
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Choose Right Resolution</h3>
								<p className="text-slate-600">For web: 2x display density (e.g., 400px for 200px display)</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Preserve Transparency</h3>
								<p className="text-slate-600">Use PNG-24 format to maintain alpha transparency</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Optimize After Conversion</h3>
								<p className="text-slate-600">Always compress PNGs after conversion</p>
								<Link href="/compress-png" className="text-primary hover:underline text-sm">Compress PNG →</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Free Conversion Tool</h2>
					
					<div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
						<h3 className="font-bold text-primary mb-2">🔄 Easy SVG to PNG Conversion</h3>
						<p className="text-slate-700 mb-4">
							Use our <Link href="/svg-to-png" className="text-primary hover:underline font-medium">SVG to PNG converter</Link> for perfect conversions every time. 
							Adjust resolution, preserve transparency, and download optimized PNGs.
						</p>
						<Link 
							href="/svg-to-png" 
							className="inline-flex items-center gap-2 px-5 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
						>
							Convert SVG to PNG
						</Link>
					</div>
				</section>

				<section className="mt-12 pt-8 border-t border-slate-200">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Reference</h2>
					
					<div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
						<h3 className="font-bold text-slate-900 mb-3">📋 SVG to PNG Settings</h3>
						<ul className="space-y-3 text-slate-700">
							<li><strong>Web Use:</strong> 2x target size (e.g., 800px for 400px display)</li>
							<li><strong>Print Use:</strong> 300 DPI at final print size</li>
							<li><strong>Format:</strong> PNG-24 for transparency, PNG-8 for simple graphics</li>
							<li><strong>Compression:</strong> Always compress after conversion</li>
							<li><strong>Testing:</strong> Check edges and transparency in different backgrounds</li>
						</ul>
					</div>
					
					<div className="mt-6">
						<Link 
							href="/svg-to-png" 
							className="px-5 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
						>
							Try SVG to PNG Converter
						</Link>
					</div>
				</section>
			</div>
		</article>
	);
}