const MissionVisionSection = () => {
	return (
		<section className="bg-[#0D0F12] py-20">
			<div className="container mx-auto max-w-3xl px-4 text-center">
				{/* Mission */}
				<p className="mb-3 font-sans text-sm uppercase tracking-widest text-primary">
					What Drives Us
				</p>
				<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
					Our <span className="text-gradient-copper">Mission</span>
				</h2>
				<p className="mb-16 font-sans text-lg leading-relaxed text-white/70">
					To deliver premium-quality flooring and decorative concrete solutions that exceed
					expectations, combining artistic craftsmanship with cutting-edge technology to create
					surfaces that inspire.
				</p>

				{/* Divider */}
				<div className="mx-auto mb-16 h-px w-24 bg-primary/30" />

				{/* Vision */}
				<p className="mb-3 font-sans text-sm uppercase tracking-widest text-primary">
					Where We&apos;re Headed
				</p>
				<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
					Our <span className="text-gradient-copper">Vision</span>
				</h2>
				<p className="font-sans text-lg leading-relaxed text-white/70">
					To be the most trusted and innovative surface finishing company — recognized for
					transforming spaces through artistry, quality, and an unwavering commitment to
					excellence.
				</p>
			</div>
		</section>
	);
};

export default MissionVisionSection;
