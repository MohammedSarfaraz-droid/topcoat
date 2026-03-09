"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Unlimited design flexibility with custom color and aggregate combinations",
	"Exceptional durability — lasts decades with minimal maintenance",
	"Eco-friendly options using recycled glass and natural stone",
	"Seamless installation for expansive, uninterrupted floor designs",
	"Ideal for high-traffic commercial environments",
	"Polished finish that enhances natural lighting in any space",
	"Available in epoxy and cementitious systems to suit any substrate",
	"Divider strips create intricate geometric patterns and custom motifs",
	"Ground and polished in-place for a perfectly smooth, monolithic surface",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Why Choose Our <span className="text-gradient-copper">Terrazzo</span>
						</h2>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Terrazzo has been used in prestigious buildings for centuries, and the reason is
							simple — nothing else combines that level of design freedom with the kind of
							durability that outlasts the building itself. We bring that same craft to every
							project, whether it&apos;s a corporate lobby, a church, or a luxury home.
						</p>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Our team designs each terrazzo floor from scratch using your chosen aggregates,
							colors, and divider strip layouts. The result is a completely unique surface
							that can&apos;t be replicated with any other material — rich, seamless, and
							polished to a mirror-like finish.
						</p>
						<p className="mb-8 font-sans leading-relaxed text-white/70">
							Beyond aesthetics, terrazzo is one of the most hygienic and low-maintenance
							floor types available. Its seamless surface harbors no bacteria or allergens,
							making it a smart choice for healthcare, education, and hospitality environments
							where cleanliness and longevity matter most.
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
									<div className="absolute top-0 left-0 h-0.5 w-0 rounded-tl-lg bg-linear-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
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
