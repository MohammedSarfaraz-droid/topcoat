"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Anti-slip textured coatings for safety in wet conditions",
	"Chemical and oil resistant for easy cleaning and maintenance",
	"Custom color flake and metallic finish options",
	"Resistant to hot tire pickup and abrasion",
	"Quick-cure systems for minimal garage downtime",
	"Professional clean finish that enhances property value",
	"100% waterproof seal that prevents moisture damage to concrete",
	"Easy to clean — repels oil, grease, and brake fluid with no staining",
	"Available in full broadcast, partial flake, and solid color systems",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Why Choose Our <span className="text-gradient-copper">Garage Floors</span>
						</h2>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Most garage floors are ignored until they crack, stain, or start to deteriorate.
							A quality coating changes that completely. Our garage floor systems seal and
							protect the concrete below while giving the space a clean, polished look that
							actually makes you want to use it.
						</p>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							We install coatings that handle everything a working garage throws at them —
							hot tires, oil drips, heavy tools, and constant foot traffic. You can hose the
							floor down and it comes up clean every time, with no scrubbing and no staining.
						</p>
						<p className="mb-8 font-sans leading-relaxed text-white/70">
							From color flake broadcast systems to solid metallic finishes, we help you
							choose the right look and build-up for your space. Installation is fast and the
							cure time is short, so your garage is back in use before you know it.
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
