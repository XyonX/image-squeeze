import type { Metadata } from "next";
import { BulkCompressClient } from "./BulkCompressClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Bulk Compress Images Online — Free & Private | Batch Compressor",
	description:
		"Free online bulk image compressor tool. Compress up to 50 images at once supporting JPG, PNG, and WebP formats. 100% private browser-based processing. No signup required.",
	keywords: [
		"bulk compress",
		"batch compressor",
		"compress multiple images",
		"mass image compression",
		"bulk image optimizer",
		"batch processing",
		"multiple file compression",
		"free image tools"
	],
	openGraph: {
		title: "Bulk Compress Images Online — Free & Private Batch Compressor",
		description: "Compress up to 50 images at once supporting JPG, PNG, and WebP formats. 100% private browser-based processing.",
	},
};

export default function BulkCompressPage() {
	const tool = tools.find(t => t.id === "bulk-compress");
	
	if (!tool) {
		return <BulkCompressClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<BulkCompressClient />
		</ToolPageContent>
	);
}
