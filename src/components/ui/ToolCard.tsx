import Link from "next/link";
import type { Tool } from "@/lib/tools";

const comingSoonTools = new Set<string>();

export function ToolCard({ tool }: { tool: Tool }) {
	const isComingSoon = comingSoonTools.has(tool.id);

	return (
		<Link
			href={tool.route}
			className={`group relative flex flex-col items-center gap-3 p-6 bg-white border border-slate-200 rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 ${isComingSoon ? "opacity-70" : ""}`}
		>
			{isComingSoon && (
				<span className="absolute top-2 right-2 text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">Soon</span>
			)}
			<div
				className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
				style={{ backgroundColor: `${tool.color}15` }}
			>
				<tool.icon className="w-6 h-6" style={{ color: tool.color }} />
			</div>
			<span className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors text-center">
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
