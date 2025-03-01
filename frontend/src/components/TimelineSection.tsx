import React from "react";

interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineSectionProps {
  title: string;
  subtitle?: string;
  milestones: TimelineMilestone[];
}

export function TimelineSection({ title, subtitle, milestones }: TimelineSectionProps) {
  return (
    <section className="py-20 bg-white">
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

        <div className="relative pt-10">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -ml-px h-full w-[2px] bg-aurora-blue/20 z-0"></div>

          {/* Timeline items */}
          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`mb-16 md:mb-24 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Timeline node */}
                <div className="mb-6 md:mb-0 flex flex-col items-center">
                  <div className="w-16 h-16 relative z-10 mb-2 slide-up">
                    <div className="w-16 h-16 rounded-full bg-aurora-blue flex items-center justify-center text-white font-sans font-bold text-xl transform group-hover:scale-110 transition-transform duration-300 border-4 border-white shadow-lg hover:bg-aurora-cyan hover:shadow-glow cursor-pointer">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="hidden md:block h-[calc(100%-4rem)] w-[2px] bg-aurora-blue/20"></div>
                </div>

                {/* Content */}
                <div 
                  className={`md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:text-right md:pl-12" : "md:ml-auto md:text-left md:pr-12"} flex flex-col slide-up`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-sans font-semibold text-aurora-blue mb-2 group-hover:text-aurora-coral transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 font-serif">
                    {milestone.description}
                  </p>
                  {milestone.image && (
                    <div className="mt-4 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
