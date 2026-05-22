import type { Metadata } from "next";
import { SvgToPngClient } from "./SvgToPngClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "SVG to PNG Online Free - Vector to Raster Converter | GetImgTools",
	description:
		"Free online SVG to PNG converter. Convert SVG vector files to PNG raster images at any resolution. 100% private browser-based processing. No signup required.",
	keywords: [
		"svg to png",
		"svg converter",
		"vector to raster",
		"png converter",
		"logo converter",
		"graphics conversion",
		"high resolution conversion",
		"free image tools",
		"convert svg to png",
		"svg to png online",
		"svg to png converter"
	],
	openGraph: {
		title: "SVG to PNG Online Free - Vector to Raster Converter",
		description: "Convert SVG vector files to PNG raster images at any resolution. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I convert SVG to PNG online for free?",
		answer: "Upload your SVG file to our tool, choose your desired output resolution (up to 4K), and download your PNG. All processing happens in your browser — no uploads to servers."
	},
	{
		question: "What resolution can I export SVG to PNG?",
		answer: "You can export SVG to PNG at any resolution up to 4096x4096 pixels. This makes it perfect for creating high-resolution logos, icons, and graphics."
	},
	{
		question: "Does SVG to PNG conversion preserve quality?",
		answer: "SVG is a vector format, so it can be scaled to any size without quality loss. When converting to PNG (raster), you choose the output resolution — higher resolution means better quality but larger file size."
	},
	{
		question: "Why would I need to convert SVG to PNG?",
		answer: "SVG is great for web graphics, but PNG is needed when: uploading to platforms that don't support SVG, creating printable materials, sharing with users who need raster images, or using in applications that only support PNG."
	},
	{
		question: "Is converting SVG to PNG safe and private?",
		answer: "Absolutely. All conversion happens entirely in your browser using JavaScript. Your files never leave your device — they are not uploaded to any server."
	}
];

export default function SvgToPngPage() {
	const tool = tools.find(t => t.id === "svg-to-png");
	
	if (!tool) {
		return <SvgToPngClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Conversion Tools", url: "https://getimgtools.com" },
				{ name: "SVG to PNG", url: "https://getimgtools.com/svg-to-png" },
			]} />
			<SoftwareAppJsonLd
				name="SVG to PNG - Vector to Raster Converter"
				description="Free online SVG to PNG converter. Convert SVG vector files to PNG raster images at any resolution. 100% private browser-based processing."
				url="https://getimgtools.com/svg-to-png"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<SvgToPngClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About SVG to PNG Conversion</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
