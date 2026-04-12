import type { Metadata } from "next";
import { ImageMetadataClient } from "./ImageMetadataClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Image Metadata Viewer Online — Free EXIF Data Viewer | Camera Info, GPS",
	description:
		"Free online image metadata viewer tool. View EXIF data, camera settings, GPS location, and other metadata from images. 100% private browser-based processing.",
	keywords: [
		"image metadata viewer",
		"exif data viewer",
		"view image metadata",
		"camera info from photo",
		"gps location from image",
		"exif viewer online",
		"photo metadata",
		"image information"
	],
	openGraph: {
		title: "Image Metadata Viewer Online — Free EXIF Data Viewer",
		description: "View EXIF data, camera settings, GPS location, and other metadata from images. 100% private browser-based processing.",
	},
};

export default function ImageMetadataPage() {
	const tool = tools.find(t => t.id === "image-metadata");
	
	if (!tool) {
		return <ImageMetadataClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<ImageMetadataClient />
		</ToolPageContent>
	);
}