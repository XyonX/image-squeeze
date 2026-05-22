import type { Metadata } from "next";
import { ReduceImageSizeClient } from "./ReduceImageSizeClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Reduce Image Size Online Free - Target Size Compressor | GetImgTools",
	description:
		"Free online image size reducer. Compress images to specific file sizes — 100KB, 200KB, 500KB, or custom targets. 100% private browser-based processing. No signup required.",
	keywords: [
		"reduce image size",
		"compress to size",
		"target size compressor",
		"image size reducer",
		"file size optimizer",
		"specific size compression",
		"email attachment size",
		"free image tools",
		"reduce image size online free",
		"reduce photo size",
		"compress image to 100kb",
		"compress image to 200kb",
		"reduce image file size"
	],
	openGraph: {
		title: "Reduce Image Size Online Free - Target Size Compressor",
		description: "Compress images to specific file sizes — 100KB, 200KB, 500KB, or custom targets. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I reduce an image to a specific file size online for free?",
		answer: "Upload your image, enter your target file size (e.g., 100KB, 200KB), and our tool automatically adjusts quality to hit that target. All processing happens in your browser."
	},
	{
		question: "What target sizes can I set?",
		answer: "You can set any target file size. Common targets include 100KB, 200KB, 500KB, 1MB, or any custom value. The tool automatically adjusts compression to achieve your target."
	},
	{
		question: "What image formats are supported?",
		answer: "You can reduce the size of JPG, JPEG, PNG, and WebP images. The output format matches the input format."
	},
	{
		question: "How accurate is the target size compression?",
		answer: "Our tool is highly accurate, typically hitting within 5-10% of your target file size. For best results, start with a reasonable target that's smaller than the original file size."
	},
	{
		question: "Is reducing image size online safe and private?",
		answer: "Absolutely. All processing happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	}
];

export default function ReduceImageSizePage() {
	const tool = tools.find(t => t.id === "reduce-image-size");
	
	if (!tool) {
		return <ReduceImageSizeClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Compression Tools", url: "https://getimgtools.com" },
				{ name: "Reduce Image Size", url: "https://getimgtools.com/reduce-image-size" },
			]} />
			<SoftwareAppJsonLd
				name="Reduce Image Size - Target Size Compressor"
				description="Free online image size reducer. Compress images to specific file sizes — 100KB, 200KB, 500KB, or custom targets. 100% private browser-based processing."
				url="https://getimgtools.com/reduce-image-size"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<ReduceImageSizeClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About Reducing Image Size</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
