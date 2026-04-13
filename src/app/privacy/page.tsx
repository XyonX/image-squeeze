import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy - GetImgTools | Your Data is Your Own",
	description: "Read GetImgTools Privacy Policy. We never upload, store, or access your images. 100% client-side processing means your files never leave your device. Complete transparency about data handling.",
};

export default function PrivacyPage() {
	return (
		<div className="max-w-4xl mx-auto py-12">
			<header className="mb-8 pb-6 border-b border-slate-200">
				<h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
				<p className="text-xs text-slate-500">Last updated: April 13, 2026</p>
			</header>

			<div className="space-y-6">
				<div className="bg-slate-50 border border-slate-300 p-6">
					<h2 className="text-lg font-bold text-slate-900 mb-2">Privacy is Our Priority</h2>
					<p className="text-sm text-slate-700">
						At GetImgTools, we are committed to protecting your privacy. We believe that image processing tools should never require you to sacrifice your personal data or privacy. This privacy policy explains exactly how we handle your information and, more importantly, how we don't.
					</p>
				</div>

				<section className="space-y-3">
					<h2 className="text-lg font-bold text-slate-900">1. Overview</h2>
					<p className="text-sm text-slate-700">
						GetImgTools ("we", "us", "our") operates the website getimgtools.com. This privacy policy explains how we handle information when you use our services. We are fully transparent about all data practices.
					</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">2. Image Processing — 100% Client-Side</h2>
					<p className="text-sm text-slate-700">
						<strong>We never upload, store, process, or access your images on our servers.</strong> All image processing (compression, resizing, conversion, etc.) happens entirely in your web browser using JavaScript. Your files never leave your device.
					</p>
					<p className="text-sm text-slate-700">
						When you close the browser tab, all temporary data is removed from memory.
					</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">3. Data We Collect</h2>
					<p className="text-sm text-slate-700">We collect minimal, anonymous data:</p>
					<ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
						<li>Page views and traffic data (privacy-friendly analytics)</li>
						<li>Browser and device type (country-level location)</li>
						<li>Referral source</li>
					</ul>
					<p className="text-sm text-slate-700">We do <strong>not</strong> collect names, emails, or personal info unless you contact us.</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">4. Cookies</h2>
					<p className="text-sm text-slate-700">
						We use cookies only for essential functionality. Third-party partners may use cookies to serve ads.
					</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">5. Third-Party Services</h2>
					<p className="text-sm text-slate-700 mb-2">We use the following third-party services:</p>
					<ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
						<li><strong>Google AdSense</strong> — advertisements</li>
						<li><strong>Cloudflare</strong> — hosting and CDN</li>
					</ul>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">6. Children's Privacy</h2>
					<p className="text-sm text-slate-700">Our services are not directed to children under 13.</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">7. Contact</h2>
					<p className="text-sm text-slate-700">
						Questions? Email us at{" "}
						<a href="mailto:support@getimgtools.com" className="font-bold text-slate-900 hover:text-slate-700">
							support@getimgtools.com
						</a>
					</p>
				</section>
			</div>
		</div>
	);
}
