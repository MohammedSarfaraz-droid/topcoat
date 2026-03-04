"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Realistic stone, brick, and slate patterns at concrete pricing",
	"Durable outdoor finish resistant to freeze-thaw cycles",
	"Integral and broadcast color options for rich tones",
	"Low maintenance compared to natural stone pavers",
	"Seamless surface eliminates weed growth between joints",
	"Custom pattern combinations for unique designs",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Why Choose Our <span className="text-gradient-copper">Stamped Concrete</span>
						</h2>
						<p className="mb-8 font-sans leading-relaxed text-muted-foreground">
							Bring the beauty of natural stone, brick, and slate to your outdoor spaces at a
							fraction of the cost. Our stamped concrete solutions create stunning patios,
							driveways, and walkways with intricate patterns and rich color variations that
							complement any architectural style.
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
