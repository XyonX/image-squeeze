import type { Metadata } from "next";
import { BulkCompressClient } from "./BulkCompressClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Bulk Compress Images Online - Free Batch Image Compressor Tool | GetImgTools",
	description:
		"Compress multiple images at once with our free bulk image compressor. Reduce file sizes of JPG, PNG, WebP images in batch. 100% private, no upload required. Perfect for websites, social media, and email.",
	keywords: [
		"bulk compress images",
		"batch compressor",
		"compress multiple images at once",
		"mass image compression",
		"bulk image optimizer",
		"batch image processing",
		"compress images in bulk",
		"free bulk image compressor",
		"online batch compressor",
		"compress bulk images",
		"bulk jpg compress",
		"compress image bulk"
	],
	openGraph: {
		title: "Bulk Compress Images Online - Free Batch Image Compressor Tool",
		description: "Compress multiple images at once with our free bulk image compressor. Reduce file sizes of JPG, PNG, WebP images in batch.",
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
