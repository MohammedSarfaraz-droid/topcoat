import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import CTASection from "@/components/Sections/CTASection";
import PortfolioSection from "@/components/Sections/PortfolioSection";

const PortfolioPage = () => {
	return (
		<>
			<Navbar />
			<main className="pt-28 md:pt-32">
				<PortfolioSection />
				<CTASection />
			</main>
			<Footer />
		</>
	);
};

export default PortfolioPage;