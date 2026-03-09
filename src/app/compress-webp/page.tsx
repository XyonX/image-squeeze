import type { Metadata } from "next";
import { CompressWebPClient } from "./CompressWebPClient";

export const metadata: Metadata = {
	title: "Compress WebP Online — Free & Private",
	description:
		"Compress WebP images online for free. Reduce WebP file size while maintaining quality and transparency. 100% private — files never leave your browser.",
	keywords: ["compress webp", "webp compressor", "reduce webp size", "compress webp online free"],
};

export default function CompressWebPPage() {
	return <CompressWebPClient />;
}
