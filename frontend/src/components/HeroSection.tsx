import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 slide-up">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl font-serif text-white mb-10 opacity-90 slide-up" style={{animationDelay: '0.2s'}}>
            {subtitle}
          </p>
          
          <button 
            className="px-8 py-3 bg-aurora-cyan text-aurora-blue font-sans font-medium rounded-md hover:scale-105 hover:bg-white transition-transform duration-300 slide-up"
            style={{animationDelay: '0.4s'}}
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}
