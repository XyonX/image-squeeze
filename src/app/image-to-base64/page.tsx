import type { Metadata } from "next";
import { ImageToBase64Client } from "./ImageToBase64Client";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Image to Base64 Online — Free & Private | Base64 Converter",
	description:
		"Free online Base64 converter tool. Convert any image to Base64 encoded string for embedding in HTML/CSS. 100% private browser-based processing. No signup required.",
	keywords: [
		"image to base64",
		"base64 converter",
		"image encoder",
		"data url",
		"html image embedding",
		"css background image",
		"inline images",
		"free image tools"
	],
	openGraph: {
		title: "Image to Base64 Online — Free & Private Base64 Converter",
		description: "Convert any image to Base64 encoded string for embedding in HTML/CSS. 100% private browser-based processing.",
	},
};

export default function ImageToBase64Page() {
	const tool = tools.find(t => t.id === "image-to-base64");
	
	if (!tool) {
		return <ImageToBase64Client />;
	}

	return (
		<ToolPageContent tool={tool}>
			<ImageToBase64Client />
		</ToolPageContent>
	);
}
