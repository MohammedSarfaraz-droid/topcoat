"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="relative overflow-hidden py-24" ref={ref}>
			<div className="absolute inset-0 bg-linear-to-b from-[#14161A] via-[#1B1F27] to-[#14161A]" />
			<div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

			<div
				className={`relative container mx-auto px-4 text-center transition-all duration-1000 ${
					isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
				}`}
			>
				<h2 className="mb-6 font-serif text-4xl font-bold text-[#efece7] md:text-6xl">
					Ready to Transform <span className="text-gradient-copper">Your Space?</span>
				</h2>
				<p className="mx-auto mb-10 max-w-xl font-sans text-lg text-[#818898]">
					Let&apos;s discuss your project. Our experts will craft a custom solution tailored to your vision.
				</p>
				<Link href="/contact">
					<Button
						size="lg"
						className="bg-primary px-10 py-7 text-lg font-sans tracking-wide text-primary-foreground hover:bg-copper-light cursor-pointer"
					>
						Request a Consultation
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default CTASection;
