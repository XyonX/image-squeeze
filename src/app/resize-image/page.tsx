import type { Metadata } from "next";
import { ResizeImageClient } from "./ResizeImageClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Resize Image Online Free - Photo Resizer Tool | GetImgTools",
	description:
		"Free online image resizer. Resize images by percentage or exact dimensions with social media presets. 100% private browser-based processing. No signup required.",
	keywords: [
		"resize image",
		"resize image online",
		"image resizer",
		"resize photo online free",
		"image size changer",
		"photo resizer",
		"social media image sizes",
		"free image tools",
		"resize image online free",
		"resize photo",
		"image resizer online",
		"resize jpg",
		"resize png"
	],
	openGraph: {
		title: "Resize Image Online Free - Photo Resizer Tool",
		description: "Resize images by percentage or exact dimensions with social media presets. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I resize an image online for free?",
		answer: "Upload your image, choose resize by percentage or exact dimensions, select from social media presets or enter custom values, and download your resized image. All processing happens in your browser."
	},
	{
		question: "What image formats are supported for resizing?",
		answer: "You can resize JPG, JPEG, PNG, WebP, and GIF images. The output format matches the input format."
	},
	{
		question: "Does resizing an image reduce quality?",
		answer: "Resizing to smaller dimensions may cause some quality loss due to pixel interpolation. Resizing to larger dimensions (upscaling) will result in a softer image. For best results, resize to the exact dimensions you need."
	},
	{
		question: "What are the social media preset sizes?",
		answer: "Our tool includes presets for: Instagram post (1080x1080), Facebook cover (820x312), Twitter header (1500x500), LinkedIn banner (1584x396), YouTube thumbnail (1280x720), and more."
	},
	{
		question: "Is resizing images online safe and private?",
		answer: "Absolutely. All processing happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	}
];

export default function ResizeImagePage() {
	const tool = tools.find(t => t.id === "resize-image");
	
	if (!tool) {
		return <ResizeImageClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Edit Tools", url: "https://getimgtools.com" },
				{ name: "Resize Image", url: "https://getimgtools.com/resize-image" },
			]} />
			<SoftwareAppJsonLd
				name="Resize Image - Online Photo Resizer"
				description="Free online image resizer. Resize images by percentage or exact dimensions with social media presets. 100% private browser-based processing."
				url="https://getimgtools.com/resize-image"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<ResizeImageClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About Resizing Images</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
