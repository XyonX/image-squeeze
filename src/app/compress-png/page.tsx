import type { Metadata } from "next";
import { CompressPNGClient } from "./CompressPNGClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Compress PNG Online Free - Reduce PNG File Size | GetImgTools",
	description:
		"Free online PNG compression tool. Reduce PNG file size with lossless or lossy compression options. 100% private browser-based processing. No signup required.",
	keywords: [
		"compress png",
		"png compressor",
		"reduce png size",
		"compress png online free",
		"png optimization",
		"image compression",
		"lossless compression",
		"transparent png",
		"reduce image file size",
		"free image tools",
		"reduce size of png online",
		"compresspng.com"
	],
	openGraph: {
		title: "Compress PNG Online Free - Reduce PNG File Size",
		description: "Reduce PNG file size with lossless or lossy compression. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I compress a PNG image online for free?",
		answer: "Upload your PNG image to our tool, choose between lossless or lossy compression, adjust settings as needed, and download your compressed image. All processing happens in your browser — no uploads to servers."
	},
	{
		question: "What's the difference between lossless and lossy PNG compression?",
		answer: "Lossless compression reduces file size without any quality loss — the image looks identical. Lossy compression achieves smaller file sizes by removing some color data, which may cause slight quality changes but offers much better compression ratios."
	},
	{
		question: "Does PNG compression preserve transparency?",
		answer: "Yes, both lossless and lossy PNG compression preserve transparency (alpha channel). Your transparent areas will remain transparent after compression."
	},
	{
		question: "How much can I reduce PNG file size?",
		answer: "Lossless compression typically reduces PNG size by 20-40%. Lossy compression can achieve 50-80% reduction depending on the quality setting and image content."
	},
	{
		question: "Is compressing PNG images online safe and private?",
		answer: "Absolutely. All compression happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	},
	{
		question: "When should I use lossless vs lossy PNG compression?",
		answer: "Use lossless for graphics with text, logos, screenshots, and images where every pixel matters. Use lossy for photographs, complex graphics, and web images where smaller file size is more important than perfect quality."
	}
];

export default function CompressPNGPage() {
	const tool = tools.find(t => t.id === "compress-png");
	
	if (!tool) {
		return <CompressPNGClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Compression Tools", url: "https://getimgtools.com" },
				{ name: "Compress PNG", url: "https://getimgtools.com/compress-png" },
			]} />
			<SoftwareAppJsonLd
				name="Compress PNG - Online PNG Compressor"
				description="Free online PNG compression tool. Reduce PNG file size with lossless or lossy compression options. 100% private browser-based processing."
				url="https://getimgtools.com/compress-png"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<CompressPNGClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About PNG Compression</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
