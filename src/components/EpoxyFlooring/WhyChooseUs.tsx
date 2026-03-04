"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Superior chemical and abrasion resistance for industrial environments",
	"Mirror-finish quality with metallic and solid color options",
	"Seamless, hygienic surface ideal for food processing and healthcare",
	"Rapid installation with minimal downtime for your business",
	"UV-stable formulations that resist yellowing and fading",
	"Custom color matching and decorative flake systems available",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<div
						className={`transition-all duration-700 ${
							isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
						}`}
					>
						<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Why Choose Our <span className="text-gradient-copper">Epoxy Flooring</span>
						</h2>
						<p className="mb-8 font-sans leading-relaxed text-muted-foreground">
							Our industrial-grade epoxy flooring systems deliver unmatched durability, chemical
							resistance, and visual appeal. From warehouses to showrooms, we create seamless,
							high-performance surfaces that withstand the toughest conditions while maintaining a
							stunning mirror-like finish.
						</p>
						<Button asChild className="bg-primary text-primary-foreground hover:bg-copper-light">
							<Link href="/contact">
								Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div
						className={`space-y-4 transition-all delay-200 duration-700 ${
							isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
						}`}
					>
						<h3 className="mb-4 font-serif text-xl font-semibold text-white/90">Key Benefits</h3>
						{benefits.map((benefit) => (
							<div key={benefit} className="flex items-start gap-3 rounded-lg border border-[#282c33] bg-[#0d0f12] p-4">
								<CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
								<span className="font-sans text-sm text-white/90">{benefit}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
