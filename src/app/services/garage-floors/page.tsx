import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import OtherServices from "@/components/Sections/OtherServices";
import CTASection from "@/components/GarageFloors/CTASection";
import Details from "@/components/GarageFloors/Details";
import HeroSection from "@/components/GarageFloors/HeroSection";
import ProjectGallery from "@/components/GarageFloors/ProjectGallery";
import WhyChooseUs from "@/components/GarageFloors/WhyChooseUs";

const GarageFloorsPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A] pt-24">
				<HeroSection />
				<WhyChooseUs />
				<Details />
				<ProjectGallery />
				<OtherServices currentSlug="garage-floors" />
				<CTASection />
			</main>
			<Footer />
		</>
	);
};

export default GarageFloorsPage;
