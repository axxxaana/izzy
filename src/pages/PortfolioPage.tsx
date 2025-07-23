import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/layout/Navigation';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

// Editable hero content
const HERO_TAG = 'PORTFOLIO';
const HERO_HEADLINE = 'Work That Speaks Louder Than Words';
const HERO_ROTATING_WORDS = [
  'Bold',
  'Strategic',
  'Transformative',
  'Human',
];
const HERO_SUBHEADLINE =
  'Explore a curated selection of projects and brands brought to life for founders, startups, and communities.';
const HERO_BUTTON_TEXT = 'See the Work';

const caseStudies = [
  {
    title: 'Nexus Connected',
    description: 'Strategic marketing leadership and brand development for an innovative femtech platform.',
    image: '/nexus connected team.jpg',
  },
  {
    title: 'Wellnergy',
    description: 'Ghostwriting, branding, and influencer partnership outreach for a wellness community.',
    image: '/wellnergy cover.png',
  },
  {
    title: 'GoFounder',
    description: 'Marketing, content creation, ghostwriting, and founder onboarding for a startup community platform.',
    image: '/GoFounder Cover.png',
  },
];

export const PortfolioPage: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % HERO_ROTATING_WORDS.length);
        setFade(false);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full bg-white" style={{ minHeight: 'auto', height: 'auto', flexWrap: 'nowrap' }}>
      {/* Hero Section */}
      <div className="w-full relative mb-0">
        <div className="w-full h-[700px] relative p-3 sm:p-4 lg:p-[15px] pt-24">
          <motion.div
            className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative h-full">
              <div className="absolute w-full h-full top-0 left-0">
                <div className="relative h-full">
                  <div className="absolute w-full h-full top-0 left-0 bg-white opacity-10 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]" />
                  <motion.div
                    className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]"
                    style={{ background: 'rgba(228, 71, 130, 0.2)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <Navigation />
                  </motion.div>
                </div>
              </div>
              {/* Hero Content */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-32 pb-32" style={{ paddingTop: 'calc(8rem + 50px)' }}>
                <motion.span
                  className="inline-block mb-6 px-6 py-2 rounded-full bg-white text-lg font-semibold shadow-sm"
                  style={{ color: '#e44782', background: '#fff', fontFamily: 'Inter, Helvetica' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {HERO_TAG}
                </motion.span>

                <motion.h1
                  className="max-w-4xl mx-auto text-[40px] md:text-[64px] font-extrabold text-center mb-4 leading-[1.1]"
                  style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica', letterSpacing: '-2px' }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {HERO_HEADLINE}{' '}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      className="inline-block"
                      style={{ color: '#e44782', minWidth: 120 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {HERO_ROTATING_WORDS[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.h1>

                <motion.p
                  className="max-w-2xl text-center text-[20px] text-[#0f0f10] opacity-80"
                  style={{ fontFamily: 'Inter, Helvetica' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {HERO_SUBHEADLINE}
                </motion.p>

                <motion.button
                  className="mt-8 px-8 py-4 rounded-[0.84rem] bg-[#e44782] text-white text-xl font-semibold shadow-lg border-2 border-transparent hover:bg-white hover:text-[#e44782] hover:border-[#e44782] transition-all duration-200"
                  style={{ fontFamily: 'Montserrat, Helvetica' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {HERO_BUTTON_TEXT}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ScrollStack Case Studies */}
      <div className="w-full max-w-5xl mx-auto pt-8 pb-16 px-4">
        <ScrollStack>
          <ScrollStackItem>
            <h2>Nexus Connected</h2>
            <p>Strategic marketing leadership and brand development for an innovative femtech platform.</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Wellnergy</h2>
            <p>Ghostwriting, branding, and influencer partnership outreach for a wellness community.</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>GoFounder</h2>
            <p>Marketing, content creation, ghostwriting, and founder onboarding for a startup community platform.</p>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  );
}; 