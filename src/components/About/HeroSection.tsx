import Image from "next/image";

const HeroSection = () => {
	return (
		<section className="relative flex h-[50vh] min-h-87.5 items-center justify-center overflow-hidden">
			<Image
				src="/Images/concrete-home.jpeg"
				alt="TopCoat LLC worker applying decorative concrete"
				fill
				priority
				className="object-cover"
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
			<div className="relative z-10 pt-20 text-center">
				<p className="mb-3 font-sans text-sm uppercase tracking-[0.3em] text-primary">
					Our Story
				</p>
				<h1 className="font-serif text-4xl font-bold text-white md:text-6xl">
					About TopCoat Artistry
				</h1>
			</div>
		</section>
	);
};

export default HeroSection;
