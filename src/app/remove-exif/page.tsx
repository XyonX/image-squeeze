import type { Metadata } from "next";
import { RemoveExifClient } from "./RemoveExifClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Remove EXIF Data from Photos Online Free - Metadata Remover Tool | GetImgTools",
	description:
		"Strip EXIF metadata, GPS location, camera info from images for privacy. Free online EXIF data remover. Remove hidden data from photos. 100% private browser-based processing. No uploads needed.",
	keywords: [
		"remove exif data",
		"exif data remover",
		"strip metadata from photos",
		"photo privacy tool",
		"gps removal from images",
		"camera info removal",
		"image privacy",
		"free exif remover",
		"online metadata remover",
		"remove data from photos",
		"hidden exif data",
		"how to remove exif data",
		"clear exif",
		"removing exif data",
		"removing metadata from images",
		"how to remove exif",
		"remove metadata from photos",
		"erase exif",
		"remove exif",
		"strip exif data",
		"remove exif data from photos",
		"remove exif data from photo",
		"stripping exif data",
		"remove data from picture",
		"delete photo information",
		"strip metadata from photos",
		"exif removal",
		"remove exif data from image",
		"clear exif data",
		"delete exif",
		"no exif"
	],
	openGraph: {
		title: "Remove EXIF Data from Photos Online Free - Metadata Remover Tool",
		description: "Strip EXIF metadata, GPS location, camera info from images for privacy. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "What is EXIF data and why should I remove it?",
		answer: "EXIF (Exchangeable Image File Format) data is metadata embedded in photos by cameras and smartphones. It can include GPS coordinates, date/time, camera model, and device serial numbers. Removing EXIF protects your privacy by preventing others from seeing where and when photos were taken."
	},
	{
		question: "How do I remove EXIF data from photos online for free?",
		answer: "Simply upload your photo to our tool and click 'Remove EXIF'. The metadata is stripped instantly in your browser. Your image never leaves your device — no uploads to any server. Download the clean version immediately."
	},
	{
		question: "Does removing EXIF data reduce image quality?",
		answer: "No, removing EXIF metadata does not affect image quality at all. It only strips the hidden metadata while keeping the actual image pixels unchanged. In fact, it may slightly reduce file size."
	},
	{
		question: "What information is stored in EXIF data?",
		answer: "EXIF data can contain: GPS coordinates (exact location), date and time, camera make and model, lens information, exposure settings (aperture, shutter speed, ISO), flash settings, focal length, and even the photographer's copyright information."
	},
	{
		question: "When should I remove EXIF data from my photos?",
		answer: "You should remove EXIF data before: posting photos on social media, sharing images on marketplaces, sending photos to strangers, publishing real estate listings, journalism or activism work, or any situation where you want to protect your location privacy."
	},
	{
		question: "Can I remove EXIF data from multiple photos at once?",
		answer: "Yes, you can process multiple images one at a time using our tool. For batch processing, check out our bulk compression tool which also strips EXIF data during compression."
	},
	{
		question: "Is removing EXIF data the same as stripping metadata?",
		answer: "Yes, removing EXIF data and stripping metadata refer to the same process. Both terms mean deleting the hidden information embedded in image files."
	},
	{
		question: "Does removing EXIF data remove GPS location from photos?",
		answer: "Yes, our EXIF remover strips all metadata including GPS coordinates. This prevents anyone from seeing the exact location where your photos were taken."
	}
];

export default function RemoveExifPage() {
	const tool = tools.find(t => t.id === "remove-exif");
	
	if (!tool) {
		return <RemoveExifClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Utility Tools", url: "https://getimgtools.com" },
				{ name: "Remove EXIF Data", url: "https://getimgtools.com/remove-exif" },
			]} />
			<SoftwareAppJsonLd
				name="Remove EXIF Data - Photo Metadata Remover"
				description="Free online EXIF data remover. Strip GPS location, camera info, and hidden metadata from photos. 100% private browser-based processing."
				url="https://getimgtools.com/remove-exif"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<RemoveExifClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About Removing EXIF Data</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
