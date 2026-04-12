import type { Metadata } from "next";
import { CompressWebPClient } from "./CompressWebPClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Compress WebP Online — Free & Private | Reduce WebP File Size",
	description:
		"Free online WebP compression tool. Reduce WebP file size while maintaining quality and transparency. 100% private browser-based processing. No signup required.",
	keywords: [
		"compress webp",
		"webp compressor",
		"reduce webp size",
		"compress webp online free",
		"webp optimization",
		"image compression",
		"modern image format",
		"web performance",
		"reduce image file size",
		"free image tools"
	],
	openGraph: {
		title: "Compress WebP Online — Free & Private WebP Compression Tool",
		description: "Reduce WebP file size while maintaining quality and transparency. 100% private browser-based processing.",
	},
};

export default function CompressWebPPage() {
	const tool = tools.find(t => t.id === "compress-webp");
	
	if (!tool) {
		return <CompressWebPClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<CompressWebPClient />
		</ToolPageContent>
	);
}
