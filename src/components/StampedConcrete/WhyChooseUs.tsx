"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Realistic stone, brick, and slate patterns at concrete pricing",
	"Durable outdoor finish resistant to freeze-thaw cycles",
	"Integral and broadcast color options for rich tones",
	"Low maintenance compared to natural stone pavers",
	"Seamless surface eliminates weed growth between joints",
	"Custom pattern combinations for unique designs",
	"Color hardener application for enhanced surface durability",
	"Professional sealant coating for UV and stain protection",
	"Bordering and accent inlay options for truly custom outdoor spaces",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Why Choose Our <span className="text-gradient-copper">Stamped Concrete</span>
						</h2>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Stamped concrete lets you get the look of natural stone, brick, or slate without
							the cost and ongoing maintenance that comes with the real thing. It&apos;s one of
							the most versatile outdoor surface options available, and when it&apos;s done well,
							it&apos;s genuinely hard to tell apart from natural materials.
						</p>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							We use color hardeners, integral pigments, and release agents to achieve the kind
							of depth and variation you see in real stone. Then we seal the surface to protect
							against staining, UV fading, and freeze-thaw damage so it stays looking good
							through every season.
						</p>
						<p className="mb-8 font-sans leading-relaxed text-white/70">
							Whether it&apos;s a patio, driveway, pool deck, or walkway, we work with you to
							choose the right pattern and color combination for your property. Custom
							borders and accent inlays are available for those who want something truly unique.
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
