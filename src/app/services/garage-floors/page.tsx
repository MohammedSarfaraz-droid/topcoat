import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import OtherServices from "@/components/Home/OtherServices";
import CTASection from "@/components/GarageFloors/CTASection";
import Details from "@/components/GarageFloors/Details";
import HeroSection from "@/components/GarageFloors/HeroSection";
import ProjectGallery from "@/components/GarageFloors/ProjectGallery";
import WhyChooseUs from "@/components/GarageFloors/WhyChooseUs";

const GarageFloorsPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A]">
				<HeroSection />
				<WhyChooseUs />
				<Details />
				<ProjectGallery />
				<OtherServices currentSlug="garage-floors" />
				<CTASection />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default GarageFloorsPage;
