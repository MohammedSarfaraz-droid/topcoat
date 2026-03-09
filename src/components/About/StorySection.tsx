"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StorySection = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20" ref={ref}>
			<div className="container mx-auto grid grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2">
				{/* Text */}
				<div
					className={`transition-all duration-700 ${
						isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
					}`}
				>
					<p className="mb-3 font-sans text-sm uppercase tracking-widest text-primary">
						Who We Are
					</p>
					<h2 className="mb-6 font-serif text-3xl font-bold text-white/90 md:text-4xl">
						A Journey of{" "}
						<span className="text-gradient-copper">Artistry &amp; Growth</span>
					</h2>
					<p className="mb-4 font-sans leading-relaxed text-white/70">
						TopCoat Artistry LLC was born from a deep passion for surface artistry. What started
						as a small decorative painting operation quickly grew into a full-service flooring and
						decorative concrete company, serving clients across commercial, industrial, and
						residential sectors.
					</p>
					<p className="mb-4 font-sans leading-relaxed text-white/70">
						Over the past two decades, we&apos;ve expanded our expertise from stenciled wood
						floors to polymer-modified concrete, terrazzo, epoxy systems, and architectural facade
						coatings. Each project pushes us to innovate, experiment, and deliver surfaces that
						are as beautiful as they are durable.
					</p>
					<p className="font-sans leading-relaxed text-white/70">
						Today, TopCoat Artistry LLC stands as a trusted name in the industry — known for our
						artistic vision, technical precision, and unwavering commitment to client satisfaction.
					</p>
				</div>

				{/* Image */}
				<div
					className={`transition-all delay-200 duration-700 ${
						isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
					}`}
				>
					<div className="relative h-112.5 w-full overflow-hidden rounded-xl">
						<Image
							src="/Images/About.jpeg"
							alt="TopCoat artisan crafting a decorative floor"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StorySection;
