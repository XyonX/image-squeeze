import Link from "next/link";
import type { Tool } from "@/lib/tools";

const comingSoonTools = new Set<string>();

export function ToolCard({ tool }: { tool: Tool }) {
	const isComingSoon = comingSoonTools.has(tool.id);

	return (
		<Link
			href={tool.route}
			className={`group relative flex flex-col items-center gap-4 p-6 bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ${isComingSoon ? "opacity-70" : ""}`}
		>
			{/* Background gradient on hover */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
			
			{/* Glow effect */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
			
			{isComingSoon && (
				<span className="absolute top-3 right-3 text-[10px] font-bold text-amber-600 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 px-2 py-1 rounded-lg shadow-sm z-10">Soon</span>
			)}
			
			{/* Icon container with gradient background */}
			<div className="relative z-10">
				<div className="absolute inset-0 bg-gradient-to-br from-white to-white/80 rounded-xl blur-sm opacity-60"></div>
				<div
					className="relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
					style={{ 
						background: `linear-gradient(135deg, ${tool.color}15 0%, ${tool.color}10 100%)`,
						border: `1px solid ${tool.color}20`
					}}
				>
					<tool.icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" style={{ color: tool.color }} />
				</div>
			</div>
			
			{/* Tool name */}
			<span className="relative z-10 text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors duration-300 text-center">
				{tool.name}
			</span>
			
			{/* Subtle arrow indicator */}
			<div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</div>
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
