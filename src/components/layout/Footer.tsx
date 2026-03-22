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
		<footer className="bg-white border-t border-slate-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					{/* Logo + Copyright */}
					<div className="flex items-center gap-2">
						<div className="text-primary">
							<LogoIcon />
						</div>
						<span className="text-sm text-slate-500">
							© {new Date().getFullYear()} getimgtools.com — All rights reserved.
						</span>
					</div>

					{/* Links */}
					<nav className="flex items-center gap-6">
						<Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
							Privacy Policy
						</Link>
						<Link href="/terms" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
							Terms of Service
						</Link>
						<Link href="/about" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
							About
						</Link>
					</nav>

					{/* Badge */}
					<div className="flex items-center gap-2">
						<span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full font-medium">🔒 100% Browser-Based</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
