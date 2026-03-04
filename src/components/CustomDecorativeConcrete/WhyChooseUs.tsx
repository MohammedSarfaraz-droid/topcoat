"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Fully bespoke designs tailored to your architectural style",
	"Hand-finished textures with premium artisan detailing",
	"Durable polymer-modified systems for long-term performance",
	"Interior and exterior applications with weather-ready options",
	"Custom color blending, stains, and metallic accents",
	"Seamless integration with modern and classic spaces",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Why Choose Our <span className="text-gradient-copper">Custom Concrete</span>
						</h2>
						<p className="mb-8 font-sans leading-relaxed text-muted-foreground">
							Our custom decorative concrete solutions are designed for clients who want one-of-a-kind
							surfaces. From statement walls to premium flooring, we combine creativity, precision,
							and high-performance materials to deliver standout results for residential and
							commercial spaces.
						</p>
						<Button asChild className="bg-primary text-primary-foreground hover:bg-copper-light">
							<Link href="/contact">
								Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className={`space-y-4 transition-all delay-200 duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
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
