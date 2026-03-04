import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import AboutSection from "@/components/Sections/AboutSection";
import CTASection from "@/components/Sections/CTASection";
import ExperienceSection from "@/components/Sections/ExperienceSection";

const AboutPage = () => {
	return (
		<>
			<Navbar />
			<main className="pt-28 md:pt-32">
				<AboutSection />
				<ExperienceSection />
				<CTASection />
			</main>
			<Footer />
		</>
	);
};

export default AboutPage;