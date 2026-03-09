import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import OtherServices from "@/components/Home/OtherServices";
import CTASection from "@/components/BuildingFacades/CTASection";
import Details from "@/components/BuildingFacades/Details";
import HeroSection from "@/components/BuildingFacades/HeroSection";
import ProjectGallery from "@/components/BuildingFacades/ProjectGallery";
import WhyChooseUs from "@/components/BuildingFacades/WhyChooseUs";

const BuildingFacadesPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A]">
				<HeroSection />
				<WhyChooseUs />
				<Details />
				<ProjectGallery />
				<OtherServices currentSlug="building-facades" />
				<CTASection />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default BuildingFacadesPage;
