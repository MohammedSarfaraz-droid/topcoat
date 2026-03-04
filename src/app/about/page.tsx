import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/About/HeroSection";
import StorySection from "@/components/About/StorySection";
import MissionVisionSection from "@/components/About/MissionVisionSection";
import CoreValuesSection from "@/components/About/CoreValuesSection";
import CTASection from "@/components/Home/CTASection";

const AboutPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A] pt-24">
				<HeroSection />
				<StorySection />
				<MissionVisionSection />
				<CoreValuesSection />
				<CTASection />
			</main>
			<Footer />
		</>
	);
};

export default AboutPage;