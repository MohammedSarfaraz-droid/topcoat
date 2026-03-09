"use client";

import Image from "next/image";
import { CalendarCheck, Clock, DollarSign, HeadphonesIcon, Users } from "lucide-react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
	{ icon: Clock, text: "20+ Years Experience" },
	{ icon: Users, text: "Skilled Professional Team" },
	{ icon: DollarSign, text: "Competitive Pricing" },
	{ icon: CalendarCheck, text: "On-Time Delivery" },
	{ icon: HeadphonesIcon, text: "Professional Aftersales" },
];

const AboutSection = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161a] py-24 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
					<div
						className={`relative transition-all duration-1000 ${
							isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
						}`}
					>
						<div className="relative overflow-hidden rounded-lg">
							<Image
								src="/Images/building-facade2.jpeg"
								alt="Skilled artisan applying decorative concrete coating with precision tools"
								width={900}
								height={1000}
								className="h-125 w-full object-cover"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-transparent" />
						</div>
						<div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-lg border-2 border-primary/30" />
					</div>

					<div
						className={`transition-all delay-200 duration-1000 ${
							isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
						}`}
					>
						<p className="mb-3 text-sm font-sans uppercase tracking-[0.3em] text-primary">Who We Are</p>
						<h2 className="mb-6 font-serif text-4xl font-bold text-white/90 md:text-5xl">
							Craftsmanship Meets <span className="text-gradient-copper">Innovation</span>
						</h2>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Topcoat LLC began with a passion for decorative painting and stenciled wood floors,
							evolving into one of the region&apos;s most trusted names in stamped concrete and
							polymer-modified surfaces.
						</p>
						<p className="mb-8 font-sans leading-relaxed text-white/70">
							Through years of experimentation and artistic dedication, we&apos;ve mastered the craft of
							transforming ordinary surfaces into extraordinary works of art — combining technical
							excellence with unmatched creativity.
						</p>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							{highlights.map(({ icon: Icon, text }) => (
								<div key={text} className="flex items-center gap-3 rounded-lg border border-primary/40 bg-[#14161A] p-3">
									<Icon className="h-5 w-5 shrink-0 text-primary" />
									<span className="text-sm font-sans text-white">{text}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
