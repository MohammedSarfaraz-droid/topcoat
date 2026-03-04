import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import OtherServices from "@/components/Sections/OtherServices";
import CTASection from "@/components/StampedConcrete/CTASection";
import Details from "@/components/StampedConcrete/Details";
import HeroSection from "@/components/StampedConcrete/HeroSection";
import ProjectGallery from "@/components/StampedConcrete/ProjectGallery";
import WhyChooseUs from "@/components/StampedConcrete/WhyChooseUs";

const StampedConcretePage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A] pt-24">
				<HeroSection />
				<WhyChooseUs />
				<Details />
				<ProjectGallery />
				<OtherServices currentSlug="stamped-concrete" />
				<CTASection />
			</main>
			<Footer />
		</>
	);
};

export default StampedConcretePage;
