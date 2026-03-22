"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { tools } from "@/lib/tools";

function LogoIcon() {
	return (
		<svg className="w-8 h-8" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
						<Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
							Blog
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
							<Link href="/blog" className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={() => setMobileOpen(false)}>Blog</Link>
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
