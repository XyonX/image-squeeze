import type { Metadata } from "next";
import { AddTextClient } from "./AddTextClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Add Text to Images Online — Free & Private | Text on Photos",
	description:
		"Free online text adder tool. Add custom text to images with multiple fonts, colors, and positioning options. 100% private browser-based processing. No signup required.",
	keywords: [
		"add text to image",
		"text on photos",
		"image text editor",
		"photo caption",
		"meme maker",
		"text overlay",
		"custom text on images",
		"free image tools"
	],
	openGraph: {
		title: "Add Text to Images Online — Free & Private Text Tool",
		description: "Add custom text to images with multiple fonts, colors, and positioning options. 100% private browser-based processing.",
	},
};

export default function AddTextPage() {
	const tool = tools.find(t => t.id === "add-text");
	
	if (!tool) {
		return <AddTextClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<AddTextClient />
		</ToolPageContent>
	);
}
