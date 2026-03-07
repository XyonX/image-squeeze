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
		<div className="space-y-3">
			{items.map((item, i) => (
				<div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
					<button
						onClick={() => setOpenIndex(openIndex === i ? null : i)}
						className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50 transition-colors"
					>
						<span className="font-medium text-sm sm:text-base text-slate-900 pr-4">{item.question}</span>
						<ChevronDown
							className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
								openIndex === i ? "rotate-180" : ""
							}`}
						/>
					</button>
					{openIndex === i && (
						<div className="px-4 sm:px-5 pb-4 sm:pb-5">
							<p className="text-sm text-slate-500 leading-relaxed">{item.answer}</p>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
