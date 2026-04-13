import { tools } from "@/lib/tools";
import { ToolCard } from "@/components/ui/ToolCard";
import Link from "next/link";

export default function AllToolsPage() {
	const compressTools = tools.filter((t) => t.category === "compress");
	const convertTools = tools.filter((t) => t.category === "convert");
	const editTools = tools.filter((t) => t.category === "edit" || t.category === "utility");

	return (
		<div className="space-y-0">
			{/* Header */}
			<section className="border border-slate-300 p-6 mb-8">
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
					<div>
						<h1 className="text-2xl font-bold text-slate-900">All Image Tools</h1>
						<p className="text-xs text-slate-600 mt-2">{tools.length} total tools available</p>
					</div>
					<Link
						href="/"
						className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors whitespace-nowrap"
					>
						← Back to Home
					</Link>
				</div>
			</section>

			{/* Compress Section */}
			<section className="space-y-3 mb-8">
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
			<section className="space-y-3 mb-8">
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
			<section className="space-y-3 mb-8">
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

			{/* All Tools Grid */}
			<section className="space-y-3 border-t border-slate-300 pt-8 mb-8">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold text-slate-900">All Tools A-Z</h2>
					<span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{tools.length} TOTAL</span>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
					{tools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Back to top */}
			<div className="text-center py-6 border-t border-slate-300">
				<Link
					href="#"
					className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
				>
					↑ Back to Top
				</Link>
			</div>
		</div>
	);
}