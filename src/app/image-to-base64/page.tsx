import type { Metadata } from "next";
import { ImageToBase64Client } from "./ImageToBase64Client";

export const metadata: Metadata = {
	title: "Image to Base64 Converter — Free & Private",
	description: "Convert any image to Base64 encoded string for embedding in HTML, CSS, or JSON. 100% private — files never leave your browser.",
	keywords: ["image to base64", "base64 encoder", "convert image to base64", "data uri generator", "base64 image online"],
};

export default function ImageToBase64Page() {
	return <ImageToBase64Client />;
}
