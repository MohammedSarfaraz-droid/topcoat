import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const CTASection = () => {
	return (
		<section className="bg-[#0D0F12] py-20 text-center">
			<div className="container mx-auto px-4">
				<h2 className="mb-6 font-serif text-3xl font-bold text-white/90 md:text-4xl">
					Ready to Get Started?
				</h2>
				<Button
					asChild
					size="lg"
					className="bg-primary px-10 py-7 text-lg font-sans text-primary-foreground hover:bg-copper-light"
				>
					<Link href="/contact">
						Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
					</Link>
				</Button>
			</div>
		</section>
	);
};

export default CTASection;
