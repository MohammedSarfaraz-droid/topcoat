import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import AboutSection from '@/components/Sections/AboutSection'
import CTASection from '@/components/Sections/CTASection'
import ExperienceSection from '@/components/Sections/ExperienceSection'
import HeroSection from '@/components/Sections/HeroSection'
import PortfolioSection from '@/components/Sections/PortfolioSection'
import ServicesSection from '@/components/Sections/ServiceSection'
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
    </>
  )
}

export default page