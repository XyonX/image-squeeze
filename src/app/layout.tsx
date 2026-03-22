import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: {
		default: "GetImgTools — Free Online Image Tools | Compress, Resize, Convert",
		template: "%s | GetImgTools",
	},
	description:
		"Free online image tools — compress JPG, PNG, WebP, resize, convert, crop, and more. 100% private, files never leave your browser. No signup required.",
	keywords: [
		"compress image online",
		"resize image online",
		"convert image online",
		"image compressor",
		"bulk image compressor",
		"free image tools",
	],
	metadataBase: new URL("https://getimgtools.com"),
	alternates: {
		canonical: "https://getimgtools.com",
	},
	openGraph: {
		title: "GetImgTools — Free Online Image Tools",
		description: "Compress, resize, convert images for free. 100% private — files never leave your browser.",
		url: "https://getimgtools.com",
		siteName: "GetImgTools",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "GetImgTools — Free Online Image Tools",
		description: "Compress, resize, convert images for free. 100% private — files never leave your browser.",
	},
	robots: {
		index: true,
		follow: true,
	},
	verification: {
		google: "-d279xGg82co8lEwK9BxHRoJhwgLF-clvIsjw63jZRA",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9688747257143156"
					crossOrigin="anonymous"
				/>
			</head>
			<body className={`${inter.variable} antialiased`}>
				<GoogleAnalytics gaId="G-2ZJ8WLTB7P" />
				<Header />
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
					<main className="min-h-[calc(100vh-12rem)]">
						{children}
					</main>
				</div>
				<Footer />
			</body>
		</html>
	);
}
