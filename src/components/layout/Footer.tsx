import Link from "next/link";

function LogoIcon() {
	return (
		<svg className="w-4 h-4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<rect fill="#1a1a1a" height="200" width="200"></rect>
			<g transform="translate(50, 50)">
				<rect fill="#ffffff" height="50" width="50"></rect>
				<rect fill="#1a1a1a" height="25" width="25" y="25" x="25"></rect>
			</g>
		</svg>
	);
}

export function Footer() {
	return (
		<footer className="bg-white border-t border-slate-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-2 mb-3">
							<LogoIcon />
							<span className="font-bold text-slate-900 text-sm">GetImgTools</span>
						</div>
						<p className="text-xs text-slate-600 leading-relaxed">
							Free, fast, and private image tools.
						</p>
					</div>

					{/* Links */}
					<div>
						<p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Links</p>
						<nav className="space-y-2">
							<Link href="/" className="text-xs text-slate-600 hover:text-slate-900 block">
								Tools
							</Link>
							<Link href="/blog" className="text-xs text-slate-600 hover:text-slate-900 block">
								Blog
							</Link>
						</nav>
					</div>

					{/* Legal */}
					<div>
						<p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Legal</p>
						<nav className="space-y-2">
							<Link href="/privacy" className="text-xs text-slate-600 hover:text-slate-900 block">
								Privacy
							</Link>
							<Link href="/terms" className="text-xs text-slate-600 hover:text-slate-900 block">
								Terms
							</Link>
						</nav>
					</div>

					{/* Status */}
					<div>
						<p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Status</p>
						<div className="space-y-2">
							<div className="text-xs text-slate-600 flex items-center gap-2">
								<span className="inline-block w-1.5 h-1.5 bg-slate-400"></span> Browser-Based
							</div>
							<div className="text-xs text-slate-600 flex items-center gap-2">
								<span className="inline-block w-1.5 h-1.5 bg-slate-400"></span> No Signup
							</div>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="pt-6 border-t border-slate-300">
					<p className="text-xs text-slate-500 text-center">
						© {new Date().getFullYear()} GetImgTools. All processing happens in your browser.
					</p>
				</div>
			</div>
		</footer>
	);
}
