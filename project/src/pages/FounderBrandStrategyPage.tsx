import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { TrustedByBanner } from '../components/TrustedByBanner';
import { IdealClientSectionFounder } from '../components/sections/IdealClientSectionFounder';
import { HowItWorksSectionFounder } from '../components/sections/HowItWorksSectionFounder';
import { TYPOGRAPHY } from '../constants/design-system';


export const FounderBrandStrategyPage: React.FC = () => {

  return (
    <Layout 
      title="Founder Brand Strategy Service"
      description="Transform your founder story into a compelling brand strategy. Get clarity on positioning, messaging, and visual identity."
    >
      <div className="flex flex-col items-center w-full bg-white" style={{ minHeight: 'auto', height: 'auto', flexWrap: 'nowrap' }}>
      {/* Hero Section (with enhanced animations) */}
      <div className="w-full relative mb-0">
        <div className="w-full h-[700px] relative p-3 sm:p-4 lg:p-[15px] pt-24">
          <motion.div 
            className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-full">
              {/* Background Image */}
              <div 
                className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: 'url(/founder-brand-strategy-hero.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  imageRendering: 'auto'
                }}
              />
              {/* Hero Content - Enhanced with animations */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-32 pb-32" style={{ paddingTop: 'calc(8rem + 80px)' }}>
                
                <motion.h1
                  className={`${TYPOGRAPHY.headings.h1.classes} max-w-5xl mx-auto text-center mb-6`}
                  style={{ color: '#0f0f10' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                >
                  Build Authority Without Turning Into a LinkedIn Cliché
                </motion.h1>
                
                <motion.p 
                  className={`${TYPOGRAPHY.body.large.classes} max-w-2xl text-center text-[#0f0f10] opacity-90`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                >
                  Most founders treat LinkedIn like a slot machine - post, pray, repeat. Sometimes you win, most of the time you don't. I'll help you build something steadier - a foundation of authority and trust that doesn't disappear with the algorithm's mood swings.
                </motion.p>
                
                <Link to="/get-started">
                  <motion.button 
                    className="mt-8 px-8 py-4 rounded-[0.84rem] bg-[#e44782] text-white text-xl font-semibold shadow-lg border-2 border-transparent hover:bg-white hover:text-[#e44782] hover:border-[#e44782] transition-colors duration-200" 
                    style={{ fontFamily: 'Montserrat, Helvetica' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book a Call
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Logo Scroller */}
      <TrustedByBanner />
      
      {/* Who it's for feature cards section */}
      <IdealClientSectionFounder />
      
      
      {/* How It Works Section */}
      <HowItWorksSectionFounder />
      
      {/* FooterSection (homepage version) */}
      <FooterSection />
    </div>
    </Layout>
  );
};
