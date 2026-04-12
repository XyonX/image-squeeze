import Link from "next/link";

function LogoIcon() {
	return (
		<svg className="w-5 h-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient y2="0%" x2="100%" y1="100%" x1="0%" id="gd">
					<stop stopColor="#0f766e" offset="0%"></stop>
					<stop stopColor="#0e7490" offset="100%"></stop>
				</linearGradient>
			</defs>
			<rect fill="#f0fdfa" rx="36" height="200" width="200"></rect>
			<g transform="rotate(-6 100 100)">
				<rect fill="url(#gd)" rx="26" height="124" width="124" y="38" x="38"></rect>
				<rect fillOpacity="0.26" fill="white" rx="14" height="40" width="40" y="56" x="56"></rect>
			</g>
			<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="18" stroke="#0f766e" d="M 35 35 L 70 70 M 70 70 L 55 55"></path>
			<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="18" stroke="#0f766e" d="M 165 35 L 130 70 M 130 70 L 145 55"></path>
			<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="18" stroke="#0f766e" d="M 35 165 L 70 130 M 70 130 L 55 145"></path>
			<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="18" stroke="#0f766e" d="M 165 165 L 130 130 M 130 130 L 145 145"></path>
		</svg>
	);
}

export function Footer() {
	return (
		<footer className="bg-white border-t border-slate-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-2 mb-3">
							<LogoIcon />
							<span className="font-bold text-slate-900">GetImgTools</span>
						</div>
						<p className="text-sm text-slate-600">
							Free, fast, and private image tools for everyone.
						</p>
					</div>

					{/* Product */}
					<div>
						<p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Product</p>
						<nav className="space-y-3">
							<Link href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors block">
								All Tools
							</Link>
							<Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900 transition-colors block">
								Blog
							</Link>
						</nav>
					</div>

					{/* Company */}
					<div>
						<p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Company</p>
						<nav className="space-y-3">
							<Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors block">
								About
							</Link>
							<Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900 transition-colors block">
								Privacy
							</Link>
							<Link href="/terms" className="text-sm text-slate-600 hover:text-slate-900 transition-colors block">
								Terms
							</Link>
						</nav>
					</div>

					{/* Trust */}
					<div>
						<p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Trust</p>
						<div className="space-y-2">
							<div className="text-sm text-slate-600 flex items-center gap-2">
								<span className="text-teal-600">✓</span> Browser-Based
							</div>
							<div className="text-sm text-slate-600 flex items-center gap-2">
								<span className="text-teal-600">✓</span> No Signup
							</div>
							<div className="text-sm text-slate-600 flex items-center gap-2">
								<span className="text-teal-600">✓</span> No Limits
							</div>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="pt-8 border-t border-slate-200">
					<p className="text-xs text-slate-500 text-center">
						© {new Date().getFullYear()} GetImgTools. All rights reserved. All processing happens in your browser — your privacy is guaranteed.
					</p>
				</div>
			</div>
		</footer>
	);
}
