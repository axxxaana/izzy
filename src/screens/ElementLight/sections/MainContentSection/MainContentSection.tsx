import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";

import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { BrandSection } from "../../../../components/sections/BrandSection";
import { BrandingSystemVisual } from "../../../../components/sections/BrandingSystemVisual";
import SpotlightCard from "../../../../components/SpotlightCard";
import { TrustedByBanner } from "../../../../components/TrustedByBanner";
import { Navigation } from "../../../../components/layout/Navigation";

export const MainContentSection = (): JSX.Element => {
  // Rotating words for the h1
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeCategory, setActiveCategory] = useState("FemTech");
  const rotatingWords = ["Branding", "Strategy", "Marketing", "Content", "Design"];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsTransitioning(false);
      }, 300); // Half of the transition duration
    }, 3000); // Change word every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Scroll animation hook for the "I'm Izzy" text
  const { elementRef, isVisible, isAnimating } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
    delay: 200
  });

  // Service features data
  const founderBrandFeatures = [
    "Articulate your unique story, why, values and vision, so every message feels authentic and memorable.",
    "Publish high-impact articles, LinkedIn posts and bylines without daily grind, making you the go-to expert.",
    "Pinpoint channels and cadence to amplify your voice, build trust and drive growth.",
  ];

  const fractionalMarketingFeatures = [
    "Refine your core messaging pillars to resonate and convert ideal audiences.",
    "Develop repeatable content calendars, workflows and templates for seamless execution.",
    "Launch and optimize multi-channel campaigns that drive measurable growth and momentum.",
  ];

  // Industry categories data
  const industryCategories = [
    {
      name: "Mental Health",
      color: "bg-[#ffdcea]",
      top: "top-[163px]",
      left: "left-[87px]",
      width: "w-[117px]",
      height: "h-9",
    },
    {
      name: "Active Life",
      color: "bg-[#d9f4f7]",
      top: "top-0",
      left: "left-[102px]",
      width: "w-[97px]",
      height: "h-12",
    },
    {
      name: "Personal Care",
      color: "bg-[#e8f9dd]",
      top: "top-0",
      left: "left-[30px]",
      width: "w-[119px]",
      height: "h-12",
    },
    {
      name: "Pets",
      color: "bg-[#d9f4f7]",
      top: "top-0",
      left: "left-0",
      width: "w-[62px]",
      height: "h-12",
    },
    {
      name: "Dental Care",
      color: "bg-[#ffdcea]",
      top: "top-[113px]",
      left: "left-0",
      width: "w-[106px]",
      height: "h-9",
    },
    {
      name: "Training",
      color: "bg-[#fff4d9]",
      top: "top-[163px]",
      left: "left-0",
      width: "w-[82px]",
      height: "h-12",
    },
    {
      name: "Culinary\nSubscriptions",
      color: "bg-[#e8f9dd]",
      top: "top-[111px]",
      left: "left-[-15px]",
      width: "w-[117px]",
      height: "h-16",
    },
    {
      name: "Entertainment",
      color: "bg-[#fff4d9]",
      top: "top-[163px]",
      left: "left-[85px]",
      width: "w-[119px]",
      height: "h-12",
    },
  ];

  // FAQ items
  const faqItems = [
    { question: "What is Tedy?" },
    { question: "Can I support employee recognition initiatives with Tedy?" },
    { question: "Is Tedy an insurance?" },
    { question: "How much does Tedy cost?" },
    { question: "Is there a minimum amount to allocate to employees?" },
    {
      question: "Is there a minimum or maximum number of categories to choose?",
    },
    { question: "How often can I schedule allocations?" },
    { question: "When do I have to pay the amount allocated to my employees?" },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Emily Hughes',
      role: 'Wellness Founder',
      text: "Izzy is the absolute best in the business for Personal Branding! Her passion and enthusiasm is infectious. She helped me create a compelling personal brand that truly represents who I am and what I stand for. Her strategic approach and attention to detail are unmatched.",
      image: '/Emily Hughes.jpeg',
    },
    {
      name: 'Sally Douglas',
      role: 'Author & Speaker',
      text: "Izzy made me feel confident and clear on what I need to do. Her passion and enthusiasm is infectious. I've become a lot more effective and efficient at LinkedIn thanks to her help. She truly understands how to build authentic personal brands that connect with your audience.",
      image: '/Sally Douglas.jpeg',
    },
    {
      name: 'Jem Stein',
      role: 'Purpose-led Founder',
      text: "Izzy is the absolute best in the business for Personal Branding! She helped me create a compelling personal brand that truly represents who I am and what I stand for. Her strategic approach and attention to detail are unmatched. I've seen incredible results in my business since working with her.",
      image: '/Jem Stein.jpeg',
    },
    {
      name: 'Emma Abbasi',
      role: 'Femtech Founder',
      text: "Izzy provided guidance in LinkedIn content strategy for community-driven content and lead generation. Her strategic approach helped me build meaningful connections and grow my femtech platform. She's incredibly knowledgeable about building authentic personal brands.",
      image: '/Emma Abbasi.jpeg',
    },
  ];

  // Inside MainContentSection component, add state and handler:
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [fade, setFade] = useState(false);
  const handleTestimonialClick = (idx: number) => {
    if (idx === activeTestimonialIdx) return;
    setFade(true);
    setTimeout(() => {
      setActiveTestimonialIdx(idx);
      setFade(false);
    }, 250);
  };

  return (
    <>
      <div className="flex flex-col items-center w-full relative">
        {/* Hero Section */}
        <div className="w-full relative mb-0">
          <div className="w-full h-[700px] relative p-3 sm:p-4 lg:p-[15px]">
            <div className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
              <div className="relative h-full">
                <div className="absolute w-full h-full top-0 left-0">
                  <div className="relative h-full">
                    <div className="absolute w-full h-full top-0 left-0 bg-white opacity-10 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]" />
                    <div
                      className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]"
                      style={{
                        backgroundImage: "url('/izzy 6.png')",
                        backgroundPosition: "50% 40%",
                        backgroundSize: "cover"
                      }}
                    >
                      <Navigation />
                    </div>
                  </div>
                </div>

                {/* Hero Content - Text Only */}
                <div className="absolute max-w-[800px] top-[225px] sm:top-[225px] md:top-[265px] lg:top-[225px] xl:top-[265px] left-[25%] sm:left-[25%] md:left-[25%] lg:left-[20%] xl:left-[10.5%] 2xl:left-[16%] px-4">
                  <div className="w-full">
                    {/* <h1 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[75px] text-left tracking-[-1.2px] leading-[1.1] mb-2 text-shadow-medium animate-fade-in-up">
                      High-Impact{" "}
                      <span 
                        className={`inline-block min-w-[500px] relative overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                        }`}
                      >
                        {rotatingWords[currentWordIndex]}
                      </span>
                    </h1> */}
                    {/* <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[18px] text-left tracking-[0] leading-[28px] max-w-[600px] opacity-95 mb-6 text-shadow-subtle animate-fade-in-up-delayed">
                      Brand systems that captivate your audience, amplify your core message, and deliver measurable growth across every touchpoint.
                    </p> */}
                    {/* <Link 
                      to="/get-started"
                      className="hero-button animate-fade-in-up-button inline-block bg-white text-[#e44782] border-2 border-[#e44782] rounded-[0.84rem] px-5 py-3 text-[20px] font-['Montserrat'] font-medium transition-all duration-300 ease-out shadow-[0_8px_25px_rgba(228,71,130,0.3)] hover:bg-[#e44782] hover:text-white hover:scale-105 cursor-pointer no-underline"
                    >
                      Get Started
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="w-full bg-white pt-0 pb-8">
            <TrustedByBanner />
          </div>

          {/* I'm Izzy Section */}
          <div 
            ref={elementRef}
            className={`w-full max-w-[1580px] h-[400px] mt-24 pb-[150px] pt-[150px] mx-auto relative flex items-center justify-center transition-all duration-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-12 scale-95 blur-sm'
            }`}
          >
            {/* Content */}
            <div className={`flex flex-col items-center transition-all duration-1000 ease-out ${
              isAnimating ? 'animate-fade-in-up' : ''
            }`}>
              <h2 className={`max-w-[800px] [font-family:'Montserrat',Helvetica] font-semibold text-[#0f0f10] text-[50px] text-center tracking-[-0.51px] leading-[61.4px] mb-8 transition-all duration-1000 ease-out ${
                isAnimating ? 'animate-text-reveal' : 'opacity-0 translate-y-8 blur-sm'
              }`}>
                I help femtech, healthtech and social-impact founders strip back bloated
                messaging and create bold, <span className="px-3 py-1 rounded-lg relative bg-gradient-to-r from-[#e447824d] to-[#e4478203]">heart-felt brands</span>{" "}that move people.
              </h2>
              
              <div className="flex justify-center mt-4">
                <button className="relative bg-[#e44782] text-white font-['Montserrat'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out">
                  About Izzy
                </button>
              </div>

            </div>
          </div>

          {/* Brand Section */}
          <div className="w-full mt-16">
            <BrandSection />
          </div>

          {/* Branding System Visual */}
          <div className="w-full">
            <BrandingSystemVisual />
          </div>

          {/* Services Section */}
          <div className="w-full max-w-[1200px] mx-auto mt-8 px-4">
            {/* Founder Brand Strategy */}
            <motion.div 
              className="flex items-center justify-between mb-16 gap-6 pb-[150px] pt-[50px]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
                          <motion.div 
                className="w-[600px] h-[600px] flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
              <img
                className="w-full h-full"
                alt="Founder brand strategy"
                src="/Founder personal brand strategy image.png"
              />
              </motion.div>

                          <motion.div 
                className="w-[480px] max-w-[480px] flex-shrink-0"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
              <div className="mb-0">
                  <motion.h3 
                    className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[40px] tracking-[-1.44px] leading-[50px] mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                  Founder personal <br />
                  brand strategy
                  </motion.h3>
                  <motion.p 
                    className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15.9px] tracking-[0] leading-[25.2px] pb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                  For founders who want to build authority, trust and momentum{" "}
                  <br />
                  without posting daily just for the algorithm gods.
                  </motion.p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                  <motion.div 
                    className="border-t border-[#0000001a] pt-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                  <div className="flex items-start gap-5">
                      <motion.div 
                        className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, ease: "backOut", delay: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                      <img
                        className="w-[22px] h-[18px]"
                        alt="Feature icon"
                        src="/vector-8.svg"
                      />
                      </motion.div>
                      <motion.p 
                        className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15px] tracking-[0] leading-[25.2px]"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                      {founderBrandFeatures[0]}
                      </motion.p>
                  </div>
                  </motion.div>
                
                {founderBrandFeatures.slice(1).map((feature, index) => (
                  <motion.div 
                    key={index + 1} 
                    className="border-t border-[#0000001a] pt-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + (index + 1) * 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex items-start gap-5">
                      <motion.div 
                        className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, ease: "backOut", delay: 0.9 + (index + 1) * 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <img
                          className="w-[22px] h-[18px]"
                          alt="Feature icon"
                          src="/vector-8.svg"
                        />
                      </motion.div>
                      <motion.p 
                        className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15px] tracking-[0] leading-[25.2px]"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 + (index + 1) * 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        {feature}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Learn More Button */}
                <motion.div 
                  className="border-t border-[#0000001a] pt-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex justify-start">
                    <motion.button 
                      className="relative bg-[#e44782] text-white font-['Montserrat'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 1.6 }}
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Learn More
                    </motion.button>
              </div>
                </motion.div>
            </div>
            </motion.div>
          </motion.div>

          {/* Fractional Marketing */}
          <motion.div 
            className="flex items-center justify-between gap-6 pb-[50px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="w-[480px] max-w-[480px] flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-0">
                <motion.h3 
                  className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[40px] tracking-[-1.44px] leading-[55px] mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Fractional marketing <br />
                  &amp; brand direction
                </motion.h3>
                <motion.p 
                  className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15.9px] tracking-[0] leading-[25.2px] pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  For startups ready to grow with clarity. I help you refine your messaging, build a content system that performs, and turn brand thinking into strategic execution.
                </motion.p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <motion.div 
                  className="border-t border-[#0000001a] pt-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex items-start gap-5">
                    <motion.div 
                      className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, ease: "backOut", delay: 0.9 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <img
                        className="w-[22px] h-[18px]"
                        alt="Feature icon"
                        src="/vector-8.svg"
                      />
                    </motion.div>
                    <motion.p 
                      className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[16px] tracking-[0] leading-[25.2px]"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      {fractionalMarketingFeatures[0]}
                    </motion.p>
                  </div>
                </motion.div>
                
                {fractionalMarketingFeatures.slice(1).map((feature, index) => (
                  <motion.div 
                    key={index + 1} 
                    className="border-t border-[#0000001a] pt-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 + (index + 1) * 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex items-start gap-5">
                      <motion.div 
                        className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, ease: "backOut", delay: 1.3 + (index + 1) * 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <img
                          className="w-[22px] h-[18px]"
                          alt="Feature icon"
                          src="/vector-8.svg"
                        />
                      </motion.div>
                      <motion.p 
                        className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[16px] tracking-[0] leading-[25.2px]"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 + (index + 1) * 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        {feature}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Learn More Button */}
                <motion.div 
                  className="border-t border-[#0000001a] pt-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex justify-start">
                    <motion.button 
                      className="relative bg-[#e44782] text-white font-['Montserrat'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 2.0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Learn More
                    </motion.button>
              </div>
                </motion.div>
            </div>
            </motion.div>

            <motion.div 
              className="w-[600px] h-[600px] flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                className="w-full h-full"
                alt="Fractional marketing"
                src="/Fractional marketing & brand direction image.png"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Cut Through The Fluff - Pictures in Letters */}
        <div className="w-full bg-gradient-to-r from-[#e447821a] via-white to-[#e447821a] rounded-[50px] py-20 mt-16 overflow-hidden relative">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
          {/* Main marquee container */}
          <div className="relative z-10">
            <div className="flex items-center animate-scroll whitespace-nowrap">
              <div className="flex items-center space-x-12">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="flex items-center group relative">
                    <div
                      className="[font-family:'Montserrat',Helvetica] font-black text-[100px] tracking-[-4px] leading-[110px]"
                      style={{
                        backgroundImage: "url('/cut the fluff background.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Cut Through The Fluff
                    </div>
                    <div className="ml-8 w-3 h-3 bg-[#e44782] rounded-full opacity-60"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e447821a] to-transparent pointer-events-none"></div>
        </div>

        {/* Portfolio Section */}
        <motion.div 
          className="w-full mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-full bg-white rounded-[67.5px_67.5px_0px_0px] py-16">
          <div className="w-full max-w-[1200px] mx-auto">
            
            {/* Portfolio Heading */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#091329] text-[40px] tracking-[-1.73px] leading-[50px] mb-6">
                Portfolio
              </h3>
              <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[16px] leading-[24px] max-w-2xl mx-auto">
                Explore my work across different industries and services. Each project showcases strategic thinking, creative execution, and measurable results.
              </p>
            </motion.div>
              
              {/* Category Tabs */}
              <motion.div 
                className="flex justify-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <div className="flex bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-1.5 gap-1 shadow-lg">
                  {['FemTech', 'Community'].map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-10 py-4 rounded-2xl font-semibold transition-all duration-500 ease-out ${
                        activeCategory === category
                          ? 'bg-gradient-to-r from-[#e44782] to-[#e44782]/90 text-white shadow-xl shadow-[#e44782]/25'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50/80'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* FemTech Category */}
              <AnimatePresence mode="wait">
                {activeCategory === 'FemTech' && (
                  <motion.div
                    key="femtech"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="mb-16"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-gray-50/50 to-white/30 rounded-3xl backdrop-blur-sm border border-gray-100/50 shadow-xl shadow-gray-200/20">
                      {/* Nexus Connected */}
                      <SpotlightCard className="h-[320px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                        <div className="h-full flex flex-col justify-center">
                          <div className="mb-4">
                            <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                              Marketing
                            </Badge>
                            <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                              Nexus Connected
                            </h4>
                          </div>
                          <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                            Strategic marketing leadership and brand development for innovative femtech platform.
                          </p>
                          <div className="flex items-center text-[#e44782] text-sm font-semibold hover:text-[#e44782]/80 transition-colors duration-300">
                            <span>Read More</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                  </div>
                </div>
                      </SpotlightCard>

                      {/* Parent Promise */}
                      <SpotlightCard className="h-[320px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                        <div className="h-full flex flex-col justify-center">
                          <div className="mb-4">
                            <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                              Ghostwriting
                            </Badge>
                            <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                              Parent Promise
                            </h4>
                </div>
                          <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                            Content creation and ghostwriting for Dear Bump, connecting parents through authentic storytelling.
                          </p>
                          <div className="flex items-center text-[#e44782] text-sm font-semibold hover:text-[#e44782]/80 transition-colors duration-300">
                            <span>Read More</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
          </div>
                        </div>
                      </SpotlightCard>

                      {/* Dear Bump */}
                      <SpotlightCard className="h-[320px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                        <div className="h-full flex flex-col justify-center">
                          <div className="mb-4">
                            <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                              Ghostwriting
                            </Badge>
                            <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                              Dear Bump
                            </h4>
          </div>
                          <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                            Ghostwriting and content creation for pregnancy and parenting community platform.
                          </p>
                          <div className="flex items-center text-[#e44782] text-sm font-semibold hover:text-[#e44782]/80 transition-colors duration-300">
                            <span>Read More</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
        </div>
                        </div>
                      </SpotlightCard>
                    </div>
                  </motion.div>
                )}

                {/* Community Category */}
                {activeCategory === 'Community' && (
                  <motion.div
                    key="community"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="mb-16"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-gray-50/50 to-white/30 rounded-3xl backdrop-blur-sm border border-gray-100/50 shadow-xl shadow-gray-200/20">
                      {/* GoFounder */}
                      <SpotlightCard className="h-[320px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                        <div className="h-full flex flex-col justify-center">
                          <div className="mb-4">
                            <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                              Multi-Service
                            </Badge>
                            <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                              GoFounder
                            </h4>
        </div>
                          <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                            Marketing, content creation, ghostwriting, and founder onboarding for startup community platform.
                          </p>
                          <div className="flex items-center text-[#e44782] text-sm font-semibold hover:text-[#e44782]/80 transition-colors duration-300">
                            <span>Read More</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </SpotlightCard>

                      {/* Wellnergy */}
                      <SpotlightCard className="h-[320px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                        <div className="h-full flex flex-col justify-center">
                          <div className="mb-4">
                            <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                              Multi-Service
                            </Badge>
                            <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                              Wellnergy
                            </h4>
                          </div>
                          <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                            Ghostwriting, branding, and influencer partnership outreach for wellness community.
                          </p>
                          <div className="flex items-center text-[#e44782] text-sm font-semibold hover:text-[#e44782]/80 transition-colors duration-300">
                            <span>Read More</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
              </div>
            </div>
                      </SpotlightCard>

                      {/* Enara */}
                      <SpotlightCard className="h-[320px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                        <div className="h-full flex flex-col justify-center">
                          <div className="mb-4">
                            <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                              Creator Commerce
                            </Badge>
                            <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                              Enara
                            </h4>
                          </div>
                          <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                            Brand creation, visual identity, social strategy, lead magnets, founder ghostwriting, and creator acquisition.
                          </p>
                          <div className="flex items-center text-[#e44782] text-sm font-semibold hover:text-[#e44782]/80 transition-colors duration-300">
                            <span>Read More</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </SpotlightCard>
        </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </motion.div>

        {/* Reviews/Testimonials Section */}
        <section className="w-full flex flex-col items-center justify-center pt-10 pb-44 bg-white" style={{ background: '#fff', width: '100%' }}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight" style={{ fontFamily: 'Montserrat, Helvetica', color: '#091329' }}>
            What My Clients Say
          </h2>
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
            <div
              key={activeTestimonialIdx}
              className={`transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'} w-full`}
            >
              {['Jem Stein', 'Emma Abbasi'].includes(testimonials[activeTestimonialIdx].name) ? (
                <p className="w-full text-xl md:text-2xl text-center text-[#091329] font-normal italic mb-8 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica', lineHeight: '1.5', maxWidth: '44rem' }}>
                  "{testimonials[activeTestimonialIdx].text}"
                </p>
              ) : (
                <p className="w-full text-xl md:text-2xl text-center text-[#091329] font-normal italic mb-8 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica', lineHeight: '1.5' }}>
                  "{testimonials[activeTestimonialIdx].text}"
                </p>
              )}
              <div className="flex flex-col items-center">
                <span className="font-bold text-lg md:text-xl text-[#091329]" style={{ fontFamily: 'Montserrat, Helvetica' }}>
                  {testimonials[activeTestimonialIdx].name}
                </span>
                <span className="text-sm md:text-base text-[#091329]/50 mt-1" style={{ fontFamily: 'Inter, Helvetica' }}>
                  {testimonials[activeTestimonialIdx].role}
                </span>
              </div>
            </div>
            {/* Profile Image Carousel */}
            <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
              {testimonials.map((t, idx) => (
                <button
                  key={t.name}
                  onClick={() => handleTestimonialClick(idx)}
                  className="focus:outline-none bg-transparent p-0 m-0"
                  aria-label={`Show testimonial from ${t.name}`}
                  style={{ background: 'transparent' }}
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-[0.84rem] border border-gray-200 transition-all duration-200 overflow-hidden flex items-center justify-center p-0 m-0
                      ${idx === activeTestimonialIdx ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-90'} hover:scale-105 hover:brightness-110`}
                    style={{ boxSizing: 'border-box', borderWidth: '1.5px' }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover rounded-[0.84rem] border-none p-0 m-0"
                      style={{ display: 'block' }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
    </>
  );
};