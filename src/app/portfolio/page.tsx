import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import CTASection from "@/components/Home/CTASection";
import PortfolioSection from "@/components/Home/PortfolioSection";

const PortfolioPage = () => {
	return (
		<>
			<Navbar />
			<main className="pt-8 md:pt-20 bg-[#0D0F12]">
				<PortfolioSection />
				<CTASection />
			</main>
			<Footer />
		</>
	);
};

export default PortfolioPage;