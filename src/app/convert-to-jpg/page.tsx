import type { Metadata } from "next";
import { ConvertToJPGClient } from "./ConvertToJPGClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Convert to JPG Online — Free & Private | PNG/WebP to JPG",
	description:
		"Free online image converter tool. Convert PNG, WebP, and other image formats to JPG format. 100% private browser-based processing. No signup required.",
	keywords: [
		"convert to jpg",
		"png to jpg",
		"webp to jpg",
		"jpg converter",
		"image converter",
		"photo converter",
		"universal format",
		"free image tools"
	],
	openGraph: {
		title: "Convert to JPG Online — Free & Private Image Converter",
		description: "Convert PNG, WebP, and other image formats to JPG format. 100% private browser-based processing.",
	},
};

export default function ConvertToJpgPage() {
	const tool = tools.find(t => t.id === "convert-to-jpg");
	
	if (!tool) {
		return <ConvertToJPGClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<ConvertToJPGClient />
		</ToolPageContent>
	);
}
