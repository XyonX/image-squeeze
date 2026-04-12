import type { Metadata } from "next";
import { ResizeImageClient } from "./ResizeImageClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Resize Image Online — Free & Private | Image Resizer Tool",
	description:
		"Free online image resizer tool. Resize images by percentage or exact dimensions with social media presets. 100% private browser-based processing. No signup required.",
	keywords: [
		"resize image",
		"resize image online",
		"image resizer",
		"resize photo online free",
		"image size changer",
		"photo resizer",
		"social media image sizes",
		"free image tools"
	],
	openGraph: {
		title: "Resize Image Online — Free & Private Image Resizer Tool",
		description: "Resize images by percentage or exact dimensions with social media presets. 100% private browser-based processing.",
	},
};

export default function ResizeImagePage() {
	const tool = tools.find(t => t.id === "resize-image");
	
	if (!tool) {
		return <ResizeImageClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<ResizeImageClient />
		</ToolPageContent>
	);
}
