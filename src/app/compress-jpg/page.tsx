import type { Metadata } from "next";
import { CompressJPGClient } from "./CompressJPGClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Compress JPG Online — Free & Private | Reduce JPEG File Size",
	description:
		"Free online JPG compression tool. Reduce JPEG file size by up to 80% without visible quality loss. 100% private browser-based processing. No signup required.",
	keywords: [
		"compress jpg",
		"compress jpeg", 
		"jpg compressor",
		"reduce jpg size",
		"compress jpg online free",
		"jpeg optimization",
		"image compression",
		"web performance",
		"reduce image file size",
		"free image tools"
	],
	openGraph: {
		title: "Compress JPG Online — Free & Private Image Compression Tool",
		description: "Reduce JPEG file size by up to 80% with our free browser-based compression tool. 100% private processing.",
	},
};

export default function CompressJPGPage() {
	const tool = tools.find(t => t.id === "compress-jpg");
	
	if (!tool) {
		return <CompressJPGClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<CompressJPGClient />
		</ToolPageContent>
	);
}
