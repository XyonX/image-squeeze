import {
	ImageDown,
	FileImage,
	Minimize2,
	Maximize2,
	Crop,
	RotateCw,
	ShieldOff,
	Code,
	FileType,
	Package,
	Target,
	Type,
	Sliders,
	FileText,
	Palette,
	Eye,
	Smartphone,
	type LucideIcon,
} from "lucide-react";

export interface Tool {
	id: string;
	name: string;
	route: string;
	description: string;
	keyword: string;
	icon: LucideIcon;
	acceptedFormats: string[];
	color: string;
	category: "compress" | "convert" | "edit" | "utility";
}

export const tools: Tool[] = [
	{
		id: "compress-jpg",
		name: "Compress JPG",
		route: "/compress-jpg",
		description: "Reduce JPG file size while keeping quality. Perfect for web, email, and social media.",
		keyword: "compress jpg online",
		icon: ImageDown,
		acceptedFormats: [".jpg", ".jpeg"],
		color: "#ef4444",
		category: "compress",
	},
	{
		id: "compress-png",
		name: "Compress PNG",
		route: "/compress-png",
		description: "Compress PNG images with or without transparency. Lossless & lossy options.",
		keyword: "compress png online",
		icon: ImageDown,
		acceptedFormats: [".png"],
		color: "#3b82f6",
		category: "compress",
	},
	{
		id: "compress-webp",
		name: "Compress WebP",
		route: "/compress-webp",
		description: "Optimize WebP images for even smaller file sizes with great quality.",
		keyword: "compress webp online",
		icon: ImageDown,
		acceptedFormats: [".webp"],
		color: "#10b981",
		category: "compress",
	},
	{
		id: "bulk-compress",
		name: "Bulk Compress",
		route: "/bulk-compress",
		description: "Compress up to 50 images at once. Supports JPG, PNG, and WebP.",
		keyword: "bulk image compressor",
		icon: Package,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp"],
		color: "#8b5cf6",
		category: "compress",
	},
	{
		id: "resize-image",
		name: "Resize Image",
		route: "/resize-image",
		description: "Resize images by percentage or exact dimensions. Preset sizes for social media.",
		keyword: "resize image online",
		icon: Maximize2,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp"],
		color: "#f59e0b",
		category: "edit",
	},
	{
		id: "convert-to-webp",
		name: "Convert to WebP",
		route: "/convert-to-webp",
		description: "Convert JPG, PNG images to WebP format for 30-50% smaller files.",
		keyword: "convert jpg to webp",
		icon: FileType,
		acceptedFormats: [".jpg", ".jpeg", ".png"],
		color: "#06b6d4",
		category: "convert",
	},
	{
		id: "convert-to-jpg",
		name: "Convert to JPG",
		route: "/convert-to-jpg",
		description: "Convert PNG, WebP, and other image formats to JPG.",
		keyword: "convert png to jpg",
		icon: FileType,
		acceptedFormats: [".png", ".webp", ".bmp", ".gif"],
		color: "#ec4899",
		category: "convert",
	},
	{
		id: "convert-to-png",
		name: "Convert to PNG",
		route: "/convert-to-png",
		description: "Convert JPG, WebP images to PNG format with transparency support.",
		keyword: "convert jpg to png",
		icon: FileType,
		acceptedFormats: [".jpg", ".jpeg", ".webp", ".bmp", ".gif"],
		color: "#14b8a6",
		category: "convert",
	},
	{
		id: "reduce-image-size",
		name: "Reduce to Target Size",
		route: "/reduce-image-size",
		description: "Compress images to a specific file size — 100KB, 200KB, 500KB, or custom.",
		keyword: "reduce image size to 200kb",
		icon: Target,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp"],
		color: "#f97316",
		category: "compress",
	},
	{
		id: "crop-image",
		name: "Crop Image",
		route: "/crop-image",
		description: "Crop images with custom or preset aspect ratios. Social media presets included.",
		keyword: "crop image online",
		icon: Crop,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp"],
		color: "#84cc16",
		category: "edit",
	},
	{
		id: "rotate-image",
		name: "Rotate / Flip Image",
		route: "/rotate-image",
		description: "Rotate images 90°, 180°, 270° or flip horizontally/vertically.",
		keyword: "rotate image online",
		icon: RotateCw,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp"],
		color: "#a855f7",
		category: "edit",
	},
	{
		id: "add-watermark",
		name: "Add Watermark",
		route: "/add-watermark",
		description: "Add text or logo watermark to images. Customize position, size, and opacity.",
		keyword: "add watermark to image online",
		icon: FileText,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp"],
		color: "#0ea5e9",
		category: "edit",
	},
	{
		id: "add-text",
		name: "Add Text to Images",
		route: "/add-text",
		description: "Add custom text to images with multiple fonts, colors, and positioning options.",
		keyword: "add text to photo online",
		icon: Type,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp"],
		color: "#8b5cf6",
		category: "edit",
	},
	{
		id: "image-filters",
		name: "Image Filters & Effects",
		route: "/image-filters",
		description: "Apply filters, adjust brightness, contrast, and add effects to images.",
		keyword: "photo filter online",
		icon: Sliders,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp"],
		color: "#ec4899",
		category: "edit",
	},
	{
		id: "remove-exif",
		name: "Strip EXIF Data",
		route: "/remove-exif",
		description: "Remove metadata, GPS location, camera info from images for privacy.",
		keyword: "remove exif data online",
		icon: ShieldOff,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp"],
		color: "#64748b",
		category: "utility",
	},
	{
		id: "image-to-base64",
		name: "Image to Base64",
		route: "/image-to-base64",
		description: "Convert any image to Base64 encoded string for embedding in HTML/CSS.",
		keyword: "image to base64 converter",
		icon: Code,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".bmp"],
		color: "#0ea5e9",
		category: "utility",
	},
	{
		id: "svg-to-png",
		name: "SVG to PNG",
		route: "/svg-to-png",
		description: "Convert SVG vector files to PNG raster images at any resolution.",
		keyword: "svg to png converter",
		icon: FileImage,
		acceptedFormats: [".svg"],
		color: "#e11d48",
		category: "convert",
	},
	{
		id: "heic-to-jpg",
		name: "HEIC to JPG",
		route: "/heic-to-jpg",
		description: "Convert iPhone HEIC/HEIF photos to universal JPG format. Works in browser.",
		keyword: "heic to jpg converter",
		icon: Smartphone,
		acceptedFormats: [".heic", ".heif"],
		color: "#8b5cf6",
		category: "convert",
	},
	{
		id: "image-metadata",
		name: "Image Metadata Viewer",
		route: "/image-metadata",
		description: "View EXIF data, camera settings, GPS location, and other image metadata.",
		keyword: "view image metadata online",
		icon: Eye,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"],
		color: "#0ea5e9",
		category: "utility",
	},
	{
		id: "color-palette",
		name: "Color Palette Generator",
		route: "/color-palette",
		description: "Extract color palette from images. Get HEX, RGB, and HSL values.",
		keyword: "color palette from image",
		icon: Palette,
		acceptedFormats: [".jpg", ".jpeg", ".png", ".webp", ".svg"],
		color: "#ec4899",
		category: "utility",
	},
];

export function getToolByRoute(route: string): Tool | undefined {
	return tools.find((t) => t.route === `/${route}`);
}

export function getRelatedTools(currentId: string, count = 4): Tool[] {
	const current = tools.find((t) => t.id === currentId);
	if (!current) return tools.slice(0, count);

	const sameCategory = tools.filter((t) => t.category === current.category && t.id !== currentId);
	const others = tools.filter((t) => t.category !== current.category && t.id !== currentId);
	return [...sameCategory, ...others].slice(0, count);
}

export function formatFileSize(bytes: number): string {
	if (bytes === 0) return "0 B";
	const k = 1024;
	const sizes = ["B", "KB", "MB", "GB"];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}
