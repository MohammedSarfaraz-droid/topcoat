import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import BackToTop from '@/components/Layout/BackToTop'
import AboutSection from '@/components/Home/AboutSection'
import CTASection from '@/components/Home/CTASection'
import ExperienceSection from '@/components/Home/ExperienceSection'
import HeroSection from '@/components/Home/HeroSection'
import PortfolioSection from '@/components/Home/PortfolioSection'
import ServicesSection from '@/components/Home/ServiceSection'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <PortfolioSection />
      <CTASection />
      <Footer />
      <BackToTop />
    </>
  )
}

export default page