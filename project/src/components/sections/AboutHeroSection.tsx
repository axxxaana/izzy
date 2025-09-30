import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProfileCard from '../ProfileCard';
import { ANIMATIONS, ANIMATION_DELAYS, VIEWPORT_SETTINGS } from '../../constants/animations';
import { TYPOGRAPHY } from '../../constants/design-system';

export const AboutHeroSection: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      console.log('Current screen width:', width);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Calculate margins based on screen width
  const getTextMargin = () => {
    if (screenWidth >= 1920) return '50px';
    if (screenWidth >= 1536) return '50px';
    if (screenWidth >= 1280) return '50px';
    if (screenWidth >= 1024) return '50px';
    return '70px';
  };

  const getImageMargin = () => {
    if (screenWidth >= 1920) return '50px';
    if (screenWidth >= 1536) return '50px';
    if (screenWidth >= 1280) return '50px';
    if (screenWidth >= 1024) return '50px';
    return '0px';
  };

  return (
    <div className="w-full relative mb-0">
      <div className="w-full p-3 sm:p-4 lg:p-[15px]" style={{ height: '700px', position: 'relative', overflow: 'hidden' }}>
        <div className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
          {/* Static Background */}
          <div className="absolute inset-0" style={{ background: '#FCEEF3' }}></div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col lg:flex-row items-center z-10 max-w-[1400px] mx-auto">
            {/* Left Side - Text Content */}
            <div 
              className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:pt-12 xl:pb-12 xl:pl-12 xl:pr-0 mt-[90px] order-1 lg:order-1"
              style={{ 
                marginLeft: screenWidth >= 1024 ? getTextMargin() : '0px',
                transition: 'margin-left 0.3s ease'
              }}
            >
              <motion.div
                initial={ANIMATIONS.fadeIn.up.initial}
                whileInView={ANIMATIONS.fadeIn.up.animate}
                transition={ANIMATIONS.fadeIn.up.transition}
                viewport={VIEWPORT_SETTINGS}
              >
                {/* Main Heading */}
                <motion.h1 
                  className={`${TYPOGRAPHY.headings.h1.classes} text-black mb-4 sm:mb-6 text-center lg:text-left pr-0 lg:text-[60px] max-w-4xl`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  Your Brand Isn't<br />
                  Boring. It's Just<br />
                  Buried.
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                  className={`${TYPOGRAPHY.body.large.classes} text-black/80 max-w-[550px] mb-6 sm:mb-8 text-center lg:text-left`}
                  initial={ANIMATIONS.text.reveal.initial}
                  whileInView={ANIMATIONS.text.reveal.animate}
                  transition={{ ...ANIMATIONS.text.reveal.transition, delay: ANIMATION_DELAYS.md }}
                  viewport={VIEWPORT_SETTINGS}
                >
                  I help founders dig it out, sharpen the story and show up with the kind of clarity that moves people (and yes, sales too).
                </motion.p>
                
                {/* Book a Call Button */}
                <div className="flex justify-center lg:justify-start">
                  <Link to="/get-started">
                    <motion.button 
                      className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-[#e44782] text-white border-2 border-[#e44782] rounded-[0.84rem] font-['Montserrat'] font-semibold text-[14px] sm:text-base lg:text-lg hover:bg-white hover:text-[#e44782] transition-all duration-300 shadow-lg"
                      style={{ fontFamily: "Montserrat, Helvetica, Arial, sans-serif" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      Book a Call
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Side - ProfileCard */}
            <div 
              className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-[70px] order-2 lg:order-2"
              style={{ 
                marginLeft: screenWidth >= 1024 ? getImageMargin() : '0px',
                transition: 'margin-left 0.3s ease'
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <ProfileCard
                  name="Izzy Prior"
                  title="Brand Strategist & Marketing Director"
                  handle="izzyprior"
                  status="Available"
                  contactText="Book a Call"
                  avatarUrl="/izzy-about-3.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  behindGradient={undefined}
                  innerGradient={undefined}
                  miniAvatarUrl="/1686505438673.jpeg"
                  onContactClick={() => window.location.href = '/get-started'}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 