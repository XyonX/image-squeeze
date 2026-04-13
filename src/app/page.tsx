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
			{/* Hero Section with Stats */}
			<div className="relative text-center mb-8">
				{/* Background gradient */}
				<div className="absolute inset-0 -top-8 -left-8 -right-8 h-64 bg-gradient-to-br from-primary/5 via-purple-500/5 to-emerald-500/5 rounded-3xl blur-3xl opacity-70"></div>
				
				<div className="relative">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
						Free Online <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Image Tools</span>
					</h1>
					<p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
						Compress, resize, convert & edit — all in your browser. 
						<span className="text-slate-800 font-semibold"> 100% private</span>, no signup needed.
					</p>
					
					{/* Stats */}
					<div className="flex flex-wrap justify-center gap-6 mb-10">
						<div className="flex flex-col items-center">
							<div className="text-2xl font-bold text-slate-900">20+</div>
							<div className="text-sm text-slate-500">Tools</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="text-2xl font-bold text-slate-900">100%</div>
							<div className="text-sm text-slate-500">Private</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="text-2xl font-bold text-slate-900">0</div>
							<div className="text-sm text-slate-500">Signup</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="text-2xl font-bold text-slate-900">∞</div>
							<div className="text-sm text-slate-500">Free</div>
						</div>
					</div>
					
					{/* Popular tools quick links */}
					<div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
						<a href="/compress-jpg" className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/15 transition-colors duration-200">
							Compress JPG
						</a>
						<a href="/resize-image" className="px-4 py-2 bg-gradient-to-r from-purple-600/10 to-purple-600/5 border border-purple-600/20 rounded-full text-sm font-medium text-purple-600 hover:bg-purple-600/15 transition-colors duration-200">
							Resize Image
						</a>
						<a href="/convert-to-webp" className="px-4 py-2 bg-gradient-to-r from-emerald-600/10 to-emerald-600/5 border border-emerald-600/20 rounded-full text-sm font-medium text-emerald-600 hover:bg-emerald-600/15 transition-colors duration-200">
							Convert to WebP
						</a>
						<a href="/bulk-compress" className="px-4 py-2 bg-gradient-to-r from-amber-600/10 to-amber-600/5 border border-amber-600/20 rounded-full text-sm font-medium text-amber-600 hover:bg-amber-600/15 transition-colors duration-200">
							Bulk Compress
						</a>
					</div>
				</div>
			</div>

			{/* Featured Tool Spotlight - Hero Card */}
			{featuredTool && (
				<section className="mb-8 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-2xl p-8">
					<div className="flex items-start justify-between gap-8">
						<div className="flex-1">
							<div className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-bold px-3 py-1 mb-3 rounded-full">
								FEATURED TOOL
							</div>
							<h2 className="text-3xl font-bold mb-3 text-slate-900">{featuredTool.name}</h2>
							<p className="text-slate-600 text-sm mb-4 max-w-lg">
								The most popular tool for reducing image file sizes without quality loss. Perfect for web optimization and social media.
							</p>
							<Link 
								href={featuredTool.route}
								className="inline-block bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
							>
								Try Now →
							</Link>
						</div>
						<div className="hidden md:flex items-center justify-center">
							<div
								className="w-32 h-32 flex items-center justify-center rounded-2xl"
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
					<span className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-base">🔥</span>
					<span className="text-orange-500">Popular</span> Right Now
				</h2>
				<p className="text-xs text-slate-600">Most-used tools to get started</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{popularTools.map((tool) => (
						<Link key={tool.id} href={tool.route} className="group bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 p-5">
							<div className="flex flex-col items-center text-center h-full">
								<div
									className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
									style={{ 
										background: `linear-gradient(135deg, ${tool.color}15 0%, ${tool.color}10 100%)`,
										border: `1px solid ${tool.color}20`
									}}
								>
									<tool.icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" style={{ color: tool.color }} />
								</div>
								<span className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors duration-300">{tool.name}</span>
							</div>
						</Link>
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
			<section className="space-y-4 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl py-8 px-6 mb-8">
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
							<span className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center text-base">📚</span>
							<span className="text-cyan-500">Learning</span> Center
						</h2>
						<p className="text-xs text-slate-600 mt-1">Insights about image optimization and performance</p>
					</div>
					<Link href="/blog" className="text-xs font-bold text-slate-600 hover:text-primary border border-slate-300 hover:border-primary/30 px-3 py-1.5 rounded-lg transition-colors duration-200">
						View All Articles
					</Link>
				</div>

				{/* Blog Cards - Horizontal Layout */}
				<div className="space-y-3">
					{articles.map((article) => (
						<a key={article.id} href="#" className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 group">
							{/* Icon/Indicator */}
							<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg">
								<div className="w-6 h-6 rounded-full bg-cyan-500"></div>
							</div>

							{/* Content */}
							<div className="flex-1 min-w-0">
								<div className="flex items-start justify-between gap-3 mb-1">
									<h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
										{article.title}
									</h3>
									<span className="text-xs text-slate-500 flex-shrink-0">{article.readTime}</span>
								</div>
								<p className="text-xs text-slate-600 mb-2 line-clamp-2">{article.description}</p>
								<span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded inline-block">
									{article.category}
								</span>
							</div>

							{/* Arrow */}
							<div className="flex items-center justify-center flex-shrink-0">
								<span className="text-slate-400 group-hover:text-primary transition-colors">→</span>
							</div>
						</a>
					))}
				</div>
			</section>
		</div>
	);
}
