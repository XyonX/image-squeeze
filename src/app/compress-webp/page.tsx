import type { Metadata } from "next";
import { CompressWebPClient } from "./CompressWebPClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Compress WebP Online Free - Reduce WebP File Size | GetImgTools",
	description:
		"Free online WebP compression tool. Reduce WebP file size while maintaining quality and transparency. 100% private browser-based processing. No signup required.",
	keywords: [
		"compress webp",
		"webp compressor",
		"reduce webp size",
		"compress webp online free",
		"webp optimization",
		"image compression",
		"modern image format",
		"web performance",
		"reduce image file size",
		"free image tools"
	],
	openGraph: {
		title: "Compress WebP Online Free - Reduce WebP File Size",
		description: "Reduce WebP file size while maintaining quality and transparency. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I compress a WebP image online for free?",
		answer: "Upload your WebP image to our tool, adjust the quality slider, and download your compressed image. All processing happens in your browser — no uploads to servers."
	},
	{
		question: "How much can I reduce WebP file size?",
		answer: "WebP is already a highly optimized format, but our tool can further reduce file size by 20-40% depending on the quality setting and image content."
	},
	{
		question: "Does WebP compression preserve transparency?",
		answer: "Yes, WebP compression preserves transparency (alpha channel). Your transparent areas will remain transparent after compression."
	},
	{
		question: "Why would I need to compress WebP if it's already optimized?",
		answer: "While WebP offers excellent compression, further optimization can be beneficial for bandwidth-constrained scenarios, mobile users, or when every kilobyte counts for Core Web Vitals scores."
	},
	{
		question: "Is compressing WebP images online safe and private?",
		answer: "Absolutely. All compression happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	}
];

export default function CompressWebPPage() {
	const tool = tools.find(t => t.id === "compress-webp");
	
	if (!tool) {
		return <CompressWebPClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Compression Tools", url: "https://getimgtools.com" },
				{ name: "Compress WebP", url: "https://getimgtools.com/compress-webp" },
			]} />
			<SoftwareAppJsonLd
				name="Compress WebP - Online WebP Compressor"
				description="Free online WebP compression tool. Reduce WebP file size while maintaining quality and transparency. 100% private browser-based processing."
				url="https://getimgtools.com/compress-webp"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<CompressWebPClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About WebP Compression</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
