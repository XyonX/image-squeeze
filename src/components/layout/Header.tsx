"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { tools } from "@/lib/tools";

function LogoIcon() {
	return (
		<svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
		</svg>
	);
}

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2">
						<div className="text-primary">
							<LogoIcon />
						</div>
						<span className="text-xl font-bold tracking-tight text-slate-900">getimgtools.com</span>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden md:flex items-center gap-8">
						<Link href="/" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
							Tools
						</Link>
						<Link href="/about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
							About
						</Link>
						<Link href="/privacy" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
							Privacy
						</Link>
						<Link href="/terms" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
							Terms
						</Link>
					</nav>

					{/* Desktop right side */}
					<div className="hidden md:flex items-center gap-3">
						<span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full font-medium">🔒 100% Private</span>
					</div>

					{/* Mobile toggle */}
					<button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
						{mobileOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
					</button>
				</div>
			</div>

			{/* Mobile Nav */}
			{mobileOpen && (
				<div className="md:hidden border-t border-slate-200 bg-white">
					<div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
						<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-2">All Tools</p>
						{tools.map((tool) => (
							<Link
								key={tool.id}
								href={tool.route}
								className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
								onClick={() => setMobileOpen(false)}
							>
								<tool.icon className="w-4 h-4 text-slate-400" />
								<span className="text-sm font-medium text-slate-700">{tool.name}</span>
							</Link>
						))}
						<div className="border-t border-slate-200 pt-2 mt-2 space-y-1">
							<Link href="/about" className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={() => setMobileOpen(false)}>About</Link>
							<Link href="/privacy" className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={() => setMobileOpen(false)}>Privacy</Link>
							<Link href="/terms" className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={() => setMobileOpen(false)}>Terms</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
