import Image from "next/image";

const HeroSection = () => {
	return (
		<section className="relative flex h-[60vh] min-h-105 items-center justify-center overflow-hidden">
			<Image
				src="/Images/garage-floor.jpg"
				alt="Premium garage floor with glossy coating and luxury car"
				fill
				priority
				className="object-cover"
			/>
			<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
			<div className="relative z-10 container mx-auto px-4 pt-20 text-center">
				<p className="mb-3 font-sans text-sm uppercase tracking-[0.3em] text-white/90">Residential &amp; Industrial Coatings</p>
				<h1 className="font-serif text-4xl font-bold text-white/95 md:text-6xl">Garage Floors</h1>
			</div>
		</section>
	);
};

export default HeroSection;
