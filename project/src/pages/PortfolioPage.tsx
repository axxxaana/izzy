import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { TrustedByBanner } from '../components/TrustedByBanner';
import { Link } from 'react-router-dom';
import { ANIMATIONS, ANIMATION_DELAYS } from '../constants/animations';
import { TYPOGRAPHY } from '../constants/design-system';

// PortfolioPage-specific hero content
const PORTFOLIO_HERO_HEADLINE = 'The receipts';
const PORTFOLIO_HERO_SUBTITLE = '(I mean, results*)';

const PORTFOLIO_HERO_SUBHEADLINE =
  'From femtech to founder brands. This is what happens when strategy turns into results.';

// Counter Blocks Component
const CounterBlocks: React.FC = () => {
  const [counts, setCounts] = useState({ years: 0, startups: 0, brands: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Small delay to ensure the component is fully visible
          setTimeout(() => {
            animateCounters();
          }, 100);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    const element = document.getElementById('counter-blocks');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { years: 6, startups: 30, brands: 20 };
    const duration = 4000; // Increased from 2500ms to 4000ms for more visible counting
    const steps = 120; // Increased from 80 to 120 steps for smoother, more visible counting
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        years: Math.round(targets.years * easeOut),
        startups: Math.round(targets.startups * easeOut),
        brands: Math.round(targets.brands * easeOut)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);
  };

  // Reset animation when component unmounts or re-renders
  useEffect(() => {
    return () => {
      setHasAnimated(false);
      setCounts({ years: 0, startups: 0, brands: 0 });
    };
  }, []);

  return (
    <div id="counter-blocks" className="flex flex-col sm:flex-row gap-8 mt-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="flex-1 text-center"
      >
        <motion.div 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 font-['Montserrat']"
          style={{ color: '#a8e10c' }}
          animate={hasAnimated ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.3, delay: 1.0 }}
        >
          {counts.years}+
        </motion.div>
        <div className="text-sm md:text-lg text-[#374151] font-medium font-['Inter'] whitespace-nowrap">
          Years in Brand Strategy
        </div>
        <div className="text-xs md:text-sm text-[#6B7280] font-normal font-['Inter'] mt-1 max-w-[200px] mx-auto leading-tight">
          aka long enough to know what works, short enough not to be jaded.
        </div>
      </motion.div>

      {/* Vertical line separator */}
      <div className="hidden sm:block w-px bg-gray-300 mx-4"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex-1 text-center"
      >
        <motion.div 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 font-['Montserrat']"
          style={{ color: '#a8e10c' }}
          animate={hasAnimated ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.3, delay: 1.2 }}
        >
          {counts.startups}+
        </motion.div>
        <div className="text-sm md:text-lg text-[#374151] font-medium font-['Inter'] whitespace-nowrap">
          Early-Stage Startups Scaled
        </div>
        <div className="text-xs md:text-sm text-[#6B7280] font-normal font-['Inter'] mt-1 max-w-[200px] mx-auto leading-tight">
          sharpened, scaled and uncluttered.
        </div>
      </motion.div>

      {/* Vertical line separator */}
      <div className="hidden sm:block w-px bg-gray-300 mx-4"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="flex-1 text-center"
      >
        <motion.div 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 font-['Montserrat']"
          style={{ color: '#a8e10c' }}
          animate={hasAnimated ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.3, delay: 1.4 }}
        >
          {counts.brands}+
        </motion.div>
        <div className="text-sm md:text-lg text-[#374151] font-medium font-['Inter'] whitespace-nowrap">
          Founder-Led Brands Built
        </div>
        <div className="text-xs md:text-sm text-[#6B7280] font-normal font-['Inter'] mt-1 max-w-[200px] mx-auto leading-tight">
          turned from "kind of confusing" into "ohhh, now I get it."
        </div>
      </motion.div>
    </div>
  );
};

