import type { Metadata } from "next";
import { ConvertToPNGClient } from "./ConvertToPNGClient";

export const metadata: Metadata = {
	title: "Convert to PNG Online — Free & Private",
	description: "Convert JPG, WebP, BMP, GIF images to PNG format with transparency support. 100% private — files never leave your browser.",
	keywords: ["convert to png", "jpg to png", "webp to png", "image converter online free", "convert image to png"],
};

export default function ConvertToPNGPage() {
	return <ConvertToPNGClient />;
}
