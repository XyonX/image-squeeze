import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedTools, tools } from "@/lib/tools";

export function RelatedTools({ currentToolId }: { currentToolId: string }) {
	const related = getRelatedTools(currentToolId, 4);

	return (
		<section className="mt-12 pt-8 border border-slate-300">
			<div className="px-6 pb-6">
				<h2 className="text-lg font-bold text-slate-900 mb-4">You might also need</h2>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
					{related.map((tool) => (
						<Link
							key={tool.id}
							href={tool.route}
							className="flex flex-col items-center gap-2 p-4 bg-white border border-slate-300 hover:border-slate-400 hover:shadow-sm transition-all"
						>
							<div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
								<tool.icon className="w-4 h-4 text-slate-700" />
							</div>
							<span className="text-xs font-bold text-slate-900 text-center truncate w-full">{tool.name}</span>
						</Link>
					))}
				</div>

				{/* Browse all tools CTA */}
				<div className="mt-4 text-center">
					<Link
						href="/"
						className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-slate-700"
					>
						Browse all {tools.length} tools <ArrowRight className="w-3 h-3" />
					</Link>
				</div>
			</div>
		</section>
	);
}
