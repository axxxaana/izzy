import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/layout';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { TrustedByBanner } from '../components/TrustedByBanner';
import { IdealClientSection, TestimonialsSection } from '../components/sections';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { CursorTrail } from '../components/CursorTrail';

const ROTATING_WORDS = [
  'Grow',
  'Convert',
  'Scale',
  'Lead',
];

export const FractionalMarketingPage: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFade(false);
      }, 350); // fade out duration
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CursorTrail />
      <div className="flex flex-col items-center w-full bg-white" style={{ minHeight: 'auto', height: 'auto', flexWrap: 'nowrap' }}>
      {/* Hero Section (with enhanced animations) */}
      <div className="w-full relative mb-0">
        <div className="w-full h-[700px] relative p-3 sm:p-4 lg:p-[15px] pt-24">
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
                    style={{
                      background: 'rgba(228, 71, 130, 0.2)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <Navigation />
                  </motion.div>
                </div>
              </div>
              {/* Hero Content - Enhanced with animations */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-32 pb-32" style={{ paddingTop: 'calc(8rem + 50px)' }}>
                <motion.span 
                  className="inline-block mb-6 px-6 py-2 rounded-full bg-white text-lg font-semibold shadow-sm" 
                  style={{ color: '#e44782', background: '#fff', fontFamily: 'Inter, Helvetica' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  STARTUPS
                </motion.span>
                
                <motion.h1 
                  className="max-w-6xl mx-auto text-[40px] md:text-[64px] font-extrabold text-center mb-4 leading-[1.1]" 
                  style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica', letterSpacing: '-2px' }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Strategic Brand Direction That Helps Your Startup{' '}
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
                      {ROTATING_WORDS[currentWordIndex]}
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
                  I help early-stage startups turn brand chaos into clarity, with messaging that lands, content that converts, and strategy that scales.
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
          style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <motion.p 
          className="text-lg text-center max-w-3xl opacity-80 px-4" 
          style={{ fontFamily: 'Inter, Helvetica' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          A lean, proven framework to align your brand and marketing — so your business grows with clarity, not chaos.
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

      {/* Portfolio Section - now above FAQ */}
      <PortfolioSection />

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center py-20 px-4 pb-32">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>
          Frequently Asked Questions
        </h2>
        <FAQSection />
      </section>

      {/* FooterSection (homepage version) */}
      <FooterSection />
    </div>
    </>
  );
}; 

// FAQSection component and faqs moved from HowItWorksSection
const faqs = [
  {
    q: "How is this different from hiring a full-time CMO?",
    a: "This gives you senior-level marketing and brand leadership — without the overhead. You get clarity, strategy, and execution guidance tailored to your business stage, minus the cost and commitment of an in-house team."
  },
  {
    q: "What exactly do you do as a fractional marketing partner?",
    a: "We bring structure to the chaos. That means setting your marketing priorities, aligning messaging with growth goals, building campaigns that convert, and directing your team (or freelancers) so execution actually happens — without you managing every task."
  },
  {
    q: "Is this a done-for-you service?",
    a: "This is done-with-you at a strategic level, and done-for-you when it comes to brand positioning, marketing direction, and systems. Execution support is tailored — we either guide your team or bring in trusted partners where needed."
  },
  {
    q: "I don’t have a marketing team — can this still work?",
    a: "Absolutely. Whether you’re solo, working with freelancers, or starting to build a team, we plug into your existing setup and help you scale smart. No team? We’ll build the systems so you can grow into one."
  },
  {
    q: "Will I need to be involved every day?",
    a: "Not even close. We design systems so marketing runs without you in the weeds. You stay in the driver's seat of vision — while we handle direction, decision-making, and frameworks your team can run with."
  },
  {
    q: "How long until I see traction?",
    a: "Most clients feel clarity and momentum within the first few weeks. Long-term results build over 6–12 weeks as strategy turns into systems, and systems turn into scalable marketing."
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
            className={`transition-all duration-400 border border-[#ececec] shadow-sm ${open ? 'bg-[rgba(228,71,130,0.08)] rounded-2xl' : 'bg-white'} px-8 py-6 group hover:shadow-md`}
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
              className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-40 mt-4 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`}
              style={{ fontSize: '1.08rem', color: '#222', fontWeight: 400, lineHeight: 1.7, transitionProperty: 'max-height, opacity, transform', paddingTop: open ? 8 : 0 }}
            >
              {open && <div>{faq.a}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
} 