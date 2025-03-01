import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "Prisma Studios",
      quote: "Aurora transformed our digital presence with a stunning, intuitive interface that perfectly captures our brand's essence. The attention to detail and thoughtful animations elevated our user experience significantly.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "Alex Mercado",
      role: "CEO",
      company: "NeoTech Solutions",
      quote: "The responsiveness and performance of our Aurora-designed platform exceeded our expectations. Our customers immediately noticed the difference, leading to a 40% increase in engagement and a substantial boost in conversions.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "Maya Wilson",
      role: "Product Manager",
      company: "Fusion Interactive",
      quote: "Working with Aurora redefined our understanding of what's possible in web design. The seamless blend of aesthetics and functionality created an experience that truly sets us apart in a crowded market.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto rotation for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-aurora-blue mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 font-serif max-w-3xl mx-auto">
            Discover how Aurora has transformed digital experiences for businesses across industries.
          </p>
        </div>

        <div
          ref={ref}
          className={`relative max-w-4xl mx-auto transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-8 transition-all duration-500 ${currentIndex === index ? 'opacity-100 block' : 'opacity-0 hidden'}`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-aurora-cyan mb-2">
                      <svg
                        className="w-8 h-8 inline-block"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg font-serif mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div>
                      <h4 className="font-sans font-semibold text-aurora-blue">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-aurora-blue w-6' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Client Logos */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-gray-400 font-sans font-bold text-xl">Prisma Studios</div>
            </div>
            <div className="text-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-gray-400 font-sans font-bold text-xl">NeoTech</div>
            </div>
            <div className="text-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-gray-400 font-sans font-bold text-xl">Fusion Interactive</div>
            </div>
            <div className="text-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-gray-400 font-sans font-bold text-xl">Catalyst Inc</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
