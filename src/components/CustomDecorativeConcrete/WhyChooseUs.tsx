"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Fully bespoke designs tailored to your architectural style",
	"Hand-finished textures with premium artisan detailing",
	"Durable polymer-modified systems for long-term performance",
	"Interior and exterior applications with weather-ready options",
	"Custom color blending, stains, and metallic accents",
	"Seamless integration with modern and classic spaces",
	"Acid staining and integral pigment for rich tonal depth",
	"Micro-topping overlays for thin, lightweight transformations",
	"Compatible with radiant heat systems for modern installations",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Why Choose Our <span className="text-gradient-copper">Custom Concrete</span>
						</h2>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Not every space fits a standard finish, and that&apos;s exactly where our custom
							decorativeoncrete work comes in. We sit down with you, understand your space,
							your aesthetic, and your practical needs — then we build a surface that reflects
							all of that with real craftsmanship.
						</p>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							From hand-applied micro-toppings and acid-stained floors to sculpted wall
							textures and metallic feature finishes, we use a wide range of techniques to
							create surfaces that genuinely stand out. Each project is treated as its own
							piece — no two are ever the same.
						</p>
						<p className="mb-8 font-sans leading-relaxed text-white/70">
							We work across residential homes, commercial interiors, and hospitality spaces,
							using durable polymer-modified systems that look as good in ten years as they do
							on installation day. If you can imagine it, we can build it.
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
