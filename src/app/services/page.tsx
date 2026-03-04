import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import CTASection from "@/components/Home/CTASection";
import ServicesSection from "@/components/Home/ServiceSection";

const ServicesPage = () => {
	return (
		<>
			<Navbar />
			<main className="pt-28 md:pt-32">
				<ServicesSection />
				<CTASection />
			</main>
			<Footer />
		</>
	);
};

export default ServicesPage;