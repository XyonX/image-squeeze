"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { tools } from "@/lib/tools";

function LogoIcon() {
	return (
		<svg className="w-6 h-6" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<rect fill="#1a1a1a" height="200" width="200"></rect>
			<g transform="translate(50, 50)">
				<rect fill="#ffffff" height="50" width="50"></rect>
				<rect fill="#1a1a1a" height="25" width="25" y="25" x="25"></rect>
			</g>
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
					<Link href="/" className="flex items-center gap-2 font-bold text-slate-900">
						<LogoIcon />
						<span className="text-base font-bold">GetImgTools</span>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden md:flex items-center gap-6">
						<Link 
							href="/" 
							className="text-xs font-bold text-slate-700 hover:text-slate-900"
						>
							Tools
						</Link>
						<Link 
							href="/blog" 
							className="text-xs font-bold text-slate-700 hover:text-slate-900"
						>
							Blog
						</Link>
						<Link 
							href="/about" 
							className="text-xs font-bold text-slate-700 hover:text-slate-900"
						>
							About
						</Link>
						<Link 
							href="/privacy" 
							className="text-xs font-bold text-slate-700 hover:text-slate-900"
						>
							Privacy
						</Link>
						<Link 
							href="/terms" 
							className="text-xs font-bold text-slate-700 hover:text-slate-900"
						>
							Terms
						</Link>
					</nav>

					{/* Desktop right side */}
					<div className="hidden md:flex items-center gap-3">
						<span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1">
							Free
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
