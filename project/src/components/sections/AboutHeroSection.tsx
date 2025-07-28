import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    if (screenWidth >= 1920) return '280px';
    if (screenWidth >= 1536) return '150px';
    if (screenWidth >= 1280) return '125px';
    if (screenWidth >= 1024) return '100px';
    return '0px';
  };

  const getImageMargin = () => {
    if (screenWidth >= 1920) return '-320px';
    if (screenWidth >= 1536) return '-100px';
    if (screenWidth >= 1280) return '-75px';
    if (screenWidth >= 1024) return '-50px';
    return '-50px';
  };

  return (
    <div className="w-full relative mb-0">
      <div className="w-full h-[700px] relative p-3 sm:p-4 lg:p-[15px]">
        <div className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
          {/* Background with opacity */}
          <div className="absolute inset-0 bg-[#e44782] opacity-20"></div>
          
          {/* Content */}
          <div className="relative h-full flex items-center z-10">
            {/* Left Side - Text Content */}
            <div 
              className="w-full lg:w-1/2 p-8 lg:p-12 mt-[90px]"
              style={{ 
                marginLeft: getTextMargin(),
                transition: 'margin-left 0.3s ease'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Main Heading */}
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-black leading-tight mb-6 font-['Montserrat']"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  Where clarity<br className="hidden lg:block" />
                  meets conviction
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-black/80 leading-relaxed max-w-[500px] mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  I help bold, mission-driven founders turn their story into strategy. So their brand doesn't just look the part it leads, resonates, and gets results.
                </motion.p>
                
                {/* Book a Call Button */}
                <Link to="/get-started">
                  <motion.button 
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#e44782] text-white border-2 border-[#e44782] rounded-[0.84rem] font-semibold text-base sm:text-lg hover:bg-white hover:text-[#e44782] transition-all duration-300 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book a Call
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Right Side - Image */}
            <div 
              className="hidden lg:flex w-1/2 justify-center items-center mt-[70px]"
              style={{ 
                marginLeft: getImageMargin(),
                transition: 'margin-left 0.3s ease'
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <img 
                  src="/izzy-about-3.png" 
                  alt="Izzy Prior" 
                  className="w-auto h-auto max-w-full max-h-[400px] xl:max-h-[450px] 2xl:max-h-[500px] object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 