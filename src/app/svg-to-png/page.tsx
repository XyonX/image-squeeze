import type { Metadata } from "next";
import { SvgToPngClient } from "./SvgToPngClient";

export const metadata: Metadata = {
	title: "SVG to PNG Converter — Free & Private",
	description: "Convert SVG vector files to PNG raster images at any resolution. 100% private — files never leave your browser.",
	keywords: ["svg to png", "svg converter", "convert svg to png", "svg to png online", "vector to raster"],
};

export default function SvgToPngPage() {
	return <SvgToPngClient />;
}
