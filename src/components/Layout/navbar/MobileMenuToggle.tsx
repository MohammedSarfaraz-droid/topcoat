import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

type MobileMenuToggleProps = {
	isOpen: boolean;
	onToggle: () => void;
};

export function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
	return (
		<button
			type="button"
			className="relative z-70 flex h-10 w-10 items-center justify-center text-white lg:hidden"
			aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
			aria-expanded={isOpen}
			aria-controls="mobile-navigation"
			onClick={onToggle}
		>
			<span
				className={cn(
					"absolute transition-all duration-300",
					isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
				)}
			>
				<X className="size-6" aria-hidden="true" />
			</span>
			<span
				className={cn(
					"absolute transition-all duration-300",
					isOpen ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
				)}
			>
				<Menu className="size-6" aria-hidden="true" />
			</span>
		</button>
	);
}
