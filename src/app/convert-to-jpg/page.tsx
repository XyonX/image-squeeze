import type { Metadata } from "next";
import { ConvertToJPGClient } from "./ConvertToJPGClient";

export const metadata: Metadata = {
	title: "Convert to JPG Online — Free & Private",
	description: "Convert PNG, WebP, BMP, GIF images to JPG format online for free. 100% private — files never leave your browser.",
	keywords: ["convert to jpg", "png to jpg", "webp to jpg", "convert image to jpeg", "image converter online free"],
};

export default function ConvertToJPGPage() {
	return <ConvertToJPGClient />;
}
