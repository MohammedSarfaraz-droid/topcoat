const details = [
	"Self-leveling epoxy systems",
	"Metallic epoxy coatings",
	"Anti-static flooring",
	"Chemical-resistant coatings",
	"High-build mortar systems",
	"Decorative flake systems",
];

const Details = () => {
	return (
		<section className="bg-[#0D0F12] py-20">
			<div className="container mx-auto px-4">
				<h2 className="mb-8 text-center font-serif text-3xl font-bold text-white/90">
					Technical <span className="text-gradient-copper">Details</span>
				</h2>
				<div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{details.map((item) => (
						<div key={item} className="rounded-lg border border-[#282c33] bg-[#14161A] p-6 text-center">
							<p className="font-sans text-sm text-white/90">{item}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Details;
