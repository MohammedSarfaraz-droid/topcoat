import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import CTASection from "@/components/EpoxyFlooring/CTASection";
import Details from "@/components/EpoxyFlooring/Details";
import HeroSection from "@/components/EpoxyFlooring/HeroSection";
import ProjectGallery from "@/components/EpoxyFlooring/ProjectGallery";
import WhyChooseUs from "@/components/EpoxyFlooring/WhyChooseUs";
import OtherServices from "@/components/Sections/OtherServices";

const EpoxyFlooringPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A]">
				<HeroSection />
				<WhyChooseUs />
				<Details />
				<ProjectGallery />
				<OtherServices currentSlug="epoxy-flooring" />
				<CTASection />
			</main>
			<Footer />
		</>
	);
};

export default EpoxyFlooringPage;
