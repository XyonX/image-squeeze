import type { Metadata } from "next";
import { RotateImageClient } from "./RotateImageClient";

export const metadata: Metadata = {
	title: "Rotate & Flip Image Online — Free & Private",
	description: "Rotate images 90°, 180°, 270° or flip horizontally/vertically. 100% private — files never leave your browser.",
	keywords: ["rotate image online", "flip image online", "rotate photo", "mirror image", "rotate image free"],
};

export default function RotateImagePage() {
	return <RotateImageClient />;
}
