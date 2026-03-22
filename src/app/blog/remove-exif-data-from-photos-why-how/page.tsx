import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Share2, BookOpen, CheckCircle, Shield, Lock } from "lucide-react";

export const metadata: Metadata = {
	title: "Remove EXIF Data from Photos: Why & How to Protect Your Privacy",
	description: "Complete guide to EXIF metadata: what it contains, privacy risks, and how to safely remove it from your photos. Free tool included.",
	keywords: [
		"remove exif data",
		"exif metadata privacy",
		"strip photo metadata",
		"protect photo privacy",
		"exif data removal",
		"image metadata security",
	],
	openGraph: {
		title: "Remove EXIF Data from Photos: Why & How to Protect Your Privacy",
		description: "Complete guide to EXIF metadata: what it contains, privacy risks, and how to safely remove it from your photos.",
	},
};

export default function ExifGuidePage() {
	return (
		<article className="max-w-4xl mx-auto">
			<header className="mb-8">
				<div className="flex items-center gap-3 mb-4">
					<span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
						Privacy
					</span>
					<div className="flex items-center gap-4 text-sm text-slate-500">
						<span className="flex items-center gap-1">
							<Calendar className="w-4 h-4" />
							March 18, 2025
						</span>
						<span className="flex items-center gap-1">
							<Clock className="w-4 h-4" />
							5 min read
						</span>
					</div>
				</div>
				
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
					Remove EXIF Data from Photos: Why & How to Protect Your Privacy
				</h1>
				
				<p className="text-lg text-slate-600 mb-6">
					Your photos contain hidden metadata that can reveal your location, camera details, and even when you took the photo. Here's how to remove it.
				</p>
			</header>

			<div className="prose prose-slate max-w-none">
				<section className="mb-8">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">What is EXIF Data?</h2>
					<p>
						EXIF (Exchangeable Image File Format) is metadata embedded in photos by cameras and smartphones. 
						It contains information about how the photo was taken, including:
					</p>
					
					<div className="grid sm:grid-cols-2 gap-4 my-6">
						<div className="bg-white border border-slate-200 rounded-xl p-5">
							<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
								<Shield className="w-5 h-5 text-rose-500" />
								Privacy Risks
							</h3>
							<ul className="space-y-2 text-slate-600">
								<li>• GPS coordinates (exact location)</li>
								<li>• Date and time taken</li>
								<li>• Camera make and model</li>
								<li>• Device serial number</li>
								<li>• Software used to edit</li>
							</ul>
						</div>
						
						<div className="bg-white border border-slate-200 rounded-xl p-5">
							<h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
								<Lock className="w-5 h-5 text-emerald-500" />
								Why Remove It?
							</h3>
							<ul className="space-y-2 text-slate-600">
								<li>• Protect your location privacy</li>
								<li>• Prevent digital fingerprinting</li>
								<li>• Reduce file size slightly</li>
								<li>• Avoid revealing personal info</li>
								<li>• Safer for social media sharing</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">How to Remove EXIF Data</h2>
					
					<div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
						<h3 className="font-bold text-primary mb-2">🔒 Free Online Tool</h3>
						<p className="text-slate-700 mb-4">
							Use our <Link href="/remove-exif" className="text-primary hover:underline font-medium">EXIF removal tool</Link> to strip metadata from photos in seconds. 
							100% private - processing happens in your browser.
						</p>
						<Link 
							href="/remove-exif" 
							className="inline-flex items-center gap-2 px-5 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
						>
							Remove EXIF Data Now
						</Link>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">When Should You Remove EXIF?</h2>
					
					<div className="space-y-4">
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Social Media Posts</h3>
								<p className="text-slate-600">Prevent strangers from knowing where photos were taken</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Real Estate Listings</h3>
								<p className="text-slate-600">Protect property location and owner privacy</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Online Marketplaces</h3>
								<p className="text-slate-600">When selling items photographed at home</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium text-slate-900">Journalism & Activism</h3>
								<p className="text-slate-600">Protect sources and locations in sensitive situations</p>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-12 pt-8 border-t border-slate-200">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Summary</h2>
					
					<div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
						<h3 className="font-bold text-slate-900 mb-3">✅ Best Practices</h3>
						<ol className="space-y-3 text-slate-700">
							<li>1. <strong>Always remove EXIF</strong> before posting photos online</li>
							<li>2. Use our <Link href="/remove-exif" className="text-primary hover:underline">free tool</Link> for quick removal</li>
							<li>3. Keep original photos with EXIF for personal archives</li>
							<li>4. Educate friends and family about EXIF privacy risks</li>
						</ol>
					</div>
					
					<div className="mt-6 flex flex-wrap gap-3">
						<Link 
							href="/remove-exif" 
							className="px-5 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
						>
							Remove EXIF Now
						</Link>
						<Link 
							href="/blog" 
							className="px-5 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors"
						>
							More Blog Articles
						</Link>
					</div>
				</section>
			</div>
		</article>
	);
}