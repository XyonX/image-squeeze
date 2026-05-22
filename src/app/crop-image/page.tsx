import type { Metadata } from "next";
import { CropImageClient } from "./CropImageClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Crop Image Online Free - Photo Cropper Tool | GetImgTools",
	description:
		"Free online image cropper. Crop images with custom or preset aspect ratios including social media presets. 100% private browser-based processing. No signup required.",
	keywords: [
		"crop image",
		"crop image online",
		"image cropper",
		"photo cropper",
		"aspect ratio cropper",
		"social media crop",
		"profile picture cropper",
		"free image tools",
		"crop photo online free",
		"crop jpg",
		"crop png",
		"crop image online free"
	],
	openGraph: {
		title: "Crop Image Online Free - Photo Cropper Tool",
		description: "Crop images with custom or preset aspect ratios including social media presets. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I crop an image online for free?",
		answer: "Upload your image, select a preset aspect ratio (1:1, 4:3, 16:9, etc.) or use freeform crop, adjust the crop area, and download your cropped image. All processing happens in your browser."
	},
	{
		question: "What aspect ratios are available?",
		answer: "Our tool includes presets for: Square (1:1), Standard (4:3), Widescreen (16:9), Portrait (3:4), Instagram (1:1), Twitter (16:9), Facebook cover, and custom aspect ratios."
	},
	{
		question: "What image formats are supported for cropping?",
		answer: "You can crop JPG, JPEG, PNG, WebP, and GIF images. The output format matches the input format."
	},
	{
		question: "Does cropping an image reduce quality?",
		answer: "Cropping removes pixels from the edges of an image but does not affect the quality of the remaining pixels. The cropped area is simply discarded."
	},
	{
		question: "Is cropping images online safe and private?",
		answer: "Absolutely. All processing happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	}
];

export default function CropImagePage() {
	const tool = tools.find(t => t.id === "crop-image");
	
	if (!tool) {
		return <CropImageClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Edit Tools", url: "https://getimgtools.com" },
				{ name: "Crop Image", url: "https://getimgtools.com/crop-image" },
			]} />
			<SoftwareAppJsonLd
				name="Crop Image - Online Photo Cropper"
				description="Free online image cropper. Crop images with custom or preset aspect ratios including social media presets. 100% private browser-based processing."
				url="https://getimgtools.com/crop-image"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<CropImageClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About Cropping Images</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
