"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Superior chemical and abrasion resistance for industrial environments",
	"Mirror-finish quality with metallic and solid color options",
	"Seamless, hygienic surface ideal for food processing and healthcare",
	"Rapid installation with minimal downtime for your business",
	"UV-stable formulations that resist yellowing and fading",
	"Custom color matching and decorative flake systems available",
	"Self-leveling technology for a perfectly smooth finish on any substrate",
	"Moisture-vapour barrier systems to prevent bubbling and delamination",
	"Anti-static formulations available for electronics and cleanroom facilities",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
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
					<p className="mb-4 font-sans leading-relaxed text-white/70">
						Epoxy flooring is one of the most practical and visually impressive flooring
						choices available today. We install seamless systems engineered to withstand
						heavy foot traffic, machinery loads, chemical spills, and daily cleaning without
						showing wear.
					</p>
					<p className="mb-4 font-sans leading-relaxed text-white/70">
						For commercial and industrial clients, that means a floor that genuinely performs
						under pressure while keeping maintenance costs low. For retail, hospitality, and
						showroom clients, it means a clean, high-gloss surface that elevates the whole
						environment and leaves a strong impression on every visitor.
					</p>
					<p className="mb-8 font-sans leading-relaxed text-white/70">
						We take care of everything from concrete preparation and moisture testing through
						to final topcoat application. Every system is spec&apos;d to match the demands of
						your specific environment, so you get a floor that works as hard as your business
						does for years to come.
						</p>
						<Button asChild className="bg-primary text-primary-foreground hover:bg-copper-light">
							<Link href="/contact">
								Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className={`transition-all delay-200 duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
						<h3 className="mb-6 font-serif text-xl font-semibold text-white/90">Key Benefits</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{benefits.map((benefit, index) => (
								<div key={benefit} className="group relative rounded-lg bg-[#0d0f12] border border-[#282c33] p-5 transition-all duration-300 hover:border-primary/40 hover:bg-[#111316]">
									<div className="absolute top-0 left-0 h-[2px] w-0 rounded-tl-lg bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
									<span className="mb-3 block font-serif text-2xl font-bold text-primary/60 leading-none">
										{String(index + 1).padStart(2, "0")}
									</span>
									<span className="font-sans text-sm leading-relaxed text-white/80">{benefit}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
