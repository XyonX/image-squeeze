import type { Metadata } from "next";
import { ConvertToJPGClient } from "./ConvertToJPGClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Convert to JPG Online Free - PNG WebP to JPEG Converter | GetImgTools",
	description:
		"Free online image converter. Convert PNG, WebP, and other image formats to JPG/JPEG format. 100% private browser-based processing. No signup required.",
	keywords: [
		"convert to jpg",
		"png to jpg",
		"webp to jpg",
		"jpg converter",
		"image converter",
		"photo converter",
		"universal format",
		"free image tools",
		"convert image to jpg",
		"convert to jpg online",
		"convert to jpeg",
		"convert to jpg free"
	],
	openGraph: {
		title: "Convert to JPG Online Free - PNG WebP to JPEG Converter",
		description: "Convert PNG, WebP, and other image formats to JPG/JPEG format. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I convert an image to JPG online for free?",
		answer: "Upload your image (PNG, WebP, BMP, or GIF) to our tool. The conversion happens instantly in your browser. Download your JPG file immediately. No signup, no uploads to servers."
	},
	{
		question: "What image formats can I convert to JPG?",
		answer: "You can convert PNG, WebP, BMP, and GIF images to JPG/JPEG format. All conversions are handled 100% in your browser."
	},
	{
		question: "Does converting to JPG remove transparency?",
		answer: "Yes, JPG format does not support transparency. If you convert a PNG with transparent background to JPG, the transparent areas will become white (or the background color you choose)."
	},
	{
		question: "Will converting PNG to JPG reduce file size?",
		answer: "Yes, JPG files are typically much smaller than PNG files because JPG uses lossy compression. This makes JPG ideal for photographs and complex images where file size matters more than perfect quality."
	},
	{
		question: "Is converting images to JPG safe and private?",
		answer: "Absolutely. All conversion happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	},
	{
		question: "What's the difference between JPG and JPEG?",
		answer: "There is no technical difference. JPG and JPEG refer to the same image format. The shorter .jpg extension was used in older systems that supported only 3-character file extensions."
	}
];

export default function ConvertToJpgPage() {
	const tool = tools.find(t => t.id === "convert-to-jpg");
	
	if (!tool) {
		return <ConvertToJPGClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Conversion Tools", url: "https://getimgtools.com" },
				{ name: "Convert to JPG", url: "https://getimgtools.com/convert-to-jpg" },
			]} />
			<SoftwareAppJsonLd
				name="Convert to JPG - Online Image Converter"
				description="Free online image converter. Convert PNG, WebP, and other image formats to JPG/JPEG format. 100% private browser-based processing."
				url="https://getimgtools.com/convert-to-jpg"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<ConvertToJPGClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About Converting to JPG</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
