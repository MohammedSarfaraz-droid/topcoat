"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Weather-resistant coatings that endure extreme conditions",
	"Modern textured and smooth finish options",
	"Lightweight polymer-modified systems for renovation projects",
	"UV-stable pigments for lasting color integrity",
	"Fire-resistant concrete formulations available",
	"Custom geometric and organic patterns",
	"Seamless waterproof barrier that protects structural integrity",
	"Expert surface preparation for maximum adhesion and longevity",
	"Compatible with new builds and existing renovation projects",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Why Choose Our <span className="text-gradient-copper">Building Facades</span>
						</h2>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Your building&apos;s exterior is the first thing people see, and it deserves more than
							a coat of paint. We design and install vertical concrete facade systems that genuinely
							transform a structure — giving it character, depth, and a finish that holds up year
							after year regardless of the weather.
						</p>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							We work with architects, property owners, and contractors to select textures,
							colors, and systems that suit the building&apos;s design intent. Whether the goal is a
							clean minimal finish or a bold expressive look, we have the materials and skill to
							deliver it with precision.
						</p>
						<p className="mb-8 font-sans leading-relaxed text-white/70">
							Our polymer-modified concrete systems are lightweight, weather-resistant, and
							built to protect the structure beneath. With over two decades of experience, we
							know what it takes to get a facade installation done right — from surface prep
							all the way through to final sealing.
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
