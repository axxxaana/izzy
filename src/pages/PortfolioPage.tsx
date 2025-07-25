import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Navigation } from '../components/layout/Navigation';
import { CursorTrail } from '../components/CursorTrail';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { Link } from 'react-router-dom';

// PortfolioPage-specific hero content
const PORTFOLIO_HERO_TAG = 'PORTFOLIO';
const PORTFOLIO_HERO_HEADLINE = 'Real strategy. Real';
const PORTFOLIO_HERO_ROTATING_WORDS = [
  'Results',
  'Clarity',
  'Growth',
  'Messaging',
];
const PORTFOLIO_HERO_SUBHEADLINE =
  'From femtech to founder brands. This is what happens when strategy turns into results.';

const PortfolioHero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % PORTFOLIO_HERO_ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative mb-0">
      <div className="w-full p-3 sm:p-4 lg:p-[15px]" style={{ height: '700px', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-32 pb-32">
              <motion.span
                className="inline-block mb-6 px-6 py-2 rounded-full bg-white text-lg font-semibold shadow-sm"
                style={{ color: '#e44782', background: '#fff', fontFamily: 'Inter, Helvetica' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {PORTFOLIO_HERO_TAG}
              </motion.span>

              <motion.h1
                className="max-w-xl mx-auto text-[40px] md:text-[64px] font-extrabold text-center mb-4 leading-[1.1]"
                style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica', letterSpacing: '-2px' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {PORTFOLIO_HERO_HEADLINE}{' '}
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
                    {PORTFOLIO_HERO_ROTATING_WORDS[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>

              <motion.p
                className="max-w-xl text-center text-[20px] text-[#0f0f10] opacity-80"
                style={{ fontFamily: 'Inter, Helvetica' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {PORTFOLIO_HERO_SUBHEADLINE}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Portfolio data
const portfolioItems = [
  {
    id: 2,
    title: 'Nexus Connected',
    subtitle: 'Team Collaboration Platform',
    description: 'Nexus is a femtech startup building an AI health coach for women. I led the full reposition, strategy, voice, and campaigns. The result: a clear brand, visible founder, and traction with investors.',
    tags: ['Brand Overhaul', 'Product Positioning', 'UX Strategy'],
    image: '/nexus connected team.jpg',
    color: '',
  },
  {
    id: 3,
    title: 'Wellnergy',
    subtitle: 'Health & Wellness Platform',
    description: 'Wellnergy is a wellness event turned high-visibility brand. I led messaging, ghostwrote founder content, and built influencer partnerships to drive traction and boost brand credibility.',
    tags: ['Health Tech', 'Holistic Design', 'Wellness Strategy'],
    image: '/wellnergy cover.png',
    color: '',
  },
  {
    id: 1,
    title: 'GoFounder',
    subtitle: 'Startup Accelerator Platform',
    description: 'GoFounder is a coaching platform for startup founders. I built the brand from the ground up with social strategy, thought leadership, and onboarding experiences that boosted visibility and community growth.',
    tags: ['Brand Strategy', 'Marketing Framework', 'Platform Design'],
    image: '/GoFounder Cover.png',
    color: '',
  },
];

const getPortfolioLink = (title: string) => {
  if (title === 'Nexus Connected') return '/portfolio/nexus-connected';
  if (title === 'Wellnergy') return '/portfolio/wellnergy';
  if (title === 'GoFounder') return '/portfolio/gofounder';
  return '#';
};

// Portfolio Card Component
const PortfolioCard: React.FC<{ item: typeof portfolioItems[0]; index: number }> = ({ item, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Link to={getPortfolioLink(item.title)} className="block group mt-8" tabIndex={0} role="link">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80, scale: 0.92, rotate: -6, filter: 'blur(8px)' }}
        animate={isInView ? {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: 'blur(0px)'
        } : {
          opacity: 0,
          y: 80,
          scale: 0.92,
          rotate: -6,
          filter: 'blur(8px)'
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 18,
          delay: index * 0.18,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className={`cursor-pointer`}
      >
        <div className={`relative rounded-[24px] overflow-hidden h-[500px] group shadow-lg hover:shadow-2xl transition-shadow duration-300 flex`} style={{ background: 'rgba(228, 71, 130, 0.2)' }}>
          {/* Content - Left Side */}
          <div className="relative z-10 flex-1 flex flex-col justify-between pt-20 px-8 pb-8 max-w-xl">
            <div>
              {/* Service badges for each card */}
              {(item.title === 'GoFounder' || item.title === 'Wellnergy') && (
                <span className="inline-block mb-6 px-6 py-2 rounded-full border border-pink-500 text-pink-500 text-lg font-semibold shadow-sm" style={{ fontFamily: 'Inter, Helvetica' }}>
                  Multi-Service
                </span>
              )}
              {item.title === 'Nexus Connected' && (
                <span className="inline-block mb-6 px-6 py-2 rounded-full border border-pink-500 text-pink-500 text-lg font-semibold shadow-sm" style={{ fontFamily: 'Inter, Helvetica' }}>
                  Marketing
                </span>
              )}
              {/* Subtitle badge removed */}

              <h2 className="text-3xl md:text-4xl font-bold text-[#e44782] mb-4 group-hover:text-pink-600 transition-colors duration-300 font-['Montserrat']">
                {item.title}
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Inter']">
                {item.description}
              </p>
              <button
                className="inline-flex items-center px-0 py-4 rounded-[12px] bg-transparent text-[#e44782] text-2xl font-bold transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-200"
                type="button"
                tabIndex={-1}
                style={{ pointerEvents: 'none' }}
              >
                <span style={{ color: '#e44782' }}>Read More</span>
                <span className="ml-4 text-3xl font-bold" style={{ color: '#e44782' }}>&gt;</span>
              </button>
            </div>

            {/* Tags removed */}
          </div>

          {/* Image - Right Side */}
          <div className="flex-1 relative">
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Hover Arrow */}
          <motion.div 
            className="absolute top-6 right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center z-10"
            initial={{ opacity: 0, x: 8 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-6 h-6 text-pink-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export { portfolioItems, PortfolioCard };

export const PortfolioPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Cursor Trail Effect */}
      <CursorTrail />
      
      {/* Hero Section */}
      <PortfolioHero />

      {/* Portfolio Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Montserrat']">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Inter']">
              Each project tells a unique story of transformation and growth.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>
          <div style={{ height: '100px' }}></div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}; 