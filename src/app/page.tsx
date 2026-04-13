import { tools } from "@/lib/tools";
import { ToolCard } from "@/components/ui/ToolCard";
import Link from "next/link";

export default function HomePage() {
	const compressTools = tools.filter((t) => t.category === "compress");
	const convertTools = tools.filter((t) => t.category === "convert");
	const editTools = tools.filter((t) => t.category === "edit" || t.category === "utility");

	// Featured tool spotlight
	const featuredTool = tools.find((t) => t.id === "compress-jpg");

	// Popular tools - most useful combination
	const popularTools = [
		tools.find((t) => t.id === "compress-jpg"),
		tools.find((t) => t.id === "bulk-compress"),
		tools.find((t) => t.id === "convert-to-webp"),
		tools.find((t) => t.id === "resize-image"),
		tools.find((t) => t.id === "crop-image"),
		tools.find((t) => t.id === "add-watermark"),
	].filter(Boolean);

	// Learning articles/blog
	const articles = [
		{
			id: 1,
			title: "WebP vs JPEG: Which Format Should You Use?",
			description: "Learn the differences between WebP and JPEG, when to use each format, and how to optimize your images for the web.",
			readTime: "5 min read",
			category: "Image Formats",
		},
		{
			id: 2,
			title: "Why Image Optimization Matters for Web Performance",
			description: "Discover how optimized images can improve your website speed, user experience, and SEO rankings.",
			readTime: "7 min read",
			category: "Performance",
		},
		{
			id: 3,
			title: "The Importance of Removing EXIF Data from Your Images",
			description: "Understand why metadata matters, privacy concerns, and how to safely remove EXIF data before sharing.",
			readTime: "4 min read",
			category: "Privacy",
		},
	];

	// Featured workflows - complementary tools that work together
	const workflows = [
		{
			title: "Optimize for Web",
			description: "Compress → Convert to WebP → Reduce to size",
			tools: [
				tools.find((t) => t.id === "compress-jpg"),
				tools.find((t) => t.id === "convert-to-webp"),
				tools.find((t) => t.id === "reduce-image-size"),
			].filter(Boolean),
		},
		{
			title: "Social Media Prep",
			description: "Resize → Crop → Add Watermark → Compress",
			tools: [
				tools.find((t) => t.id === "resize-image"),
				tools.find((t) => t.id === "crop-image"),
				tools.find((t) => t.id === "add-watermark"),
				tools.find((t) => t.id === "compress-jpg"),
			].filter(Boolean),
		},
		{
			title: "Privacy First",
			description: "Remove metadata → Compress → Convert format",
			tools: [
				tools.find((t) => t.id === "remove-exif"),
				tools.find((t) => t.id === "compress-png"),
				tools.find((t) => t.id === "convert-to-jpg"),
			].filter(Boolean),
		},
		{
			title: "Batch Processing",
			description: "Upload multiple → Bulk compress → Download all",
			tools: [
				tools.find((t) => t.id === "bulk-compress"),
				tools.find((t) => t.id === "reduce-image-size"),
				tools.find((t) => t.id === "compress-webp"),
			].filter(Boolean),
		},
	];

	return (
		<div className="space-y-0">
			{/* Header with Filter */}
			<section className="border border-slate-300 p-6 mb-8">
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
					<div>
						<h1 className="text-2xl font-bold text-slate-900">Image Tools</h1>
						<p className="text-xs text-slate-600 mt-2">{tools.length} total tools available</p>
					</div>
					<Link
						href="/tools"
						className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors whitespace-nowrap"
					>
						View All Tools →
					</Link>
				</div>
			</section>

			{/* Featured Tool Spotlight - Hero Card */}
			{featuredTool && (
				<section className="mb-8 bg-slate-900 text-white p-8 border border-slate-800">
					<div className="flex items-start justify-between gap-8">
						<div className="flex-1">
							<div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 mb-3">
								FEATURED DEAL
							</div>
							<h2 className="text-3xl font-bold mb-3">{featuredTool.name}</h2>
							<p className="text-slate-300 text-sm mb-4 max-w-lg">
								The most popular tool for reducing image file sizes without quality loss. Perfect for web optimization and social media.
							</p>
							<Link 
								href={featuredTool.route}
								className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 transition-colors"
							>
								Try Now →
							</Link>
						</div>
						<div className="hidden md:flex items-center justify-center">
							<div
								className="w-32 h-32 flex items-center justify-center"
								style={{ backgroundColor: `${featuredTool.color}20` }}
							>
								<featuredTool.icon className="w-16 h-16" style={{ color: featuredTool.color }} />
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Popular / Trending Tools */}
			<section className="space-y-3 mb-8">
				<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
					<span className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-base">🔥</span>
					<span className="text-orange-500">Popular</span> Right Now
				</h2>
				<p className="text-xs text-slate-600">Most-used tools to get started</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
					{popularTools.map((tool) => (
						tool && <ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Featured Workflows */}
			<section className="space-y-4 border-t border-slate-200 pt-6">
				<div>
					<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
						<span className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-base">🔄</span>
						<span className="text-green-500">Workflows</span>
					</h2>
					<p className="text-xs text-slate-600 mt-1">Combine tools for common tasks</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{workflows.map((workflow, idx) => (
						<div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
							<h3 className="font-bold text-slate-900 text-sm mb-1">{workflow.title}</h3>
							<p className="text-xs text-slate-600 mb-3">{workflow.description}</p>
							<div className="grid grid-cols-3 gap-2">
								{workflow.tools.map((tool) => (
									tool && <ToolCard key={tool.id} tool={tool} />
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Compress Section */}
			<section className="space-y-3 border-t border-slate-200 pt-6">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
						<span className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-base">🗜️</span>
						<span className="text-red-500">Compress</span> Images
					</h2>
					<span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{compressTools.length} TOOLS</span>
				</div>
				<p className="text-xs text-slate-600">Reduce file size without losing quality</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
					{compressTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Convert Section */}
			<section className="space-y-3 border-t border-slate-200 pt-6">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
						<span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-base">🔄</span>
						<span className="text-blue-500">Convert</span> Formats
					</h2>
					<span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{convertTools.length} TOOLS</span>
				</div>
				<p className="text-xs text-slate-600">Switch between JPG, PNG, WebP & more</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
					{convertTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Edit & Utilities Section */}
			<section className="space-y-3 border-t border-slate-200 pt-6 mb-8">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
						<span className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center text-base">✂️</span>
						<span className="text-purple-500">Edit</span> & Utilities
					</h2>
					<span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{editTools.length} TOOLS</span>
				</div>
				<p className="text-xs text-slate-600">Resize, rotate, crop & extract metadata</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
					{editTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Learning & Insights Section */}
			<section className="space-y-4 border border-slate-300 py-8 px-6 mb-8">
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
							<span className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center text-base">📚</span>
							<span className="text-cyan-500">Learning</span> Center
						</h2>
						<p className="text-xs text-slate-600 mt-1">Insights about image optimization and performance</p>
					</div>
					<Link href="/blog" className="text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-500 px-3 py-1.5 transition-colors">
						View All Articles
					</Link>
				</div>

				{/* Blog Cards - Horizontal Layout */}
				<div className="space-y-3">
					<Link href="/blog/jpg-vs-png-vs-webp-which-format" className="flex gap-4 p-4 bg-white border border-slate-300 hover:border-slate-500 hover:shadow-md transition-all duration-200">
						{/* Icon/Indicator */}
						<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-slate-100">
							<div className="w-6 h-6 bg-slate-600"></div>
						</div>

						{/* Content */}
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-3 mb-1">
								<h3 className="text-sm font-bold text-slate-900 leading-tight">
									JPG vs PNG vs WebP: Which Format Should You Use?
								</h3>
								<span className="text-xs text-slate-500 flex-shrink-0">6 min read</span>
							</div>
							<p className="text-xs text-slate-600 mb-2 line-clamp-2">Comprehensive comparison of image formats. Learn when to use JPG, PNG, or WebP for best quality and smallest file size.</p>
							<span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5">
								Formats
							</span>
						</div>

						{/* Arrow */}
						<div className="flex items-center justify-center flex-shrink-0">
							<span className="text-slate-400">→</span>
						</div>
					</Link>
					
					<Link href="/blog/how-to-compress-images-for-web-performance" className="flex gap-4 p-4 bg-white border border-slate-300 hover:border-slate-500 hover:shadow-md transition-all duration-200">
						{/* Icon/Indicator */}
						<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-slate-100">
							<div className="w-6 h-6 bg-slate-600"></div>
						</div>

						{/* Content */}
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-3 mb-1">
								<h3 className="text-sm font-bold text-slate-900 leading-tight">
									How to Compress Images for Web Performance (2025 Guide)
								</h3>
								<span className="text-xs text-slate-500 flex-shrink-0">8 min read</span>
							</div>
							<p className="text-xs text-slate-600 mb-2 line-clamp-2">Complete guide to image compression for faster websites. Learn techniques, tools, and best practices for optimal web performance.</p>
							<span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5">
								Performance
							</span>
						</div>

						{/* Arrow */}
						<div className="flex items-center justify-center flex-shrink-0">
							<span className="text-slate-400">→</span>
						</div>
					</Link>
					
					<Link href="/blog/remove-exif-data-from-photos-why-how" className="flex gap-4 p-4 bg-white border border-slate-300 hover:border-slate-500 hover:shadow-md transition-all duration-200">
						{/* Icon/Indicator */}
						<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-slate-100">
							<div className="w-6 h-6 bg-slate-600"></div>
						</div>

						{/* Content */}
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-3 mb-1">
								<h3 className="text-sm font-bold text-slate-900 leading-tight">
									Remove EXIF Data from Photos: Why & How to Do It
								</h3>
								<span className="text-xs text-slate-500 flex-shrink-0">5 min read</span>
							</div>
							<p className="text-xs text-slate-600 mb-2 line-clamp-2">Protect your privacy by removing EXIF metadata from images. Learn what EXIF data contains and how to strip it safely.</p>
							<span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5">
								Privacy
							</span>
						</div>

						{/* Arrow */}
						<div className="flex items-center justify-center flex-shrink-0">
							<span className="text-slate-400">→</span>
						</div>
					</Link>
				</div>
			</section>
		</div>
	);
}
