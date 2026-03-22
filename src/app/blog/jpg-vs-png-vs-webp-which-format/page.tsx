import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Share2, BookOpen, CheckCircle, ExternalLink, Zap, Shield, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
	title: "JPG vs PNG vs WebP: Which Image Format Should You Use? (2025 Guide)",
	description: "Complete comparison of JPG, PNG, and WebP formats. Learn when to use each format for best quality, smallest file size, and optimal web performance.",
	keywords: [
		"jpg vs png vs webp",
		"image format comparison",
		"best image format for web",
		"webp vs jpg",
		"png vs jpg",
		"image compression formats",
		"web performance",
	],
	openGraph: {
		title: "JPG vs PNG vs WebP: Which Image Format Should You Use? (2025 Guide)",
		description: "Complete comparison of JPG, PNG, and WebP formats. Learn when to use each format for best quality, smallest file size, and optimal web performance.",
	},
};

export default function FormatComparisonPage() {
	return (
		<article className="max-w-4xl mx-auto">
			{/* Article Header */}
			<header className="mb-8">
				<div className="flex items-center gap-3 mb-4">
					<span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
						Formats
					</span>
					<div className="flex items-center gap-4 text-sm text-slate-500">
						<span className="flex items-center gap-1">
							<Calendar className="w-4 h-4" />
							March 20, 2025
						</span>
						<span className="flex items-center gap-1">
							<Clock className="w-4 h-4" />
							6 min read
						</span>
					</div>
				</div>
				
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
					JPG vs PNG vs WebP: Which Image Format Should You Use? (2025 Guide)
				</h1>
				
				<p className="text-lg text-slate-600 mb-6">
					Choosing the wrong image format can bloat your website by 300%+. This definitive guide shows you exactly when to use JPG, PNG, or WebP for optimal performance.
				</p>
				
				<div className="flex items-center gap-4 pt-4 border-t border-slate-200">
					<button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors">
						<Share2 className="w-4 h-4" />
						Share
					</button>
					<span className="text-sm text-slate-500">Updated: March 2025</span>
				</div>
			</header>

			{/* Table of Contents */}
			<aside className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
				<h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
					<BookOpen className="w-5 h-5" />
					Quick Navigation
				</h2>
				<nav className="space-y-2">
					{[
						{ id: "quick-decision", title: "Quick Decision Guide" },
						{ id: "jpg", title: "JPG/JPEG: The Photograph King" },
						{ id: "png", title: "PNG: Transparency & Graphics" },
						{ id: "webp", title: "WebP: The Modern All-Rounder" },
						{ id: "comparison", title: "Side-by-Side Comparison" },
						{ id: "conversion", title: "How to Convert Between Formats" },
					].map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className="block text-slate-700 hover:text-primary transition-colors"
						>
							• {item.title}
						</a>
					))}
				</nav>
			</aside>

			{/* Quick Decision Guide */}
			<section id="quick-decision" className="scroll-mt-20">
				<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Quick Decision Guide</h2>
				
				<div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
					<h3 className="font-bold text-emerald-900 mb-3 text-lg">🎯 Use This Flowchart</h3>
					<div className="space-y-4">
						<div className="flex items-start gap-3">
							<div className="bg-white border border-emerald-200 rounded-lg p-3 flex-1">
								<h4 className="font-bold text-slate-900 mb-1">Photographs & Complex Images</h4>
								<p className="text-slate-600 text-sm">→ Use <strong>WebP</strong> (or JPG as fallback)</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-white border border-emerald-200 rounded-lg p-3 flex-1">
								<h4 className="font-bold text-slate-900 mb-1">Logos, Icons & Graphics</h4>
								<p className="text-slate-600 text-sm">→ Use <strong>PNG</strong> (or SVG for vectors)</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-white border border-emerald-200 rounded-lg p-3 flex-1">
								<h4 className="font-bold text-slate-900 mb-1">Images with Transparency</h4>
								<p className="text-slate-600 text-sm">→ Use <strong>PNG</strong> or <strong>WebP</strong> (both support alpha)</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-white border border-emerald-200 rounded-lg p-3 flex-1">
								<h4 className="font-bold text-slate-900 mb-1">Maximum Browser Compatibility</h4>
								<p className="text-slate-600 text-sm">→ Use <strong>JPG + PNG</strong> with WebP fallback</p>
							</div>
						</div>
					</div>
				</div>
				
				<p className="mb-4">
					<strong>TL;DR for 2025:</strong> Use WebP for everything when possible, with JPG/PNG fallbacks for older browsers. 
					WebP offers the best of both worlds: JPG-like compression for photos and PNG-like features for graphics.
				</p>
			</section>

			{/* JPG Section */}
			<section id="jpg" className="scroll-mt-20">
				<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">JPG/JPEG: The Photograph King</h2>
				
				<div className="grid md:grid-cols-2 gap-6 mb-6">
					<div className="bg-white border border-slate-200 rounded-xl p-5">
						<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
							<CheckCircle className="w-5 h-5 text-emerald-500" />
							Pros
						</h3>
						<ul className="space-y-2 text-slate-600">
							<li>• Universal browser support (100%)</li>
							<li>• Excellent for photographs</li>
							<li>• Adjustable compression levels</li>
							<li>• Small file sizes for photos</li>
							<li>• Perfect for social media</li>
						</ul>
					</div>
					
					<div className="bg-white border border-slate-200 rounded-xl p-5">
						<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
							<CheckCircle className="w-5 h-5 text-rose-500" />
							Cons
						</h3>
						<ul className="space-y-2 text-slate-600">
							<li>• No transparency support</li>
							<li>• Lossy compression (quality loss)</li>
							<li>• Artifacts at high compression</li>
							<li>• Not ideal for text/graphics</li>
							<li>• Larger than WebP for same quality</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
					<h3 className="font-bold text-blue-900 mb-2">📸 Best Use Cases for JPG</h3>
					<div className="grid sm:grid-cols-2 gap-3">
						<div className="bg-white border border-blue-100 rounded-lg p-3">
							<h4 className="font-medium text-slate-900 mb-1">Photographs</h4>
							<p className="text-slate-600 text-sm">Portraits, landscapes, product photos</p>
						</div>
						<div className="bg-white border border-blue-100 rounded-lg p-3">
							<h4 className="font-medium text-slate-900 mb-1">Social Media</h4>
							<p className="text-slate-600 text-sm">Facebook, Instagram, Twitter posts</p>
						</div>
						<div className="bg-white border border-blue-100 rounded-lg p-3">
							<h4 className="font-medium text-slate-900 mb-1">E-commerce</h4>
							<p className="text-slate-600 text-sm">Product images, customer photos</p>
						</div>
						<div className="bg-white border border-blue-100 rounded-lg p-3">
							<h4 className="font-medium text-slate-900 mb-1">Legacy Support</h4>
							<p className="text-slate-600 text-sm">When you need 100% browser compatibility</p>
						</div>
					</div>
				</div>
				
				<p>
					<strong>Compression Tip:</strong> For JPGs, use 60-80% quality. Below 60% shows noticeable artifacts, above 80% wastes bandwidth. 
					Use our <Link href="/compress-jpg" className="text-primary hover:underline">JPG compression tool</Link> to find the sweet spot.
				</p>
			</section>

			{/* PNG Section */}
			<section id="png" className="scroll-mt-20">
				<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">PNG: Transparency & Graphics Expert</h2>
				
				<div className="grid md:grid-cols-2 gap-6 mb-6">
					<div className="bg-white border border-slate-200 rounded-xl p-5">
						<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
							<CheckCircle className="w-5 h-5 text-emerald-500" />
							Pros
						</h3>
						<ul className="space-y-2 text-slate-600">
							<li>• Lossless compression</li>
							<li>• Alpha transparency support</li>
							<li>• Perfect for text & graphics</li>
							<li>• No quality loss on save</li>
							<li>• Universal browser support</li>
						</ul>
					</div>
					
					<div className="bg-white border border-slate-200 rounded-xl p-5">
						<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
							<CheckCircle className="w-5 h-5 text-rose-500" />
							Cons
						</h3>
						<ul className="space-y-2 text-slate-600">
							<li>• Large file sizes for photos</li>
							<li>• No progressive loading</li>
							<li>• Limited compression options</li>
							<li>• Not optimal for photographs</li>
							<li>• Can be 5-10x larger than JPG</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-6">
					<h3 className="font-bold text-purple-900 mb-2">🎨 Best Use Cases for PNG</h3>
					<div className="grid sm:grid-cols-2 gap-3">
						<div className="bg-white border border-purple-100 rounded-lg p-3">
							<h4 className="font-medium text-slate-900 mb-1">Logos & Icons</h4>
							<p className="text-slate-600 text-sm">Sharp edges, transparency needed</p>
						</div>
						<div className="bg-white border border-purple-100 rounded-lg p-3">
							<h4 className="font-medium text-slate-900 mb-1">Screenshots</h4>
							<p className="text-slate-600 text-sm">Text remains crisp, no artifacts</p>
						</div>
						<div className="bg-white border border-purple-100 rounded-lg p-3">
							<h4 className="font-medium text-slate-900 mb-1">Graphics with Text</h4>
							<p className="text-slate-600 text-sm">Infographics, charts, diagrams</p>
						</div>
						<div className="bg-white border border-purple-100 rounded-lg p-3">
							<h4 className="font-medium text-slate-900 mb-1">Transparent Backgrounds</h4>
							<p className="text-slate-600 text-sm">Overlays, watermarks, UI elements</p>
						</div>
					</div>
				</div>
				
				<p>
					<strong>Compression Tip:</strong> Use PNG-8 for simple graphics (256 colors max) and PNG-24 for complex graphics with transparency. 
					Always <Link href="/compress-png" className="text-primary hover:underline">compress PNGs</Link> - they can often be reduced by 50-80% without quality loss.
				</p>
			</section>

			{/* WebP Section */}
			<section id="webp" className="scroll-mt-20">
				<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">WebP: The Modern All-Rounder</h2>
				
				<div className="grid md:grid-cols-2 gap-6 mb-6">
					<div className="bg-white border border-slate-200 rounded-xl p-5">
						<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
							<Zap className="w-5 h-5 text-amber-500" />
							The Game Changer
						</h3>
						<ul className="space-y-2 text-slate-600">
							<li>• 30% smaller than JPG at same quality</li>
							<li>• Supports lossy & lossless compression</li>
							<li>• Alpha transparency like PNG</li>
							<li>• Animation support (like GIF)</li>
							<li>• 98% browser support (2025)</li>
						</ul>
					</div>
					
					<div className="bg-white border border-slate-200 rounded-xl p-5">
						<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
							<Shield className="w-5 h-5 text-blue-500" />
							Adoption Status
						</h3>
						<ul className="space-y-2 text-slate-600">
							<li>• Supported by Chrome, Firefox, Edge</li>
							<li>• Safari 14+ (macOS 11+, iOS 14+)</li>
							<li>• Not in IE11 (but who uses it?)</li>
							<li>• WordPress auto-converts to WebP</li>
							<li>• CDNs like Cloudflare support it</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
					<h3 className="font-bold text-amber-900 mb-2">🚀 Why WebP Wins in 2025</h3>
					<div className="space-y-3">
						<div className="flex items-start gap-3">
							<div className="bg-amber-100 text-amber-800 rounded-full p-1">
								<Zap className="w-4 h-4" />
							</div>
							<div>
								<h4 className="font-medium text-slate-900">Faster Loading</h4>
								<p className="text-slate-600 text-sm">Smaller files = faster page loads = better SEO</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-amber-100 text-amber-800 rounded-full p-1">
								<ImageIcon className="w-4 h-4" />
							</div>
							<div>
								<h4 className="font-medium text-slate-900">Better Quality</h4>
								<p className="text-slate-600 text-sm">Less artifacts than JPG at same file size</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-amber-100 text-amber-800 rounded-full p-1">
								<Shield className="w-4 h-4" />
							</div>
							<div>
								<h4 className="font-medium text-slate-900">Future-Proof</h4>
								<p className="text-slate-600 text-sm">Google's format, supported by all modern browsers</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-amber-100 text-amber-800 rounded-full p-1">
								<CheckCircle className="w-4 h-4" />
							</div>
							<div>
								<h4 className="font-medium text-slate-900">Versatile</h4>
								<p className="text-slate-600 text-sm">Replaces JPG, PNG, and GIF in one format</p>
							</div>
						</div>
					</div>
				</div>
				
				<p>
					<strong>Implementation Tip:</strong> Use the <code>&lt;picture&gt;</code> element to serve WebP with JPG/PNG fallbacks. 
					Or use our <Link href="/convert-to-webp" className="text-primary hover:underline">WebP conversion tool</Link> to convert existing images.
				</p>
			</section>

			{/* Comparison Table */}
			<section id="comparison" className="scroll-mt-20">
				<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Side-by-Side Comparison</h2>
				
				<div className="overflow-x-auto mb-6">
					<table className="min-w-full border border-slate-200">
						<thead className="bg-slate-50">
							<tr>
								<th className="border border-slate-200 px-4 py-3 text-left font-semibold">Feature</th>
								<th className="border border-slate-200 px-4 py-3 text-left font-semibold">JPG</th>
								<th className="border border-slate-200 px-4 py-3 text-left font-semibold">PNG</th>
								<th className="border border-slate-200 px-4 py-3 text-left font-semibold">WebP</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border border-slate-200 px-4 py-3 font-medium">Best For</td>
								<td className="border border-slate-200 px-4 py-3">Photographs</td>
								<td className="border border-slate-200 px-4 py-3">Graphics, logos</td>
								<td className="border border-slate-200 px-4 py-3 font-medium text-primary">Everything</td>
							</tr>
							<tr className="bg-slate-50">
								<td className="border border-slate-200 px-4 py-3 font-medium">Compression</td>
								<td className="border border-slate-200 px-4 py-3">Lossy only</td>
								<td className="border border-slate-200 px-4 py-3">Lossless only</td>
								<td className="border border-slate-200 px-4 py-3 font-medium text-primary">Both</td>
							</tr>
							<tr>
								<td className="border border-slate-200 px-4 py-3 font-medium">Transparency</td>
								<td className="border border-slate-200 px-4 py-3">❌ No</td>
								<td className="border border-slate-200 px-4 py-3">✅ Yes (alpha)</td>
								<td className="border border-slate-200 px-4 py-3 font-medium text-primary">✅ Yes (alpha)</td>
							</tr>
							<tr className="bg-slate-50">
								<td className="border border-slate-200 px-4 py-3 font-medium">Animation</td>
								<td className="border border-slate-200 px-4 py-3">❌ No</td>
								<td className="border border-slate-200 px-4 py-3">❌ No</td>
								<td className="border border-slate-200 px-4 py-3 font-medium text-primary">✅ Yes</td>
							</tr>
							<tr>
								<td className="border border-slate-200 px-4 py-3 font-medium">File Size</td>
								<td className="border border-slate-200 px-4 py-3">Medium</td>
								<td className="border border-slate-200 px-4 py-3">Large</td>
								<td className="border border-slate-200 px-4 py-3 font-medium text-primary">Small (30% smaller)</td>
							</tr>
							<tr className="bg-slate-50">
								<td className="border border-slate-200 px-4 py-3 font-medium">Browser Support</td>
								<td className="border border-slate-200 px-4 py-3">✅ 100%</td>
								<td className="border border-slate-200 px-4 py-3">✅ 100%</td>
								<td className="border border-slate-200 px-4 py-3 font-medium text-primary">✅ 98%</td>
							</tr>
						</tbody>
					</table>
				</div>
				
				<p className="mb-4">
					As you can see, WebP matches or exceeds both JPG and PNG in almost every category. 
					The only drawback is 2% browser support gap (mostly IE11 and very old Safari).
				</p>
			</section>

			{/* Conversion Guide */}
			<section id="conversion" className="scroll-mt-20">
				<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Convert Between Formats</h2>
				
				<div className="grid sm:grid-cols-2 gap-4 mb-6">
					<div className="bg-white border border-slate-200 rounded-xl p-5">
						<h3 className="font-bold text-slate-900 mb-2">Convert JPG to WebP</h3>
						<p className="text-slate-600 text-sm mb-3">
							Reduce file size by 30% while maintaining quality. Perfect for website optimization.
						</p>
						<Link 
							href="/convert-to-webp" 
							className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
						>
							Convert JPG to WebP <ExternalLink className="w-3 h-3" />
						</Link>
					</div>
					
					<div className="bg-white border border-slate-200 rounded-xl p-5">
						<h3 className="font-bold text-slate-900 mb-2">Convert PNG to WebP</h3>
						<p className="text-slate-600 text-sm mb-3">
							Keep transparency while reducing file size by 50-80%. Ideal for logos and graphics.
						</p>
						<Link 
							href="/convert-to-webp" 
							className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
						>
							Convert PNG to WebP <ExternalLink className="w-3 h-3" />
						</Link>
					</div>
				</div>
				
				<div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
					<h3 className="font-bold text-primary mb-2">💡 Pro Workflow</h3>
					<ol className="space-y-2 text-slate-700">
						<li>1. Convert all existing JPG/PNG images to WebP</li>
						<li>2. Implement <code>&lt;picture&gt;</code> element with WebP + fallback</li>
						<li>3. Set up automatic conversion for new uploads</li>
						<li>4. Monitor Core Web Vitals improvement</li>
					</ol>
				</div>
			</section>

			{/* Conclusion */}
			<section className="mt-12 pt-8 border-t border-slate-200">
				<h2 className="text-2xl font-bold text-slate-900 mb-4">Final Recommendation</h2>
				
				<div className="bg-gradient-to-r from-primary/5 to-blue-100/50 border border-primary/20 rounded-xl p-6 mb-6">
					<h3 className="font-bold text-primary mb-2 text-lg">🏆 The Winner: WebP (with fallbacks)</h3>
					<p className="text-slate-700 mb-4">
						For all new projects in 2025, use WebP as your primary format with JPG/PNG fallbacks. 
						The performance benefits are too significant to ignore.
					</p>
					
					<div className="space-y-3">
						<div className="flex items-start gap-3">
							<div className="bg-primary/10 text-primary rounded-full p-1">
								<CheckCircle className="w-4 h-4" />
							</div>
							<div>
								<h4 className="font-medium text-slate-900">For Websites</h4>
								<p className="text-slate-600 text-sm">WebP with <code>&lt;picture&gt;</code> fallbacks</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-primary/10 text-primary rounded-full p-1">
								<CheckCircle className="w-4 h-4" />
							</div>
							<div>
								<h4 className="font-medium text-slate-900">For Social Media</h4>
								<p className="text-slate-600 text-sm">JPG (platforms convert automatically)</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-primary/10 text-primary rounded-full p-1">
								<CheckCircle className="w-4 h-4" />
							</div>
							<div>
								<h4 className="font-medium text-slate-900">For Print</h4>
								<p className="text-slate-600 text-sm">TIFF or high-quality JPG</p>
							</div>
						</div>
					</div>
				</div>
				
				<div className="flex flex-wrap gap-3">
					<Link 
						href="/convert-to-webp" 
						className="px-5 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
					>
						Convert to WebP Now
					</Link>
					<Link 
						href="/blog/how-to-compress-images-for-web-performance" 
						className="px-5 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors"
					>
						Read Compression Guide
					</Link>
				</div>
			</section>

			{/* Share & Related */}
			<footer className="mt-12 pt-8 border-t border-slate-200">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
					<div>
						<h3 className="font-bold text-slate-900 mb-2">Share this guide</h3>
						<div className="flex gap-2">
							<button className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors">
								Twitter
							</button>
							<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
								LinkedIn
							</button>
							<button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors">
								Copy Link
							</button>
						</div>
					</div>
					<div className="text-sm text-slate-500">
						Questions? <a href="mailto:hello@getimgtools.com" className="text-primary hover:underline">Contact us</a>
					</div>
				</div>
				
				<div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
					<h3 className="font-bold text-slate-900 mb-4">Read Next</h3>
					<div className="grid sm:grid-cols-2 gap-4">
						<Link 
							href="/blog/how-to-compress-images-for-web-performance" 
							className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-primary/30 transition-colors"
						>
							<h4 className="font-bold text-slate-900 mb-1">How to Compress Images for Web</h4>
							<p className="text-sm text-slate-500">Complete guide to image compression techniques.</p>
						</Link>
						<Link 
							href="/blog/remove-exif-data-from-photos-why-how" 
							className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-primary/30 transition-colors"
						>
							<h4 className="font-bold text-slate-900 mb-1">Remove EXIF Data Guide</h4>
							<p className="text-sm text-slate-500">Protect your privacy by stripping metadata.</p>
						</Link>
					</div>
				</div>
			</footer>
		</article>
	);
}
