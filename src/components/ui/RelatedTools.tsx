import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedTools, tools } from "@/lib/tools";

export function RelatedTools({ currentToolId }: { currentToolId: string }) {
	const related = getRelatedTools(currentToolId, 4);

	return (
		<section className="mt-12 pt-8 border-t border-slate-200">
			<h2 className="text-lg font-bold text-slate-900 mb-4">You might also need</h2>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
				{related.map((tool) => (
					<Link
						key={tool.id}
						href={tool.route}
						className="group flex flex-col items-center gap-3 p-5 bg-white border border-slate-200 rounded-xl hover:border-primary/30 hover:shadow-md transition-all"
					>
						<div
							className="w-10 h-10 rounded-lg flex items-center justify-center"
							style={{ backgroundColor: `${tool.color}15` }}
						>
							<tool.icon className="w-5 h-5" style={{ color: tool.color }} />
						</div>
						<span className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors text-center">{tool.name}</span>
					</Link>
				))}
			</div>

			{/* Browse all tools CTA */}
			<div className="mt-4 text-center">
				<Link
					href="/"
					className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
				>
					Browse all {tools.length} tools <ArrowRight className="w-3.5 h-3.5" />
				</Link>
			</div>
		</section>
	);
}
