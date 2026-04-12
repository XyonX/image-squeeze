import { tools } from "@/lib/tools";
import { ToolCard } from "@/components/ui/ToolCard";

export default function HomePage() {
	const compressTools = tools.filter((t) => t.category === "compress");
	const convertTools = tools.filter((t) => t.category === "convert");
	const editTools = tools.filter((t) => t.category === "edit" || t.category === "utility");

	return (
		<div className="space-y-8">
			{/* Header with Filter */}
			<section className="flex items-center justify-between gap-4 bg-slate-50 border-b border-slate-200 pb-4">
				<div>
					<h1 className="text-3xl font-bold text-slate-900">Image Tools</h1>
					<p className="text-sm text-slate-600 mt-1">{tools.length} total tools available</p>
				</div>
				<div className="flex gap-2">
					<div className="px-4 py-2 bg-white border border-slate-300 rounded text-sm font-semibold text-slate-700">
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
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
					{[...compressTools.slice(0, 3), ...convertTools.slice(0, 3)].map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
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
