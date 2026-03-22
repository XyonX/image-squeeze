import { AddTextToImagesClient } from "./AddTextToImagesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Add Text to Images Online — Free & Private | GetImgTools",
	description: "Add custom text to images online. Multiple fonts, colors, sizes, and positioning. 100% private — files never leave your browser.",
	keywords: ["add text to photo online", "text on image", "photo caption", "meme maker", "image text editor"],
	openGraph: {
		title: "Add Text to Images Online — Free & Private",
		description: "Add custom text to images. Multiple fonts, colors, sizes, and positioning. 100% private — files never leave your browser.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Add Text to Images Online — Free & Private",
		description: "Add custom text to images. Multiple fonts, colors, sizes, and positioning. 100% private — files never leave your browser.",
	},
};

export default function AddTextPage() {
	return <AddTextToImagesClient />;
}