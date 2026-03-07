import type { Metadata } from "next";
import { ConvertToWebPClient } from "./ConvertToWebPClient";

export const metadata: Metadata = {
	title: "Convert to WebP Online — Free & Private",
	description:
		"Convert JPG, PNG images to WebP format for 30-50% smaller files. Free, private — files never leave your browser.",
	keywords: ["convert to webp", "jpg to webp", "png to webp", "webp converter online free"],
};

export default function ConvertToWebPPage() {
	return <ConvertToWebPClient />;
}
