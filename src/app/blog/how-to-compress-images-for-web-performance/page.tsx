import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Share2, BookOpen, CheckCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
	title: "How to Compress Images for Web Performance (2025 Complete Guide) | GetImgTools",
	description: "Complete guide to image compression for faster websites. Learn techniques, tools, and best practices for optimal web performance. Free tools included.",
	keywords: [
		"compress images for web",
		"image compression guide",
		"web performance optimization",
		"reduce image file size",
		"fast loading websites",
		"SEO image optimization",
		"image format comparison",
	],
	openGraph: {
		title: "How to Compress Images for Web Performance (2025 Complete Guide)",
		description: "Complete guide to image compression for faster websites. Learn techniques, tools, and best practices for optimal web performance.",
	},
};

export default function CompressionGuidePage() {
	return (
		<article className="max-w-4xl mx-auto">
			{/* Article Header */}
			<header className="mb-8 pb-6 border-b border-slate-300">
				<div className="flex items-center gap-2 mb-4 flex-wrap">
					<span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs font-bold">
						Performance
					</span>
					<div className="flex items-center gap-3 text-xs text-slate-600">
						<span className="flex items-center gap-1">
							<Calendar className="w-3 h-3" />
							March 22, 2025
						</span>
						<span className="flex items-center gap-1">
							<Clock className="w-3 h-3" />
							8 min read
						</span>
					</div>
				</div>
				
				<h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
					How to Compress Images for Web Performance
				</h1>
				
				<p className="text-base text-slate-600 mb-4 leading-relaxed">
					Images account for <strong>over 50% of webpage weight</strong>. Learn how to compress them properly for faster loading, better SEO, and improved user experience.
				</p>
				
				<div className="flex items-center gap-3 pt-4">
					<button className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors">
						<Share2 className="w-3 h-3" />
						Share
					</button>
					<span className="text-xs text-slate-600">Updated: March 2025</span>
				</div>
			</header>

			{/* Table of Contents */}
			<aside className="bg-white border border-slate-300 p-5 mb-8">
				<h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
					<BookOpen className="w-4 h-4" />
					Table of Contents
				</h2>
				<nav className="space-y-2">
					{[
						{ id: "why", title: "Why Image Compression Matters" },
						{ id: "formats", title: "Choosing the Right Format" },
						{ id: "tools", title: "Best Compression Tools" },
						{ id: "techniques", title: "Advanced Techniques" },
						{ id: "wordpress", title: "WordPress Optimization" },
						{ id: "checklist", title: "Quick Checklist" },
					].map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className="block text-xs text-slate-700 hover:text-slate-900 font-medium transition-colors"
						>
							• {item.title}
						</a>
					))}
				</nav>
			</aside>

			{/* Main Content */}
			<div className="prose prose-slate max-w-none">
				{/* Introduction */}
				<p className="lead">
					In 2025, web performance isn't just a technical concern—it's a business imperative. 
					Google uses page speed as a ranking factor, and users abandon sites that take more than 3 seconds to load. 
					The single biggest opportunity for improvement? <strong>Image optimization.</strong>
				</p>

				{/* Why Image Compression Matters */}
				<section id="why" className="scroll-mt-20">
					<h2 className="text-lg font-bold text-slate-900 mt-8 mb-4">Why Image Compression Matters</h2>
					
					<div className="grid md:grid-cols-2 gap-4 mb-6">
						<div className="bg-white border border-slate-300 p-4">
							<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
								<CheckCircle className="w-4 h-4 text-slate-700" />
								SEO Benefits
							</h3>
							<ul className="space-y-1 text-slate-600 text-xs">
								<li>• Faster loading = better Google rankings</li>
								<li>• Reduced bounce rates improve SEO</li>
								<li>• Mobile-first indexing favors optimized sites</li>
								<li>• Core Web Vitals compliance</li>
							</ul>
						</div>
						
						<div className="bg-white border border-slate-300 p-4">
							<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
								<CheckCircle className="w-4 h-4 text-slate-700" />
								User Experience
							</h3>
							<ul className="space-y-1 text-slate-600 text-xs">
								<li>• 53% of mobile users abandon slow sites</li>
								<li>• Faster sites increase conversion rates</li>
								<li>• Better performance on mobile data</li>
								<li>• Reduced bandwidth costs for users</li>
							</ul>
						</div>
					</div>
					
					<p>
						A study by HTTP Archive shows that images make up <strong>54% of total page weight</strong> on average. 
						By compressing images properly, you can often reduce page size by 40-60% without noticeable quality loss.
					</p>
				</section>

				{/* Choosing the Right Format */}
				<section id="formats" className="scroll-mt-20">
					<h2 className="text-lg font-bold text-slate-900 mt-8 mb-4">Choosing the Right Format</h2>
					
					<div className="overflow-x-auto mb-6">
						<table className="min-w-full border border-slate-300">
							<thead className="bg-white">
								<tr>
									<th className="border border-slate-300 px-3 py-2 text-left font-bold text-sm">Format</th>
									<th className="border border-slate-300 px-3 py-2 text-left font-bold text-sm">Best For</th>
									<th className="border border-slate-300 px-3 py-2 text-left font-bold text-sm">Compression</th>
									<th className="border border-slate-300 px-3 py-2 text-left font-bold text-sm">Browser Support</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border border-slate-300 px-3 py-2 font-bold text-xs">JPEG/JPG</td>
									<td className="border border-slate-300 px-3 py-2 text-xs">Photographs, complex images</td>
									<td className="border border-slate-200 px-4 py-3">Lossy (adjustable)</td>
									<td className="border border-slate-200 px-4 py-3">100%</td>
								</tr>
								<tr className="bg-slate-50">
									<td className="border border-slate-200 px-4 py-3 font-medium">PNG</td>
									<td className="border border-slate-200 px-4 py-3">Graphics, logos, transparency</td>
									<td className="border border-slate-200 px-4 py-3">Lossless or lossy</td>
									<td className="border border-slate-200 px-4 py-3">100%</td>
								</tr>
								<tr>
									<td className="border border-slate-200 px-4 py-3 font-medium">WebP</td>
									<td className="border border-slate-200 px-4 py-3">Everything (modern alternative)</td>
									<td className="border border-slate-200 px-4 py-3">Both (30% smaller than JPG)</td>
									<td className="border border-slate-200 px-4 py-3">98%</td>
								</tr>
								<tr className="bg-slate-50">
									<td className="border border-slate-200 px-4 py-3 font-medium">AVIF</td>
									<td className="border border-slate-200 px-4 py-3">Future-proof, maximum compression</td>
									<td className="border border-slate-200 px-4 py-3">Both (50% smaller than JPG)</td>
									<td className="border border-slate-200 px-4 py-3">85%</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<p>
						<strong>Recommendation for 2025:</strong> Use WebP as your primary format with JPG/PNG fallbacks. 
						WebP offers 30-50% better compression than JPG while maintaining quality, and has near-universal browser support.
					</p>
					
						<div className="bg-white border border-slate-300 p-5 my-6">
							<h3 className="font-bold text-slate-900 mb-2 text-sm">Pro Tip</h3>
							<p className="text-slate-700 text-xs mb-3">
								Use the <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">&lt;picture&gt;</code> element to serve WebP to supporting browsers and fallback to JPG/PNG for older browsers:
							</p>
							<pre className="bg-slate-50 border border-slate-300 p-3 mt-2 text-xs overflow-x-auto font-mono">
{`<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description">
</picture>`}
						</pre>
					</div>
				</section>

					{/* Best Compression Tools */}
					<section id="tools" className="scroll-mt-20">
						<h2 className="text-lg font-bold text-slate-900 mt-8 mb-4">Best Compression Tools (Free & Online)</h2>
						
						<p className="text-sm text-slate-700 mb-4">
							You don't need expensive software to optimize images. Here are the best free tools:
						</p>
						
						<div className="grid sm:grid-cols-2 gap-4 mb-6">
							<div className="bg-white border border-slate-300 p-4">
								<h3 className="font-bold text-slate-900 mb-2 text-sm">GetImgTools</h3>
								<p className="text-slate-600 text-xs mb-3">
									Our own suite of 17 free image tools. All processing happens in your browser—no uploads, 100% private.
								</p>
								<div className="space-y-2">
									<Link href="/compress-jpg" className="flex items-center gap-1 text-slate-900 font-bold text-xs hover:text-slate-700">
										Compress JPG <ExternalLink className="w-3 h-3" />
									</Link>
									<Link href="/compress-png" className="flex items-center gap-1 text-slate-900 font-bold text-xs hover:text-slate-700">
										Compress PNG <ExternalLink className="w-3 h-3" />
									</Link>
									<Link href="/convert-to-webp" className="flex items-center gap-1 text-slate-900 font-bold text-xs hover:text-slate-700">
										Convert to WebP <ExternalLink className="w-3 h-3" />
									</Link>
								</div>
							</div>
							
							<div className="bg-white border border-slate-300 p-4">
								<h3 className="font-bold text-slate-900 mb-2 text-sm">Other Great Tools</h3>
								<ul className="space-y-1 text-slate-600 text-xs">
								<li>• <strong>Squoosh</strong> (Google) - Advanced compression with preview</li>
								<li>• <strong>TinyPNG</strong> - Smart PNG/JPG compression</li>
								<li>• <strong>ImageOptim</strong> - Desktop app for macOS</li>
								<li>• <strong>ShortPixel</strong> - WordPress plugin</li>
							</ul>
						</div>
					</div>
					
					<p>
						For most users, <Link href="/" className="text-primary hover:underline">GetImgTools</Link> provides everything needed: 
						compression, conversion, resizing, and batch processing—all free and private.
					</p>
				</section>

				{/* Advanced Techniques */}
				<section id="techniques" className="scroll-mt-20">
					<h2 className="text-lg font-bold text-slate-900 mt-8 mb-4">Advanced Compression Techniques</h2>
					
						<h3 className="text-base font-bold text-slate-900 mt-6 mb-3">1. Responsive Images</h3>
						<p className="text-sm text-slate-700">
							Serve different image sizes for different devices. A 2000px image is wasted on a 375px mobile screen.
						</p>
						
						<h3 className="text-base font-bold text-slate-900 mt-6 mb-3">2. Lazy Loading</h3>
						<p className="text-sm text-slate-700">
							Use <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">loading="lazy"</code> attribute to defer off-screen images. Native in all modern browsers.
						</p>
						
						<h3 className="text-base font-bold text-slate-900 mt-6 mb-3">3. CDN Optimization</h3>
						<p className="text-sm text-slate-700">
							Use a CDN like Cloudflare or Imgix that automatically optimizes images on-the-fly.
						</p>
						
						<h3 className="text-base font-bold text-slate-900 mt-6 mb-3">4. Remove EXIF Data</h3>
					<p>
						EXIF metadata (camera info, GPS, etc.) adds unnecessary bytes. <Link href="/remove-exif" className="text-primary hover:underline">Strip it</Link>.
					</p>
				</section>

				{/* WordPress Optimization */}
				<section id="wordpress" className="scroll-mt-20">
					<h2 className="text-lg font-bold text-slate-900 mt-8 mb-4">WordPress Image Optimization</h2>
					
					<p className="mb-4">
						If you use WordPress (40% of all websites), here's your optimization stack:
					</p>
					
					<ol className="list-decimal pl-5 space-y-3 mb-6">
						<li>
							<strong>Install a caching plugin</strong> like WP Rocket or W3 Total Cache
						</li>
						<li>
							<strong>Use an image optimization plugin</strong>:
							<ul className="list-disc pl-5 mt-2 space-y-1">
								<li>ShortPixel (best compression)</li>
								<li>Imagify (good free tier)</li>
								<li>EWWW Image Optimizer (unlimited images)</li>
							</ul>
						</li>
						<li>
							<strong>Enable lazy loading</strong> (native in WordPress 5.5+)
						</li>
						<li>
							<strong>Use WebP format</strong> with fallbacks
						</li>
						<li>
							<strong>Compress before uploading</strong> using <Link href="/" className="text-primary hover:underline">our tools</Link>
						</li>
					</ol>
				</section>

					{/* Quick Checklist */}
					<section id="checklist" className="scroll-mt-20">
						<h2 className="text-lg font-bold text-slate-900 mt-8 mb-4">Image Optimization Checklist</h2>
						
						<div className="bg-white border border-slate-300 p-4">
							<h3 className="font-bold text-slate-900 mb-3 text-sm">Before Publishing Any Image</h3>
							<ul className="space-y-2">
								<li className="flex items-start gap-3 text-xs">
									<CheckCircle className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
									<span className="text-slate-700">Choose correct format (WebP for photos, PNG for graphics)</span>
								</li>
								<li className="flex items-start gap-3 text-xs">
									<CheckCircle className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
									<span className="text-slate-700">Compress to 60-80% quality (use <Link href="/compress-jpg" className="text-slate-900 font-bold hover:text-slate-700">our tool</Link>)</span>
								</li>
								<li className="flex items-start gap-3 text-xs">
									<CheckCircle className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
									<span className="text-slate-700">Resize to maximum needed display size (use <Link href="/resize-image" className="text-slate-900 font-bold hover:text-slate-700">resize tool</Link>)</span>
								</li>
								<li className="flex items-start gap-3 text-xs">
									<CheckCircle className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
									<span className="text-slate-700">Remove EXIF metadata for privacy (use <Link href="/remove-exif" className="text-slate-900 font-bold hover:text-slate-700">EXIF remover</Link>)</span>
								</li>
								<li className="flex items-start gap-3 text-xs">
									<CheckCircle className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
									<span className="text-slate-700">Add descriptive alt text for accessibility and SEO</span>
								</li>
								<li className="flex items-start gap-3 text-xs">
									<CheckCircle className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
									<span className="text-slate-700">Implement lazy loading for below-the-fold images</span>
								</li>
							</ul>
						</div>
					
					<p className="mt-6">
						Following this checklist will ensure your images are optimized for both performance and SEO.
					</p>
				</section>

					{/* Conclusion */}
					<section className="mt-12 pt-8 border-t border-slate-300">
						<h2 className="text-lg font-bold text-slate-900 mb-4">Conclusion</h2>
						
						<p className="text-sm text-slate-700 mb-3">
							Image compression is no longer optional—it's essential for modern web development. 
							With the tools and techniques outlined in this guide, you can:
						</p>
						
						<ul className="space-y-1 mb-6 text-xs text-slate-700">
							<li>• Improve your Google rankings through better Core Web Vitals</li>
							<li>• Reduce bounce rates by providing faster loading experiences</li>
							<li>• Save bandwidth for both your server and your users</li>
							<li>• Create more accessible, SEO-friendly websites</li>
						</ul>
						
						<div className="bg-white border border-slate-300 p-5">
							<h3 className="font-bold text-slate-900 mb-3 text-sm">Ready to Optimize Your Images?</h3>
							<p className="text-slate-700 text-xs mb-4">
								Start with our free tools—no signup required, 100% private processing in your browser.
							</p>
							<div className="flex flex-wrap gap-2">
								<Link 
									href="/compress-jpg" 
									className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
								>
									Compress JPG Images
								</Link>
								<Link 
									href="/convert-to-webp" 
									className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition-colors"
								>
									Convert to WebP
								</Link>
								<Link 
									href="/bulk-compress" 
									className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-900 text-xs font-bold transition-colors"
								>
									Bulk Compress
								</Link>
							</div>
						</div>
					</section>

				{/* Share & Related */}
				<footer className="mt-12 pt-8 border-t border-slate-300">
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
						<div>
							<h3 className="font-bold text-slate-900 mb-2 text-sm">Share this guide</h3>
							<div className="flex gap-2">
								<button className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-colors">
									Twitter
								</button>
								<button className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-colors">
									LinkedIn
								</button>
								<button className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-colors">
									Copy Link
								</button>
							</div>
						</div>
						<div className="text-xs text-slate-600">
							Questions? <a href="mailto:hello@getimgtools.com" className="text-slate-900 font-bold hover:text-slate-700">Contact us</a>
						</div>
					</div>
					
					<div className="bg-white border border-slate-300 p-5">
						<h3 className="font-bold text-slate-900 mb-4 text-sm">Read Next</h3>
						<div className="grid sm:grid-cols-2 gap-3">
							<Link 
								href="/blog/jpg-vs-png-vs-webp-which-format" 
								className="block p-4 bg-white border border-slate-300 hover:shadow-md transition-shadow"
							>
								<h4 className="font-bold text-slate-900 mb-1 text-sm">JPG vs PNG vs WebP Comparison</h4>
								<p className="text-xs text-slate-600">Which format should you use for different types of images?</p>
							</Link>
							<Link 
								href="/blog/image-optimization-for-wordpress-guide" 
								className="block p-4 bg-white border border-slate-300 hover:shadow-md transition-shadow"
							>
								<h4 className="font-bold text-slate-900 mb-1 text-sm">WordPress Image Optimization</h4>
								<p className="text-xs text-slate-600">Complete guide for WordPress users and developers.</p>
							</Link>
						</div>
					</div>
				</footer>
			</div>
		</article>
	);
}
							
