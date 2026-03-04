"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X, Instagram, Facebook } from "lucide-react";

import { siteConfig } from "@/Config/Site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type NavLink = {
	label: string;
	href: string;
};

const navLinks: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Portfolio", href: "/portfolio" },
	{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 50);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Lock body scroll when menu is open
	useEffect(() => {
		if (isMobileOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileOpen]);

	const closeMobileMenu = () => setIsMobileOpen(false);

	return (
		<>
			<header
				className={cn(
					"fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
					isScrolled
						? " bg-[#0d0f12f2] py-3 backdrop-blur-md"
						: "bg-transparent py-5 "
				)}
			>
				<div className="container mx-auto flex items-center justify-between px-4">
					<Link
						href="/"
						className="flex items-center"
						aria-label={`${siteConfig.name} Home`}
					>
						<Image
							src="/Images/logo.png"
							alt={siteConfig.name}
							width={220}
							height={96}
							priority
							className="h-11 w-auto sm:h-12 lg:h-14"
						/>
					</Link>

					{/* Desktop nav */}
					<nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
						{navLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="text-sm font-sans font-medium text-[#efece7cc] hover:text-primary transition-colors tracking-wide uppercase"
							>
								{link.label}
							</Link>
						))}

						<Button
							asChild
							className="bg-primary font-sans text-sm tracking-wide text-primary-foreground hover:bg-copper-light"
						>
							<Link href="/contact" className="inline-flex items-center gap-2">
								<Phone className="size-4" aria-hidden="true" />
								<span>Get a Quote</span>
							</Link>
						</Button>
					</nav>

					{/* Hamburger toggle */}
					<button
						type="button"
						className="relative z-70 flex h-10 w-10 items-center justify-center text-white lg:hidden"
						aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
						aria-expanded={isMobileOpen}
						aria-controls="mobile-navigation"
						onClick={() => setIsMobileOpen((open) => !open)}
					>
						<span
							className={cn(
								"absolute transition-all duration-300",
								isMobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
							)}
						>
							<X className="size-6" aria-hidden="true" />
						</span>
						<span
							className={cn(
								"absolute transition-all duration-300",
								isMobileOpen ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
							)}
						>
							<Menu className="size-6" aria-hidden="true" />
						</span>
					</button>
				</div>
			</header>

			{/* Backdrop overlay */}
			<div
				ref={overlayRef}
				onClick={closeMobileMenu}
				className={cn(
					"fixed inset-0 z-55 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
					isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				)}
				aria-hidden="true"
			/>

			{/* Slide-out drawer */}
			<div
				id="mobile-navigation"
				role="dialog"
				aria-modal="true"
				aria-label="Mobile navigation"
				className={cn(
					"fixed top-0 left-0 z-60 h-full w-75 sm:w-85 lg:hidden",
					"flex flex-col",
					"bg-[#0d0f12] border-r border-white/6",
					"transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
					isMobileOpen ? "translate-x-0" : "-translate-x-full"
				)}
			>
				{/* Subtle vertical gradient accent line */}
				<div className="absolute top-0 right-0 h-full w-px bg-linear-to-b from-transparent via-primary/40 to-transparent" />

				{/* Top logo area */}
				<div className="flex items-center px-8 pt-8 pb-6 border-b border-white/6">
					<Link href="/" onClick={closeMobileMenu} aria-label={`${siteConfig.name} Home`}>
						<Image
							src="/Images/logo.png"
							alt={siteConfig.name}
							width={160}
							height={70}
							className="h-10 w-auto"
						/>
					</Link>
				</div>

				{/* Navigation links */}
				<nav className="flex flex-col gap-0 px-6 py-6 flex-1">
					{navLinks.map((link, i) => (
						<Link
							key={link.label}
							href={link.href}
							onClick={closeMobileMenu}
							style={{
								transitionDelay: isMobileOpen ? `${100 + i * 60}ms` : "0ms",
							}}
							className={cn(
								"group relative flex items-center gap-4 py-4 px-2",
								"text-[15px] font-sans font-medium tracking-[0.12em] uppercase",
								"text-white/50 hover:text-white",
								"border-b border-white/6 last:border-b-0",
								"transition-all duration-300",
								isMobileOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
							)}
						>
							{/* Hover accent */}
							<span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-0.5 bg-primary rounded-full transition-all duration-300 group-hover:h-6" />
							{/* Index number */}
							<span className="text-[11px] font-mono text-white/20 group-hover:text-primary/60 transition-colors duration-300 w-5">
								{String(i + 1).padStart(2, "0")}
							</span>
							<span className="group-hover:translate-x-1 transition-transform duration-300">
								{link.label}
							</span>
						</Link>
					))}

					{/* CTA Button */}
					<div
						style={{
							transitionDelay: isMobileOpen ? `${100 + navLinks.length * 60}ms` : "0ms",
						}}
						className={cn(
							"mt-8 transition-all duration-300",
							isMobileOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
						)}
					>
						<Link
							href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
							onClick={closeMobileMenu}
							className={cn(
								"flex items-center justify-center gap-2.5 w-full",
								"py-3.5 px-6 rounded-sm",
								"bg-primary text-primary-foreground",
								"text-sm font-sans font-semibold tracking-widest uppercase",
								"hover:bg-copper-light transition-colors duration-300",
								"ring-1 ring-primary/30"
							)}
						>
							<Phone className="size-4" aria-hidden="true" />
							<span>Get a Quote</span>
						</Link>
					</div>
				</nav>

				{/* Bottom social + contact strip */}
				<div
					style={{
						transitionDelay: isMobileOpen ? `${100 + (navLinks.length + 1) * 60}ms` : "0ms",
					}}
					className={cn(
						"px-8 py-6 border-t border-white/6",
						"transition-all duration-300",
						isMobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
					)}
				>
					<p className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-4 font-mono">
						Follow Us
					</p>
					<div className="flex items-center gap-4">
						{/* Instagram */}
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Follow us on Instagram"
							className={cn(
								"group flex h-10 w-10 items-center justify-center rounded-sm",
								"border border-white/10 text-white/40",
								"hover:border-primary/50 hover:text-primary hover:bg-primary/5",
								"transition-all duration-300"
							)}
						>
							<Instagram className="size-4 group-hover:scale-110 transition-transform duration-300" />
						</a>
						{/* Facebook */}
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Follow us on Facebook"
							className={cn(
								"group flex h-10 w-10 items-center justify-center rounded-sm",
								"border border-white/10 text-white/40",
								"hover:border-primary/50 hover:text-primary hover:bg-primary/5",
								"transition-all duration-300"
							)}
						>
							<Facebook className="size-4 group-hover:scale-110 transition-transform duration-300" />
						</a>

						{/* Divider */}
						<div className="h-px flex-1 bg-white/6" />

						{/* Phone number */}
						<a
							href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
							className="text-[11px] font-mono text-white/25 hover:text-primary transition-colors duration-300 tracking-wider"
						>
							{siteConfig.phone}
						</a>
					</div>
				</div>
			</div>
		</>
	);
}