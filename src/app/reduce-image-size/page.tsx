import type { Metadata } from "next";
import { ReduceImageSizeClient } from "./ReduceImageSizeClient";

export const metadata: Metadata = {
	title: "Reduce Image to Target Size — Free & Private",
	description:
		"Compress images to a specific file size like 100KB, 200KB, or 500KB. Smart quality optimization. 100% private — files never leave your browser.",
	keywords: ["reduce image size", "compress image to 100kb", "compress image to specific size", "image size reducer"],
};

export default function ReduceImageSizePage() {
	return <ReduceImageSizeClient />;
}
