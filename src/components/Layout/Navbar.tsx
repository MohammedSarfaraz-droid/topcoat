"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/Config/Site";
import { cn } from "@/lib/utils";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileDrawer } from "./navbar/MobileDrawer";
import { MobileMenuToggle } from "./navbar/MobileMenuToggle";
import { navLinks } from "./navbar/navLinks";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);

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
	const toggleMobileMenu = () => setIsMobileOpen((open) => !open);

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
							src="/Images/TopCoat-white-logo.png"
							alt={siteConfig.name}
							width={300}
							height={112}
							priority
							className="h-13 w-auto sm:h-14 lg:h-20"
						/>
					</Link>

					<DesktopNav links={navLinks} />
					<MobileMenuToggle isOpen={isMobileOpen} onToggle={toggleMobileMenu} />
				</div>
			</header>

			<div
				onClick={closeMobileMenu}
				className={cn(
					"fixed inset-0 z-55 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
					isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				)}
				aria-hidden="true"
			/>

			<MobileDrawer isOpen={isMobileOpen} links={navLinks} onClose={closeMobileMenu} />
		</>
	);
}