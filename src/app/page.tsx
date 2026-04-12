import { tools, getRelatedTools } from "@/lib/tools";
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
			<section className="flex items-center justify-between gap-4 bg-slate-50 border-b border-slate-200 px-0 py-4 mb-8">
				<div>
					<h1 className="text-3xl font-bold text-slate-900">Image Tools</h1>
					<p className="text-sm text-slate-600 mt-1">{tools.length} total tools available</p>
				</div>
				<div className="flex gap-2">
					<div className="px-4 py-2 bg-white border border-slate-300 text-sm font-semibold text-slate-700">
						All Tools
					</div>
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

			{/* Popular / Trending Tools - Larger Cards */}
			<section className="space-y-3 mb-8">
				<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
					<span className="inline-block w-3 h-3 bg-orange-500"></span>
					Popular Right Now
				</h2>
				<p className="text-xs text-slate-600">Most-used tools to get started</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{popularTools.map((tool) => (
						<Link key={tool.id} href={tool.route} className="group border border-slate-300 p-5 hover:shadow-md hover:border-slate-400 transition-all bg-white">
							<div className="flex flex-col items-center text-center h-full">
								<div
									className="w-14 h-14 flex items-center justify-center mb-3"
									style={{ backgroundColor: `${tool.color}15` }}
								>
									<tool.icon className="w-7 h-7" style={{ color: tool.color }} />
								</div>
								<span className="text-sm font-bold text-slate-900 group-hover:text-slate-700">{tool.name}</span>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* Featured Workflows */}
			<section className="space-y-4 border-t border-slate-200 pt-6">
				<div>
					<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
						<span className="inline-block w-3 h-3 bg-green-500"></span>
						Workflows
					</h2>
					<p className="text-xs text-slate-600 mt-1">Combine tools for common tasks</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{workflows.map((workflow, idx) => (
						<div key={idx} className="border border-slate-300 p-4">
							<h3 className="font-bold text-slate-900 text-sm mb-1">{workflow.title}</h3>
							<p className="text-xs text-slate-600 mb-3">{workflow.description}</p>
							<div className="grid grid-cols-3 gap-2">
								{workflow.tools.map((tool) => (
									<ToolCard key={tool.id} tool={tool} />
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
						<span className="inline-block w-3 h-3 bg-red-500"></span>
						Compress
					</h2>
					<span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1">{compressTools.length} TOOLS</span>
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
						<span className="inline-block w-3 h-3 bg-blue-500"></span>
						Convert
					</h2>
					<span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1">{convertTools.length} TOOLS</span>
				</div>
				<p className="text-xs text-slate-600">Switch between JPG, PNG, WebP &amp; more</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
					{convertTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Edit &amp; Utilities Section */}
			<section className="space-y-3 border-t border-slate-200 pt-6 mb-8">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
						<span className="inline-block w-3 h-3 bg-purple-500"></span>
						Edit &amp; Utilities
					</h2>
					<span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1">{editTools.length} TOOLS</span>
				</div>
				<p className="text-xs text-slate-600">Resize, rotate, crop &amp; extract metadata</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
					{editTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Learning & Insights Section */}
			<section className="space-y-4 bg-slate-50 border-t border-b border-slate-200 py-8 px-0 mb-8">
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
							<span className="inline-block w-3 h-3 bg-cyan-500"></span>
							Learning Center
						</h2>
						<p className="text-xs text-slate-600 mt-1">Insights about image optimization and performance</p>
					</div>
					<Link href="/blog" className="text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-300 px-3 py-1.5">
						View All Articles
					</Link>
				</div>

				{/* Blog Cards - Horizontal Layout */}
				<div className="space-y-3">
					{articles.map((article) => (
						<a key={article.id} href="#" className="flex gap-4 p-4 bg-white border border-slate-300 hover:shadow-md hover:border-slate-400 transition-all group">
							{/* Icon/Indicator */}
							<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors">
								<div className="w-6 h-6 rounded-full bg-cyan-500"></div>
							</div>

							{/* Content */}
							<div className="flex-1 min-w-0">
								<div className="flex items-start justify-between gap-3 mb-1">
									<h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-700 leading-tight">
										{article.title}
									</h3>
									<span className="text-xs text-slate-500 flex-shrink-0">{article.readTime}</span>
								</div>
								<p className="text-xs text-slate-600 mb-2 line-clamp-2">{article.description}</p>
								<span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 inline-block">
									{article.category}
								</span>
							</div>

							{/* Arrow */}
							<div className="flex items-center justify-center flex-shrink-0">
								<span className="text-slate-400 group-hover:text-slate-600 transition-colors">→</span>
							</div>
						</a>
					))}
				</div>
			</section>
		</div>
	);
}
