import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import OtherServices from "@/components/Home/OtherServices";
import CTASection from "@/components/CustomDecorativeConcrete/CTASection";
import Details from "@/components/CustomDecorativeConcrete/Details";
import HeroSection from "@/components/CustomDecorativeConcrete/HeroSection";
import ProjectGallery from "@/components/CustomDecorativeConcrete/ProjectGallery";
import WhyChooseUs from "@/components/CustomDecorativeConcrete/WhyChooseUs";

const CustomDecorativeConcretePage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A]">
				<HeroSection />
				<WhyChooseUs />
				<Details />
				<ProjectGallery />
				<OtherServices currentSlug="custom-decorative-concrete" />
				<CTASection />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default CustomDecorativeConcretePage;
