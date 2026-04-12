import type { Metadata } from "next";
import { ConvertToWebPClient } from "./ConvertToWebPClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Convert to WebP Online — Free & Private | JPG/PNG to WebP",
	description:
		"Free online image converter tool. Convert JPG, PNG images to WebP format for 30-50% smaller file sizes. 100% private browser-based processing. No signup required.",
	keywords: [
		"convert to webp",
		"jpg to webp",
		"png to webp",
		"webp converter",
		"image converter",
		"modern image format",
		"web performance",
		"free image tools"
	],
	openGraph: {
		title: "Convert to WebP Online — Free & Private Image Converter",
		description: "Convert JPG, PNG images to WebP format for 30-50% smaller file sizes. 100% private browser-based processing.",
	},
};

export default function ConvertToWebpPage() {
	const tool = tools.find(t => t.id === "convert-to-webp");
	
	if (!tool) {
		return <ConvertToWebPClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<ConvertToWebPClient />
		</ToolPageContent>
	);
}
