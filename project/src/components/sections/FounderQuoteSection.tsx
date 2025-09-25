import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const FounderQuoteSection: React.FC = () => {
  return (
    <section 
      className="w-full bg-white py-24 md:py-32 relative"
      style={{
        backgroundImage: 'url(/quote-arrow.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        <motion.h2 
          className="[font-family:'Montserrat',Helvetica] font-semibold text-[#0f0f10] text-[50px] text-center  leading-[61.4px] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          "I believe great brands don't just talk, <span className="px-3 py-1 rounded-lg relative bg-gradient-to-r from-[#a8e10c4d] to-[#a8e10c03]">they connect</span>. My work is about helping founders get radically clear so they can grow with intention."
        </motion.h2>
        
        {/* Book a Call Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link to="/get-started">
            <motion.button 
              className="px-5 py-3 bg-[#e44782] text-white font-['Montserrat'] font-semibold text-base hover:bg-white hover:text-[#e44782] transition-all duration-300 border-2 border-[#e44782] rounded-[0.84rem] "
              style={{ fontFamily: "Montserrat, Helvetica, Arial, sans-serif" }}
            >
              Book a Call
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}; 