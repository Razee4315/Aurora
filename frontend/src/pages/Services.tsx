import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ServiceCard, ServiceProps } from "../components/ServiceCard";
import { CaseStudySlider, CaseStudy } from "../components/CaseStudySlider";
import { servicesHeroBackground } from "../utils/images";
import { PageTransition } from "../components/PageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParallax } from "../hooks/useParallax";

// Mock service data
const services: ServiceProps[] = [
  {
    id: "digital-strategy",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    title: "Digital Strategy",
    description: "We craft comprehensive digital strategies tailored to your business goals, ensuring every touchpoint of your digital presence aligns with your vision and resonates with your audience.",
    ctaText: "Learn More"
  },
  {
    id: "ui-ux-design",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    title: "UI/UX Design",
    description: "Our design team creates intuitive, beautiful, and functional interfaces that delight users while achieving your business objectives. We balance aesthetics with usability to craft exceptional digital experiences.",
    ctaText: "See Our Process"
  },
  {
    id: "web-development",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: "Web Development",
    description: "From responsive websites to complex web applications, our development team brings designs to life with clean, efficient code. We focus on performance, scalability, and maintainability.",
    ctaText: "Explore Our Tech"
  },
  {
    id: "brand-identity",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    title: "Brand Identity",
    description: "We help brands discover and express their unique voice through comprehensive identity systems that resonate across all touchpoints.",
    ctaText: "View Portfolio"
  }
];

// Mock case studies data
const caseStudies: CaseStudy[] = [
  {
    id: "nova-tech",
    title: "Nova Tech Rebrand",
    description: "A complete digital transformation for a leading tech innovator, resulting in 43% increase in user engagement.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    link: "/case-studies/nova-tech"
  },
  {
    id: "eco-solutions",
    title: "Eco Solutions Platform",
    description: "An innovative digital platform connecting eco-conscious consumers with sustainable solutions.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    link: "/case-studies/eco-solutions"
  },
  {
    id: "luxury-retail",
    title: "Luxury Retail Experience",
    description: "Reimagining the online luxury shopping experience through immersive design and seamless interactions.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    link: "/case-studies/luxury-retail"
  }
];

export default function Services() {
  const parallaxOffset = useParallax({ speed: 0.5 });
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <motion.div 
          className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
          style={{ 
            backgroundImage: `url(${servicesHeroBackground})`,
            y: parallaxOffset
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-aurora-blue/80 to-aurora-blue/40" />
          <div className="relative z-10 text-center text-white px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-sans font-bold mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-serif max-w-2xl mx-auto"
            >
              We combine strategic thinking with cutting-edge technology to create digital experiences that leave a lasting impression.
            </motion.p>
          </div>
        </motion.div>

        <main className="flex-grow">
          {/* Services Grid */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                style={{ scale }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-24 bg-aurora-blue text-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-sans font-bold mb-4"
                >
                  Case Studies
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl font-serif max-w-2xl mx-auto"
                >
                  Explore how we've helped our clients achieve their digital ambitions through innovative solutions and strategic thinking.
                </motion.p>
              </div>
              
              <CaseStudySlider caseStudies={caseStudies} />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
