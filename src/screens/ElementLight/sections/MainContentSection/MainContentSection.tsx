import React, { useState, useEffect } from "react";
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
import SpotlightCard from "../../../../components/SpotlightCard";

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
      name: "Blake Beus",
      role: "App Security at JPMorgan Chase",
      text: "I can't believe that I used to run my business without Jumpshare. My clients are VERY impressed that I can quickly take videos, GIFs, and screenshots showing them what we need to do or give them feedback on project requirements.",
      image: "/blake.png",
    },
    {
      name: "Qwantel Latay",
      role: "Online Business Manager",
      text: 'Jumpshare is one of those "where have you been my whole life" tools. They combined tools that I\'d been using all into one cohesive little network when sharing files. Such a genius product, and I hope they stay around forever!',
      image: "/qwantel.png",
    },
    {
      name: "Dave Baxter",
      role: "Estate Agent at DBRealty",
      text: "Jumpshare saves me a ton of time and allows me to work on my schedule. Customers love getting detailed screencasts from me with a call-to-action link for appointments. It's a beautiful workflow. You cannot afford to NOT use Jumpshare.",
      image: "/dave.png",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full relative">
      {/* Hero Section */}
      <div className="w-full relative mb-0">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[600px] xl:h-[650px] relative p-3 sm:p-4 lg:p-[15px]">
          <div className="relative w-full h-[470px] sm:h-[570px] md:h-[620px] lg:h-[570px] xl:h-[620px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
            <div className="relative h-full">
              <div className="absolute w-full h-full top-0 left-0">
                <div className="relative h-full">
                  <div className="absolute w-full h-full top-0 left-0 bg-white opacity-10 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]" />
                                    <div className="absolute w-full h-full top-0 left-0 [background:url('/Izzy-Prior-Homepage-Heder.png')_50%_40%_/_cover] rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]">
                  </div>
                </div>
              </div>

              {/* Hero Content - Text Only */}
              <div className="absolute max-w-[800px] top-[145px] sm:top-[145px] md:top-[185px] lg:top-[145px] xl:top-[185px] left-[25%] sm:left-[25%] md:left-[25%] lg:left-[20%] xl:left-[10.5%] 2xl:left-[16%] px-4">
                <div className="w-full">
                  <h1 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[75px] text-left tracking-[-1.2px] leading-[1.1] mb-2 text-shadow-medium animate-fade-in-up">
                    High-Impact{" "}
                    <span 
                      className={`inline-block min-w-[500px] relative overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                      }`}
                    >
                      {rotatingWords[currentWordIndex]}
                    </span>
                  </h1>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[18px] text-left tracking-[0] leading-[28px] max-w-[600px] opacity-95 mb-6 text-shadow-subtle animate-fade-in-up-delayed">
                    Brand systems that captivate your audience, amplify your core message, and deliver measurable growth across every touchpoint.
                  </p>
                  <a 
                    href="#"
                    className="hero-button animate-fade-in-up-button inline-block bg-white text-[#e44782] border-2 border-[#e44782] rounded-[0.84rem] px-5 py-3 text-[20px] font-['Montserrat'] font-medium transition-all duration-300 ease-out shadow-[0_8px_25px_rgba(228,71,130,0.3)] hover:bg-[#e44782] hover:text-white hover:scale-105 cursor-pointer no-underline"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="w-full h-[120px] mt-6 mx-auto flex items-center relative overflow-hidden bg-white">
          {/* Trusted by text - fixed on left */}
          <div className="absolute left-8 z-30 bg-white">
            <h2 className="[font-family:'Montserrat',Helvetica] font-medium text-black text-[28px] tracking-[0] leading-[32px] whitespace-nowrap">
              Trusted by
            </h2>
          </div>

          {/* Scrolling logos container */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full">
            <div className="flex items-center animate-scroll">
              {/* Multiple sets of logos for seamless loop */}
              <div className="flex items-center space-x-12 ml-96">
                <div className="text-gray-400 text-2xl font-medium whitespace-nowrap">Coutu</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">Harnois</div>
                <div className="text-gray-400 text-2xl font-bold whitespace-nowrap">EROS</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">DIALEKTA</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">ABG</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">thirdbridge</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">CAMELLIA</div>
              </div>
              
              {/* Second set */}
              <div className="flex items-center space-x-12 ml-12">
                <div className="text-gray-400 text-2xl font-medium whitespace-nowrap">Coutu</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">Harnois</div>
                <div className="text-gray-400 text-2xl font-bold whitespace-nowrap">EROS</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">DIALEKTA</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">ABG</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">thirdbridge</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">CAMELLIA</div>
              </div>
              
              {/* Third set */}
              <div className="flex items-center space-x-12 ml-12">
                <div className="text-gray-400 text-2xl font-medium whitespace-nowrap">Coutu</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">Harnois</div>
                <div className="text-gray-400 text-2xl font-bold whitespace-nowrap">EROS</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">DIALEKTA</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">ABG</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">thirdbridge</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">CAMELLIA</div>
              </div>
              
              {/* Fourth set */}
              <div className="flex items-center space-x-12 ml-12">
                <div className="text-gray-400 text-2xl font-medium whitespace-nowrap">Coutu</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">Harnois</div>
                <div className="text-gray-400 text-2xl font-bold whitespace-nowrap">EROS</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">DIALEKTA</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">ABG</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">thirdbridge</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">CAMELLIA</div>
              </div>
            </div>
          </div>

          {/* Fade gradient overlay - fades logos before "Trusted by" */}
          <div className="absolute left-0 top-0 w-96 h-full bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none"></div>
          
          {/* Right side fade gradient - fades logos as they enter from right */}
          <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
        </div>

        {/* I'm Izzy Section */}
        <div 
          ref={elementRef}
          className={`w-full max-w-[1580px] h-[400px] mt-24 pb-[250px] pt-[250px] mx-auto relative flex items-center justify-center transition-all duration-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
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
                src="/izzy-prior-strategy.png"
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
                src="/Izzy-Marketing.png"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div 
          className="w-full mt-32 pt-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="w-full max-w-[848px] mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Badge className="h-[43.2px] bg-[#e44782] rounded-[0.84rem] px-4 py-2 mb-6">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[21.6px] tracking-[-0.26px] leading-6">
                3 Step Process
              </span>
            </Badge>
            </motion.div>

            <motion.h2 
              className="[font-family:'Montserrat',Helvetica] font-semibold text-[50px] text-center tracking-[-1.73px] leading-[60px] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-black tracking-[-0.97px]">
                Your Brand&apos;s Blueprint <br />
              </span>
              <span className="text-black tracking-[-0.97px]">
                for Impact
              </span>
            </motion.h2>

            <motion.p 
              className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[16px] text-center tracking-[-0.26px] leading-[28px] max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              A concise three-phase approach to reveal your brand&apos;s
              essence, unify strategy, voice and visibility, and execute
              campaigns driving real impact.
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className="w-full max-w-[1440px] mx-auto">
            {/* First Row - Reduced Width */}
            <div className="flex justify-center mb-6">
              <Card className="w-full md:w-[calc(80%-12px)] shadow-[0px_4.8px_4.8px_-6px_#130c3e40,0px_0px_0px_1.2px_#130c3e1c,0px_2.4px_9.6px_-1.2px_#130c3e0a] bg-[linear-gradient(180deg,rgba(228,71,130,0.2)_0%,rgba(228,71,130,0.1)_50%,rgba(228,71,130,0)_100%)] rounded-3xl overflow-visible relative">
              <CardContent className="p-0">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-8 flex items-center">
                      <div>
                        <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#091329] text-[40px] tracking-[-0.26px] leading-[46.1px] mb-6">
                      Discover
                    </h3>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#091329] text-[16px] tracking-[0] leading-[25.2px] pr-4">
                      We audit your brand—interviewing stakeholders, mapping
                      competitors and analyzing every touchpoint—to reveal
                      hidden story gaps and audience needs. These insights
                      become the data-driven foundation for everything we build.
                    </p>
                  </div>
                    </div>
                    <div className="w-full md:w-1/2 px-6 pt-6 pb-0">
                    <div className="relative">
                      <img
                          className="w-full rounded-lg"
                        alt="Discover process"
                          src="/discover box.png"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>

            {/* Second Row - Two Equal Boxes */}
            <div className="flex flex-wrap gap-6 justify-center mb-[200px]">
            {/* Define Step */}
              <Card className="w-full md:w-[calc(40%-12px)] shadow-[0px_4.8px_4.8px_-6px_#130c3e40,0px_0px_0px_1.2px_#130c3e1c,0px_2.4px_9.6px_-1.2px_#130c3e0a] bg-[linear-gradient(180deg,rgba(228,71,130,0.2)_0%,rgba(228,71,130,0.1)_50%,rgba(228,71,130,0)_100%)] rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                  <div className="px-8 pt-0 pb-2">
                    <div className="relative mb-2 mt-8">
                      <img
                        className="w-full rounded-lg"
                        alt="File format previews"
                        src="/define image.png"
                      />
                    </div>
                    <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#091329] text-[40px] tracking-[-0.26px] leading-[46px] mb-4">
                      Define
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#091329] text-[16px] tracking-[0] leading-[25.2px] pr-4">
                      We craft your core brand architecture—messaging pillars,
                      tone guidelines and visual direction—that unites strategy,
                      voice and visibility. This bespoke blueprint guarantees
                      every piece of content and design works together
                      seamlessly.
                    </p>
                </div>
              </CardContent>
            </Card>

            {/* Deliver Step */}
              <Card className="w-full md:w-[calc(40%-12px)] shadow-[0px_4.8px_4.8px_-6px_#130c3e40,0px_0px_0px_1.2px_#130c3e1c,0px_2.4px_9.6px_-1.2px_#130c3e0a] bg-[linear-gradient(180deg,rgba(228,71,130,0.2)_0%,rgba(228,71,130,0.1)_50%,rgba(228,71,130,0)_100%)] rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                  <div className="pl-8 pr-0 pt-8 pb-2">
                    <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#091329] text-[40px] tracking-[-0.26px] leading-[46px] mb-4">
                      Deliver
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#091329] text-[16px] tracking-[0] leading-[25.2px] mb-6 pr-4">
                      We roll out high-impact campaigns, content systems and
                      assets engineered to convert. Then we measure results in
                      real time and fine-tune tactics so your brand keeps
                      cutting through the fluff.
                    </p>
                    <div className="relative pl-4">
                      <img
                        className="w-full rounded-lg"
                        alt="Version history tracking"
                        src="/deliver.png"
                      />
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
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
                    <motion.div 
                      key={index} 
                      className="flex items-center group relative"
                      initial={{ 
                        opacity: 0,
                        y: 20
                      }}
                      animate={{ 
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      {/* Text with image inside using CSS background-clip */}
                      <div 
                        className="[font-family:'Montserrat',Helvetica] font-black text-[100px] tracking-[-4px] leading-[110px]"
                        style={{
                          backgroundImage: "url('/izzy scroll 3.jpg')",
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
                      
                      {/* Simple dot */}
                      <div className="ml-8 w-3 h-3 bg-[#e44782] rounded-full opacity-60"></div>
                    </motion.div>
                  ))}
                </div>
                </div>
          </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e447821a] to-transparent pointer-events-none"></div>
        </div>






        </motion.div>

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
        <div className="w-full mt-2">
          <div className="w-full bg-gradient-to-br from-gray-50 to-white rounded-[67.5px_67.5px_0px_0px] py-20 pb-[200px]">
            <div className="w-full max-w-[1200px] mx-auto px-8">
              
                            {/* Reviews Heading */}
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#091329] text-[40px] tracking-[-1.73px] leading-[50px] mb-6">
                  Client Reviews
                </h3>
                <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[16px] leading-[24px] max-w-lg mx-auto">
                  Hear from clients who have transformed their personal brands and achieved measurable results.
                </p>
              </motion.div>

              {/* Featured Testimonial */}
              <motion.div 
                className="bg-white rounded-2xl p-12 mb-16 relative shadow-lg shadow-gray-200/50 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-2/3 pr-8">
                    <p className="[font-family:'Inter',Helvetica] text-[#091329] text-[22px] leading-[30px] font-medium mb-4 text-left">
                      "Izzy is the absolute best in the business for Personal Branding! She helped me create a compelling personal brand that truly represents who I am and what I stand for. Her strategic approach and attention to detail are unmatched. I've seen incredible results in my business since working with her."
                    </p>
                    <div className="text-left">
                      <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[24px] mb-0.5">
                        Jem Stein
                      </h4>
                      <p className="[font-family:'Inter',Helvetica] text-[#091329]/60 text-[16px]">
                        Purpose-led Founder
                    </p>
                  </div>
                    </div>
                  <div className="w-1/3 flex justify-center items-center">
                    <img 
                      src="/Jem Stein.jpeg" 
                      alt="Jem Stein" 
                      className="w-40 h-40 rounded-[0.84rem] object-cover border-2 border-[#e44782] shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Three Smaller Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Review 1 - Sally Douglas */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src="/Sally Douglas.jpeg" 
                      alt="Sally Douglas" 
                      className="w-12 h-12 rounded-[0.84rem] object-cover mr-4 flex-shrink-0 border-2 border-[#e44782]"
                    />
                      <div>
                      <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[18px] mb-0">
                        Sally Douglas
                      </h4>
                      <p className="[font-family:'Inter',Helvetica] text-[#091329]/60 text-[14px]">
                        Author & Speaker
                        </p>
                      </div>
                    </div>
                  <p className="[font-family:'Inter',Helvetica] text-[#091329]/80 text-[15px] leading-[22px] mb-6">
                    "Izzy made me feel confident and clear on what I need to do. Her passion and enthusiasm is infectious. I've become a lot more effective and efficient at LinkedIn thanks to her help. She truly understands how to build authentic personal brands that connect with your audience."
                  </p>
                  <div className="flex text-[#e44782]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </motion.div>

                                {/* Review 2 - Emma Abbasi */}
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <img 
                      src="/Emma Abbasi.jpeg" 
                      alt="Emma Abbasi" 
                      className="w-12 h-12 rounded-[0.84rem] object-cover mr-4 flex-shrink-0 border-2 border-[#e44782]"
                    />
                    <div>
                      <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[18px] mb-0">
                        Emma Abbasi
                      </h4>
                      <p className="[font-family:'Inter',Helvetica] text-[#091329]/60 text-[14px]">
                        Femtech Founder
                      </p>
            </div>
          </div>
                  <p className="[font-family:'Inter',Helvetica] text-[#091329]/80 text-[15px] leading-[22px] mb-6">
                    "Izzy provided guidance in LinkedIn content strategy for community-driven content and lead generation. Her strategic approach helped me build meaningful connections and grow my femtech platform. She's incredibly knowledgeable about building authentic personal brands."
                  </p>
                  <div className="flex text-[#e44782]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
          </div>
        </div>

                                {/* Review 3 - Emily Hughes */}
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <img 
                      src="/Emily Hughes.jpeg" 
                      alt="Emily Hughes" 
                      className="w-12 h-12 rounded-[0.84rem] object-cover mr-4 flex-shrink-0 border-2 border-[#e44782]"
                    />
                    <div>
                      <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[18px] mb-0">
                        Emily Hughes
                      </h4>
                      <p className="[font-family:'Inter',Helvetica] text-[#091329]/60 text-[14px]">
                        Wellness Founder
              </p>
            </div>
                  </div>
                  <p className="[font-family:'Inter',Helvetica] text-[#091329]/80 text-[15px] leading-[22px] mb-6">
                    "Izzy is the absolute best in the business for Personal Branding! Her passion and enthusiasm is infectious. She helped me create a compelling personal brand that truly represents who I am and what I stand for. Her strategic approach and attention to detail are unmatched."
                  </p>
                  <div className="flex text-[#e44782]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
            </div>
          </div>



        </div>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
};