import { tools } from "@/lib/tools";
import { ToolCard } from "@/components/ui/ToolCard";
import { ArrowRight, Zap, Lock, Sparkles } from "lucide-react";

export default function HomePage() {
	const compressTools = tools.filter((t) => t.category === "compress");
	const convertTools = tools.filter((t) => t.category === "convert");
	const editTools = tools.filter((t) => t.category === "edit" || t.category === "utility");
	const featuredTools = [compressTools[0], convertTools[0], editTools[0], compressTools[1]].filter(Boolean);

	return (
		<div className="space-y-16">
			{/* Hero Section */}
			<section className="relative">
				<div className="grid lg:grid-cols-2 gap-12 items-center py-12">
					{/* Left Column */}
					<div className="space-y-6">
						<div className="space-y-3">
							<h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
								Image tools 
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
									without the BS.
								</span>
							</h1>
							<p className="text-lg text-slate-600 max-w-lg leading-relaxed">
								Compress, resize, convert & edit images instantly in your browser. No signup, no watermarks, no limits. 100% private.
							</p>
						</div>

						{/* Quick Actions */}
						<div className="flex flex-wrap gap-3 pt-4">
							<a href="/compress-jpg" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors">
								Get Started
								<ArrowRight className="w-4 h-4" />
							</a>
							<a href="#tools" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-900 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
								Explore Tools
							</a>
						</div>

						{/* Trust Indicators */}
						<div className="space-y-3 pt-2">
							<div className="flex items-center gap-3 text-sm text-slate-700">
								<Lock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
								<span>Your files never leave your device</span>
							</div>
							<div className="flex items-center gap-3 text-sm text-slate-700">
								<Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
								<span>Lightning-fast browser processing</span>
							</div>
							<div className="flex items-center gap-3 text-sm text-slate-700">
								<Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0" />
								<span>20+ free tools in one place</span>
							</div>
						</div>
					</div>

					{/* Right Column — Stats Grid */}
					<div className="grid grid-cols-2 gap-4">
						<div className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:border-slate-300 transition-all">
							<div className="text-4xl font-bold text-slate-900 mb-2">20+</div>
							<p className="text-sm text-slate-600 font-medium">Free Tools</p>
						</div>
						<div className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:border-slate-300 transition-all">
							<div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
							<p className="text-sm text-slate-600 font-medium">Private</p>
						</div>
						<div className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:border-slate-300 transition-all">
							<div className="text-4xl font-bold text-slate-900 mb-2">0</div>
							<p className="text-sm text-slate-600 font-medium">Signup Required</p>
						</div>
						<div className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:border-slate-300 transition-all">
							<div className="text-4xl font-bold text-slate-900 mb-2">∞</div>
							<p className="text-sm text-slate-600 font-medium">Forever Free</p>
						</div>
					</div>
				</div>
			</section>

			{/* Ad Space 1 - Top Banner */}
			<section className="bg-slate-100 rounded-2xl p-8 text-center border-2 border-dashed border-slate-300">
				<p className="text-sm text-slate-600 font-medium">Advertisement</p>
			</section>

			{/* Featured Tools Section */}
			<section id="tools" className="space-y-6">
				<div>
					<h2 className="text-3xl font-bold text-slate-900 mb-2">Popular Tools</h2>
					<p className="text-slate-600">Start with the most-used image processing tools</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{featuredTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Compress Section */}
			<section className="space-y-4">
				<div>
					<h2 className="text-2xl font-bold text-slate-900 mb-1">Compress Images</h2>
					<p className="text-sm text-slate-600">Reduce file size without losing quality</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
					{compressTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Ad Space 2 - Mid Content */}
			<section className="bg-slate-100 rounded-2xl p-8 text-center border-2 border-dashed border-slate-300">
				<p className="text-sm text-slate-600 font-medium">Advertisement</p>
			</section>

			{/* Convert Section */}
			<section className="space-y-4">
				<div>
					<h2 className="text-2xl font-bold text-slate-900 mb-1">Convert Formats</h2>
					<p className="text-sm text-slate-600">Switch between JPG, PNG, WebP &amp; more</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
					{convertTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Edit & Utilities Section */}
			<section className="space-y-4">
				<div>
					<h2 className="text-2xl font-bold text-slate-900 mb-1">Edit &amp; Utilities</h2>
					<p className="text-sm text-slate-600">Resize, rotate, crop &amp; extract metadata</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
					{editTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* How It Works Section */}
			<section className="space-y-8">
				<div className="text-center space-y-2">
					<h2 className="text-3xl font-bold text-slate-900">How it works</h2>
					<p className="text-slate-600">Three simple steps to process your images</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Step 1 */}
					<div className="text-center">
						<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center text-2xl font-bold text-emerald-600">
							1
						</div>
						<h3 className="text-lg font-semibold text-slate-900 mb-2">Upload Image</h3>
						<p className="text-sm text-slate-600">Drag &amp; drop, paste, or browse your image file</p>
					</div>

					{/* Step 2 */}
					<div className="text-center">
						<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">
							2
						</div>
						<h3 className="text-lg font-semibold text-slate-900 mb-2">Adjust Settings</h3>
						<p className="text-sm text-slate-600">Customize quality, size, format, and more</p>
					</div>

					{/* Step 3 */}
					<div className="text-center">
						<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-2xl font-bold text-purple-600">
							3
						</div>
						<h3 className="text-lg font-semibold text-slate-900 mb-2">Download</h3>
						<p className="text-sm text-slate-600">Get your processed image instantly</p>
					</div>
				</div>
			</section>

			{/* Ad Space 3 - Bottom Content */}
			<section className="bg-slate-100 rounded-2xl p-8 text-center border-2 border-dashed border-slate-300">
				<p className="text-sm text-slate-600 font-medium">Advertisement</p>
			</section>

			{/* Features Section */}
			<section className="space-y-6">
				<div className="text-center space-y-2">
					<h2 className="text-3xl font-bold text-slate-900">Why choose GetImgTools?</h2>
					<p className="text-slate-600">Everything you need, nothing you don&apos;t</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{/* Privacy */}
					<div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow">
						<div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 text-2xl">
							🔒
						</div>
						<h3 className="text-lg font-semibold text-slate-900 mb-2">100% Private</h3>
						<p className="text-sm text-slate-600 leading-relaxed">
							All processing happens in-browser using Canvas API and Web Workers. Your files never touch our servers.
						</p>
					</div>

					{/* Speed */}
					<div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow">
						<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 text-2xl">
							⚡
						</div>
						<h3 className="text-lg font-semibold text-slate-900 mb-2">Lightning Fast</h3>
						<p className="text-sm text-slate-600 leading-relaxed">
							No server uploads or downloads. Processing happens instantly on your device in milliseconds.
						</p>
					</div>

					{/* No Signup */}
					<div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow">
						<div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 text-2xl">
							✨
						</div>
						<h3 className="text-lg font-semibold text-slate-900 mb-2">Zero Friction</h3>
						<p className="text-sm text-slate-600 leading-relaxed">
							No signup walls, no email required, no daily limits. Just open and use—completely free.
						</p>
					</div>

					{/* Comprehensive */}
					<div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow">
						<div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 text-2xl">
							🎨
						</div>
						<h3 className="text-lg font-semibold text-slate-900 mb-2">All-in-One Toolkit</h3>
						<p className="text-sm text-slate-600 leading-relaxed">
							Compress, convert, resize, rotate, crop, add watermarks, filters, and more in a single clean interface.
						</p>
					</div>
				</div>
			</section>

			{/* Ad Space 4 - Final Banner */}
			<section className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 text-center border border-slate-200">
				<p className="text-sm text-slate-600 font-medium">Advertisement</p>
			</section>

			{/* CTA Section */}
			<section className="text-center py-12">
				<div className="space-y-4">
					<h2 className="text-3xl font-bold text-slate-900">Ready to process images?</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Choose any tool above and get started in seconds.
					</p>
					<a href="/compress-jpg" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors">
						Start for Free
						<ArrowRight className="w-5 h-5" />
					</a>
				</div>
			</section>
		</div>
	);
}
