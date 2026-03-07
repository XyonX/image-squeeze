import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "About GetImgTools — free online image tools built with privacy in mind.",
};

export default function AboutPage() {
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<h1 className="text-3xl sm:text-4xl font-extrabold mb-6">About GetImgTools</h1>

			<div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-slate-500">
				<p className="text-lg text-slate-900">
					GetImgTools is a collection of free, browser-based image tools designed to help you compress, resize,
					convert, and edit images without compromising your privacy.
				</p>

				<h2 className="text-xl font-bold text-slate-900 mt-8">Our Mission</h2>
				<p>
					We believe image tools should be free, fast, and private. Too many "free" image tools upload your files
					to their servers, require signups, or bombard you with ads before you can even use the tool.
					We built GetImgTools to be different.
				</p>

				<h2 className="text-xl font-bold text-slate-900 mt-8">How It Works</h2>
				<p>
					Every tool on GetImgTools runs entirely in your browser. When you upload an image, it stays on your
					device. We use JavaScript and WebAssembly to process images locally — nothing is ever sent to a server.
					When you close the tab, your files are gone.
				</p>

				<h2 className="text-xl font-bold text-slate-900 mt-8">Technology</h2>
				<p>
					GetImgTools is built with Next.js, React, and Tailwind CSS. Image processing uses browser-native APIs
					(Canvas, Web Workers) and the browser-image-compression library. The site is deployed on Cloudflare's
					global edge network for fast load times worldwide.
				</p>

				<h2 className="text-xl font-bold text-slate-900 mt-8">Contact</h2>
				<p>
					Questions, feedback, or bug reports? Email us at{" "}
					<a href="mailto:hello@getimgtools.com" className="text-primary hover:underline">
						hello@getimgtools.com
					</a>
				</p>
			</div>
		</div>
	);
}
