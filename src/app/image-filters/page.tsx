import type { Metadata } from "next";
import { ImageFiltersClient } from "./ImageFiltersClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Image Filters Online — Free & Private | Photo Effects Tool",
	description:
		"Free online image filters tool. Apply filters, adjust brightness, contrast, and add effects to images. 100% private browser-based processing. No signup required.",
	keywords: [
		"image filters",
		"photo filters",
		"image effects",
		"photo editor",
		"brightness contrast",
		"image adjustments",
		"photo enhancement",
		"free image tools"
	],
	openGraph: {
		title: "Image Filters Online — Free & Private Photo Effects Tool",
		description: "Apply filters, adjust brightness, contrast, and add effects to images. 100% private browser-based processing.",
	},
};

export default function ImageFiltersPage() {
	const tool = tools.find(t => t.id === "image-filters");
	
	if (!tool) {
		return <ImageFiltersClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<ImageFiltersClient />
		</ToolPageContent>
	);
}
