import React from 'react';
import { motion } from 'framer-motion';

export const FounderQuoteSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <motion.h2 
          className="[font-family:'Montserrat',Helvetica] font-semibold text-[#0f0f10] text-[50px] text-center tracking-[-0.51px] leading-[61.4px] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          "I believe great brands don't just talk, they <span className="px-3 py-1 rounded-lg relative bg-gradient-to-r from-[#e447824d] to-[#e4478203]">connect</span>. My work is about helping founders get radically clear so they can grow with intention."
        </motion.h2>
      </div>
    </section>
  );
}; 