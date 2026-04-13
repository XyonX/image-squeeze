import type { Metadata } from "next";
import { RemoveExifClient } from "./RemoveExifClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Remove EXIF Data from Photos Online - Free Metadata Remover Tool | GetImgTools",
	description:
		"Strip EXIF metadata, GPS location, camera info from images for privacy. Free online EXIF data remover tool. Protect your privacy by removing hidden data from photos. 100% private browser-based processing.",
	keywords: [
		"remove exif data",
		"exif data remover",
		"strip metadata from photos",
		"photo privacy tool",
		"gps removal from images",
		"camera info removal",
		"image privacy",
		"free exif remover",
		"online metadata remover",
		"remove data from photos",
		"hidden exif data",
		"how to remove exif data",
		"clear exif",
		"removing exif data",
		"removing metadata from images",
		"how to remove exif",
		"remove metadata from photos",
		"erase exif",
		"remove exif"
	],
	openGraph: {
		title: "Remove EXIF Data from Photos Online - Free Metadata Remover Tool",
		description: "Strip EXIF metadata, GPS location, camera info from images for privacy. Protect your privacy by removing hidden data from photos.",
	},
};

export default function RemoveExifPage() {
	const tool = tools.find(t => t.id === "remove-exif");
	
	if (!tool) {
		return <RemoveExifClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<RemoveExifClient />
		</ToolPageContent>
	);
}
