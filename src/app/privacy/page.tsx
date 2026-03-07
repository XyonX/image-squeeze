import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "Privacy policy for GetImgTools — we never upload, store, or access your images.",
};

export default function PrivacyPage() {
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Privacy Policy</h1>
			<p className="text-sm text-slate-500 mb-8">Last updated: March 7, 2026</p>

			<div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-slate-500">
				<h2 className="text-xl font-bold text-slate-900">1. Overview</h2>
				<p>
					GetImgTools ("we", "us", "our") operates the website getimgtools.com. This privacy policy explains
					how we handle information when you use our services.
				</p>

				<h2 className="text-xl font-bold text-slate-900">2. Image Processing — 100% Client-Side</h2>
				<p>
					<strong>We never upload, store, process, or access your images on our servers.</strong> All image
					processing (compression, resizing, conversion, etc.) happens entirely in your web browser using
					JavaScript and WebAssembly. Your files never leave your device.
				</p>
				<p>
					When you close the browser tab, all temporary data created during processing is removed from memory.
				</p>

				<h2 className="text-xl font-bold text-slate-900">3. Data We Collect</h2>
				<p>We collect minimal, anonymous data to improve the website:</p>
				<ul className="list-disc pl-6 space-y-1">
					<li>Page views and traffic data (via privacy-friendly analytics)</li>
					<li>Browser type, device type, and approximate location (country-level)</li>
					<li>Referral source (how you found us)</li>
				</ul>
				<p>We do <strong>not</strong> collect names, emails, or personal information unless you voluntarily contact us.</p>

				<h2 className="text-xl font-bold text-slate-900">4. Cookies</h2>
				<p>
					We use cookies only for essential functionality (e.g., dark mode preference stored in localStorage).
					Third-party advertising partners (e.g., Google AdSense) may use cookies to serve relevant ads.
				</p>

				<h2 className="text-xl font-bold text-slate-900">5. Third-Party Services</h2>
				<p>We may use the following third-party services:</p>
				<ul className="list-disc pl-6 space-y-1">
					<li><strong>Google AdSense</strong> — for displaying advertisements</li>
					<li><strong>Cloudflare</strong> — for hosting and CDN</li>
				</ul>
				<p>These services have their own privacy policies.</p>

				<h2 className="text-xl font-bold text-slate-900">6. Children's Privacy</h2>
				<p>Our services are not directed to children under 13. We do not knowingly collect information from children.</p>

				<h2 className="text-xl font-bold text-slate-900">7. Changes to This Policy</h2>
				<p>We may update this policy from time to time. Changes will be reflected on this page with an updated date.</p>

				<h2 className="text-xl font-bold text-slate-900">8. Contact</h2>
				<p>
					If you have questions about this privacy policy, contact us at{" "}
					<a href="mailto:hello@getimgtools.com" className="text-primary hover:underline">hello@getimgtools.com</a>
				</p>
			</div>
		</div>
	);
}
