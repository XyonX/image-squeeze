import type { Metadata } from "next";
import { CompressPNGClient } from "./CompressPNGClient";

export const metadata: Metadata = {
	title: "Compress PNG Online — Free & Private",
	description:
		"Compress PNG images online for free. Reduce PNG file size with lossless or lossy compression. 100% private — files never leave your browser.",
	keywords: ["compress png", "png compressor", "reduce png size", "compress png online free"],
};

export default function CompressPNGPage() {
	return <CompressPNGClient />;
}
