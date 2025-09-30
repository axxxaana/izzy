import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TYPOGRAPHY } from '../../constants/design-system';

export const AboutStorySection: React.FC = () => {
  return (
    <>
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
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="px-4 py-2 bg-white border border-[#e44782] rounded-lg text-sm font-bold text-[#e44782] tracking-widest uppercase">
                THE PROBLEM
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h3 
              className={`${TYPOGRAPHY.headings.h3.classes} text-black mb-8 text-left max-w-[500px]`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Not a marketing problem. A clarity one.
            </motion.h3>

            {/* Floating SVG Underline */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <svg width="120" height="8" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4C20 0 40 8 60 4C80 0 100 8 120 4" stroke="#a8e10c" strokeWidth="2" strokeLinecap="round"/>
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
              <p className={`${TYPOGRAPHY.body.large.classes} text-[#4F4F4F] mb-6`}>
                Most startups and founder-led brands don't fail because they're short on ideas. They're struggling because their story is scattered, the content is patchy and their growth never quite matches the grind.
              </p>
              <p className={`${TYPOGRAPHY.body.large.classes} text-[#4F4F4F] mb-6`}>
                You're showing up. You're saying something worth hearing.
                But the message feels off. The content feels forced. And the brand feels like it's trying too hard while still missing the mark.
              </p>
              <p className={`${TYPOGRAPHY.body.large.classes} text-[#4F4F4F] mb-8`}>
                At the root of it all is clarity. Knowing what you stand for, how to say it and where to show up so every drop of energy is rewarded.
              </p>

              {/* Book a Call Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link to="/get-started">
                  <motion.button 
                    className="px-5 py-3 bg-[#e44782] text-white font-['Montserrat'] font-semibold text-base hover:bg-white hover:text-[#e44782] transition-all duration-300 border-2 border-[#e44782] rounded-[0.84rem] "
                    style={{ fontFamily: "Montserrat, Helvetica, Arial, sans-serif" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book a Call
                  </motion.button>
                </Link>
              </motion.div>
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
              <img
                src="/izzy-about-hero.png"
                alt="Izzy Prior - The Problem"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Duplicate Section with Image on Right */}
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-x-24 items-center">
          {/* LEFT: IMAGE */}
          <motion.div
            className="col-span-12 lg:col-span-6 mt-12 lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <img
                src="/izzy-hero-2.png"
                alt="Izzy Prior - The Solution"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* RIGHT: TEXT CONTENT */}
          <motion.div
            className="col-span-12 lg:col-span-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Label */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="px-4 py-2 bg-white border border-[#e44782] rounded-lg text-sm font-bold text-[#e44782] tracking-widest uppercase">
                THE SOLUTION
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h3
              className={`${TYPOGRAPHY.headings.h3.classes} text-black mb-8 text-left max-w-[500px]`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Lead with clarity.<br className="hidden lg:block" /> Grow with intention.
            </motion.h3>

            {/* Floating SVG Underline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <svg width="120" height="8" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4C20 0 40 8 60 4C80 0 100 8 120 4" stroke="#a8e10c" strokeWidth="2" strokeLinecap="round"/>
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
              <p className={`${TYPOGRAPHY.body.large.classes} text-[#4F4F4F] mb-6`}>
                Most marketing advice is like being told to run faster on a treadmill. More posts, more funnels, more hacks. But more speed on the wrong machine gets you nowhere.
              </p>
              <p className={`${TYPOGRAPHY.body.large.classes} text-[#4F4F4F] mb-6`}>
                I help you do less, better.
              </p>
              <p className={`${TYPOGRAPHY.body.large.classes} text-[#4F4F4F] mb-6`}>
                That starts by unearthing what you're really about - the core of your story, the spine of your brand. From there, we sharpen your voice until it feels unmistakably yours and land with the people you most want to reach.
              </p>
              <p className={`${TYPOGRAPHY.body.large.classes} text-[#4F4F4F] mb-6`}>
                Then we map the path forward - where to show up and where not to. The platforms, the rhythm, the campaigns that move the needle.
              </p>
              <p className={`${TYPOGRAPHY.body.large.classes} text-[#4F4F4F] mb-8`}>
                Because when the message is clear, the marketing finally clicks.
              </p>

              {/* Book a Call Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link to="/get-started">
                  <motion.button 
                    className="px-5 py-3 bg-[#e44782] text-white font-['Montserrat'] font-semibold text-base hover:bg-white hover:text-[#e44782] transition-all duration-300 border-2 border-[#e44782] rounded-[0.84rem] "
                    style={{ fontFamily: "Montserrat, Helvetica, Arial, sans-serif" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book a Call
                  </motion.button>
                </Link>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};
