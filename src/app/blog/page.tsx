import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
	title: "Image Optimization Blog — Tips, Guides & Tutorials | GetImgTools",
	description: "Learn how to optimize images for web performance. Free guides on compression, formats, SEO, and best practices for developers and designers. Expert tutorials for better websites.",
	keywords: ["image optimization blog", "web performance", "image compression guide", "image format comparison", "web development", "SEO optimization"],
	openGraph: {
		title: "Image Optimization Blog — Tips, Guides & Tutorials",
		description: "Learn how to optimize images for web performance. Free guides on compression, formats, SEO, and best practices.",
	},
};

const blogPosts = [
	{
		slug: "how-to-compress-images-for-web-performance",
		title: "How to Compress Images for Web Performance (2025 Guide)",
		description: "Complete guide to image compression for faster websites. Learn techniques, tools, and best practices for optimal web performance.",
		date: "2025-03-22",
		readTime: "8 min read",
		category: "Performance",
		featured: true,
	},
	{
		slug: "jpg-vs-png-vs-webp-which-format",
		title: "JPG vs PNG vs WebP: Which Format Should You Use?",
		description: "Comprehensive comparison of image formats. Learn when to use JPG, PNG, or WebP for best quality and smallest file size.",
		date: "2025-03-20",
		readTime: "6 min read",
		category: "Formats",
		featured: true,
	},
	{
		slug: "remove-exif-data-from-photos-why-how",
		title: "Remove EXIF Data from Photos: Why & How to Do It",
		description: "Protect your privacy by removing EXIF metadata from images. Learn what EXIF data contains and how to strip it safely.",
		date: "2025-03-18",
		readTime: "5 min read",
		category: "Privacy",
		featured: false,
	},
	{
		slug: "free-online-image-editors-17-tools",
		title: "Free Online Image Editors: 17 Tools You Need (2025)",
		description: "Discover the best free online image editing tools. Compress, convert, resize, and edit images without installing software.",
		date: "2025-03-15",
		readTime: "7 min read",
		category: "Tools",
		featured: false,
	},
	{
		slug: "image-optimization-for-wordpress-guide",
		title: "Image Optimization for WordPress: Complete Guide",
		description: "Step-by-step guide to optimizing images for WordPress. Plugins, manual methods, and best practices for faster loading sites.",
		date: "2025-03-12",
		readTime: "10 min read",
		category: "WordPress",
		featured: false,
	},
	{
		slug: "svg-to-png-conversion-best-practices",
		title: "SVG to PNG Conversion: Best Practices & Tools",
		description: "Learn how to convert SVG to PNG properly. Resolution settings, transparency handling, and tool recommendations.",
		date: "2025-03-10",
		readTime: "4 min read",
		category: "Conversion",
		featured: false,
	},
];

const categories = [
	{ name: "All", count: 6 },
	{ name: "Performance", count: 1 },
	{ name: "Formats", count: 1 },
	{ name: "Privacy", count: 1 },
	{ name: "Tools", count: 1 },
	{ name: "WordPress", count: 1 },
	{ name: "Conversion", count: 1 },
];

