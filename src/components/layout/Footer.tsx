import Link from "next/link";

function LogoIcon() {
	return (
		<svg className="w-6 h-6" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient y2="0%" x2="100%" y1="100%" x1="0%" id="gd">
					<stop stopColor="#60a5fa" offset="0%"></stop>
					<stop stopColor="#1e3a8a" offset="100%"></stop>
				</linearGradient>
			</defs>
			<rect fill="#0f172a" rx="36" height="200" width="200"></rect>
			<g transform="rotate(-6 100 100)">
				<rect fill="url(#gd)" rx="26" height="124" width="124" y="38" x="38"></rect>
				<rect fillOpacity="0.26" fill="white" rx="14" height="40" width="40" y="56" x="56"></rect>
			</g>
			<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="18" stroke="white" d="M 35 35 L 70 70 M 70 70 L 55 55"></path>
			<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="18" stroke="white" d="M 165 35 L 130 70 M 130 70 L 145 55"></path>
			<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="18" stroke="white" d="M 35 165 L 70 130 M 70 130 L 55 145"></path>
			<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="18" stroke="white" d="M 165 165 L 130 130 M 130 130 L 145 145"></path>
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
						<div className="flex items-center gap-3 mb-3">
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg blur opacity-60"></div>
								<div className="relative text-primary">
									<LogoIcon />
								</div>
							</div>
							<div className="flex flex-col">
								<span className="text-sm font-medium text-slate-900">getimgtools.com</span>
								<span className="text-xs text-slate-500">Free Online Image Tools</span>
							</div>
						</div>
						<p className="text-xs text-slate-600 leading-relaxed">
							All image processing happens directly in your browser. No files are uploaded to any server — your privacy is guaranteed.
						</p>
					</div>

					{/* Links */}
					<div>
						<p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Links</p>
						<nav className="space-y-2">
							<Link href="/" className="text-xs text-slate-600 hover:text-primary transition-colors block">
								Tools
							</Link>
							<Link href="/blog" className="text-xs text-slate-600 hover:text-primary transition-colors block">
								Blog
							</Link>
							<Link href="/about" className="text-xs text-slate-600 hover:text-primary transition-colors block">
								About
							</Link>
						</nav>
					</div>

					{/* Legal */}
					<div>
						<p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Legal</p>
						<nav className="space-y-2">
							<Link href="/privacy" className="text-xs text-slate-600 hover:text-primary transition-colors block">
								Privacy Policy
							</Link>
							<Link href="/terms" className="text-xs text-slate-600 hover:text-primary transition-colors block">
								Terms of Service
							</Link>
						</nav>
					</div>

					{/* Status */}
					<div>
						<p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Status</p>
						<div className="space-y-3">
							<div className="relative group">
								<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<span className="relative text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
									<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
									</svg>
									100% Browser-Based
								</span>
							</div>
							<div className="text-xs text-slate-600 flex items-center gap-2">
								<span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full"></span> No Signup Required
							</div>
							<div className="text-xs text-slate-600 flex items-center gap-2">
								<span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full"></span> No Watermarks
							</div>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="pt-6 border-t border-slate-300">
					<p className="text-xs text-slate-500 text-center">
						© {new Date().getFullYear()} getimgtools.com — Free Online Image Tools
					</p>
					<div className="mt-2 flex flex-wrap justify-center gap-4">
						<span className="text-xs text-slate-400">No file size limits</span>
						<span className="text-xs text-slate-400">•</span>
						<span className="text-xs text-slate-400">No daily quotas</span>
						<span className="text-xs text-slate-400">•</span>
						<span className="text-xs text-slate-400">Instant processing</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
