"use client";

import { ReactNode } from "react";

export interface TwoColumnLayoutProps {
	left: ReactNode;
	right: ReactNode;
	ratio?: [number, number]; // e.g., [1, 1] for 50/50, [2, 1] for 66/33
	collapseOnMobile?: boolean;
	gap?: string;
	leftClassName?: string;
	rightClassName?: string;
	containerClassName?: string;
}

export function TwoColumnLayout({
	left,
	right,
	ratio = [1, 1],
	collapseOnMobile = true,
	gap = "gap-8",
	leftClassName = "",
	rightClassName = "",
	containerClassName = "",
}: TwoColumnLayoutProps) {
	// Calculate grid column classes based on ratio
	const total = ratio[0] + ratio[1];
	const leftWidth = Math.round((ratio[0] / total) * 12); // Convert to 12-column grid
	const rightWidth = 12 - leftWidth;

	// Grid column classes
	const leftColClass = `lg:col-span-${leftWidth}`;
	const rightColClass = `lg:col-span-${rightWidth}`;

	// Mobile behavior
	const mobileClass = collapseOnMobile ? "flex-col" : "grid-cols-1 lg:grid-cols-12";

	return (
		<div className={`${containerClassName}`}>
			{/* Desktop: Two columns */}
			<div className={`hidden lg:grid grid-cols-12 ${gap}`}>
				<div className={`${leftColClass} ${leftClassName}`}>
					{left}
				</div>
				<div className={`${rightColClass} ${rightClassName}`}>
					{right}
				</div>
			</div>

			{/* Mobile: Stacked or responsive grid */}
			<div className={`lg:hidden ${mobileClass} ${gap} flex`}>
				<div className={`${leftClassName} w-full`}>
					{left}
				</div>
				<div className={`${rightClassName} w-full`}>
					{right}
				</div>
			</div>
		</div>
	);
}

// Alternative simpler implementation with CSS grid
export function SimpleTwoColumnLayout({
	left,
	right,
	ratio = [1, 1],
	collapseOnMobile = true,
	gap = "gap-8",
	leftClassName = "",
	rightClassName = "",
	containerClassName = "",
}: TwoColumnLayoutProps) {
	const gridTemplateColumns = `${ratio[0]}fr ${ratio[1]}fr`;

	return (
		<div
			className={`
				${containerClassName}
				${collapseOnMobile ? 'flex flex-col lg:grid' : 'grid'}
				${gap}
			`}
			style={
				!collapseOnMobile
					? { gridTemplateColumns: `repeat(${ratio[0] + ratio[1]}, 1fr)` }
					: undefined
			}
		>
			{/* Left column */}
			<div
				className={`
					${leftClassName}
					${collapseOnMobile ? 'lg:col-span-1' : ''}
				`}
				style={
					!collapseOnMobile
						? { gridColumn: `span ${ratio[0]}` }
						: undefined
				}
			>
				{left}
			</div>

			{/* Right column */}
			<div
				className={`
					${rightClassName}
					${collapseOnMobile ? 'lg:col-span-1' : ''}
				`}
				style={
					!collapseOnMobile
						? { gridColumn: `span ${ratio[1]}` }
						: undefined
				}
			>
				{right}
			</div>
		</div>
	);
}

// Card-based two column layout (for tool interfaces)
export function CardTwoColumnLayout({
	left,
	right,
	leftTitle,
	rightTitle,
	leftIcon,
	rightIcon,
	collapseOnMobile = true,
	gap = "gap-8",
}: {
	left: ReactNode;
	right: ReactNode;
	leftTitle?: string;
	rightTitle?: string;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	collapseOnMobile?: boolean;
	gap?: string;
}) {
	return (
		<div className={`${collapseOnMobile ? 'flex flex-col lg:grid lg:grid-cols-2' : 'grid grid-cols-1 lg:grid-cols-2'} ${gap}`}>
			{/* Left card */}
			<div className="bg-white border border-slate-200 rounded-2xl p-6">
				{(leftTitle || leftIcon) && (
					<div className="flex items-center gap-2 mb-4">
						{leftIcon && <div className="text-primary">{leftIcon}</div>}
						{leftTitle && <h3 className="text-lg font-semibold text-slate-900">{leftTitle}</h3>}
					</div>
				)}
				{left}
			</div>

			{/* Right card */}
			<div className="bg-white border border-slate-200 rounded-2xl p-6">
				{(rightTitle || rightIcon) && (
					<div className="flex items-center gap-2 mb-4">
						{rightIcon && <div className="text-primary">{rightIcon}</div>}
						{rightTitle && <h3 className="text-lg font-semibold text-slate-900">{rightTitle}</h3>}
					</div>
				)}
				{right}
			</div>
		</div>
	);
}

// Upload-Preview layout (common pattern for tools)
export function UploadPreviewLayout({
	uploadSection,
	previewSection,
	controlsSection,
	resultsSection,
	showPreview = true,
}: {
	uploadSection: ReactNode;
	previewSection?: ReactNode;
	controlsSection: ReactNode;
	resultsSection?: ReactNode;
	showPreview?: boolean;
}) {
	return (
		<div className="space-y-8">
			{/* Upload section */}
			{uploadSection}

			{/* Two-column area for controls and preview */}
			{(previewSection || controlsSection) && (
				<CardTwoColumnLayout
					left={
						<div className="space-y-6">
							{controlsSection}
						</div>
					}
					right={
						showPreview && previewSection ? (
							<div className="space-y-4">
								{previewSection}
							</div>
						) : (
							<div className="h-full flex items-center justify-center text-slate-400">
								<p>Preview will appear here after upload</p>
							</div>
						)
					}
					leftTitle="Settings"
					rightTitle="Preview"
					collapseOnMobile={true}
				/>
			)}

			{/* Results section (full width) */}
			{resultsSection && (
				<div className="mt-8">
					{resultsSection}
				</div>
			)}
		</div>
	);
}