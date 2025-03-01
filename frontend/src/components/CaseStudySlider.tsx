import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
}

interface CaseStudySliderProps {
  title: string;
  subtitle?: string;
  caseStudies: CaseStudy[];
}

export function CaseStudySlider({ title, subtitle, caseStudies }: CaseStudySliderProps) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleCaseStudyClick = (caseStudy: CaseStudy) => {
    if (caseStudy.link) {
      navigate(caseStudy.link);
    } else {
      navigate(`/portfolio/${caseStudy.id}`);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-aurora-blue mb-4 slide-up">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg font-serif text-gray-600 slide-up" style={{ animationDelay: "0.2s" }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Slider */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {caseStudies.map((study) => (
                <div 
                  key={study.id} 
                  className="flex-shrink-0 w-full relative group cursor-pointer"
                  onClick={() => handleCaseStudyClick(study)}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-aurora-blue/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                    {study.tags && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 bg-aurora-cyan/20 backdrop-blur-sm text-white rounded-full text-xs font-sans font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="text-xl md:text-2xl font-sans font-bold mb-2 group-hover:text-aurora-cyan transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-sm md:text-base font-serif">
                      {study.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-aurora-blue hover:text-aurora-cyan transition-colors duration-300"
              aria-label="Previous case study"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-aurora-blue' : 'bg-gray-300'} transition-colors duration-300`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-aurora-blue hover:text-aurora-cyan transition-colors duration-300"
              aria-label="Next case study"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
