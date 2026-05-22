import type { Metadata } from "next";
import { CompressJPGClient } from "./CompressJPGClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Compress JPG Online Free - Reduce JPEG File Size | GetImgTools",
	description:
		"Free online JPG compression tool. Reduce JPEG file size by up to 80% without visible quality loss. 100% private browser-based processing. No signup required.",
	keywords: [
		"compress jpg",
		"compress jpeg", 
		"jpg compressor",
		"reduce jpg size",
		"compress jpg online free",
		"jpeg optimization",
		"image compression",
		"web performance",
		"reduce image file size",
		"free image tools",
		"compress jpeg online",
		"compress jpg online",
		"reduce jpg size online",
		"reduce jpeg size online free",
		"compress file jpg online"
	],
	openGraph: {
		title: "Compress JPG Online Free - Reduce JPEG File Size",
		description: "Reduce JPEG file size by up to 80% with our free browser-based compression tool. 100% private processing.",
	},
};

const faqItems = [
	{
		question: "How do I compress a JPG image online for free?",
		answer: "Upload your JPG or JPEG image to our tool, adjust the quality slider (70-80% recommended for web), and download your compressed image. All processing happens in your browser — no uploads to servers."
	},
	{
		question: "How much can I reduce JPG file size?",
		answer: "Our tool can reduce JPG file size by up to 80% while maintaining good visual quality. For web use, a quality setting of 70-80% typically achieves 50-70% file size reduction with minimal visible difference."
	},
	{
		question: "Does compressing JPG reduce image quality?",
		answer: "JPG compression uses lossy compression, which means some quality is lost. However, our tool lets you control the quality level. At 70-80% quality, the reduction is often imperceptible to the human eye while achieving significant file size savings."
	},
	{
		question: "What's the difference between JPG and JPEG?",
		answer: "There is no technical difference. JPG and JPEG refer to the same image format. The shorter .jpg extension was used in older systems that supported only 3-character file extensions."
	},
	{
		question: "Is compressing JPG images online safe and private?",
		answer: "Absolutely. All compression happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	},
	{
		question: "What quality setting should I use for web images?",
		answer: "For most web use cases, 70-80% quality is recommended. This provides an excellent balance between file size and visual quality. For thumbnails, 50-60% may suffice. For high-quality photography, 85-90% is recommended."
	}
];

export default function CompressJPGPage() {
	const tool = tools.find(t => t.id === "compress-jpg");
	
	if (!tool) {
		return <CompressJPGClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Compression Tools", url: "https://getimgtools.com" },
				{ name: "Compress JPG", url: "https://getimgtools.com/compress-jpg" },
			]} />
			<SoftwareAppJsonLd
				name="Compress JPG - Online JPEG Compressor"
				description="Free online JPG compression tool. Reduce JPEG file size by up to 80% without visible quality loss. 100% private browser-based processing."
				url="https://getimgtools.com/compress-jpg"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<CompressJPGClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About JPG Compression</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
