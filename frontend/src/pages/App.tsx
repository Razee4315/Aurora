import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";
import { heroBackground } from "../utils/images";
import { PageTransition } from "../components/PageTransition";

export default function App() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection 
          title="The Next-Generation Web Experience"
          subtitle="An elegant, futuristic website that combines sophistication with intuitive functionality, inviting users into an immersive digital experience."
          ctaText="Discover Aurora"
          backgroundImage={heroBackground}
        />
        <main className="flex-grow">
          <FeaturesSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
