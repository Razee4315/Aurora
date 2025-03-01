import React from "react";
import { useInView } from "react-intersection-observer";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl border border-gray-100 shadow-md p-8 transform transition-all duration-700 
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} 
        hover:shadow-lg hover:scale-105 hover:border-aurora-cyan group cursor-pointer`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-aurora-blue mb-6 inline-block p-3 bg-gray-50 rounded-lg group-hover:bg-aurora-blue group-hover:text-white transform transition-all duration-300 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-xl font-sans font-semibold mb-3 text-aurora-blue group-hover:text-aurora-coral transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 font-serif group-hover:text-gray-800 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}

export function FeaturesSection() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section ref={sectionRef} className={`py-20 bg-gray-50 transition-all duration-1000 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-aurora-blue mb-4">
            Innovative Features & Services
          </h2>
          <p className="text-lg text-gray-600 font-serif max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make Aurora the premier choice for forward-thinking businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            title="Responsive Design"
            description="Seamlessly adapts to any device or screen size, ensuring a consistent experience across all platforms."
            icon={
              <svg className="w-10 h-10 transform transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            }
            delay={100}
          />
          <FeatureCard
            title="Dynamic Interactions"
            description="Engaging micro-animations and interactive elements that create an immersive and delightful user experience."
            icon={
              <svg className="w-10 h-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            }
            delay={200}
          />
          <FeatureCard
            title="Performance Optimized"
            description="Lightning-fast loading times and smooth performance, even with the most complex visual elements and interactions."
            icon={
              <svg className="w-10 h-10 transform transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            }
            delay={300}
          />
          <FeatureCard
            title="Accessible Design"
            description="Inclusive features ensuring that all users, regardless of abilities, can navigate and enjoy the full experience."
            icon={
              <svg className="w-10 h-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-aurora-cyan" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            }
            delay={400}
          />
          <FeatureCard
            title="Modern Analytics"
            description="Comprehensive insights into user behavior and interaction patterns to continually refine and improve the experience."
            icon={
              <svg className="w-10 h-10 transform transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            }
            delay={500}
          />
          <FeatureCard
            title="Customizable Framework"
            description="Flexible architecture allowing for easy customization and adaptation to specific brand guidelines and business needs."
            icon={
              <svg className="w-10 h-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            }
            delay={600}
          />
        </div>
      </div>
    </section>
  );
}
