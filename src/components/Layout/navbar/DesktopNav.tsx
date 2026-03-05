import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { NavLink } from "./types";

type DesktopNavProps = {
	links: NavLink[];
};

export function DesktopNav({ links }: DesktopNavProps) {
	const pathname = usePathname();

	const isActiveLink = (href: string) => {
		if (href === "/") {
			return pathname === "/";
		}
		return pathname === href || pathname.startsWith(`${href}/`);
	};

	return (
		<nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
			{links.map((link) => {
				const isActive = isActiveLink(link.href);

				return (
					<Link
						key={link.label}
						href={link.href}
						aria-current={isActive ? "page" : undefined}
						className={cn(
							"group relative text-sm font-sans font-medium tracking-wide uppercase",
							"transition-all duration-300 active:scale-95",
							isActive ? "text-primary" : "text-[#efece7cc] hover:text-primary"
						)}
					>
						<span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
							{link.label}
						</span>
						<span
							className={cn(
								"absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300",
								isActive ? "w-full" : "w-0 group-hover:w-full"
							)}
						/>
					</Link>
				);
			})}

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
	);
}
