import type { Metadata } from "next";
import { RotateImageClient } from "./RotateImageClient";
import { ToolPageContent } from "@/components/ui/ToolPageContent";
import { tools } from "@/lib/tools";
import { FAQJsonLd, SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = {
	title: "Rotate Image Online Free - Photo Rotator Tool | GetImgTools",
	description:
		"Free online image rotator. Rotate images 90°, 180°, 270° or flip horizontally/vertically. 100% private browser-based processing. No signup required.",
	keywords: [
		"rotate image",
		"rotate image online",
		"image rotator",
		"photo rotator",
		"flip image",
		"image orientation",
		"correct photo rotation",
		"free image tools",
		"rotate photo online free",
		"rotate jpg",
		"rotate png",
		"flip image online"
	],
	openGraph: {
		title: "Rotate Image Online Free - Photo Rotator Tool",
		description: "Rotate images 90°, 180°, 270° or flip horizontally/vertically. 100% private browser-based processing.",
	},
};

const faqItems = [
	{
		question: "How do I rotate an image online for free?",
		answer: "Upload your image, choose a rotation angle (90°, 180°, 270°) or flip direction (horizontal/vertical), and download your rotated image. All processing happens in your browser."
	},
	{
		question: "What image formats are supported for rotation?",
		answer: "You can rotate JPG, JPEG, PNG, WebP, and GIF images. The output format matches the input format."
	},
	{
		question: "Does rotating an image reduce quality?",
		answer: "Rotating by 90°, 180°, or 270° does not reduce quality. Flipping (mirroring) also preserves full quality. Only arbitrary angle rotation may cause slight quality changes."
	},
	{
		question: "What's the difference between rotate and flip?",
		answer: "Rotating turns the image clockwise or counterclockwise (90°, 180°, 270°). Flipping creates a mirror image — horizontal flip mirrors left-to-right, vertical flip mirrors top-to-bottom."
	},
	{
		question: "Is rotating images online safe and private?",
		answer: "Absolutely. All processing happens entirely in your browser using JavaScript. Your images never leave your device — they are not uploaded to any server."
	}
];

export default function RotateImagePage() {
	const tool = tools.find(t => t.id === "rotate-image");
	
	if (!tool) {
		return <RotateImageClient />;
	}

	return (
		<>
			<BreadcrumbJsonLd items={[
				{ name: "Home", url: "https://getimgtools.com" },
				{ name: "Edit Tools", url: "https://getimgtools.com" },
				{ name: "Rotate Image", url: "https://getimgtools.com/rotate-image" },
			]} />
			<SoftwareAppJsonLd
				name="Rotate Image - Online Photo Rotator"
				description="Free online image rotator. Rotate images 90°, 180°, 270° or flip horizontally/vertically. 100% private browser-based processing."
				url="https://getimgtools.com/rotate-image"
			/>
			<FAQJsonLd items={faqItems} />
			<ToolPageContent tool={tool}>
				<RotateImageClient />
			</ToolPageContent>
			<section className="mt-12 space-y-6">
				<h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions About Rotating Images</h2>
				<FAQ items={faqItems} />
			</section>
		</>
	);
}
