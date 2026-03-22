import { tools } from "@/lib/tools";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://getimgtools.com";

	const toolPages = tools.map((tool) => ({
		url: `${baseUrl}${tool.route}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.8,
	}));

	const blogPosts = [
		{
			slug: "how-to-compress-images-for-web-performance",
			title: "How to Compress Images for Web Performance (2025 Complete Guide)",
			date: "2025-03-22",
		},
		{
			slug: "jpg-vs-png-vs-webp-which-format",
			title: "JPG vs PNG vs WebP: Which Format Should You Use?",
			date: "2025-03-20",
		},
		{
			slug: "remove-exif-data-from-photos-why-how",
			title: "Remove EXIF Data from Photos: Why & How to Do It",
			date: "2025-03-18",
		},
		{
			slug: "free-online-image-editors-17-tools",
			title: "Free Online Image Editors: 17 Tools You Need (2025)",
			date: "2025-03-15",
		},
		{
			slug: "image-optimization-for-wordpress-guide",
			title: "Image Optimization for WordPress: Complete Guide",
			date: "2025-03-12",
		},
		{
			slug: "svg-to-png-conversion-best-practices",
			title: "SVG to PNG Conversion: Best Practices & Tools",
			date: "2025-03-10",
		},
	];

	const blogPages = blogPosts.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
		...toolPages,
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		...blogPages,
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
		},
	];
}
