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
import { TYPOGRAPHY } from "../../../../constants/design-system";
import "./MainContentSection.css";

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
    "<strong>Foundation, not fluff.</strong> A brand rooted in your story, values and mission - so everything you say has meaning.",
    "<strong>Words that don't, erm, suck.</strong> We're anti-AI sludge around here. Let's find the words that sound like you on your best day and make people give a damn.",
    "<strong>Show up where it matters.</strong> We'll map the right channels and rhythm to amplify your voice (no tap-dancing for the algorithm gods required).",
  ];

  const fractionalMarketingFeatures = [
    "<strong>Cut the waste.</strong> I pinpoint what's working (and bin what isn't) so your strategy stops leaking money and starts making it.",
    "<strong>Content systems that you'll actually use.</strong> I'm all about clear messaging, repeatable processes and campaigns that get people talking after launch day.",
    "<strong>Strategy that ships.</strong> Translating brand strategy into action so your team knows what to do, why it matters and how it drives growth.",
  ];




  return (
    <>
      <div className="flex flex-col items-center w-full relative">
        {/* Hero Section */}
        <div className="w-full relative mb-0 p-0 sm:p-4 lg:p-[15px]">
          <div className="w-full h-[800px] xl:h-screen 2xl:h-screen relative rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden" style={{ backgroundColor: '#FCEEF3' }}>
            <div className="relative w-full h-full mx-auto">
              <div className="hidden lg:block absolute top-0 left-0 z-10">
                <Navigation />
              </div>
              
              {/* H1 - Properly Centered */}
              <h1 
                className="absolute top-1/2 left-0 right-0 font-['Montserrat'] font-black text-[10rem] sm:text-[14rem] lg:text-[18rem] z-0 flex flex-col items-center justify-center"
                style={{ 
                  color: '#E75B8F',
                  textShadow: '0 0 20px rgba(231, 91, 143, 0.3)',
                  filter: 'blur(0.5px)',
                  transform: 'translateY(-50%) translateX(25px) translateY(-30px)',
                  letterSpacing: '0.1em',
                  lineHeight: '0.9'
                }}
              >
                <div>Izzy</div>
                <div style={{ letterSpacing: '0.2em' }}>Prior</div>
              </h1>
              {/* Tagline Container - Full Width */}
              <div className="absolute z-20 bottom-16 left-0 right-0 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end w-full mx-auto" style={{ maxWidth: '891px' }}>
                  {/* Tagline Text - Left */}
                  <motion.div 
                    className="flex-shrink-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
                  >
                    <p className="text-black text-base sm:text-lg lg:text-xl font-semibold leading-none font-['Montserrat'] text-center" style={{ lineHeight: '1.25' }}>
                      Build a brand that<br />
                      connects and<br />
                      converts...
                    </p>
                  </motion.div>

                  {/* Tagline Text - Right */}
                  <motion.div 
                    className="flex-shrink-0"
                    style={{ marginLeft: '-4px' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 1.4 }}
                  >
                    <p className="text-black text-base sm:text-lg lg:text-xl font-semibold leading-none font-['Montserrat'] text-center" style={{ lineHeight: '1.25' }}>
                      ...without losing<br />
                      your authentic<br />
                      voice.
                    </p>
                  </motion.div>
                </div>
              </div>

              <div 
                className="w-full h-full flex items-end justify-center relative z-10"
                style={{ marginLeft: '25px' }}
              >
                <img
                  src="/Izzy-home-finals.png"
                  alt="Izzy Prior"
                  className="w-auto h-full object-contain object-bottom rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] image-1440-responsive"
                />
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="w-full bg-white pt-0 pb-8 mb-24">
            <TrustedByBanner />
          </div>

          {/* I'm Izzy Section */}
          <div 
            ref={elementRef}
            className={`w-full max-w-[1200px] h-auto min-h-[500px] mt-8 sm:mt-12 lg:mt-40 pt-6 mx-auto relative flex items-end transition-all duration-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-[25px] bg-[#F8F9FA] shadow-lg ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-12 scale-95 blur-sm'
            }`}
          >
            {/* Two Column Layout: Image on Left, Text on Right */}
            <div className={`w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6 transition-all duration-1000 ease-out px-8 sm:px-12 lg:px-16 xl:px-20 ${
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
                  className={`${TYPOGRAPHY.headings.h3.classes} text-black mb-6`}
                  initial={ANIMATIONS.text.reveal.initial}
                  whileInView={ANIMATIONS.text.reveal.animate}
                  transition={{ ...ANIMATIONS.text.reveal.transition, delay: ANIMATION_DELAYS.lg }}
                  viewport={VIEWPORT_SETTINGS}
                >
                  Hey, I'm Izzy.
                </motion.h3>

                {/* Main Description */}
                <motion.div 
                  className={`max-w-[500px] text-[#374151] mb-8 space-y-4`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <p className="text-sm lg:text-base">
                    After years leading creative and marketing inside fast-moving startups, I kept seeing the same thing: brilliant ideas and incredible products buried under jargon-heavy messaging, bloated brand decks and marketing that made everything feel harder than it had to be.
                  </p>
                  <p className="text-sm lg:text-base">
                    So I started cutting back the filler, stripping things down to the parts that actually matter.
                  </p>
                  <p className="text-sm lg:text-base">
                    Now, I partner with founders and brands in femtech, healthtech and mission-driven spaces - helping them to bring their big ideas into the light and make marketing feel less of a headache.
                  </p>
                  <p className="text-sm lg:text-base">
                    I'm a fractional marketing and brand strategist. In plain English: I get your strategy, voice and visibility in sync so your brand doesn't just look good on paper - it connects. So good that your audience doesn't just notice you, they choose you.
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
              className={`max-w-3xl text-center text-[#374151] mt-8 sm:mt-10 ${TYPOGRAPHY.body.large.classes}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Most founders obsess over shiny top-of-funnel bits, and ignore the rest. That's why growth flatlines.
              But branding only works when all three pieces click together. Miss one and everything wobbles. Nail all three and your brand is bulletproof.
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
                    className={`${TYPOGRAPHY.headings.h3.classes} text-black mb-2`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    Founder Personal <br />
                    Brand Strategy
                  </motion.h3>
                  <motion.p 
                    className="text-sm lg:text-base text-[#374151] pb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    Most founders post for the algorithm. I'll help you build authority and trust without the circus tricks.
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
                          className="text-sm lg:text-base text-[#374151]"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 + (index + 1) * 0.2 }}
                          viewport={{ once: true, margin: "-100px" }}
                          dangerouslySetInnerHTML={{ __html: feature }}
                        />
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
                  className={`${TYPOGRAPHY.headings.h3.classes} text-black mb-2`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Fractional Marketing<br />&amp; Brand Direction
                </motion.h3>
                <motion.p 
                  className={`${TYPOGRAPHY.body.small.classes} text-[#374151] pb-6`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  For brands ready to grow with focus (and without pouring budget into things that don't work).
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
                        className={`${TYPOGRAPHY.body.small.classes} text-[#374151]`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 + (index + 1) * 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        dangerouslySetInnerHTML={{ __html: feature }}
                      />
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
                        color: "#ec407a",
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Cut Through The Fluff
                    </div>
                    <div className="ml-4 sm:ml-6 lg:ml-8 w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-[#ec407a] rounded-full opacity-60"></div>
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