export default function BlogPage() {
	return (
		<div className="max-w-4xl mx-auto">
			{/* Hero */}
			<div className="text-center mb-12 pb-8 border-b border-slate-300">
				<h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">
					Image Optimization Blog
				</h1>
				<p className="text-slate-600 text-base max-w-2xl mx-auto">
					Expert guides, tutorials, and tips for compressing, converting, and optimizing images for web performance and SEO.
				</p>
			</div>

			{/* Featured Posts */}
			<div className="mb-12">
				<h2 className="text-lg font-bold text-slate-900 mb-6">Featured Articles</h2>
				<div className="grid md:grid-cols-2 gap-4">
					{blogPosts
						.filter((post) => post.featured)
						.map((post) => (
							<article
								key={post.slug}
								className="bg-white border border-slate-300 overflow-hidden hover:shadow-md transition-shadow"
							>
								<div className="p-5">
									<div className="flex items-center gap-2 mb-3 flex-wrap">
										<span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs font-bold">
											{post.category}
										</span>
										<div className="flex items-center gap-3 text-xs text-slate-600">
											<span className="flex items-center gap-1">
												<Calendar className="w-3 h-3" />
												{post.date}
											</span>
											<span className="flex items-center gap-1">
												<Clock className="w-3 h-3" />
												{post.readTime}
											</span>
										</div>
									</div>
									<h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2">
										<Link href={`/blog/${post.slug}`} className="hover:text-slate-700 transition-colors">
											{post.title}
										</Link>
									</h3>
									<p className="text-slate-600 text-xs mb-4 line-clamp-2">{post.description}</p>
									<Link
										href={`/blog/${post.slug}`}
										className="inline-flex items-center gap-1 text-slate-900 font-bold text-xs hover:gap-2 transition-all"
									>
										Read article <ArrowRight className="w-3 h-3" />
									</Link>
								</div>
							</article>
						))}
				</div>
			</div>

			{/* All Posts */}
			<div className="mb-12">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-lg font-bold text-slate-900">All Articles</h2>
					<div className="text-xs text-slate-600">{blogPosts.length} articles</div>
				</div>

				{/* Categories */}
				<div className="flex flex-wrap gap-2 mb-6">
					{categories.map((cat) => (
						<button
							key={cat.name}
							className={`px-3 py-2 border text-xs font-bold transition-colors ${
								cat.name === "All"
									? "border-slate-900 bg-slate-900 text-white"
									: "bg-slate-100 text-slate-700 hover:bg-slate-200"
							}`}
						>
							{cat.name} {cat.count > 0 && <span className="opacity-70">({cat.count})</span>}
						</button>
					))}
				</div>

				{/* Posts Grid */}
				<div className="space-y-3">
					{blogPosts.map((post) => (
						<article
							key={post.slug}
							className="flex flex-col sm:flex-row items-start gap-3 p-4 bg-white border border-slate-300 hover:shadow-md transition-shadow"
						>
							<div className="flex-1 min-w-0">
								<div className="flex items-center gap-2 mb-2 flex-wrap">
									<span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs font-bold">
										{post.category}
									</span>
									<div className="flex items-center gap-1 text-xs text-slate-600">
										<Calendar className="w-3 h-3" />
										{post.date}
									</div>
								</div>
								<h3 className="text-base font-bold text-slate-900 mb-1">
									<Link href={`/blog/${post.slug}`} className="hover:text-slate-700 transition-colors">
										{post.title}
									</Link>
								</h3>
								<p className="text-slate-600 text-xs mb-2 line-clamp-2">{post.description}</p>
								<div className="flex items-center justify-between gap-2">
									<Link
										href={`/blog/${post.slug}`}
										className="inline-flex items-center gap-1 text-slate-900 font-bold text-xs hover:gap-2 transition-all"
									>
										Read more <ArrowRight className="w-3 h-3" />
									</Link>
									<span className="text-xs text-slate-600 flex items-center gap-1 whitespace-nowrap">
										<Clock className="w-3 h-3" /> {post.readTime}
									</span>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>

			{/* Newsletter CTA */}
			<div className="bg-white border border-slate-300 p-6 text-center">
				<h3 className="text-lg font-bold text-slate-900 mb-2">Stay Updated with Latest Tips</h3>
				<p className="text-slate-600 text-sm mb-4 max-w-md mx-auto">
					Get image optimization tips, tool updates, and performance strategies delivered to your inbox.
				</p>
				<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
					<input
						type="email"
						placeholder="Your email address"
						className="flex-1 px-3 py-2 border border-slate-300 text-sm focus:outline-none focus:border-slate-400"
					/>
					<button
						type="submit"
						className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
					>
						Subscribe
					</button>
				</form>
				<p className="text-xs text-slate-600 mt-3">No spam. Unsubscribe anytime.</p>
			</div>
		</div>
	);
}
