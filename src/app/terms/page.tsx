import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service - GetImgTools",
	description: "Terms of service for GetImgTools — free online image tools.",
};

export default function TermsPage() {
	return (
		<div className="max-w-4xl mx-auto py-12">
			<header className="mb-8 pb-6 border-b border-slate-200">
				<h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
				<p className="text-xs text-slate-500">Last updated: April 13, 2026</p>
			</header>

			<div className="space-y-6">
				<section className="space-y-3">
					<h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
					<p className="text-sm text-slate-700">
						By accessing and using GetImgTools, you agree to these Terms of Service. If you do not agree, please do not use the website.
					</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">2. Description of Service</h2>
					<p className="text-sm text-slate-700">
						GetImgTools provides free, browser-based image processing tools including compression, resizing, format conversion, and other utilities. All processing occurs locally in your web browser.
					</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">3. Free Use</h2>
					<p className="text-sm text-slate-700">
						Our tools are provided free. We reserve the right to introduce paid features in the future, but existing free functionality will remain available.
					</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">4. User Responsibilities</h2>
					<ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
						<li>You are responsible for content you process</li>
						<li>You must have rights to process any images you upload</li>
						<li>You agree not to use our tools for illegal purposes</li>
					</ul>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">5. No Warranty</h2>
					<p className="text-sm text-slate-700">
						Our tools are provided "as is" without warranty. We do not guarantee error-free or uninterrupted service.
					</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">6. Limitation of Liability</h2>
					<p className="text-sm text-slate-700">
						GetImgTools shall not be liable for any damages from use or inability to use our tools.
					</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">7. Advertisements</h2>
					<p className="text-sm text-slate-700">
						We display advertisements to support the free service. By using our website, you acknowledge that ads may be shown.
					</p>
				</section>

				<section className="space-y-3 border-t border-slate-200 pt-6">
					<h2 className="text-lg font-bold text-slate-900">8. Contact</h2>
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
