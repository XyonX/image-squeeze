import type { Metadata } from "next";
import { RemoveExifClient } from "./RemoveExifClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Remove EXIF Data Online — Free & Private | Metadata Remover",
	description:
		"Free online EXIF data remover tool. Strip metadata, GPS location, camera info from images for privacy. 100% private browser-based processing. No signup required.",
	keywords: [
		"remove exif",
		"exif data remover",
		"strip metadata",
		"photo privacy",
		"gps removal",
		"camera info removal",
		"image privacy tool",
		"free image tools"
	],
	openGraph: {
		title: "Remove EXIF Data Online — Free & Private Metadata Remover",
		description: "Strip metadata, GPS location, camera info from images for privacy. 100% private browser-based processing.",
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
