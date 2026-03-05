import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { NavLink } from "./types";

type DesktopNavProps = {
	links: NavLink[];
};

export function DesktopNav({ links }: DesktopNavProps) {
	return (
		<nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
			{links.map((link) => (
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
	);
}
