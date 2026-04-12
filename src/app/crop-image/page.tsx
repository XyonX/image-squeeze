import type { Metadata } from "next";
import { CropImageClient } from "./CropImageClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Crop Image Online — Free & Private | Image Cropper Tool",
	description:
		"Free online image cropper tool. Crop images with custom or preset aspect ratios including social media presets. 100% private browser-based processing. No signup required.",
	keywords: [
		"crop image",
		"crop image online",
		"image cropper",
		"photo cropper",
		"aspect ratio cropper",
		"social media crop",
		"profile picture cropper",
		"free image tools"
	],
	openGraph: {
		title: "Crop Image Online — Free & Private Image Cropper Tool",
		description: "Crop images with custom or preset aspect ratios including social media presets. 100% private browser-based processing.",
	},
};

export default function CropImagePage() {
	const tool = tools.find(t => t.id === "crop-image");
	
	if (!tool) {
		return <CropImageClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<CropImageClient />
		</ToolPageContent>
	);
}
