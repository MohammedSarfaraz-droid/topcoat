"use client";

import Image from "next/image";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryImages = [
	{ src: "/Images/Building-Facade-Renovation.jpeg", alt: "Building facade renovation with textured concrete panels" },
	{ src: "/Images/building-facade2.jpeg", alt: "Modern exterior facade finish on commercial property" },
	{ src: "/Images/custom-concrete2.jpeg", alt: "Close-up of custom concrete facade texture" },
];

const ProjectGallery = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20" ref={ref}>
			<div className="container mx-auto px-4">
				<h2 className="mb-10 text-center font-serif text-3xl font-bold text-white/90">
					Project <span className="text-gradient-copper">Gallery</span>
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{galleryImages.map((image, index) => (
						<div
							key={image.alt}
							className={`overflow-hidden rounded-lg transition-all duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<Image
								src={image.src}
								alt={image.alt}
								width={700}
								height={420}
								className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
								loading="lazy"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectGallery;
