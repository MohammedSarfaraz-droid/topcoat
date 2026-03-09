import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import OtherServices from "@/components/Home/OtherServices";
import CTASection from "@/components/Terrazzo/CTASection";
import Details from "@/components/Terrazzo/Details";
import HeroSection from "@/components/Terrazzo/HeroSection";
import ProjectGallery from "@/components/Terrazzo/ProjectGallery";
import WhyChooseUs from "@/components/Terrazzo/WhyChooseUs";

const TerrazzoPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A]">
				<HeroSection />
				<WhyChooseUs />
				<Details />
				<ProjectGallery />
				<OtherServices currentSlug="terrazzo" />
				<CTASection />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default TerrazzoPage;
