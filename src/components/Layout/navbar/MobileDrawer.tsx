import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Phone } from "lucide-react";

import { siteConfig } from "@/Config/Site";
import { cn } from "@/lib/utils";

import type { NavLink } from "./types";

type MobileDrawerProps = {
	isOpen: boolean;
	links: NavLink[];
	onClose: () => void;
};

export function MobileDrawer({ isOpen, links, onClose }: MobileDrawerProps) {
	const pathname = usePathname();

	const isActiveLink = (href: string) => {
		if (href === "/") {
			return pathname === "/";
		}
		return pathname === href || pathname.startsWith(`${href}/`);
	};

	return (
		<div
			id="mobile-navigation"
			role="dialog"
			aria-modal="true"
			aria-label="Mobile navigation"
			className={cn(
				"fixed top-0 left-0 z-60 h-dvh w-75 sm:w-85 lg:hidden overflow-hidden",
				"flex flex-col",
				"bg-[#0d0f12] border-r border-white/6",
				"transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
				isOpen ? "translate-x-0" : "-translate-x-full"
			)}
		>
			<div className="absolute top-0 right-0 h-full w-px bg-linear-to-b from-transparent via-primary/40 to-transparent" />

			<div className="flex items-center border-b border-white/6 px-6 pt-5 pb-4 [@media(max-height:760px)]:px-5 [@media(max-height:760px)]:pt-4 [@media(max-height:760px)]:pb-3">
				<Link href="/" onClick={onClose} aria-label={`${siteConfig.name} Home`}>
					<Image
						src="/Images/TopCoat-white-logo.png"
						alt={siteConfig.name}
						width={160}
						height={70}
						className="h-9 w-auto [@media(max-height:760px)]:h-8"
					/>
				</Link>
			</div>

			<nav className="flex flex-1 flex-col gap-0 px-5 py-3 [@media(max-height:760px)]:px-4 [@media(max-height:760px)]:py-2">
				{links.map((link, index) => {
					const isActive = isActiveLink(link.href);

					return (
						<Link
							key={link.label}
							href={link.href}
							onClick={onClose}
							aria-current={isActive ? "page" : undefined}
							style={{
								transitionDelay: isOpen ? `${100 + index * 60}ms` : "0ms",
							}}
							className={cn(
								"group relative flex items-center gap-3 rounded-sm px-2 py-2.5 [@media(max-height:760px)]:py-2",
								"text-sm font-sans font-medium tracking-widest uppercase",
								"border-b border-white/6 last:border-b-0",
								"transition-all duration-300 active:scale-95",
								isActive
									? "bg-primary/10 text-primary"
									: "text-white/50 hover:text-white hover:bg-white/5",
								isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
							)}
						>
							<span
								className={cn(
									"absolute left-0 top-1/2 w-0.5 -translate-y-1/2 rounded-full bg-primary transition-all duration-300",
									isActive ? "h-5" : "h-0 group-hover:h-5"
								)}
							/>
							<span
								className={cn(
									"w-5 text-[10px] font-mono transition-colors duration-300",
									isActive ? "text-primary/80" : "text-white/20 group-hover:text-primary/60"
								)}
							>
								{String(index + 1).padStart(2, "0")}
							</span>
							<span className="transition-transform duration-300 group-hover:translate-x-1">
								{link.label}
							</span>
						</Link>
					);
				})}

				<div
					style={{
						transitionDelay: isOpen ? `${100 + links.length * 60}ms` : "0ms",
					}}
					className={cn(
						"mt-4 transition-all duration-300 [@media(max-height:760px)]:mt-3",
						isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
					)}
				>
					<Link
						href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
						onClick={onClose}
						className={cn(
							"mb-3 flex items-center justify-center gap-2.5 w-full",
							"py-3 px-5 rounded-sm [@media(max-height:760px)]:py-2.5",
							"border border-primary/40 text-primary bg-primary/8",
							"text-xs font-sans font-semibold tracking-[0.16em] uppercase",
							"hover:border-primary/60 hover:bg-primary/15 transition-colors duration-300"
						)}
					>
						<Phone className="size-4" aria-hidden="true" />
						<span>Call Now</span>
					</Link>

					<Link
						href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
						onClick={onClose}
						className={cn(
							"flex items-center justify-center gap-2.5 w-full",
							"py-3 px-5 rounded-sm [@media(max-height:760px)]:py-2.5",
							"bg-primary text-primary-foreground",
							"text-xs font-sans font-semibold tracking-[0.16em] uppercase",
							"hover:bg-copper-light transition-colors duration-300",
							"ring-1 ring-primary/30"
						)}
					>
						<Phone className="size-4" aria-hidden="true" />
						<span>Get a Quote</span>
					</Link>

					<div className="mt-4 border-t border-white/6 pt-3 [@media(max-height:760px)]:mt-3 [@media(max-height:760px)]:pt-2.5">
						<p className="mb-2 text-[10px] font-mono tracking-[0.18em] uppercase text-white/25 [@media(max-height:760px)]:mb-1.5">
							Follow Us
						</p>
						<div className="flex items-center gap-3 [@media(max-height:760px)]:gap-2.5">
							<a
								href="https://www.instagram.com/top.coat.artistry"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Follow us on Instagram"
								className={cn(
									"group flex h-9 w-9 items-center justify-center rounded-sm [@media(max-height:760px)]:h-8 [@media(max-height:760px)]:w-8",
									"border border-white/12 bg-white/5 text-white shadow-[0_10px_24px_-18px_rgba(255,255,255,0.3)]",
									"hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8",
									"transition-all duration-300"
								)}
							>
								<Instagram className="size-4 transition-transform duration-300 group-hover:scale-105" />
							</a>
							<a
								href="https://www.facebook.com/top.coat.artistry?mibextid=ZbWKwL"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Follow us on Facebook"
								className={cn(
									"group flex h-9 w-9 items-center justify-center rounded-sm [@media(max-height:760px)]:h-8 [@media(max-height:760px)]:w-8",
									"border border-white/12 bg-white/5 text-white shadow-[0_10px_24px_-18px_rgba(255,255,255,0.3)]",
									"hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8",
									"transition-all duration-300"
								)}
							>
								<Facebook className="size-4 transition-transform duration-300 group-hover:scale-105" />
							</a>
							<div className="h-px flex-1 bg-white/6" />
							<a
								href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
								className="text-[10px] font-mono tracking-wider text-white/25 transition-colors duration-300 hover:text-primary"
							>
								{siteConfig.phone}
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
