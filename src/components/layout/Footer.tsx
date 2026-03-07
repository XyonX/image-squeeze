import Link from "next/link";

function LogoIcon() {
	return (
		<svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
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
