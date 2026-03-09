import Image from "next/image";

const HeroSection = () => {
	return (
		<section className="relative flex h-[60vh] min-h-105 items-center justify-center overflow-hidden">
			<Image
				src="/Images/hero-epoxy.jpg"
				alt="Metallic epoxy showroom with golden reflections"
				fill
				priority
				className="object-cover"
			/>
			<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />

			<div className="relative z-10 container mx-auto px-4 pt-20 text-center">
				<p className="mb-3 font-sans text-sm uppercase tracking-[0.3em] text-white/90">
					Industrial &amp; Commercial Solutions
				</p>
				<h1 className="font-serif text-4xl font-bold text-white/95 md:text-6xl">Epoxy Flooring</h1>
			</div>
		</section>
	);
};

export default HeroSection;
