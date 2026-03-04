import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import CTASection from "@/components/Home/CTASection";
import PortfolioSection from "@/components/Home/PortfolioSection";

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