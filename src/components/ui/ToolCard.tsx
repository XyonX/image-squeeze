import Link from "next/link";
import type { Tool } from "@/lib/tools";

const comingSoonTools = new Set<string>();

export function ToolCard({ tool }: { tool: Tool }) {
	const isComingSoon = comingSoonTools.has(tool.id);

	return (
		<Link
			href={tool.route}
			className={`group relative flex flex-col items-center justify-center gap-3 p-6 bg-white border border-slate-300 hover:border-slate-500 hover:shadow-md transition-all duration-200 ${isComingSoon ? "opacity-60" : ""}`}
		>
			{isComingSoon && (
				<span className="absolute top-2 right-2 text-[9px] font-bold text-amber-600 bg-amber-100 px-2 py-0.5 z-10">Soon</span>
			)}
			
			{/* Icon */}
			<div
				className="w-12 h-12 flex items-center justify-center transition-all duration-200 group-hover:scale-105"
				style={{ 
					backgroundColor: `${tool.color}12`,
				}}
			>
				<tool.icon className="w-6 h-6" style={{ color: tool.color }} />
			</div>
			
			{/* Tool name */}
			<span className="text-xs font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-200 text-center leading-tight">
				{tool.name}
			</span>
		</Link>
	);
}

export function ToolCardDetailed({ tool }: { tool: Tool }) {
	return (
		<Link
			href={tool.route}
			className="group flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
		>
			<div
				className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
				style={{ backgroundColor: `${tool.color}15` }}
			>
				<tool.icon className="w-5 h-5" style={{ color: tool.color }} />
			</div>
			<div>
				<h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors text-sm">{tool.name}</h3>
				<p className="text-xs text-slate-500 mt-1 leading-relaxed">{tool.description}</p>
			</div>
		</Link>
	);
}
