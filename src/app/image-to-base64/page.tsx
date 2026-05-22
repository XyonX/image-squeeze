import type { Metadata } from "next";
import { ImageToBase64Client } from "./ImageToBase64Client";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Image to Base64 Online Free - Base64 Encoder | GetImgTools",
	description:
		"Free online Base64 converter. Convert any image to Base64 encoded string for embedding in HTML/CSS. 100% private browser-based processing. No signup required.",
	keywords: [
		"image to base64",
		"base64 converter",
		"image encoder",
		"data url",
		"html image embedding",
		"css background image",
		"inline images",
		"free image tools",
		"convert image to base64",
		"base64 encode image",
		"image to base64 online"
	],
	openGraph: {
		title: "Image to Base64 Online Free - Base64 Encoder",
		description: "Convert any image to Base64 encoded string for embedding in HTML/CSS. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I convert an image to Base64 online for free?",
		answer: "Upload your image to our tool. The Base64 encoded string is generated instantly in your browser. Copy the data URL or raw Base64 string for use in HTML, CSS, or JavaScript."
	},
	{
		question: "What is Base64 encoding used for?",
		answer: "Base64 encoding converts binary data (images) into text format. It's commonly used for: embedding images directly in HTML/CSS, data URLs, email attachments, and storing images in databases."
	},
	{
		question: "What image formats are supported for Base64 conversion?",
		answer: "All common image formats are supported: JPG, JPEG, PNG, WebP, GIF, SVG, BMP, and more."
	},
	{
		question: "Is converting images to Base64 safe and private?",
		answer: "Absolutely. All conversion happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	},
	{
		question: "Should I use Base64 images on my website?",
		answer: "Base64 images are best for small images (under 10KB) like icons and sprites. For larger images, it's better to use regular image files as Base64 increases file size by about 33%."
	}
];

export default function ImageToBase64Page() {
	const tool = tools.find(t => t.id === "image-to-base64");
	
	if (!tool) {
		return <ImageToBase64Client />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Utility Tools", url: "https://getimgtools.com" },
				{ name: "Image to Base64", url: "https://getimgtools.com/image-to-base64" },
			]} />
			<SoftwareAppJsonLd
				name="Image to Base64 - Online Base64 Encoder"
				description="Free online Base64 converter. Convert any image to Base64 encoded string for embedding in HTML/CSS. 100% private browser-based processing."
				url="https://getimgtools.com/image-to-base64"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<ImageToBase64Client />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About Image to Base64 Conversion</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
