import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { TrustedByBanner } from '../components/TrustedByBanner';
import { IdealClientSectionFounder } from '../components/sections/IdealClientSectionFounder';
import { TestimonialsSection } from '../components/sections';
import { HowItWorksSectionFounder } from '../components/sections/HowItWorksSectionFounder';


export const FounderBrandStrategyPage: React.FC = () => {

  return (
    <Layout>
      <div className="flex flex-col items-center w-full bg-white" style={{ minHeight: 'auto', height: 'auto', flexWrap: 'nowrap' }}>
      {/* Hero Section (with enhanced animations) */}
      <div className="w-full relative mb-0">
        <div className="w-full h-[800px] relative p-3 sm:p-4 lg:p-[15px] pt-24">
          <motion.div 
            className="relative w-full h-[770px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-full">
              {/* Simple Static Background */}
              <div 
                className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
                style={{ background: '#F8F9FA' }}
              />
              {/* Hero Content - Enhanced with animations */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-32 pb-32" style={{ paddingTop: 'calc(8rem + 50px)' }}>
                <motion.span 
                  className="inline-block mb-8 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-pink-400/30 text-pink-600 text-base font-semibold uppercase tracking-wide" 
                  style={{ fontFamily: 'Montserrat, Helvetica, Arial, sans-serif' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  FOUNDERS
                </motion.span>
                
                <motion.h1 
                  className="max-w-4xl mx-auto text-[36px] md:text-[56px] lg:text-[64px] font-bold text-center mb-6 leading-[1.25]" 
                  style={{ color: '#0f0f10', fontFamily: 'Anton, Helvetica', letterSpacing: '1.2px' }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Build a Personal Brand That Makes You Unforgettable
                </motion.h1>
                
                <motion.p 
                  className="max-w-lg text-center text-[18px] md:text-[20px] text-[#0f0f10] opacity-90 leading-relaxed" 
                  style={{ fontFamily: 'Inter, Helvetica' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Shape a story that lands, a message that sticks, and a brand people trust and remember
                </motion.p>
                
                <motion.button 
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                  className="mt-8 px-8 py-4 rounded-[0.84rem] bg-[#e44782] text-white text-xl font-semibold shadow-lg border-2 border-transparent hover:bg-white hover:text-[#e44782] hover:border-[#e44782] transition-all duration-200" 
                  style={{ fontFamily: 'Anton, Helvetica' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Call
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Logo Scroller */}
      <TrustedByBanner />
      
      {/* Who it's for feature cards section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <IdealClientSectionFounder />
      </motion.div>
      
      {/* How It Works Section Heading with enhanced styling */}
      <motion.div 
        className="w-full flex flex-col items-center justify-center mb-16 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-[40px] md:text-[48px] font-extrabold text-center mb-6" 
          style={{ color: '#0f0f10', fontFamily: 'Anton, Helvetica' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <motion.p 
          className="text-lg text-center max-w-xl opacity-80 px-4" 
          style={{ fontFamily: 'Inter, Helvetica' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          No fluff. Just a clear, proven system to turn your story into a magnetic personal brand without burning out.
        </motion.p>
      </motion.div>
      
      {/* How It Works Section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <HowItWorksSectionFounder />
      </motion.div>
      
      {/* FooterSection (homepage version) */}
      <FooterSection />
    </div>
    </Layout>
  );
};
