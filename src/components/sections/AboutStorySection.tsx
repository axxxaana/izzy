import React from 'react';
import { motion } from 'framer-motion';

export const AboutStorySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-x-24 items-center">
          {/* LEFT: TEXT CONTENT */}
          <motion.div 
            className="col-span-12 lg:col-span-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Label */}
            <motion.p 
              className="text-sm font-semibold text-[#e44782] mb-6 tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              How it started
            </motion.p>

            {/* Heading */}
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-black leading-tight tracking-tight mb-8 font-['Montserrat'] text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Helping Founders Cut Through the Noise
            </motion.h2>

            {/* Floating SVG Underline */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <svg width="120" height="8" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4C20 0 40 8 60 4C80 0 100 8 120 4" stroke="#e44782" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="max-w-[60ch]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-lg text-[#4F4F4F] leading-relaxed mb-6">
                I started my career in traditional marketing—working with big brands, ticking the boxes, and following the playbook.
                But it never felt meaningful. I craved more than performance metrics—I wanted purpose.
              </p>
              <p className="text-lg text-[#4F4F4F] leading-relaxed mb-6">
                That shifted when I discovered femtech and healthtech. Founders solving real human problems—but struggling to express their value in a way that landed.
                I saw a gap: not more marketing, but clearer storytelling.
              </p>
              <p className="text-lg text-[#4F4F4F] leading-relaxed">
                Now, I help early-stage startups and purpose-led founders untangle their brand decks, find their voice, and show up in a way that actually converts.
                It's not about fluff. It's about building brands that make people feel something—and act.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: IMAGE */}
          <motion.div 
            className="col-span-12 lg:col-span-6 mt-12 lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              {/* Blob Shape Container */}
              <div className="relative overflow-hidden">
                <div 
                  className="w-full h-[600px] relative"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)"
                  }}
                >
                  <img 
                    src="https://picsum.photos/800/700?random=1"
                    alt="Professional business setting" 
                    className="w-full h-full object-cover"
                    width="800"
                    height="700"
                  />
                </div>
                
                {/* Floating SVG Doodle */}
                <motion.div 
                  className="absolute -top-8 -right-8 w-24 h-24 opacity-20"
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  whileInView={{ opacity: 0.2, rotate: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 20C40 10 60 30 80 20C90 15 95 25 85 35C75 45 55 40 35 50C25 55 15 45 20 20Z" fill="#e44782"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 