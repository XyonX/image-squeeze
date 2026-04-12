import type { Metadata } from "next";
import { AddWatermarkClient } from "./AddWatermarkClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Add Watermark Online — Free & Private | Watermark Tool",
	description:
		"Free online watermark tool. Add text or logo watermark to images with customizable position, size, and opacity. 100% private browser-based processing. No signup required.",
	keywords: [
		"add watermark",
		"watermark image",
		"photo watermark",
		"logo watermark",
		"copyright protection",
		"brand images",
		"image protection",
		"free image tools"
	],
	openGraph: {
		title: "Add Watermark Online — Free & Private Watermark Tool",
		description: "Add text or logo watermark to images with customizable position, size, and opacity. 100% private browser-based processing.",
	},
};

export default function AddWatermarkPage() {
	const tool = tools.find(t => t.id === "add-watermark");
	
	if (!tool) {
		return <AddWatermarkClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<AddWatermarkClient />
		</ToolPageContent>
	);
}
