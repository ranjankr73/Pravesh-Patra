import React from "react";
import Hero from "../components/HeroSection";
import Features from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorksSection";
import Benefits from "../components/BenefitsSection";
import Testimonials from "../components/TestimonialsSection";

const HomePage = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Benefits/>
      <Testimonials/>
    </div>
  );
};

export default HomePage;
