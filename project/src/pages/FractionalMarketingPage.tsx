import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { TrustedByBanner } from '../components/TrustedByBanner';
import { IdealClientSection, TestimonialsSection } from '../components/sections';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';



export const FractionalMarketingPage: React.FC = () => {

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
              {/* Simple Animated Background */}
              <div 
                className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
                style={{
                  background: 'linear-gradient(45deg, rgba(228, 71, 130, 0.8), rgba(228, 71, 130, 0.2), rgba(228, 71, 130, 0.8))',
                  backgroundSize: '300% 300%',
                  animation: 'gradient-shift 8s ease-in-out infinite',
                }}
              />
              {/* Hero Content - Enhanced with animations */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-32 pb-32" style={{ paddingTop: 'calc(8rem + 50px)' }}>
                <motion.span 
                  className="inline-block mb-8 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-pink-400/30 text-pink-600 text-base font-semibold uppercase tracking-wide" 
                  style={{ fontFamily: 'Inter, Helvetica' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  STARTUPS
                </motion.span>
                
                <motion.h1 
                  className="max-w-4xl mx-auto text-[36px] md:text-[56px] lg:text-[64px] font-bold text-center mb-6 leading-[1.1]" 
                  style={{ color: '#0f0f10', fontFamily: 'Anton, Helvetica', letterSpacing: '1.2px' }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Strategic Brand Direction Built to Scale
                </motion.h1>
                
                <motion.p 
                  className="max-w-3xl text-center text-[18px] md:text-[20px] text-[#0f0f10] opacity-90 leading-relaxed" 
                  style={{ fontFamily: 'Inter, Helvetica' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  I help early-stage startups turn brand chaos into clarity, with messaging that lands, content that converts, and strategy built to scale.
                </motion.p>
                
                <motion.button 
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                  className="mt-8 px-8 py-4 rounded-[0.84rem] bg-[#e44782] text-white text-xl font-semibold shadow-lg border-2 border-transparent hover:bg-white hover:text-[#e44782] hover:border-[#e44782] transition-all duration-200 tracking-[1.2px]" 
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
        <IdealClientSection />
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
          className="text-lg text-center max-w-2xl opacity-80 px-4" 
          style={{ fontFamily: 'Inter, Helvetica' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          A clear, focused process to align your brand and marketing, so you can scale without the chaos or second-guessing.
        </motion.p>
      </motion.div>
      
      {/* How It Works Section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <HowItWorksSection />
      </motion.div>



      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center pt-[60px] pb-32 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ color: '#0f0f10', fontFamily: 'Anton, Helvetica' }}>
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center mb-8 opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>
          Straight answers to what founders actually want to know.
        </p>
        <FAQSection />
      </section>

      {/* FooterSection (homepage version) */}
      <FooterSection />
    </div>
    </Layout>
  );
}; 

// FAQSection component and faqs moved from HowItWorksSection
const faqs = [
  {
    q: "What is fractional marketing, exactly?",
    a: "It's like having a senior marketing lead in your corner without the overhead of a full-time hire. Strategy, content, and execution, tailored to your growth stage."
  },
  {
    q: "How is this different from hiring a freelancer or agency?",
    a: "This isn't about checking boxes or churning content. You get strategic direction, execution support, and brand alignment all from someone who actually thinks like a founder."
  },
  {
    q: "Do you work with in-house teams?",
    a: "Yes. Whether you have a marketing hire or no one in place yet, we plug in where it makes sense and build systems your team can run with."
  },
  {
    q: "Will this help with both strategy and execution?",
    a: "Yep. We don't just tell you what to do we help you do it. That means messaging, content systems, visibility planning, and everything in between."
  },
  {
    q: "Is this just for early-stage startups?",
    a: "Not at all. If you've hit product-market fit and want brand-market clarity, this work gives your marketing the traction it's been missing."
  }
];

function FAQSection() {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <div className="w-full flex flex-col gap-4">
      {faqs.map((faq, i) => {
        const open = openIdx === i;
        return (
          <div
            key={i}
            className={`transition-all duration-400 border border-[#ececec] shadow-sm ${open ? 'bg-[rgba(228,71,130,0.08)]' : 'bg-white'} rounded-[0.84rem] px-8 py-6 group hover:shadow-md`}
            style={{}}
          >
            <button
              className="flex items-center w-full text-left focus:outline-none"
              onClick={() => setOpenIdx(open ? -1 : i)}
              aria-expanded={open}
              style={{ fontWeight: 700, color: '#0f0f10', fontSize: '1.15rem' }}
            >
              <span className="inline-block mr-6 text-3xl font-black select-none" style={{ width: '2rem', display: 'inline-block', color: '#e44782' }}>{open ? '−' : '+'}</span>
              <span className="flex-1">
                {faq.q}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}
              style={{ fontSize: '1.08rem', color: '#222', fontWeight: 400, lineHeight: 1.7 }}
            >
              <div className={`transition-all duration-500 ease-in-out ${open ? 'py-2' : 'py-0'}`}>
                {faq.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
} 