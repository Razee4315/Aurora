import React from "react";
import { useNavigate } from "react-router-dom";

export interface ServiceProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
}

interface ServiceCardProps extends ServiceProps {
  index?: number;
}

export function ServiceCard({ id, icon, title, description, ctaText, ctaLink, index = 0 }: ServiceCardProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (ctaLink) {
      navigate(ctaLink);
    } else {
      navigate(`/services/${id}`);
    }
  };

  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full slide-up relative transform hover:scale-[1.02] hover:z-10"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      {/* Card Top Accent */}
      <div className="h-2 bg-aurora-blue group-hover:bg-aurora-cyan transition-colors duration-300" />
      
      {/* Icon */}
      <div className="pt-8 pb-4 flex justify-center">
        <div className="text-aurora-blue group-hover:text-aurora-cyan transition-colors duration-300 w-16 h-16 flex items-center justify-center text-3xl">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 py-4 flex-grow">
        <h3 className="text-xl font-sans font-bold text-aurora-blue mb-3 group-hover:text-aurora-coral transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 font-serif leading-relaxed mb-6">
          {description}
        </p>
      </div>
      
      {/* CTA */}
      <div className="px-6 pb-6 mt-auto">
        <button 
          onClick={handleClick}
          className="w-full py-3 bg-white border-2 border-aurora-blue text-aurora-blue font-sans font-medium rounded-md group-hover:bg-aurora-cyan group-hover:border-aurora-cyan group-hover:text-aurora-blue transition-all duration-300 relative overflow-hidden"
        >
          <span className="relative z-10">{ctaText}</span>
          <span className="absolute bottom-0 left-0 w-full h-0 bg-aurora-cyan group-hover:h-full transition-all duration-300 -z-0"></span>
        </button>
      </div>
      
      {/* Ripple Effect */}
      <div className="absolute -z-10 w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
        <span className="absolute -z-10 w-32 h-32 rounded-full bg-aurora-cyan opacity-0 group-hover:animate-ripple pointer-events-none"></span>
      </div>
    </div>
  );
}
