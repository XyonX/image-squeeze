"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
	question: string;
	answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="space-y-2">
			{items.map((item, i) => (
				<div key={i} className="border border-slate-300 overflow-hidden">
					<button
						onClick={() => setOpenIndex(openIndex === i ? null : i)}
						className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
					>
						<span className="font-bold text-sm text-slate-900 pr-4">{item.question}</span>
						<ChevronDown
							className={`w-4 h-4 text-slate-600 flex-shrink-0 transition-transform duration-200 ${
								openIndex === i ? "rotate-180" : ""
							}`}
						/>
					</button>
					{openIndex === i && (
						<div className="px-4 pb-4 border-t border-slate-200 bg-slate-50">
							<p className="text-xs text-slate-600 leading-relaxed">{item.answer}</p>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
