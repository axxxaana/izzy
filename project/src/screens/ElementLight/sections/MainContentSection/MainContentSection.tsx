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
import { ImageArchSection } from "../../../../components/sections/BrandSection";
import { BrandingSystemVisual } from "../../../../components/sections/BrandingSystemVisual";
import SpotlightCard from "../../../../components/SpotlightCard";
import { TrustedByBanner } from "../../../../components/TrustedByBanner";
import { Navigation } from "../../../../components/layout/Navigation";
import { TestimonialsSection } from "../../../../components/sections/TestimonialsSection";
import { PortfolioSection } from '../../../../components/sections/PortfolioSection';
import TrueFocus from '../../../../components/ui/TrueFocus';

export const MainContentSection = (): JSX.Element => {
  // Rotating words for the h1
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const rotatingWords = ["Connects", "Converts", "Scales", "Resonates"];
  const [activeCategory, setActiveCategory] = useState("FemTech");
  const [trueFocusIndex, setTrueFocusIndex] = useState(0); // For Strategy Voice Visibility animation

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

  // Control TrueFocus animation based on viewport visibility
  useEffect(() => {
    if (isVisible) {
      // Start with "Strategy" (index 0) when section becomes visible
      setTrueFocusIndex(0);
      
      // Begin cycling through words after initial delay
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setTrueFocusIndex((prev) => (prev + 1) % 3); // 3 words: Strategy, Voice, Visibility
        }, 3000); // Change word every 3 seconds
        
        return () => clearInterval(interval);
      }, 2000); // Wait 2 seconds before starting cycle
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Service features data
  const founderBrandFeatures = [
    "Craft a brand foundation that actually fits your story, your values, your positioning, so everything you say is rooted, intentional, and clear.",
    "Find the words that sound like you. Then say them well. From LinkedIn posts to longform thought pieces, we'll shape content that builds trust and cuts through.",
    "Show up where it matters. We'll map the right channels and rhythm to amplify your voice, attract the right people, and drive real growth.",
  ];

  const fractionalMarketingFeatures = [
    "Build a brand backbone that can scale with clear pillars, smart positioning, and a plan that's actually built for your business.",
    "Shape content that sounds like you, not a content bot with thought leadership, social, emails, and more, all grounded in your voice.",
    "Show up where it counts. We'll map the channels and cadence to grow trust, build demand, and move the needle.",
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



  return (
    <>
      <div className="flex flex-col items-center w-full relative">
        {/* Hero Section */}
        <div className="w-full relative mb-0">
          <div className="w-full h-[700px] relative p-3 sm:p-4 lg:p-[15px]">
            <div className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
              {/* Animated Background for entire hero */}
              <div 
                className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
                style={{
                  background: 'linear-gradient(45deg, rgba(228, 71, 130, 0.8), rgba(228, 71, 130, 0.2), rgba(228, 71, 130, 0.8))',
                  backgroundSize: '300% 300%',
                  animation: 'gradient-shift 8s ease-in-out infinite',
                }}
              />
                            <div className="relative h-full flex">
                                {/* Left Side - 50% */}
                <div className="w-1/2 h-full relative">
                  <Navigation />
                  <motion.div 
                    className="w-full h-full flex items-end justify-center pb-0 px-4 sm:px-6 md:px-8 lg:px-2 ml-[90px] xl:ml-[90px] hero-image-1440"
                    style={{ marginLeft: '90px' }} 
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                  >
                    <motion.img
                      src="/izzy-image-hero.png?v=2"
                      alt="Izzy Prior"
                      className="w-[85%] sm:w-[82%] md:w-[80%] h-[80%] sm:h-[83%] md:h-[85%] object-cover object-top rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]"
                    />
                  </motion.div>
                </div>

                {/* Right Side - 50% */}
                <div className="w-1/2 h-full relative">
                  <div className="w-full h-full flex flex-col items-start justify-center px-6 sm:px-8 md:px-10 lg:px-12" style={{ paddingTop: '85px' }}>
                    <motion.h1 
                      className="text-[60px] font-bold text-black mb-6 leading-[1.05] max-w-2xl" 
                      style={{ fontFamily: 'Montserrat, Helvetica' }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                    >
                      Turn Your Mission Into a Brand That{' '}
                      <span className="relative inline-block">
                        Connects
                        <img
                          src="/needle-underline.svg"
                          alt=""
                          className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-5 left-0 w-full"
                        />
                      </span>
                    </motion.h1>
                    <motion.p 
                      className="text-[20px] text-black mb-6 sm:mb-8 max-w-md lg:max-w-lg leading-relaxed"
                      style={{ fontFamily: 'Inter, Helvetica', marginTop: '10px' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                    >
                      Strategy for founders and startups who want to grow with clarity, not perform for clicks.
                    </motion.p>
                    <motion.div
                      style={{ marginTop: '-5px' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                    >
                      <Link to="/get-started">
                        <motion.button 
                          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#e44782] text-white border-2 border-[#e44782] rounded-[0.84rem] font-semibold text-base sm:text-lg lg:text-xl hover:bg-white hover:text-[#e44782] transition-all duration-300 shadow-lg"
                          whileTap={{ scale: 0.98 }}
                        >
                          Book a Call
                        </motion.button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Hero Content - Text Only */}
              {/* Removed 'Let's get started' headline, subheadline, and button as requested */}
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
            style={{ marginTop: '50px', paddingBottom: '150px' }}
          >
            {/* Content */}
            <div className={`flex flex-col items-center transition-all duration-1000 ease-out ${
              isAnimating ? 'animate-fade-in-up' : ''
            }`}>
              <h2 className={`max-w-[800px] [font-family:'Montserrat',Helvetica] font-semibold text-[#0f0f10] text-[45px] text-center tracking-[-0.51px] leading-[56px] mb-8 transition-all duration-1000 ease-out ${
                isAnimating ? 'animate-text-reveal' : 'opacity-0 translate-y-8 blur-sm'
              }`}>
                I help femtech, healthtech, and mission-driven founders cut through bloated
                messaging and build bold, heart-led brands that <span className="px-3 pt-0 pb-1 rounded-lg relative bg-gradient-to-r from-[#e447824d] to-[#e4478203]">actually move people.</span>
              </h2>
              <div className="flex justify-center mt-4">
                <Link to="/get-started" className="relative bg-[#e44782] text-white font-['Montserrat'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out">
                  Book a Call
                </Link>
              </div>
            </div>
          </div>

          {/* Image Arch Section */}
          <div className="w-full mt-16">
            <ImageArchSection />
          </div>

          {/* Branding System Visual */}
          <div className="w-full">
            {/* <BrandingSystemVisual /> Removed as requested */}
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
                  Founder Personal <br />
                  Brand Strategy
                  </motion.h3>
                  <motion.p 
                    className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15.9px] tracking-[0] leading-[25.2px] pb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                  For founders who want to build authority, trust, and momentum, without dancing for the algorithm gods.
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
                        className="w-[40px] h-[40px]"
                        alt="Feature icon"
                        src="/check-list-marketing.svg"
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
                          className="w-[40px] h-[40px]"
                          alt="Feature icon"
                          src={index === 0 ? "/announcement-marketing.svg" : index === 1 ? "/eye-marketing.svg" : "/vector-8.svg"}
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
                    <Link to="/services/founder-brand-strategy" className="relative bg-[#e44782] text-white font-['Montserrat'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out">
                      Learn More
                    </Link>
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
                  Fractional marketing<br />&amp; brand direction
                </motion.h3>
                <motion.p 
                  className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15.9px] tracking-[0] leading-[25.2px] pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  For startups ready to grow with clarity. I help you build a content system that performs, refine the messaging behind it, and turn brand thinking into execution that scales.
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
                        className="w-[40px] h-[40px]"
                        alt="Feature icon"
                        src="/check-list-marketing.svg"
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
                          className="w-[40px] h-[40px]"
                          alt="Feature icon"
                          src={index === 0 ? "/announcement-marketing.svg" : index === 1 ? "/eye-marketing.svg" : "/vector-8.svg"}
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
                    <Link to="/services/fractional-marketing" className="relative bg-[#e44782] text-white font-['Montserrat'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out">
                      Learn More
                    </Link>
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

        {/* Strategy Voice Visibility Section */}
        <motion.section 
          className="w-full flex flex-col items-center justify-center" 
          style={{ marginTop: '150px', padding: '80px 0 170px 0' }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <TrueFocus 
              sentence="Strategy Voice Visibility"
              manualMode={true}
              blurAmount={5}
              borderColor="#e44782"
              animationDuration={2}
              pauseBetweenAnimations={1}
              fontFamily="'Montserrat', Helvetica, Arial, sans-serif"
              fontSize="4.5rem"
              currentIndex={trueFocusIndex}
            />
          </motion.div>
          <motion.p 
            className="max-w-3xl text-center text-[#0f0f10] mt-10" 
            style={{ fontFamily: "'Inter', Helvetica, Arial, sans-serif", fontSize: '18px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            You don't need more noise. You need strategy that actually fits, a voice that actually sounds like you, and visibility that doesn't feel like screaming into the void. I help you shape all three, so your brand moves with meaning, not just motion.
          </motion.p>
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link to="/get-started" className="relative bg-[#e44782] text-white font-['Montserrat'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out">
              Book a Call
            </Link>
          </motion.div>
        </motion.section>



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
        <div style={{ paddingTop: '50px' }}>
          <PortfolioSection />
        </div>

        {/* Testimonials Section (Reviews) */}
        <TestimonialsSection />

      </div>
    </div>
    </>
  );
};