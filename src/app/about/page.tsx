import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About GetImgTools",
	description: "Learn about GetImgTools - free, fast, and private online image editing tools.",
};

export default function AboutPage() {
	return (
		<div className="max-w-4xl mx-auto py-12">
			<header className="mb-8 pb-6 border-b border-slate-200">
				<h1 className="text-4xl font-bold text-slate-900 mb-2">About GetImgTools</h1>
				<p className="text-base text-slate-600">
					Free, fast, and private online image processing tools built for everyone.
				</p>
			</header>

			<div className="space-y-8">
				{/* Mission */}
				<section className="space-y-3">
					<h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
					<p className="text-sm text-slate-700 leading-relaxed">
						We believe image tools should be simple, fast, and private. Too many online tools force you to upload files to remote servers, track your activity, and interrupt your workflow with ads and paywalls. GetImgTools removes these barriers by providing essential image tools that work instantly in your browser.
					</p>
				</section>

				{/* Why Choose Us */}
				<section className="space-y-4">
					<h2 className="text-2xl font-bold text-slate-900">Why Choose GetImgTools?</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<div className="border border-slate-300 p-4">
							<h3 className="font-bold text-slate-900 mb-2 text-sm">100% Private</h3>
							<p className="text-xs text-slate-600 leading-relaxed">
								All processing happens in your browser. Your images never touch any server. We cannot see, store, or access your files.
							</p>
						</div>
						<div className="border border-slate-300 p-4">
							<h3 className="font-bold text-slate-900 mb-2 text-sm">Lightning Fast</h3>
							<p className="text-xs text-slate-600 leading-relaxed">
								No uploads, no waiting, no server overhead. Process images in milliseconds on your device.
							</p>
						</div>
						<div className="border border-slate-300 p-4">
							<h3 className="font-bold text-slate-900 mb-2 text-sm">Completely Free</h3>
							<p className="text-xs text-slate-600 leading-relaxed">
								No signup walls, no premium features, no watermarks. Use all tools completely free, forever.
							</p>
						</div>
						<div className="border border-slate-300 p-4">
							<h3 className="font-bold text-slate-900 mb-2 text-sm">20+ Tools</h3>
							<p className="text-xs text-slate-600 leading-relaxed">
								Compress, convert, resize, crop, rotate, add watermarks, and much more.
							</p>
						</div>
					</div>
				</section>

				{/* Technology */}
				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-2xl font-bold text-slate-900">Technology</h2>
					<p className="text-sm text-slate-700 leading-relaxed">
						GetImgTools is built with modern web technologies: Next.js for fast server-side rendering, React for interactive UI, and Tailwind CSS for beautiful design. Image processing uses HTML5 Canvas, Web Workers, and specialized JavaScript libraries to deliver high-quality results at maximum speed. The site is deployed globally for fast access from anywhere in the world.
					</p>
				</section>

				{/* Get in Touch */}
				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
					<p className="text-sm text-slate-700">
						Have questions, suggestions, or found a bug? We'd love to hear from you.
					</p>
					<p className="text-sm">
						Email us at{" "}
						<a href="mailto:support@getimgtools.com" className="font-bold text-slate-900 hover:text-slate-700">
							support@getimgtools.com
						</a>
					</p>
				</section>
			</div>
		</div>
	);
}