const PortfolioHero: React.FC = () => {

  return (
    <div className="w-full relative mb-0">
      <div className="w-full p-3 sm:p-4 lg:p-[15px]" style={{ height: '700px', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative h-full">
            {/* Static Background */}
            <div 
              className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
              style={{ background: '#FCEEF3' }}
            />
            {/* Hero Content */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-40 pb-32" style={{ paddingTop: 'calc(8rem + 80px)' }}>

              <motion.div
                className="max-w-lg mx-auto text-center mb-6"
                initial={ANIMATIONS.fadeIn.up.initial}
                animate={ANIMATIONS.fadeIn.up.animate}
                transition={{ ...ANIMATIONS.fadeIn.up.transition, delay: ANIMATION_DELAYS.lg }}
              >
                <h1 className={`${TYPOGRAPHY.headings.h1.classes}`} style={{ color: '#0f0f10', marginBottom: '0' }}>
                  {PORTFOLIO_HERO_HEADLINE}
                </h1>
                <div className="text-2xl" style={{ color: '#e44782', marginTop: '1rem' }}>
                  {PORTFOLIO_HERO_SUBTITLE}
                </div>
              </motion.div>

              <motion.p
                className={`${TYPOGRAPHY.body.large.classes} max-w-lg text-center text-[#374151] opacity-90`}
                initial={ANIMATIONS.text.reveal.initial}
                animate={ANIMATIONS.text.reveal.animate}
                transition={{ ...ANIMATIONS.text.reveal.transition, delay: ANIMATION_DELAYS.xl }}
              >
                {PORTFOLIO_HERO_SUBHEADLINE}
              </motion.p>

              {/* CTA Button (match services/founder-brand-strategy) */}
              <motion.button 
                onClick={(e: React.MouseEvent) => e.preventDefault()}
                className="mt-8 px-8 py-4 rounded-[0.84rem] bg-[#e44782] text-white text-xl font-semibold shadow-lg border-2 border-transparent hover:bg-white hover:text-[#e44782] hover:border-[#e44782] transition-all duration-200"
                style={{ fontFamily: 'Montserrat, Helvetica' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
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
  );
};

// Portfolio data
const portfolioItems = [
  {
    id: 2,
    title: 'Nexus Connected',
    subtitle: 'Team Collaboration Platform',
    description: 'Nexus is a femtech startup building an AI health coach for women. I led the full reposition, strategy, voice, and campaigns. The result: a clear brand, visible founder, and traction with investors.',
    tags: ['Brand Overhaul', 'Product Positioning', 'UX Strategy'],
    image: '/nexus connected team.jpg',
    color: '',
  },
  {
    id: 3,
    title: 'Wellnergy',
    subtitle: 'Health & Wellness Platform',
    description: 'Wellnergy is a wellness event turned high-visibility brand. I led messaging, ghostwrote founder content, and built influencer partnerships to drive traction and boost brand credibility.',
    tags: ['Health Tech', 'Holistic Design', 'Wellness Strategy'],
    image: '/wellnergy cover.png',
    color: '',
  },
  {
    id: 1,
    title: 'GoFounder',
    subtitle: 'Startup Accelerator Platform',
    description: 'GoFounder is a coaching platform for startup founders. I built the brand from the ground up with social strategy, thought leadership, and onboarding experiences that boosted visibility and community growth.',
    tags: ['Brand Strategy', 'Marketing Framework', 'Platform Design'],
    image: '/GoFounder Cover.png',
    color: '',
  },
];

const getPortfolioLink = (title: string) => {
  if (title === 'Nexus Connected') return '/portfolio/nexus-connected';
  if (title === 'Wellnergy') return '/portfolio/wellnergy';
  if (title === 'GoFounder') return '/portfolio/gofounder';
  return '#';
};

// Portfolio Card Component
const PortfolioCard: React.FC<{ item: typeof portfolioItems[0]; index: number }> = ({ item, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Link to={getPortfolioLink(item.title)} className="block group mt-8" tabIndex={0} role="link">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80, scale: 0.92, rotate: -6, filter: 'blur(8px)' }}
        animate={isInView ? {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: 'blur(0px)'
        } : {
          opacity: 0,
          y: 80,
          scale: 0.92,
          rotate: -6,
          filter: 'blur(8px)'
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 18,
          delay: index * 0.18,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className={`cursor-pointer`}
      >
        <div className={`relative rounded-[24px] overflow-hidden h-[500px] group shadow-lg hover:shadow-2xl transition-shadow duration-300 flex`} style={{ background: 'rgba(228, 71, 130, 0.2)' }}>
          {/* Content - Left Side */}
          <div className="relative z-10 flex-1 flex flex-col justify-between pt-20 px-8 pb-8 max-w-xl">
            <div>
              {/* Service badges for each card */}
              {(item.title === 'GoFounder' || item.title === 'Wellnergy') && (
                <span className="inline-block mb-6 px-6 py-2 rounded-[0.84rem] bg-transparent border border-pink-500 text-pink-600 text-lg font-bold shadow-sm uppercase" style={{ fontFamily: 'Inter, Helvetica' }}>
                  Multi-Service
                </span>
              )}
              {item.title === 'Nexus Connected' && (
                <span className="inline-block mb-6 px-6 py-2 rounded-[0.84rem] bg-transparent border border-pink-500 text-pink-600 text-lg font-bold shadow-sm uppercase" style={{ fontFamily: 'Inter, Helvetica' }}>
                  Marketing
                </span>
              )}
              {/* Subtitle badge removed */}

              <h2 className={`${TYPOGRAPHY.headings.h3.classes} text-[#e44782] mb-4 group-hover:text-pink-600 transition-colors duration-300`}>
                {item.title}
              </h2>

              <p className={`${TYPOGRAPHY.body.large.classes} text-[#374151] mb-6`}>
                {item.description}
              </p>
              <button
                className="inline-flex items-center px-0 py-4 rounded-[12px] bg-transparent text-[#e44782] text-2xl font-bold transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-200"
                type="button"
                tabIndex={-1}
                style={{ pointerEvents: 'none' }}
              >
                <span style={{ color: '#e44782' }}>Read More</span>
                <span className="ml-4 text-3xl font-bold" style={{ color: '#e44782' }}>&gt;</span>
              </button>
            </div>

            {/* Tags removed */}
          </div>

          {/* Image - Right Side */}
          <div className="flex-1 relative">
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Hover Arrow */}
          <motion.div 
            className="absolute top-6 right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center z-10"
            initial={{ opacity: 0, x: 8 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-6 h-6 text-pink-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export { portfolioItems, PortfolioCard };

export const PortfolioPage: React.FC = () => {
  return (
    <Layout 
      title="Portfolio & Case Studies | Izzy Prior"
      description="Explore successful brand strategies and marketing campaigns for femtech, healthtech startups. See real results from Izzy Prior's work."
    >
      <div className="w-full bg-white">
        {/* Hero Section */}
        <PortfolioHero />

        {/* Logo Scroller */}
        <TrustedByBanner />

        {/* Statistics Section */}
        <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <CounterBlocks />
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="w-full py-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`${TYPOGRAPHY.headings.h2.classes} text-gray-900 mb-4`}>
                Featured Projects
              </h2>
              <p className={`${TYPOGRAPHY.body.large.classes} text-[#374151] max-w-xl mx-auto`}>
                Real stories of founders and startups who stopped winging it and started scaling with clarity.
              </p>
            </motion.div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 gap-8 md:gap-12">
              {portfolioItems.map((item, index) => (
                <PortfolioCard key={item.id} item={item} index={index} />
              ))}
            </div>
            <div style={{ height: '100px' }}></div>
          </div>
        </section>

        {/* Footer */}
        <FooterSection />
      </div>
    </Layout>
  );
}; 