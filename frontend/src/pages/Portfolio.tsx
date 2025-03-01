import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageTransition } from "../components/PageTransition";
import { PortfolioGrid, PortfolioItem } from "../components/PortfolioGrid";
import { motion } from "framer-motion";

// Portfolio items data
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    category: "web",
    description: "A complete overhaul of an e-commerce platform focusing on user experience and conversion optimization. Implemented modern design patterns and micro-interactions to enhance user engagement.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
    link: "/case-studies/ecommerce-redesign",
    featured: true
  },
  {
    id: "2",
    title: "Financial Dashboard",
    category: "application",
    description: "An intuitive financial management dashboard that simplifies complex data visualization. Features real-time updates and predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    link: "/case-studies/financial-dashboard"
  },
  {
    id: "3",
    title: "Healthcare Mobile App",
    category: "mobile",
    description: "A comprehensive healthcare management application that connects patients with healthcare providers. Features include appointment scheduling, telemedicine, and health tracking.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    link: "/case-studies/healthcare-app"
  },
  {
    id: "4",
    title: "AI-Powered Content Platform",
    category: "application",
    description: "A content management platform leveraging AI for content optimization and personalization. Includes advanced analytics and automated content generation features.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Next.js", "TensorFlow", "Python", "AWS", "OpenAI"],
    link: "/case-studies/ai-content-platform",
    featured: true
  },
  {
    id: "5",
    title: "Sustainable Living Marketplace",
    category: "web",
    description: "An eco-friendly marketplace connecting conscious consumers with sustainable products. Features carbon footprint tracking and ethical sourcing verification.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "Stripe"],
    link: "/case-studies/eco-marketplace"
  },
  {
    id: "6",
    title: "Smart Home IoT Dashboard",
    category: "application",
    description: "A centralized dashboard for managing smart home devices. Features real-time monitoring, automation rules, and energy optimization suggestions.",
    image: "https://images.unsplash.com/photo-1558002038-bb4237b50680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Node.js", "MQTT", "InfluxDB", "Docker"],
    link: "/case-studies/smart-home-dashboard"
  }
];

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 bg-gradient-to-br from-aurora-blue to-aurora-cyan/20">
            <div className="container mx-auto px-6 text-center text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-sans font-bold mb-6"
              >
                Our Portfolio
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-serif max-w-2xl mx-auto"
              >
                Discover our carefully crafted digital solutions that have transformed businesses and delighted users
              </motion.p>
            </div>
          </section>

          {/* Portfolio Grid Section */}
          <section className="py-24">
            <div className="container mx-auto px-6">
              <PortfolioGrid items={portfolioItems} />
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-aurora-blue text-white">
            <div className="container mx-auto px-6 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-sans font-bold mb-6"
              >
                Ready to Build Something Amazing?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-serif max-w-2xl mx-auto mb-8"
              >
                Let's collaborate to create innovative digital experiences that captivate your audience
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a 
                  href="/contact" 
                  className="inline-block bg-white text-aurora-blue px-8 py-3 rounded-lg font-medium hover:bg-aurora-cyan transition-colors duration-300"
                >
                  Start a Project
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
