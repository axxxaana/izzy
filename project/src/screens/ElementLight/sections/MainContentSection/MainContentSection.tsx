import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { ImageArchSection } from "../../../../components/sections/BrandSection";
import { TrustedByBanner } from "../../../../components/TrustedByBanner";
import { Navigation } from "../../../../components/layout/Navigation";
import { TestimonialsSection } from "../../../../components/sections/TestimonialsSection";
import { PortfolioSection } from '../../../../components/sections/PortfolioSection';
import TrueFocus from '../../../../components/ui/TrueFocus';
import { ANIMATIONS, ANIMATION_DELAYS, VIEWPORT_SETTINGS } from "../../../../constants/animations";

export const MainContentSection = (): JSX.Element => {
  const [trueFocusIndex, setTrueFocusIndex] = useState(0); // For Strategy Voice Visibility animation

  // Scroll animation hook for the "I'm Izzy" text
  const { elementRef, isVisible, isAnimating } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
    delay: 200
  });

  // Control TrueFocus animation based on viewport visibility
  useEffect(() => {
    if (isVisible) {
      // Start with "Strategy" (index 0) when section becomes visible
      setTrueFocusIndex(0);
      
      // Begin cycling through words after initial delay
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setTrueFocusIndex((prev) => (prev + 1) % 3); // 3 words: Strategy, Voice, Visibility
        }, 3000); // Change word every 3 seconds
        
        return () => clearInterval(interval);
      }, 2000); // Wait 2 seconds before starting cycle
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Service features data
  const founderBrandFeatures = [
    "Craft a brand foundation that actually fits your story, your values, your positioning, so everything you say is rooted, intentional, and clear.",
    "Find the words that sound like you. Then say them well. From LinkedIn posts to longform thought pieces, we'll shape content that builds trust and cuts through.",
    "Show up where it matters. We'll map the right channels and rhythm to amplify your voice, attract the right people, and drive real growth.",
  ];

  const fractionalMarketingFeatures = [
    "Build a brand backbone that can scale with clear pillars, smart positioning, and a plan that's actually built for your business.",
    "Shape content that sounds like you, not a content bot with thought leadership, social, emails, and more, all grounded in your voice.",
    "Show up where it counts. We'll map the channels and cadence to grow trust, build demand, and move the needle.",
  ];




  return (
    <>
      <div className="flex flex-col items-center w-full relative">
        {/* Hero Section */}
        <div className="w-full relative mb-0">
          <div className="w-full h-auto min-h-[700px] sm:h-[750px] lg:h-[800px] relative p-0 sm:p-4 lg:p-[15px]">
            <div className="relative w-full h-auto min-h-[670px] sm:h-[720px] lg:h-[770px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
              <div className="hidden lg:block absolute top-0 left-0 z-10">
                <Navigation />
              </div>
              <motion.div 
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <motion.img
                  src="/Izzy-home-finals.png"
                  alt="Izzy Prior"
                  className="w-full h-full object-cover object-center rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]"
                />
              </motion.div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="w-full bg-white pt-0 pb-8 mb-24">
            <TrustedByBanner />
          </div>

          {/* I'm Izzy Section */}
          <div 
            ref={elementRef}
            className={`w-full max-w-[1200px] h-auto min-h-[500px] mt-8 sm:mt-12 lg:mt-40 pt-12 mx-auto relative flex items-end transition-all duration-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-[25px] bg-[#F8F9FA] shadow-lg ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-12 scale-95 blur-sm'
            }`}
          >
            {/* Two Column Layout: Image on Left, Text on Right */}
            <div className={`w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 transition-all duration-1000 ease-out px-8 sm:px-12 lg:px-16 xl:px-20 ${
              isAnimating ? 'animate-fade-in-up' : ''
            }`}>
              {/* Left: Image */}
              <motion.div 
                className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                initial={ANIMATIONS.fadeIn.left.initial}
                whileInView={ANIMATIONS.fadeIn.left.animate}
                transition={{ ...ANIMATIONS.fadeIn.left.transition, delay: ANIMATION_DELAYS.sm }}
                viewport={VIEWPORT_SETTINGS}
              >
                <img
                  src="/izzy-about-home.png"
                  alt="Izzy Prior"
                  className="w-full max-w-[500px] h-auto object-cover rounded-lg"
                />
              </motion.div>

              {/* Right: Text Content */}
              <motion.div 
                className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left justify-center mb-10"
                initial={ANIMATIONS.fadeIn.right.initial}
                whileInView={ANIMATIONS.fadeIn.right.animate}
                transition={{ ...ANIMATIONS.fadeIn.right.transition, delay: ANIMATION_DELAYS.md }}
                viewport={VIEWPORT_SETTINGS}
              >
                {/* "Hey I'm Izzy" in Pink */}
                <motion.h3 
                  className="text-black font-bold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] mb-6 font-['Montserrat']"
                  initial={ANIMATIONS.text.reveal.initial}
                  whileInView={ANIMATIONS.text.reveal.animate}
                  transition={{ ...ANIMATIONS.text.reveal.transition, delay: ANIMATION_DELAYS.lg }}
                  viewport={VIEWPORT_SETTINGS}
                >
                  Hey I'm Izzy.
                </motion.h3>

                {/* Main Description */}
                <motion.div 
                  className="max-w-[500px] text-[#0f0f10] text-[16px] sm:text-[18px] leading-[1.6] mb-8 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <p>
                    After years leading creative for VC-backed startups, I kept seeing the same thing: brilliant ideas buried under bloated messaging and brand bloat.
                  </p>
                  <p>
                    That's why I now work directly with founders, cutting through the noise, shaping their story, and helping them scale with substance.
                  </p>
                  <p>
                    I partner with femtech, healthtech, and mission-driven teams to build bold, heart-led brands that move people.
                  </p>
                  <p>
                    What would your brand unlock if it finally spoke with clarity, courage, and heart?
                  </p>
                </motion.div>

                {/* Learn More Button */}
                <motion.div 
                  className="flex justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Link to="/about" className="bg-[#e44782] text-white font-['Montserrat'] font-semibold text-base py-3 px-5 rounded-[0.84rem] border-2 border-transparent transition-all duration-300 ease-out hover:bg-white hover:text-[#e44782] hover:border-[#e44782] ">
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>



          {/* Branding System Visual */}
          <div className="w-full">
            {/* <BrandingSystemVisual /> Removed as requested */}
          </div>

          {/* Strategy Voice Visibility Section */}
          <motion.section 
            className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8" 
            style={{ marginTop: '160px', padding: '60px 0 120px 0' }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <TrueFocus 
                sentence="Strategy Voice Visibility"
                manualMode={true}
                blurAmount={5}
                borderColor="#a8e10c"
                animationDuration={2}
                pauseBetweenAnimations={1}
                fontFamily="'Montserrat', Helvetica, Arial, sans-serif"
                fontSize="4rem"
                currentIndex={trueFocusIndex}
              />
            </motion.div>
            <motion.p 
              className="max-w-3xl text-center text-[#0f0f10] mt-8 sm:mt-10 text-[16px] sm:text-[18px]" 
              style={{ fontFamily: "'Inter', Helvetica, Arial, sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              You don't need more noise. You need strategy that actually fits, a voice that actually sounds like you, and visibility that doesn't feel like screaming into the void. I help you shape all three, so your brand moves with meaning, not just motion.
            </motion.p>
            <motion.div 
              className="flex justify-center mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link to="/get-started" className="bg-[#e44782] text-white font-['Montserrat'] font-semibold text-base py-3 px-5 rounded-[0.84rem] border-2 border-transparent transition-all duration-300 ease-out hover:bg-white hover:text-[#e44782] hover:border-[#e44782] ">
                Book a Call
              </Link>
            </motion.div>
          </motion.section>

          {/* Services Section */}
          <div className="w-full max-w-[1200px] mx-auto mt-8 px-4">
            {/* Founder Brand Strategy */}
            <motion.div 
              className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-6 pb-[150px] pt-[50px]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="w-full lg:w-[600px] h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex-shrink-0 order-1"
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img
                  className="w-full h-full object-cover object-top rounded-lg"
                  alt="Founder brand strategy"
                  src="/Founder personal brand strategy image.png"
                />
              </motion.div>

              <motion.div 
                className="w-full lg:w-[480px] max-w-[480px] flex-shrink-0 order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-0 text-left">
                  {/* Services Tag */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <span className="px-4 py-2 bg-white border border-[#e44782] rounded-lg text-sm font-bold text-[#e44782] tracking-widest uppercase">
                      SERVICES
                    </span>
                  </motion.div>
                  <motion.h3 
                    className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] tracking-[0.5px] leading-[1.2] sm:leading-[1.3] lg:leading-[50px] mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    Founder Personal <br />
                    Brand Strategy
                  </motion.h3>
                  <motion.p 
                    className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[14px] sm:text-[15px] md:text-[15.9px] tracking-[0] leading-[1.5] sm:leading-[1.6] lg:leading-[25.2px] pb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    For founders who want to build authority, trust, and momentum, without dancing for the algorithm gods.
                  </motion.p>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  {founderBrandFeatures.map((feature, index) => (
                    <motion.div 
                      key={index + 1} 
                      className="border-t border-[#0000001a] pt-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + (index + 1) * 0.2 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-start gap-3 sm:gap-5">
                        <div 
                          className="w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] rounded-xl sm:rounded-2xl bg-[#F8F9FA] flex items-center justify-center flex-shrink-0"
                        >
                          <img
                            className="w-[24px] sm:w-[40px] h-[24px] sm:h-[40px]"
                            alt="Feature icon"
                            src={index === 0 ? "/check-list-marketing.svg?v=1" : index === 1 ? "/announcement-marketing.svg?v=1" : "/eye-marketing.svg?v=1"}
                            style={{ filter: 'brightness(0) saturate(100%) invert(60%) sepia(70%) saturate(600%) hue-rotate(60deg) brightness(85%) contrast(85%)' }}
                            onError={(e) => {
                              console.error('Icon failed to load:', e.currentTarget.src);
                              e.currentTarget.style.border = '2px solid red';
                            }}
                            onLoad={(e) => {
                              console.log('Icon loaded successfully:', e.currentTarget.src);
                            }}
                          />
                        </div>
                        <motion.p 
                          className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[13px] sm:text-[14px] md:text-[15.9px] tracking-[0] leading-[1.4] sm:leading-[1.5] lg:leading-[25.2px]"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 + (index + 1) * 0.2 }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          {feature}
                        </motion.p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Learn More Button */}
                  <motion.div 
                    className="border-t border-[#0000001a] pt-8 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex justify-start">
                      <motion.div>
                                              <Link to="/services/founder-brand-strategy" className="bg-[#e44782] text-white font-['Montserrat'] font-semibold text-base py-3 px-5 rounded-[0.84rem] border-2 border-transparent transition-all duration-300 ease-out hover:bg-white hover:text-[#e44782] hover:border-[#e44782] ">
                        Learn More
                      </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

          {/* Fractional Marketing */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-[50px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="w-full lg:w-[480px] max-w-[480px] flex-shrink-0 order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-0 text-left">
                {/* Services Tag */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <span className="px-4 py-2 bg-white border border-[#e44782] rounded-lg text-sm font-bold text-[#e44782] tracking-widest uppercase">
                    SERVICES
                  </span>
                </motion.div>
                <motion.h3 
                  className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] tracking-[0.5px] leading-[1.2] sm:leading-[1.3] lg:leading-[55px] mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Fractional Marketing<br />&amp; Brand Direction
                </motion.h3>
                <motion.p 
                  className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[14px] sm:text-[15px] md:text-[15.9px] tracking-[0] leading-[1.5] sm:leading-[1.6] lg:leading-[25.2px] pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  For startups ready to grow with clarity. I help you build a content system that performs, refine the messaging behind it, and turn brand thinking into execution that scales.
                </motion.p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                {fractionalMarketingFeatures.map((feature, index) => (
                  <motion.div 
                    key={index + 1} 
                    className="border-t border-[#0000001a] pt-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 + (index + 1) * 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex items-start gap-3 sm:gap-5">
                      <div 
                        className="w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] rounded-xl sm:rounded-2xl bg-[#F8F9FA] flex items-center justify-center flex-shrink-0"
                      >
                        <img
                          className="w-[24px] sm:w-[40px] h-[24px] sm:h-[40px]"
                          alt="Feature icon"
                          src={index === 0 ? "/check-list-marketing.svg?v=1" : index === 1 ? "/announcement-marketing.svg?v=1" : "/eye-marketing.svg?v=1"}
                          style={{ filter: 'brightness(0) saturate(100%) invert(60%) sepia(70%) saturate(600%) hue-rotate(60deg) brightness(85%) contrast(85%)' }}
                          onError={(e) => {
                            console.error('Icon failed to load:', e.currentTarget.src);
                            e.currentTarget.style.border = '2px solid red';
                          }}
                          onLoad={(e) => {
                            console.log('Icon loaded successfully:', e.currentTarget.src);
                          }}
                        />
                      </div>
                      <motion.p 
                        className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] tracking-[0] leading-[1.4] sm:leading-[1.5] lg:leading-[25.2px]"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 + (index + 1) * 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        {feature}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Learn More Button */}
                <motion.div 
                  className="border-t border-[#0000001a] pt-8 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex justify-start">
                    <motion.div>
                      <Link to="/services/fractional-marketing" className="bg-[#e44782] text-white font-['Montserrat'] font-semibold text-base py-3 px-5 rounded-[0.84rem] border-2 border-transparent transition-all duration-300 ease-out hover:bg-white hover:text-[#e44782] hover:border-[#e44782] ">
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-[600px] h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex-shrink-0 order-2"
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                className="w-full h-full object-cover object-top rounded-lg"
                alt="Fractional marketing"
                src="/Fractional marketing & brand direction image.png"
              />
            </motion.div>
          </motion.div>
        </div>



        {/* Image Arch Section */}
        <div className="w-full mt-16">
          <ImageArchSection />
        </div>

        {/* Cut Through The Fluff - Pictures in Letters */}
        <div className="w-full bg-[#F8F9FA] rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] py-12 sm:py-16 lg:py-20 mt-8 sm:mt-12 lg:mt-16 overflow-hidden relative">
          {/* Main marquee container */}
          <div className="relative z-10">
            <div className="flex items-center animate-scroll whitespace-nowrap">
              <div className="flex items-center space-x-6 sm:space-x-8 lg:space-x-12">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="flex items-center group relative">
                    <div
                      className="[font-family:'Montserrat',Helvetica] font-black text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] tracking-[1.5px] sm:tracking-[1.8px] lg:tracking-[2.0px] leading-[1.1] sm:leading-[1.1] lg:leading-[110px]"
                      style={{
                        color: "#a8e10c",
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Cut Through The Fluff
                    </div>
                    <div className="ml-4 sm:ml-6 lg:ml-8 w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-[#a8e10c] rounded-full opacity-60"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div style={{ paddingTop: '50px' }}>
          <PortfolioSection />
        </div>

        {/* Testimonials Section (Reviews) */}
        <TestimonialsSection />

      </div>
    </div>
    </>
  );
};