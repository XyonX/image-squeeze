import type { Metadata } from "next";
import { CompressJPGClient } from "./CompressJPGClient";

export const metadata: Metadata = {
	title: "Compress JPG Online — Free & Private",
	description:
		"Compress JPG images online for free. Reduce JPEG file size by up to 80% without losing quality. 100% private — files never leave your browser.",
	keywords: ["compress jpg", "compress jpeg", "jpg compressor", "reduce jpg size", "compress jpg online free"],
};

export default function CompressJPGPage() {
	return <CompressJPGClient />;
}
