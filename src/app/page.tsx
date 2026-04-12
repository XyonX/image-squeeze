import { tools } from "@/lib/tools";
import { ToolCard } from "@/components/ui/ToolCard";

export default function HomePage() {
	const compressTools = tools.filter((t) => t.category === "compress");
	const convertTools = tools.filter((t) => t.category === "convert");
	const editTools = tools.filter((t) => t.category === "edit" || t.category === "utility");

	return (
		<div>
			{/* Hero */}
			<div className="relative text-center mb-16">
				{/* Background gradient */}
				<div className="absolute inset-0 -top-8 -left-8 -right-8 h-64 bg-gradient-to-br from-primary/5 via-purple-500/5 to-emerald-500/5 rounded-3xl blur-3xl opacity-70"></div>
				
				<div className="relative">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
						Free Online <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Image Tools</span>
					</h1>
					<p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
						Compress, resize, convert & edit — all in your browser. 
						<span className="text-slate-800 font-semibold"> 100% private</span>, no signup needed.
					</p>
					
					{/* Stats */}
					<div className="flex flex-wrap justify-center gap-6 mb-10">
						<div className="flex flex-col items-center">
							<div className="text-2xl font-bold text-slate-900">17+</div>
							<div className="text-sm text-slate-500">Tools</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="text-2xl font-bold text-slate-900">100%</div>
							<div className="text-sm text-slate-500">Private</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="text-2xl font-bold text-slate-900">0</div>
							<div className="text-sm text-slate-500">Signup</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="text-2xl font-bold text-slate-900">∞</div>
							<div className="text-sm text-slate-500">Free</div>
						</div>
					</div>
					
					{/* Popular tools quick links */}
					<div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
						<a href="/compress-jpg" className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/15 transition-colors duration-200">
							Compress JPG
						</a>
						<a href="/resize-image" className="px-4 py-2 bg-gradient-to-r from-purple-600/10 to-purple-600/5 border border-purple-600/20 rounded-full text-sm font-medium text-purple-600 hover:bg-purple-600/15 transition-colors duration-200">
							Resize Image
						</a>
						<a href="/convert-to-webp" className="px-4 py-2 bg-gradient-to-r from-emerald-600/10 to-emerald-600/5 border border-emerald-600/20 rounded-full text-sm font-medium text-emerald-600 hover:bg-emerald-600/15 transition-colors duration-200">
							Convert to WebP
						</a>
						<a href="/bulk-compress" className="px-4 py-2 bg-gradient-to-r from-amber-600/10 to-amber-600/5 border border-amber-600/20 rounded-full text-sm font-medium text-amber-600 hover:bg-amber-600/15 transition-colors duration-200">
							Bulk Compress
						</a>
					</div>
				</div>
			</div>

			{/* Compress Section */}
			<section className="mb-10">
				<div className="mb-4">
					<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
						<span className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-base">🗜️</span>
						<span className="text-red-500">Compress</span> Images
					</h2>
					<p className="text-xs text-slate-400 mt-1 ml-10">Reduce file size without losing quality</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
					{compressTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Convert Section */}
			<section className="mb-10">
				<div className="mb-4">
					<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
						<span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-base">🔄</span>
						<span className="text-blue-500">Convert</span> Formats
					</h2>
					<p className="text-xs text-slate-400 mt-1 ml-10">Switch between JPG, PNG, WebP &amp; more</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
					{convertTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* Edit & Utilities Section */}
			<section className="mb-10">
				<div className="mb-4">
					<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
						<span className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-base">✂️</span>
						<span className="text-amber-500">Edit</span> &amp; Utilities
					</h2>
					<p className="text-xs text-slate-400 mt-1 ml-10">Resize, rotate, crop &amp; extract metadata</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
					{editTools.map((tool) => (
						<ToolCard key={tool.id} tool={tool} />
					))}
				</div>
			</section>

			{/* How It Works */}
			<section className="mb-10">
				<h2 className="text-lg font-bold text-slate-900 mb-6 text-center">How It Works</h2>
				<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
					<div className="flex-1 text-center px-4">
						<div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mx-auto mb-3">1</div>
						<p className="text-sm font-semibold text-slate-900">Drop your image</p>
						<p className="text-xs text-slate-400 mt-1">Drag & drop, paste, or browse</p>
					</div>
					<div className="hidden sm:block w-12 h-px bg-slate-200" />
					<div className="flex-1 text-center px-4">
						<div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mx-auto mb-3">2</div>
						<p className="text-sm font-semibold text-slate-900">Tweak settings</p>
						<p className="text-xs text-slate-400 mt-1">Quality, size, format — your call</p>
					</div>
					<div className="hidden sm:block w-12 h-px bg-slate-200" />
					<div className="flex-1 text-center px-4">
						<div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-bold text-sm flex items-center justify-center mx-auto mb-3">✓</div>
						<p className="text-sm font-semibold text-slate-900">Download instantly</p>
						<p className="text-xs text-slate-400 mt-1">Done in seconds, no waiting</p>
					</div>
				</div>
			</section>

			{/* Why GetImgTools — Detailed */}
			<section className="space-y-3">
				<h2 className="text-lg font-bold text-slate-900 text-center mb-4">Why <span className="text-primary">GetImgTools</span>?</h2>

				<div className="grid sm:grid-cols-2 gap-3">
					{/* Privacy */}
					<div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl">
						<div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
							<span className="text-lg">🔒</span>
						</div>
						<div>
							<p className="text-sm font-semibold text-slate-900">Your files stay on your device</p>
							<p className="text-xs text-slate-500 mt-1 leading-relaxed">
								Zero uploads. All processing happens in-browser using the Canvas API and Web Workers. We literally <em>can't</em> see your images.
							</p>
						</div>
					</div>

					{/* Speed */}
					<div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl">
						<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
							<span className="text-lg">⚡</span>
						</div>
						<div>
							<p className="text-sm font-semibold text-slate-900">No upload wait — instant processing</p>
							<p className="text-xs text-slate-500 mt-1 leading-relaxed">
								Other tools upload your file, process on a server, then send it back. We skip all that — your CPU does the work in milliseconds.
							</p>
						</div>
					</div>

					{/* No signup */}
					<div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl">
						<div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
							<span className="text-lg">🚫</span>
						</div>
						<div>
							<p className="text-sm font-semibold text-slate-900">No account, no email, no BS</p>
							<p className="text-xs text-slate-500 mt-1 leading-relaxed">
								Just open the tool and use it. No "sign up to download" walls, no watermarks on your output, no daily limits.
							</p>
						</div>
					</div>

					{/* Quality */}
					<div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl">
						<div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
							<span className="text-lg">🎯</span>
						</div>
						<div>
							<p className="text-sm font-semibold text-slate-900">17 tools, one clean interface</p>
							<p className="text-xs text-slate-500 mt-1 leading-relaxed">
								Compress, convert, resize, rotate, add watermarks, apply filters, strip EXIF, encode Base64 — everything you need for images, in one place with zero clutter.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
