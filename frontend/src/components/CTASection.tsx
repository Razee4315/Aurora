import React from "react";
import { useInView } from "react-intersection-observer";

export function CTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className={`py-20 bg-aurora-blue text-white transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
          Ready to Transform Your Digital Experience?
        </h2>
        <p className="text-lg md:text-xl font-serif mb-10 max-w-3xl mx-auto opacity-90">
          Join the growing number of innovative brands creating stunning, high-performance digital experiences with Aurora.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-aurora-cyan text-aurora-blue font-sans font-medium rounded-md hover:bg-white transition-all duration-300 hover:scale-105">
            Get Started Today
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-sans font-medium rounded-md hover:bg-white hover:text-aurora-blue transition-all duration-300">
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
