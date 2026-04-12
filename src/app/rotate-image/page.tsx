import type { Metadata } from "next";
import { RotateImageClient } from "./RotateImageClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Rotate Image Online — Free & Private | Image Rotator Tool",
	description:
		"Free online image rotator tool. Rotate images 90°, 180°, 270° or flip horizontally/vertically. 100% private browser-based processing. No signup required.",
	keywords: [
		"rotate image",
		"rotate image online",
		"image rotator",
		"photo rotator",
		"flip image",
		"image orientation",
		"correct photo rotation",
		"free image tools"
	],
	openGraph: {
		title: "Rotate Image Online — Free & Private Image Rotator Tool",
		description: "Rotate images 90°, 180°, 270° or flip horizontally/vertically. 100% private browser-based processing.",
	},
};

export default function RotateImagePage() {
	const tool = tools.find(t => t.id === "rotate-image");
	
	if (!tool) {
		return <RotateImageClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<RotateImageClient />
		</ToolPageContent>
	);
}
