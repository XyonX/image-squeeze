import type { Metadata } from "next";
import { ConvertToPNGClient } from "./ConvertToPNGClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Convert to PNG Online — Free & Private | JPG/WebP to PNG",
	description:
		"Free online image converter tool. Convert JPG, WebP images to PNG format with transparency support. 100% private browser-based processing. No signup required.",
	keywords: [
		"convert to png",
		"jpg to png",
		"webp to png",
		"png converter",
		"image converter",
		"transparent images",
		"graphics format",
		"free image tools"
	],
	openGraph: {
		title: "Convert to PNG Online — Free & Private Image Converter",
		description: "Convert JPG, WebP images to PNG format with transparency support. 100% private browser-based processing.",
	},
};

export default function ConvertToPngPage() {
	const tool = tools.find(t => t.id === "convert-to-png");
	
	if (!tool) {
		return <ConvertToPNGClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<ConvertToPNGClient />
		</ToolPageContent>
	);
}
