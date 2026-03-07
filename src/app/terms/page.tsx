import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service",
	description: "Terms of service for GetImgTools — free online image tools.",
};

export default function TermsPage() {
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Terms of Service</h1>
			<p className="text-sm text-slate-500 mb-8">Last updated: March 7, 2026</p>

			<div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-slate-500">
				<h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
				<p>
					By accessing and using GetImgTools (getimgtools.com), you agree to these Terms of Service. If you do not agree, please do not use the website.
				</p>

				<h2 className="text-xl font-bold text-slate-900">2. Description of Service</h2>
				<p>
					GetImgTools provides free, browser-based image processing tools including compression, resizing, format conversion, and other image utilities. All processing occurs locally in your web browser.
				</p>

				<h2 className="text-xl font-bold text-slate-900">3. Free Use</h2>
				<p>
					Our tools are provided free of charge. We reserve the right to introduce paid features or limits in the future, but existing free functionality will remain available.
				</p>

				<h2 className="text-xl font-bold text-slate-900">4. User Responsibilities</h2>
				<ul className="list-disc pl-6 space-y-1">
					<li>You are responsible for the content you process using our tools</li>
					<li>You must have the right to process any images you upload</li>
					<li>You agree not to use our tools for any illegal purpose</li>
				</ul>

				<h2 className="text-xl font-bold text-slate-900">5. No Warranty</h2>
				<p>
					Our tools are provided "as is" without warranty of any kind. We do not guarantee that the tools will be error-free, uninterrupted, or that results will meet your specific requirements.
				</p>

				<h2 className="text-xl font-bold text-slate-900">6. Limitation of Liability</h2>
				<p>
					GetImgTools shall not be liable for any damages arising from the use or inability to use our tools, including loss of data or images.
				</p>

				<h2 className="text-xl font-bold text-slate-900">7. Advertisements</h2>
				<p>
					We display advertisements to support the free service. By using our website, you acknowledge that ads may be shown during your use of the tools.
				</p>

				<h2 className="text-xl font-bold text-slate-900">8. Changes to Terms</h2>
				<p>We may update these terms at any time. Continued use of the website constitutes acceptance of any changes.</p>

				<h2 className="text-xl font-bold text-slate-900">9. Contact</h2>
				<p>
					Questions? Contact us at{" "}
					<a href="mailto:hello@getimgtools.com" className="text-primary hover:underline">hello@getimgtools.com</a>
				</p>
			</div>
		</div>
	);
}
