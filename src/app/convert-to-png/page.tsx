import type { Metadata } from "next";
import { ConvertToPNGClient } from "./ConvertToPNGClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Convert to PNG Online Free - JPG WebP to PNG Converter | GetImgTools",
	description:
		"Free online image converter. Convert JPG, WebP, BMP, GIF to PNG format with transparency support. 100% private browser-based processing. No signup required.",
	keywords: [
		"convert to png",
		"jpg to png",
		"webp to png",
		"png converter",
		"image converter",
		"transparent images",
		"graphics format",
		"free image tools",
		"online convert to png",
		"convert to png online",
		"pic to png",
		"photo to png free",
		"png image converter",
		"png my image",
		"convert to png free"
	],
	openGraph: {
		title: "Convert to PNG Online Free - JPG WebP to PNG Converter",
		description: "Convert JPG, WebP images to PNG format with transparency support. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I convert an image to PNG online for free?",
		answer: "Upload your image (JPG, WebP, BMP, or GIF) to our tool. The conversion happens instantly in your browser. Download your PNG file immediately. No signup, no uploads to servers."
	},
	{
		question: "What image formats can I convert to PNG?",
		answer: "You can convert JPG, JPEG, WebP, BMP, and GIF images to PNG format. All conversions are handled 100% in your browser."
	},
	{
		question: "Does converting to PNG preserve transparency?",
		answer: "Yes, PNG format supports transparency (alpha channel). When you convert images with transparent backgrounds (like WebP with alpha), the transparency is preserved in the output PNG."
	},
	{
		question: "Will converting JPG to PNG increase file size?",
		answer: "Yes, PNG files are typically larger than JPG files because PNG uses lossless compression. However, PNG preserves exact pixel data and supports transparency, making it ideal for graphics, logos, and images requiring sharp edges."
	},
	{
		question: "Is converting images to PNG safe and private?",
		answer: "Absolutely. All conversion happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	},
	{
		question: "Why would I need to convert an image to PNG?",
		answer: "PNG is ideal for: graphics with text or sharp edges, images requiring transparency, logos and icons, screenshots, and images where lossless quality is essential."
	}
];

export default function ConvertToPngPage() {
	const tool = tools.find(t => t.id === "convert-to-png");
	
	if (!tool) {
		return <ConvertToPNGClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Conversion Tools", url: "https://getimgtools.com" },
				{ name: "Convert to PNG", url: "https://getimgtools.com/convert-to-png" },
			]} />
			<SoftwareAppJsonLd
				name="Convert to PNG - Online Image Converter"
				description="Free online image converter. Convert JPG, WebP, BMP, GIF to PNG format with transparency support. 100% private browser-based processing."
				url="https://getimgtools.com/convert-to-png"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<ConvertToPNGClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About Converting to PNG</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
