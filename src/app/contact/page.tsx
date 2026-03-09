import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import ContactSection from "@/components/ContactUs/ContactSection";

const ContactPage = () => {
	return (
		<>
			<Navbar />
			<ContactSection />
			<Footer />
			<BackToTop />
		</>
	);
};

export default ContactPage;