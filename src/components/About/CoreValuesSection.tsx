"use client";

import { Target, Eye, Heart, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
	{
		icon: Target,
		title: "Excellence",
		desc: "Every surface we create reflects our commitment to perfection and attention to detail.",
	},
	{
		icon: Eye,
		title: "Innovation",
		desc: "We continuously explore new materials, techniques, and design possibilities.",
	},
	{
		icon: Heart,
		title: "Integrity",
		desc: "Honest pricing, transparent communication, and dependable project timelines.",
	},
	{
		icon: Shield,
		title: "Quality",
		desc: "Premium materials and proven processes ensure lasting results on every project.",
	},
];

const CoreValuesSection = () => {
	const { ref: headingRef, isVisible: headingVisible } =
		useScrollAnimation<HTMLDivElement>();
	const { ref: gridRef, isVisible: gridVisible } =
		useScrollAnimation<HTMLDivElement>();

	return (
		<section className="bg-[#14161A] py-20">
			<div className="container mx-auto px-4">
				{/* Heading */}
				<div
					ref={headingRef}
					className={`mb-12 text-center transition-all duration-700 ${
						headingVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
					}`}
				>
					<p className="mb-3 font-sans text-sm uppercase tracking-widest text-primary">
						Our Principles
					</p>
					<h2 className="font-serif text-3xl font-bold text-white/90">
						Core <span className="text-gradient-copper">Values</span>
					</h2>
				</div>

				{/* Grid */}
				<div
					ref={gridRef}
					className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
				>
					{values.map(({ icon: Icon, title, desc }, index) => (
						<div
							key={title}
							className={`rounded-xl p-6 text-center transition-all duration-700 bg-[#14161A] ${
								gridVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
							}`}
							style={{
								transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
							}}
						>
							<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
								<Icon className="h-7 w-7 text-primary" />
							</div>
							<h3 className="mb-2 font-serif text-lg font-bold text-white/90">{title}</h3>
							<p className="font-sans text-sm leading-relaxed text-muted-foreground">{desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CoreValuesSection;
