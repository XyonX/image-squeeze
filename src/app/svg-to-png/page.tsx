import type { Metadata } from "next";
import { SvgToPngClient } from "./SvgToPngClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "SVG to PNG Online — Free & Private | Vector to Raster Converter",
	description:
		"Free online SVG to PNG converter tool. Convert SVG vector files to PNG raster images at any resolution. 100% private browser-based processing. No signup required.",
	keywords: [
		"svg to png",
		"svg converter",
		"vector to raster",
		"png converter",
		"logo converter",
		"graphics conversion",
		"high resolution conversion",
		"free image tools"
	],
	openGraph: {
		title: "SVG to PNG Online — Free & Private Vector to Raster Converter",
		description: "Convert SVG vector files to PNG raster images at any resolution. 100% private browser-based processing.",
	},
};

export default function SvgToPngPage() {
	const tool = tools.find(t => t.id === "svg-to-png");
	
	if (!tool) {
		return <SvgToPngClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<SvgToPngClient />
		</ToolPageContent>
	);
}
