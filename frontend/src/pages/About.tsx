import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { TimelineSection } from "../components/TimelineSection";
import { TeamShowcase, TeamMember } from "../components/TeamShowcase";
import { Footer } from "../components/Footer";
import { aboutHeroBackground } from "../utils/images";
import { PageTransition } from "../components/PageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParallax } from "../hooks/useParallax";

// Mock timeline data
const timelineMilestones = [
  {
    year: "2018",
    title: "Aurora's Foundation",
    description: "Our journey began with a vision to redefine web experiences for premium brands. Founded by a group of design enthusiasts and technology innovators, we set out to create digital experiences that combine sophistication with intuitive functionality.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "After witnessing tremendous success with our initial clients, we expanded our horizons globally. Our team grew, bringing together talent from diverse backgrounds, cultures, and expertise, enriching our creative process.",
  },
  {
    year: "2022",
    title: "Award-Winning Innovations",
    description: "Our dedication to pushing boundaries resulted in industry recognition. Aurora won multiple design and innovation awards, cementing our position as pioneers in creating immersive digital experiences.",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    year: "2024",
    title: "The Next Chapter",
    description: "Today, we're embarking on new ventures, exploring emerging technologies, and continuing to craft digital experiences that resonate with users on a deeper level. The future is bright as we continue to illuminate the digital landscape.",
  },
];

// Mock team data
const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alexandra Chen",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    bio: "With over 15 years of experience in design and digital strategy, Alexandra leads Aurora's creative vision. Her background in both traditional design and emerging technologies allows her to bridge aesthetic beauty with technical innovation.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "alexandra@aurora.com",
    },
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    bio: "Marcus brings a wealth of engineering expertise to Aurora. His passion for performance optimization and cutting-edge web technologies ensures our digital experiences are not just beautiful, but blazingly fast and responsive.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "marcus@aurora.com",
    },
  },
  {
    id: "3",
    name: "Sophia Rahman",
    role: "UX Research Lead",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Sophia champions the user's perspective in every project. With a background in cognitive psychology and years of UX research experience, she ensures Aurora's designs are not just visually stunning but deeply intuitive and user-friendly.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "4",
    name: "David Park",
    role: "Animation Specialist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "David is the wizard behind Aurora's signature micro-interactions and animations. His meticulous attention to detail and background in motion design brings subtle life and engagement to every digital experience we create.",
    social: {
      github: "https://github.com",
      email: "david@aurora.com",
    },
  },
  {
    id: "5",
    name: "Olivia Martinez",
    role: "Client Experience Manager",
    image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
    bio: "Olivia ensures that every client interaction with Aurora is as exceptional as our final deliverables. With her background in project management and client relations, she orchestrates seamless collaboration between our team and clients.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "James crafts narratives that resonate with audiences. His expertise in content strategy and copywriting ensures that Aurora's designs are complemented by messaging that captures attention, drives engagement, and inspires action.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export default function About() {
  const parallaxOffset = useParallax({ speed: 0.5 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <motion.div style={{ y: parallaxOffset }}>
          <HeroSection
            title="Our Story"
            subtitle="Born from a passion for designing experiences that evoke wonder and delight, Aurora continues to push the boundaries of digital innovation while staying true to our core values of sophistication, intuition, and connection."
            ctaText="Meet Our Team"
            backgroundImage={aboutHeroBackground}
          />
        </motion.div>
        
        <main className="flex-grow">
          {/* Mission Statement */}
          <motion.section 
            className="py-24 bg-aurora-blue text-white"
            style={{ opacity }}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-sans font-bold mb-8 slide-up"
                >
                  Our Mission
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl font-serif leading-relaxed slide-up"
                >
                  To create digital experiences that transcend the ordinary—combining visual sophistication with intuitive functionality to forge meaningful connections between brands and their audiences.
                </motion.p>
              </div>
            </div>
          </motion.section>
          
          {/* Timeline */}
          <TimelineSection 
            title="Our Journey"
            subtitle="The evolution of Aurora has been marked by continuous innovation and growth."
            milestones={timelineMilestones}
          />
          
          {/* Team */}
          <TeamShowcase 
            title="The Minds Behind Aurora"
            subtitle="Our diverse team of experts brings passion, creativity, and technical prowess to every project."
            members={teamMembers}
          />
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
