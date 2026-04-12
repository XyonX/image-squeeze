import type { Metadata } from "next";
import { HeicToJpgClient } from "./HeicToJpgClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
	title: "HEIC to JPG Converter Online — Free & Private | iPhone Photo Converter",
	description:
		"Free online HEIC to JPG converter tool. Convert iPhone HEIC/HEIF photos to universal JPG format. 100% private browser-based processing. No signup required.",
	keywords: [
		"heic to jpg",
		"heif to jpg",
		"iphone photo converter",
		"heic converter",
		"heic to jpg online",
		"convert heic to jpg",
		"free heic converter",
		"browser heic converter"
	],
	openGraph: {
		title: "HEIC to JPG Converter Online — Free & Private iPhone Photo Converter",
		description: "Convert iPhone HEIC/HEIF photos to universal JPG format. 100% private browser-based processing.",
	},
};

export default function HeicToJpgPage() {
	const tool = tools.find(t => t.id === "heic-to-jpg");
	
	if (!tool) {
		return <HeicToJpgClient />;
	}

	return (
		<ToolPageContent tool={tool}>
			<HeicToJpgClient />
		</ToolPageContent>
	);
}