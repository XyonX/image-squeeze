"use client";

import { Check, X, Minus } from "lucide-react";

interface ComparisonFeature {
	name: string;
	description?: string;
}

interface ToolComparisonProps {
	title: string;
	subtitle?: string;
	tools: {
		name: string;
		icon: string;
		color: string;
		features: Record<string, boolean | string>;
	}[];
	features: ComparisonFeature[];
	className?: string;
}

export function ToolComparison({
	title,
	subtitle,
	tools,
	features,
	className = "",
}: ToolComparisonProps) {
	return (
		<div className={`bg-white border border-slate-200 rounded-xl p-5 ${className}`}>
			<div className="mb-6">
				<h3 className="font-semibold text-slate-900 text-lg mb-1">{title}</h3>
				{subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
			</div>

			<div className="overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="border-b border-slate-200">
							<th className="text-left py-3 px-4 text-sm font-medium text-slate-700 min-w-[200px]">
								Feature
							</th>
							{tools.map((tool, index) => (
								<th key={index} className="text-center py-3 px-4 min-w-[150px]">
									<div className="flex flex-col items-center">
										<div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${tool.color}`}>
											<span className="text-lg">{tool.icon}</span>
										</div>
										<div className="font-semibold text-slate-900">{tool.name}</div>
									</div>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{features.map((feature, featureIndex) => (
							<tr key={featureIndex} className="border-b border-slate-100 last:border-0">
								<td className="py-3 px-4">
									<div className="font-medium text-slate-900 text-sm">{feature.name}</div>
									{feature.description && (
										<div className="text-xs text-slate-500 mt-1">{feature.description}</div>
									)}
								</td>
								{tools.map((tool, toolIndex) => {
									const value = tool.features[feature.name];
									return (
										<td key={toolIndex} className="py-3 px-4 text-center">
											{typeof value === "boolean" ? (
												value ? (
													<div className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full">
														<Check className="w-3 h-3" />
													</div>
												) : (
													<div className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full">
														<X className="w-3 h-3" />
													</div>
												)
											) : value === "partial" ? (
												<div className="inline-flex items-center justify-center w-6 h-6 bg-amber-100 text-amber-600 rounded-full">
													<Minus className="w-3 h-3" />
												</div>
											) : (
												<span className="text-sm font-medium text-slate-900">{value}</span>
											)}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Legend */}
			<div className="mt-6 pt-6 border-t border-slate-200">
				<div className="flex flex-wrap items-center justify-center gap-4 text-sm">
					<div className="flex items-center gap-2">
						<div className="w-4 h-4 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
							<Check className="w-2.5 h-2.5" />
						</div>
						<span className="text-slate-600">Supported</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-4 h-4 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
							<X className="w-2.5 h-2.5" />
						</div>
						<span className="text-slate-600">Not Supported</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-4 h-4 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
							<Minus className="w-2.5 h-2.5" />
						</div>
						<span className="text-slate-600">Partial Support</span>
					</div>
				</div>
			</div>
		</div>
	);
}