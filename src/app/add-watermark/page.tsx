import { WatermarkImagesClient } from "./WatermarkImagesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Add Watermark to Images Online — Free & Private | GetImgTools",
	description: "Add text or logo watermark to images online. Customize position, size, opacity. 100% private — files never leave your browser.",
	keywords: ["add watermark to image online", "watermark photos", "text watermark", "logo watermark", "batch watermark"],
	openGraph: {
		title: "Add Watermark to Images Online — Free & Private",
		description: "Add text or logo watermark to images. Customize position, size, opacity. 100% private — files never leave your browser.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Add Watermark to Images Online — Free & Private",
		description: "Add text or logo watermark to images. Customize position, size, opacity. 100% private — files never leave your browser.",
	},
};

export default function AddWatermarkPage() {
	return <WatermarkImagesClient />;
}