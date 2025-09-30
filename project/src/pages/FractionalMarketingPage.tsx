import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { TrustedByBanner } from '../components/TrustedByBanner';
import { IdealClientSection } from '../components/sections';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { ANIMATIONS, ANIMATION_DELAYS } from '../constants/animations';
import { TYPOGRAPHY } from '../constants/design-system';



export const FractionalMarketingPage: React.FC = () => {

  return (
    <Layout 
      title="Fractional Marketing Services"
      description="Get expert fractional marketing leadership without the full-time cost. Strategic marketing planning, team building, and execution for femtech and healthtech startups."
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
              {/* Simple Static Background */}
              <div 
                className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
                style={{ background: '#FCEEF3' }}
              />
              {/* Hero Content */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-32 pb-32" style={{ paddingTop: 'calc(8rem + 80px)' }}>
                
                <motion.div 
                  className="max-w-4xl mx-auto text-center mb-6"
                  initial={ANIMATIONS.fadeIn.up.initial}
                  animate={ANIMATIONS.fadeIn.up.animate}
                  transition={{ ...ANIMATIONS.fadeIn.up.transition, delay: ANIMATION_DELAYS.lg }}
                >
                  <h1 
                    className={`${TYPOGRAPHY.headings.h1.classes}`}
                    style={{ color: '#0f0f10', marginBottom: '0' }}
                  >
                    The Big Picture Strategy
                  </h1>
                  <div 
                    className="text-2xl"
                    style={{ color: '#e44782', marginTop: '1rem' }}
                  >
                    (without the big-shot CMO salary)
                  </div>
                </motion.div>
                
                <motion.p 
                  className={`${TYPOGRAPHY.body.large.classes} max-w-2xl text-center text-[#0f0f10] opacity-90`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Hiring a full-time exec is like buying the whole orchestra when all you really need is the conductor. With me, you get the brains and direction of a CMO, without the overhead or the "we'll circle back" nonsense.
                </motion.p>
                
                <motion.button 
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                  className="mt-8 px-8 py-4 rounded-[0.84rem] bg-[#e44782] text-white text-xl font-semibold shadow-lg border-2 border-transparent hover:bg-white hover:text-[#e44782] hover:border-[#e44782] transition-all duration-200 tracking-[1.2px]" 
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
        className="w-full flex flex-col items-center justify-center mb-8 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="relative inline-block">
          <motion.h2 
            className={`${TYPOGRAPHY.headings.h2.classes} text-center mb-6 relative z-10`}
            style={{ color: '#0f0f10' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          
          {/* Background Image with Twirly Arrow - positioned to the right of heading */}
          <div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-[125px] -translate-y-[34px] w-[400px] h-[200px] bg-contain bg-no-repeat bg-center z-0"
            style={{
              backgroundImage: 'url(/how-it-works.png)'
            }}
          />
        </div>
        
        <motion.p 
          className={`${TYPOGRAPHY.body.large.classes} text-center max-w-sm opacity-80 px-4`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          A clear, focused process to align your brand and marketing.
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
        <h2 className={`${TYPOGRAPHY.headings.h2.classes} text-center mb-4`} style={{ color: '#0f0f10' }}>
          Frequently Asked Questions
        </h2>
        <p className={`${TYPOGRAPHY.body.large.classes} text-center mb-8 opacity-80`}>
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
    a: "It's like having a senior marketing lead in your corner… someone who sees the full chessboard, not just the next move. You get strategy, content and execution tailored to your stage of growth."
  },
  {
    q: "How is this different from hiring a freelancer or agency?",
    a: "Freelancers often serve you one slice of the pie (copy, design, ads). Agencies love glossy presentations but aren't inside your business enough to see what's really broken. I sit in the middle: big-picture strategy and hands-on direction, without the layers of account managers."
  },
  {
    q: "Do you work with in-house teams?",
    a: "Absolutely. In fact, that's where I thrive - giving your existing team creative direction and processes so they stop spinning their wheels. Think of me as the glue between your brand's vision and your team's execution."
  },
  {
    q: "Will this help with both strategy and execution?",
    a: "Yes. Strategy without execution is just a Google Doc gathering dust whilst execution without strategy is chaos on repeat. With me, you get both: clear priorities, a system to deliver and the know-how to actually make it stick."
  },
  {
    q: "Is this just for early-stage startups?",
    a: "Nope. Early-stage founders love it because it gives them structure fast. But I also work with scaling teams who've outgrown DIY marketing and need a clear strategy that doesn't collapse the second they add a new channel."
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
              <span className="inline-block mr-6 text-3xl font-black select-none" style={{ width: '2rem', display: 'inline-block', color: '#a8e10c' }}>{open ? '−' : '+'}</span>
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