import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => (
	<section className="relative flex min-h-screen items-center justify-center overflow-hidden">
		<div className="absolute inset-0">
			<Image
				src="/Images/Hero-section.jpeg"
				alt="Luxury epoxy showroom floor with golden reflections and dramatic lighting"
				fill
				priority
				className="object-cover"
			/>
			<div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/65" />
			<div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black/70 to-transparent sm:h-36" />
		</div>

		<div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

			<div className="relative z-10 container mx-auto px-4 text-center">
				<div className="mx-auto max-w-4xl">
					<p className="mb-6 text-sm font-sans uppercase tracking-[0.3em] text-white/90">
					Premium Flooring & Decorative Concrete
				</p>
					<h1 className="mb-6 text-5xl leading-[1.08] font-bold font-serif text-white/95 md:text-7xl lg:text-8xl">
					Luxury Surfaces. <span className="text-gradient-copper">Engineered to Last.</span>
				</h1>
					<p className="mx-auto mb-10 max-w-2xl text-lg font-sans text-white md:text-xl">
					20+ Years of Craftsmanship in Epoxy, Terrazzo & Decorative Concrete.
				</p>
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Link href="/contact">
						<Button
							size="lg"
							className="bg-primary px-8 py-6 text-base font-sans tracking-wide text-primary-foreground hover:bg-copper-light cursor-pointer"
						>
							Request a Consultation
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</Link>
					<Link href="/#portfolio">
						<Button
							size="lg"
							variant="outline"
							className="border-primary/30 bg-[#0d0f12] px-8 py-6 text-base font-sans tracking-wide text-white hover:border-primary hover:bg-transparent cursor-pointer"
						>
							<Eye className="mr-2 h-5 w-5" />
							View Our Work
						</Button>
					</Link>
				</div>
			</div>
		</div>
	</section>
);

export default HeroSection;
