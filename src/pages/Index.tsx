
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  // Change page title
  useEffect(() => {
    document.title = "KrillaTV | Sua melhor experiência em IPTV";
  }, []);

  return (
    <div className="min-h-screen bg-krilla-dark text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <HowItWorks />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
