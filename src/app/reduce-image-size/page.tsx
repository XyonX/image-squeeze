import type { Metadata } from "next";
import { ReduceImageSizeClient } from "./ReduceImageSizeClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Reduce Image Size Online — Free & Private | Target Size Compressor",
	description:
		"Free online image size reducer tool. Compress images to specific file sizes — 100KB, 200KB, 500KB, or custom targets. 100% private browser-based processing. No signup required.",
	keywords: [
		"reduce image size",
		"compress to size",
		"target size compressor",
		"image size reducer",
		"file size optimizer",
		"specific size compression",
		"email attachment size",
		"free image tools"
	],
	openGraph: {
		title: "Reduce Image Size Online — Free & Private Target Size Compressor",
		description: "Compress images to specific file sizes — 100KB, 200KB, 500KB, or custom targets. 100% private browser-based processing.",
	},
};

export default function ReduceImageSizePage() {
	const tool = tools.find(t => t.id === "reduce-image-size");
	
	if (!tool) {
		return <ReduceImageSizeClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<ReduceImageSizeClient />
		</ToolPageContent>
	);
}
