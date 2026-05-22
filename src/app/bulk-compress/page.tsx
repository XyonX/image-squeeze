import type { Metadata } from "next";
import { BulkCompressClient } from "./BulkCompressClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Bulk Compress Images Online Free - Batch JPG PNG WebP Compressor | GetImgTools",
	description:
		"Compress multiple images at once with our free bulk image compressor. Reduce JPG, PNG, WebP file sizes in batch. 100% private browser-based processing. No uploads, no limits, no signup.",
	keywords: [
		"bulk compress images",
		"batch compressor",
		"compress multiple images at once",
		"mass image compression",
		"bulk image optimizer",
		"batch image processing",
		"compress images in bulk",
		"free bulk image compressor",
		"online batch compressor",
		"compress bulk images",
		"bulk jpg compress",
		"compress image bulk",
		"compress image in bulk",
		"bulk image compressor",
		"batch image compressor",
		"batch compress images",
		"batch photo compressor",
		"batch image compression",
		"bulk image compressor free",
		"bulk compressor"
	],
	openGraph: {
		title: "Bulk Compress Images Online Free - Batch Image Compressor Tool",
		description: "Compress multiple JPG, PNG, WebP images at once. 100% private browser-based batch compression. No uploads needed.",
	},
};

const faqItems = [
	{
		question: "How do I bulk compress images online for free?",
		answer: "Simply drag and drop or select multiple images (JPG, PNG, WebP) on this page. Our tool automatically compresses all images in your browser. Adjust quality settings as needed, then download individual images or all as a ZIP file. No uploads, no signup required."
	},
	{
		question: "What image formats are supported for batch compression?",
		answer: "Our bulk image compressor supports JPG/JPEG, PNG, and WebP formats. You can mix different formats in a single batch and compress them all at once."
	},
	{
		question: "How many images can I compress at once?",
		answer: "You can compress up to 50 images in a single batch. There are no daily limits or restrictions — compress as many batches as you need."
	},
	{
		question: "Is bulk image compression really free?",
		answer: "Yes, completely free. No hidden charges, no premium tiers, no signup required. All processing happens 100% in your browser with no server uploads."
	},
	{
		question: "Does batch compression reduce image quality?",
		answer: "You control the quality. Our tool offers adjustable compression levels. For web use, 70-80% quality typically provides excellent results with significant file size reduction while maintaining visual quality."
	},
	{
		question: "How is bulk image compression different from single image compression?",
		answer: "Bulk compression processes multiple images simultaneously, saving time when you need to optimize many files. The compression quality and options are identical to single-image compression — just faster for large batches."
	},
	{
		question: "Can I compress JPG and PNG files together in one batch?",
		answer: "Yes! Our batch image compressor handles mixed formats. You can select JPG, PNG, and WebP files together and compress them all in one go."
	},
	{
		question: "Is my data safe when using online batch compression?",
		answer: "Absolutely. All image processing happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server. This ensures complete privacy and security."
	}
];

export default function BulkCompressPage() {
	const tool = tools.find(t => t.id === "bulk-compress");
	
	if (!tool) {
		return <BulkCompressClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Compression Tools", url: "https://getimgtools.com" },
				{ name: "Bulk Compress Images", url: "https://getimgtools.com/bulk-compress" },
			]} />
			<SoftwareAppJsonLd
				name="Bulk Compress Images - Batch Image Compressor"
				description="Free online bulk image compressor. Compress multiple JPG, PNG, WebP images at once. 100% private browser-based processing."
				url="https://getimgtools.com/bulk-compress"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<BulkCompressClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About Bulk Image Compression</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
