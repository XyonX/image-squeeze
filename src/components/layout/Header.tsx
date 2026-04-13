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
		<header className="sticky top-0 z-50 bg-white border-b border-slate-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-14">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3 group">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
							<div className="relative text-primary">
								<LogoIcon />
							</div>
						</div>
						<div className="flex flex-col">
							<span className="text-base font-bold text-slate-900">getimgtools.com</span>
							<span className="text-[10px] text-slate-500 font-medium tracking-wide">Free Online Image Tools</span>
						</div>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden md:flex items-center gap-6">
						<Link 
							href="/" 
							className="text-xs font-bold text-slate-700 hover:text-primary transition-colors"
						>
							Tools
						</Link>
						<Link 
							href="/blog" 
							className="text-xs font-bold text-slate-700 hover:text-primary transition-colors"
						>
							Blog
						</Link>
						<Link 
							href="/about" 
							className="text-xs font-bold text-slate-700 hover:text-primary transition-colors"
						>
							About
						</Link>
						<Link 
							href="/privacy" 
							className="text-xs font-bold text-slate-700 hover:text-primary transition-colors"
						>
							Privacy
						</Link>
						<Link 
							href="/terms" 
							className="text-xs font-bold text-slate-700 hover:text-primary transition-colors"
						>
							Terms
						</Link>
					</nav>

					{/* Desktop right side */}
					<div className="hidden md:flex items-center gap-3">
						<span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1">
							100% Private
						</span>
					</div>

					{/* Mobile toggle */}
					<button 
						className="md:hidden p-1 hover:bg-slate-100"
						onClick={() => setMobileOpen(!mobileOpen)}
					>
						{mobileOpen ? (
							<X className="w-5 h-5 text-slate-900" />
						) : (
							<Menu className="w-5 h-5 text-slate-900" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Nav */}
			{mobileOpen && (
				<div className="md:hidden border-t border-slate-300 bg-white">
					<div className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
						<p className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2 py-2">Tools</p>
						{tools.map((tool) => (
							<Link
								key={tool.id}
								href={tool.route}
								className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 text-sm"
								onClick={() => setMobileOpen(false)}
							>
								<tool.icon className="w-4 h-4 text-slate-500" />
								<span className="text-slate-700">{tool.name}</span>
							</Link>
						))}
						<div className="border-t border-slate-300 pt-2 mt-2 space-y-1">
							<Link href="/blog" className="block px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Blog</Link>
							<Link href="/about" className="block px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50" onClick={() => setMobileOpen(false)}>About</Link>
							<Link href="/privacy" className="block px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Privacy</Link>
							<Link href="/terms" className="block px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Terms</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
