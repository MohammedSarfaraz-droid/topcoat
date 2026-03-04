"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/Config/Site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface OtherServicesProps {
	currentSlug: string;
}

const OtherServices = ({ currentSlug }: OtherServicesProps) => {
	const { ref: headingRef, isVisible: headingVisible } =
		useScrollAnimation<HTMLDivElement>();
	const { ref: gridRef, isVisible: gridVisible } =
		useScrollAnimation<HTMLDivElement>();

	const otherServices = siteConfig.serviceHighlights.filter(
		(s) => s.slug !== currentSlug
	);

	return (
		<section className="bg-[#0d0f12] py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<div
					ref={headingRef}
					className={`mb-14 text-center transition-all duration-700 ${
						headingVisible
							? "translate-y-0 opacity-100"
							: "translate-y-8 opacity-0"
					}`}
				>
					<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
						Explore More
					</p>
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
						Our Other Services
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
						TopCoat Artistry offers a full suite of decorative concrete and
						surface solutions — explore what else we can do for you.
					</p>
				</div>

				{/* Services Grid */}
				<div
					ref={gridRef}
					className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
				>
					{otherServices.map((service, index) => (
						<Link
							key={service.slug}
							href={`/services/${service.slug}`}
							className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-[#14161A] transition-all duration-700 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 ${
								gridVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
							style={{
								transitionDelay: gridVisible ? `${index * 80}ms` : "0ms",
							}}
						>
							{/* Image */}
							<div className="relative h-52 w-full overflow-hidden">
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								/>
								{/* Gradient overlay on image */}
								<div className="absolute inset-0 bg-linear-to-t from-[#14161A] via-[#14161A]/20 to-transparent" />
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-200 group-hover:text-primary">
									{service.title}
								</h3>
								<p className="mb-4 text-sm leading-relaxed text-white/50">
									{service.description}
								</p>
								<span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary/80 transition-all duration-200 group-hover:gap-2.5 group-hover:text-primary">
									Explore Service
									<ArrowRight className="h-4 w-4" />
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default OtherServices;
