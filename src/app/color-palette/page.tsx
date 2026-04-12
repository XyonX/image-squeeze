import type { Metadata } from "next";
import { ColorPaletteClient } from "./ColorPaletteClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "Color Palette Generator Online — Extract Colors from Images | HEX, RGB, HSL",
	description:
		"Free online color palette generator tool. Extract color palette from images. Get HEX, RGB, and HSL values for design projects. 100% private browser-based processing.",
	keywords: [
		"color palette generator",
		"extract colors from image",
		"color palette from photo",
		"image color extractor",
		"hex color picker",
		"rgb values from image",
		"design color palette",
		"color scheme generator"
	],
	openGraph: {
		title: "Color Palette Generator Online — Extract Colors from Images",
		description: "Extract color palette from images. Get HEX, RGB, and HSL values for design projects. 100% private browser-based processing.",
	},
};

export default function ColorPalettePage() {
	const tool = tools.find(t => t.id === "color-palette");
	
	if (!tool) {
		return <ColorPaletteClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<ColorPaletteClient />
		</ToolPageContent>
	);
}