/**
 * JSON-LD Structured Data Components
 * Adds schema.org markup for better search engine understanding and rich results
 */

// BreadcrumbList Schema
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": items.map((item, index) => ({
			"@type": "ListItem",
			"position": index + 1,
			"name": item.name,
			"item": item.url,
		})),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}

// FAQ Schema
export function FAQJsonLd({ items }: { items: { question: string; answer: string }[] }) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": items.map((item) => ({
			"@type": "Question",
			"name": item.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": item.answer,
			},
		})),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}

// SoftwareApp Schema (for tool pages)
export function SoftwareAppJsonLd({
	name,
	description,
	url,
	applicationCategory = "Multimedia",
	operatingSystem = "Web",
	browserRequirements = "Requires JavaScript",
	offers = {
		"@type": "Offer",
		"price": "0",
		"priceCurrency": "USD",
	},
}: {
	name: string;
	description: string;
	url: string;
	applicationCategory?: string;
	operatingSystem?: string;
	browserRequirements?: string;
	offers?: Record<string, string>;
}) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		"name": name,
		"description": description,
		"url": url,
		"applicationCategory": applicationCategory,
		"operatingSystem": operatingSystem,
		"browserRequirements": browserRequirements,
		"offers": offers,
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}

// Article Schema (for blog posts)
export function ArticleJsonLd({
	title,
	description,
	url,
	datePublished,
	dateModified,
	authorName = "GetImgTools Team",
	category,
	imageUrl,
}: {
	title: string;
	description: string;
	url: string;
	datePublished: string;
	dateModified?: string;
	authorName?: string;
	category?: string;
	imageUrl?: string;
}) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "Article",
		"headline": title,
		"description": description,
		"url": url,
		"datePublished": datePublished,
		"dateModified": dateModified || datePublished,
		"author": {
			"@type": "Organization",
			"name": authorName,
		},
		"publisher": {
			"@type": "Organization",
			"name": "GetImgTools",
			"url": "https://getimgtools.com",
		},
		...(imageUrl && { "image": imageUrl }),
		...(category && { "articleSection": category }),
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": url,
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}

// WebSite Schema (for homepage)
export function WebSiteJsonLd() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "GetImgTools",
		"url": "https://getimgtools.com",
		"description": "Free online image tools — compress JPG, PNG, WebP, resize, convert, crop, remove EXIF data, and more. 100% private browser-based processing.",
		"potentialAction": {
			"@type": "SearchAction",
			"target": {
				"@type": "EntryPoint",
				"urlTemplate": "https://getimgtools.com/search?q={search_term_string}",
			},
			"query-input": "required name=search_term_string",
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
