import type { Metadata } from "next";
import { CompressPNGClient } from "./CompressPNGClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Compress PNG Online — Free & Private | Reduce PNG File Size",
	description:
		"Free online PNG compression tool. Reduce PNG file size with lossless or lossy compression options. 100% private browser-based processing. No signup required.",
	keywords: [
		"compress png",
		"png compressor",
		"reduce png size",
		"compress png online free",
		"png optimization",
		"image compression",
		"lossless compression",
		"transparent png",
		"reduce image file size",
		"free image tools"
	],
	openGraph: {
		title: "Compress PNG Online — Free & Private PNG Compression Tool",
		description: "Reduce PNG file size with lossless or lossy compression. 100% private browser-based processing.",
	},
};

export default function CompressPNGPage() {
	const tool = tools.find(t => t.id === "compress-png");
	
	if (!tool) {
		return <CompressPNGClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<CompressPNGClient />
		</ToolPageContent>
	);
}
