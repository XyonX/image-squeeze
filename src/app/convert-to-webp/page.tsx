import type { Metadata } from "next";
import { ConvertToWebPClient } from "./ConvertToWebPClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Convert to WebP Online Free - JPG PNG to WebP Converter | GetImgTools",
	description:
		"Free online image converter. Convert JPG, PNG images to WebP format for 30-50% smaller file sizes. 100% private browser-based processing. No signup required.",
	keywords: [
		"convert to webp",
		"jpg to webp",
		"png to webp",
		"webp converter",
		"image converter",
		"modern image format",
		"web performance",
		"free image tools",
		"convert image to webp",
		"convert images to webp",
		"image to webp"
	],
	openGraph: {
		title: "Convert to WebP Online Free - JPG PNG to WebP Converter",
		description: "Convert JPG, PNG images to WebP format for 30-50% smaller file sizes. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I convert an image to WebP online for free?",
		answer: "Upload your JPG or PNG image to our tool. The conversion happens instantly in your browser. Download your WebP file immediately. No signup, no uploads to servers."
	},
	{
		question: "What are the benefits of converting to WebP?",
		answer: "WebP offers 30-50% smaller file sizes compared to JPG and PNG while maintaining similar visual quality. This means faster website loading, reduced bandwidth usage, and improved Core Web Vitals scores."
	},
	{
		question: "Does WebP support transparency like PNG?",
		answer: "Yes, WebP supports transparency (alpha channel) just like PNG. You can convert PNG images with transparent backgrounds to WebP and the transparency will be preserved."
	},
	{
		question: "Is WebP supported by all browsers?",
		answer: "WebP is supported by all modern browsers including Chrome, Firefox, Safari (14+), Edge, and Opera. For older browsers, you should provide JPG/PNG fallbacks."
	},
	{
		question: "Will converting to WebP reduce image quality?",
		answer: "WebP uses advanced compression algorithms that maintain high visual quality at smaller file sizes. You can adjust the quality setting (default 80%) to find the perfect balance between size and quality."
	},
	{
		question: "Is converting images to WebP safe and private?",
		answer: "Absolutely. All conversion happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	}
];

export default function ConvertToWebpPage() {
	const tool = tools.find(t => t.id === "convert-to-webp");
	
	if (!tool) {
		return <ConvertToWebPClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Conversion Tools", url: "https://getimgtools.com" },
				{ name: "Convert to WebP", url: "https://getimgtools.com/convert-to-webp" },
			]} />
			<SoftwareAppJsonLd
				name="Convert to WebP - Online Image Converter"
				description="Free online image converter. Convert JPG, PNG images to WebP format for 30-50% smaller file sizes. 100% private browser-based processing."
				url="https://getimgtools.com/convert-to-webp"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<ConvertToWebPClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About Converting to WebP</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
