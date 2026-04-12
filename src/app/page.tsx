import { tools, getRelatedTools } from "@/lib/tools";
import { ToolCard } from "@/components/ui/ToolCard";

export default function HomePage() {
	const compressTools = tools.filter((t) => t.category === "compress");
	const convertTools = tools.filter((t) => t.category === "convert");
	const editTools = tools.filter((t) => t.category === "edit" || t.category === "utility");

	// Popular tools - most useful combination
	const popularTools = [
		tools.find((t) => t.id === "compress-jpg"),
		tools.find((t) => t.id === "bulk-compress"),
		tools.find((t) => t.id === "convert-to-webp"),
		tools.find((t) => t.id === "resize-image"),
		tools.find((t) => t.id === "crop-image"),
		tools.find((t) => t.id === "add-watermark"),
	].filter(Boolean);

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
		<div className="space-y-8">
			{/* Header with Filter */}
			<section className="flex items-center justify-between gap-4 bg-slate-50 border-b border-slate-200 pb-4">
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

			{/* Popular / Trending Tools */}
			<section className="space-y-3">
				<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
					<span className="inline-block w-3 h-3 bg-orange-500"></span>
					Popular Right Now
				</h2>
				<p className="text-xs text-slate-600">Most-used tools to get started</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
					{popularTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
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
			<section className="space-y-3 border-t border-slate-200 pt-6">
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
		</div>
	);
}
