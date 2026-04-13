import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Share2, BookOpen, CheckCircle, ExternalLink, Instagram, Facebook, Twitter, Linkedin, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
	title: "Image Optimization for Social Media: Complete 2025 Guide",
	description: "Complete guide to optimizing images for social media platforms. Learn ideal sizes, formats, compression settings, and best practices for Instagram, Facebook, Twitter, LinkedIn, and more.",
	keywords: [
		"social media image optimization",
		"Instagram image size",
		"Facebook image dimensions",
		"Twitter image compression",
		"LinkedIn image guidelines",
		"social media marketing",
		"image optimization guide",
		"social media best practices",
	],
	openGraph: {
		title: "Image Optimization for Social Media: Complete 2025 Guide",
		description: "Learn how to optimize images for all major social media platforms with ideal sizes, formats, and compression settings.",
	},
};

export default function SocialMediaOptimizationGuidePage() {
	return (
		<article className="max-w-4xl mx-auto">
			{/* Article Header */}
			<header className="mb-8 pb-6 border-b border-slate-300">
				<div className="flex items-center gap-2 mb-4 flex-wrap">
					<span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs font-bold">
						Social Media
					</span>
					<span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs font-bold">
						Marketing
					</span>
					<div className="flex items-center gap-3 text-xs text-slate-600">
						<span className="flex items-center gap-1">
							<Calendar className="w-3 h-3" />
							March 25, 2025
						</span>
						<span className="flex items-center gap-1">
							<Clock className="w-3 h-3" />
							10 min read
						</span>
					</div>
				</div>
				
				<h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
					Image Optimization for Social Media: Complete Guide
				</h1>
				
				<p className="text-base text-slate-600 mb-4 leading-relaxed">
					Optimized images can increase engagement by up to <strong>650% on social media</strong>. Learn the exact dimensions, formats, and compression settings for every major platform.
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
						{ id: "why", title: "Why Social Media Image Optimization Matters" },
						{ id: "platforms", title: "Platform-Specific Requirements" },
						{ id: "formats", title: "Best Formats for Social Media" },
						{ id: "compression", title: "Optimal Compression Settings" },
						{ id: "tools", title: "Recommended Tools & Workflow" },
						{ id: "checklist", title: "Social Media Image Checklist" },
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

			{/* Main Content */}
			<div className="prose prose-slate max-w-none">
				{/* Introduction */}
				<p className="lead">
					In 2025, social media platforms process over <strong>3.2 billion images daily</strong>. 
					With algorithm changes favoring high-quality visual content, properly optimized images are no longer optional—they're essential for social media success.
				</p>

				{/* Why Optimization Matters */}
				<section id="why" className="scroll-mt-20">
					<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Social Media Image Optimization Matters</h2>
					
					<div className="grid md:grid-cols-2 gap-6 mb-6">
						<div className="bg-white border border-slate-200 rounded-xl p-5">
							<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
								<CheckCircle className="w-5 h-5 text-emerald-500" />
								Algorithm Advantage
							</h3>
							<ul className="space-y-2 text-slate-600">
								<li>• Fast-loading images get higher reach</li>
								<li>• High-quality visuals increase engagement</li>
								<li>• Proper dimensions prevent cropping issues</li>
								<li>• Optimized files load faster on mobile</li>
							</ul>
						</div>
						
						<div className="bg-white border border-slate-200 rounded-xl p-5">
							<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
								<CheckCircle className="w-5 h-5 text-emerald-500" />
								User Experience
							</h3>
							<ul className="space-y-2 text-slate-600">
								<li>• 47% of users abandon slow-loading posts</li>
								<li>• Crisp images build brand credibility</li>
								<li>• Consistent sizing creates professional feeds</li>
								<li>• Mobile-optimized images perform better</li>
							</ul>
						</div>
					</div>
					
					<p>
						A Buffer study found that posts with optimized images receive <strong>150% more retweets</strong> on Twitter and 
						<strong> 2.3× more engagement</strong> on Facebook compared to posts with unoptimized images.
					</p>
				</section>

				{/* Platform-Specific Requirements */}
				<section id="platforms" className="scroll-mt-20">
					<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Platform-Specific Requirements (2025)</h2>
					
					<div className="overflow-x-auto mb-6">
						<table className="min-w-full border border-slate-200">
							<thead className="bg-slate-50">
								<tr>
									<th className="border border-slate-200 px-4 py-3 text-left font-semibold">Platform</th>
									<th className="border border-slate-200 px-4 py-3 text-left font-semibold">Profile Image</th>
									<th className="border border-slate-200 px-4 py-3 text-left font-semibold">Post/Feed Image</th>
									<th className="border border-slate-200 px-4 py-3 text-left font-semibold">Cover/Header</th>
									<th className="border border-slate-200 px-4 py-3 text-left font-semibold">Stories</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border border-slate-200 px-4 py-3 font-medium flex items-center gap-2">
										<Instagram className="w-4 h-4 text-pink-600" /> Instagram
									</td>
									<td className="border border-slate-200 px-4 py-3">320×320px (1:1)</td>
									<td className="border border-slate-200 px-4 py-3">1080×1080px (1:1)<br/>1080×1350px (4:5)</td>
									<td className="border border-slate-200 px-4 py-3">1080×1920px (9:16)</td>
									<td className="border border-slate-200 px-4 py-3">1080×1920px (9:16)</td>
								</tr>
								<tr className="bg-slate-50">
									<td className="border border-slate-200 px-4 py-3 font-medium flex items-center gap-2">
										<Facebook className="w-4 h-4 text-blue-600" /> Facebook
									</td>
									<td className="border border-slate-200 px-4 py-3">180×180px</td>
									<td className="border border-slate-200 px-4 py-3">1200×630px (1.91:1)</td>
									<td className="border border-slate-200 px-4 py-3">820×312px</td>
									<td className="border border-slate-200 px-4 py-3">1080×1920px (9:16)</td>
								</tr>
								<tr>
									<td className="border border-slate-200 px-4 py-3 font-medium flex items-center gap-2">
										<Twitter className="w-4 h-4 text-blue-400" /> Twitter/X
									</td>
									<td className="border border-slate-200 px-4 py-3">400×400px</td>
									<td className="border border-slate-200 px-4 py-3">1200×675px (16:9)</td>
									<td className="border border-slate-200 px-4 py-3">1500×500px</td>
									<td className="border border-slate-200 px-4 py-3">1080×1920px (9:16)</td>
								</tr>
								<tr className="bg-slate-50">
									<td className="border border-slate-200 px-4 py-3 font-medium flex items-center gap-2">
										<Linkedin className="w-4 h-4 text-blue-700" /> LinkedIn
									</td>
									<td className="border border-slate-200 px-4 py-3">400×400px</td>
									<td className="border border-slate-200 px-4 py-3">1200×627px (1.91:1)</td>
									<td className="border border-slate-200 px-4 py-3">1584×396px</td>
									<td className="border border-slate-200 px-4 py-3">1080×1920px (9:16)</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-6">
						<h3 className="font-bold text-blue-900 mb-2">💡 Pro Tip: Mobile-First Optimization</h3>
						<p className="text-blue-800">
							<strong>92% of social media users access platforms via mobile.</strong> Always preview your images on mobile devices before posting. 
							Text should be large enough to read on small screens, and important elements should be centered to avoid cropping.
						</p>
					</div>
				</section>

				{/* Best Formats for Social Media */}
				<section id="formats" className="scroll-mt-20">
					<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Best Formats for Social Media</h2>
					
					<div className="grid sm:grid-cols-2 gap-6 mb-6">
						<div className="bg-white border border-slate-200 rounded-xl p-5">
							<h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
								<ImageIcon className="w-5 h-5 text-primary" />
								JPG/JPEG
							</h3>
							<ul className="space-y-2 text-slate-600">
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
									<span><strong>Best for:</strong> Photographs, complex images</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
									<span><strong>Quality:</strong> 80-85% for social media</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
									<span><strong>File size:</strong> 100-500KB per image</span>
								</li>
							</ul>
						</div>
						
						<div className="bg-white border border-slate-200 rounded-xl p-5">
							<h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
								<ImageIcon className="w-5 h-5 text-blue-500" />
								PNG
							</h3>
							<ul className="space-y-2 text-slate-600">
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
									<span><strong>Best for:</strong> Logos, graphics, text</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
									<span><strong>When to use:</strong> When transparency is needed</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
									<span><strong>Compression:</strong> Lossless for graphics</span>
								</li>
							</ul>
						</div>
					</div>
					
					<div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
						<h3 className="font-bold text-emerald-900 mb-2">🚀 WebP: The Future of Social Media Images</h3>
						<p className="text-emerald-800 mb-3">
							While not all platforms support WebP natively yet, it's becoming increasingly important:
						</p>
						<ul className="space-y-2 text-emerald-800">
							<li className="flex items-start gap-2">
								<CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
								<span><strong>30-50% smaller</strong> than equivalent JPG files</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
								<span>Supports both <strong>lossy and lossless</strong> compression</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
								<span>Maintains <strong>transparency</strong> like PNG</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
								<span>Ideal for <strong>Instagram and Facebook</strong> (they convert to WebP internally)</span>
							</li>
						</ul>
						<Link 
							href="/convert-to-webp" 
							className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
						>
							Convert Images to WebP <ExternalLink className="w-4 h-4" />
						</Link>
					</div>
				</section>

				{/* Optimal Compression Settings */}
				<section id="compression" className="scroll-mt-20">
					<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Optimal Compression Settings for Social Media</h2>
					
					<h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Instagram & Facebook</h3>
					<p className="mb-4">
						Both platforms recompress uploaded images. To maintain quality:
					</p>
					<ul className="list-disc pl-5 space-y-2 mb-4">
						<li>Upload at <strong>highest quality possible</strong> (85-90%)</li>
						<li>Use exact recommended dimensions to avoid additional cropping/resizing</li>
						<li>Strip EXIF data to reduce file size (platforms remove it anyway)</li>
						<li>For Instagram Stories: Use 1080×1920px at 72 DPI</li>
					</ul>

					<h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Twitter/X</h3>
					<p className="mb-4">
						Twitter has a 5MB limit for images (15MB for premium users):
					</p>
					<ul className="list-disc pl-5 space-y-2 mb-4">
						<li>Compress to under 3MB for reliable uploading</li>
						<li>Use 1200×675px for optimal display in feeds</li>
						<li>JPG at 80% quality is usually sufficient</li>
						<li>For multiple images in a tweet: keep each under 1MB</li>
					</ul>

					<h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">LinkedIn</h3>
					<p className="mb-4">
						LinkedIn favors professional, high-quality images:
					</p>
					<ul className="list-disc pl-5 space-y-2 mb-6">
						<li>Maximum file size: 8MB (but aim for 1-2MB)</li>
						<li>Use 1200×627px for article and post images</li>
						<li>Profile images: 400×400px, compressed to under 500KB</li>
						<li>Company pages: 300×300px logo, 1536×768px cover</li>
					</ul>

					<div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
						<h3 className="font-bold text-primary mb-2">🎯 Quick Reference: Compression Targets</h3>
						<div className="grid sm:grid-cols-2 gap-4 mt-3">
							<div>
								<p className="font-medium text-slate-900">Profile Images</p>
								<p className="text-sm text-slate-600">100-300KB, square format</p>
							</div>
							<div>
								<p className="font-medium text-slate-900">Feed Posts</p>
								<p className="text-sm text-slate-600">500KB-2MB, platform dimensions</p>
							</div>
							<div>
								<p className="font-medium text-slate-900">Stories/Reels</p>
								<p className="text-sm text-slate-600">1-3MB, 9:16 aspect ratio</p>
							</div>
							<div>
								<p className="font-medium text-slate-900">Cover/Header</p>
								<p className="text-sm text-slate-600">500KB-1.5MB, wide format</p>
							</div>
						</div>
					</div>
				</section>

				{/* Recommended Tools & Workflow */}
				<section id="tools" className="scroll-mt-20">
					<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Recommended Tools & Workflow</h2>
					
					<h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. Resize First</h3>
					<p className="mb-4">
						Always resize images to exact platform dimensions before compression. This prevents platforms from applying their own (often poor) resizing algorithms.
					</p>
					<Link 
						href="/resize-image" 
						className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors mb-4"
					>
						Resize Images <ExternalLink className="w-4 h-4" />
					</Link>

					<h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. Compress Appropriately</h3>
					<p className="mb-4">
						Use different compression settings based on content type:
					</p>
					<div className="grid sm:grid-cols-2 gap-4 mb-4">
						<div className="bg-white border border-slate-200 rounded-xl p-4">
							<h4 className="font-bold text-slate-900 mb-2">Photographs</h4>
							<p className="text-sm text-slate-600">
								Use <Link href="/compress-jpg" className="text-primary hover:underline">JPG compression</Link> at 80-85% quality. 
								Strip EXIF data for privacy and smaller files.
							</p>
						</div>
						<div className="bg-white border border-slate-200 rounded-xl p-4">
							<h4 className="font-bold text-slate-900 mb-2">Graphics & Logos</h4>
							<p className="text-sm text-slate-600">
								Use <Link href="/compress-png" className="text-primary hover:underline">PNG compression</Link> with lossless option. 
								Consider converting to WebP for modern platforms.
							</p>
						</div>
					</div>

					<h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. Batch Processing</h3>
					<p className="mb-4">
						For social media managers handling multiple images:
					</p>
					<Link 
						href="/bulk-compress" 
						className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg transition-colors"
					>
						Bulk Compress Images <ExternalLink className="w-4 h-4" />
					</Link>

					<div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
						<h3 className="font-bold text-amber-900 mb-2">⚡ Pro Workflow</h3>
						<ol className="list-decimal pl-5 space-y-2 text-amber-800">
							<li>Create images at 2× required size (for retina displays)</li>
							<li>Resize to exact platform dimensions</li>
							<li>Compress with appropriate settings</li>
							<li>Strip EXIF metadata for privacy</li>
							<li>Save with descriptive filenames</li>
							<li>Schedule posts using social media management tools</li>
						</ol>
					</div>
				</section>

				{/* Social Media Image Checklist */}
				<section id="checklist" className="scroll-mt-20">
					<h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Social Media Image Checklist</h2>
					
					<div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
						<h3 className="font-bold text-emerald-900 mb-4 text-lg">✅ Before Posting Any Social Media Image</h3>
						<ul className="space-y-3">
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
								<span>Resized to exact platform dimensions (use <Link href="/resize-image" className="text-primary hover:underline">our resize tool</Link>)</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
								<span>Compressed to optimal file size (use <Link href="/compress-jpg" className="text-primary hover:underline">compression tool</Link>)</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
								<span>EXIF metadata removed for privacy (use <Link href="/remove-exif" className="text-primary hover:underline">EXIF remover</Link>)</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
								<span>Previewed on mobile device (check cropping and readability)</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
								<span>Filename optimized (descriptive, no spaces, lowercase)</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
								<span>Alt text added for accessibility (describe the image)</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
								<span>Tested on different screen sizes and brightness levels</span>
							</li>
						</ul>
					</div>
					
					<p className="mt-6">
						Following this checklist ensures your social media images are optimized for maximum engagement, 
						accessibility, and professional presentation across all platforms.
					</p>
				</section>

				{/* Conclusion */}
				<section className="mt-12 pt-8 border-t border-slate-200">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h2>
					
					<p className="mb-4">
						Social media image optimization is a critical skill for marketers, content creators, and businesses in 2025. 
						With platforms increasingly favoring high-quality, fast-loading visual content, optimized images directly impact:
					</p>
					
					<ul className="space-y-2 mb-6">
						<li>• <strong>Algorithm reach</strong> and post visibility</li>
						<li>• <strong>User engagement</strong> and interaction rates</li>
						<li>• <strong>Brand perception</strong> and professionalism</li>
						<li>• <strong>Accessibility</strong> for all users</li>
						<li>• <strong>Conversion rates</strong> for business accounts</li>
					</ul>
					
					<div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
						<h3 className="font-bold text-primary mb-2">🚀 Ready to Optimize Your Social Media Images?</h3>
						<p className="text-slate-700 mb-4">
							Use our free tools to resize, compress, and prepare images for every social media platform—no signup required, 100% private processing.
						</p>
						<div className="flex flex-wrap gap-3">
							<Link 
								href="/resize-image" 
								className="px-5 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
							>
								Resize for Social Media
							</Link>
							<Link 
								href="/compress-jpg" 
								className="px-5 py-3 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg transition-colors"
							>
								Compress JPG Images
							</Link>
							<Link 
								href="/bulk-compress" 
								className="px-5 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors"
							>
								Bulk Process Images
							</Link>
						</div>
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
								<h4 className="font-bold text-slate-900 mb-1">How to Compress Images for Web Performance</h4>
								<p className="text-sm text-slate-500">Complete guide to image compression for faster websites and better SEO.</p>
							</Link>
							<Link 
								href="/blog/jpg-vs-png-vs-webp-which-format" 
								className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-primary/30 transition-colors"
							>
								<h4 className="font-bold text-slate-900 mb-1">JPG vs PNG vs WebP Comparison</h4>
								<p className="text-sm text-slate-500">Which format should you use for different types of images and platforms?</p>
							</Link>
						</div>
					</div>
				</footer>
			</div>
		</article>
	);
}
