import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/layout/Navigation';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { CursorTrail } from '../components/CursorTrail';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const HERO_IMAGE = '/GoFounder Cover.png';
const HERO_HEADING = 'GoFounder';
const HERO_DESCRIPTION = 'Marketing, content creation, ghostwriting, and founder onboarding for a startup community platform. Developed and executed multi-channel marketing strategies, produced engaging content, and supported founders through tailored onboarding experiences to foster a thriving entrepreneurial network.';

const saasAccordionItem = "rounded-xl mb-2 transition-all duration-300 overflow-hidden bg-transparent data-[state=open]:bg-white data-[state=open]:shadow data-[state=open]:border-l-4 data-[state=open]:border-pink-500";
const saasAccordionTrigger = "flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-gray-900 cursor-pointer focus:outline-none transition-all duration-300";
const saasAccordionContent = "px-6 pb-6 pt-2 text-gray-700 text-base";
const whatIDidAccordionItem = "rounded-xl mb-2 transition-all duration-300 overflow-hidden bg-transparent data-[state=open]:bg-[rgba(228,71,130,0.2)] data-[state=open]:border-l-4 data-[state=open]:border-pink-500 data-[state=open]:shadow";

// Local portfolio items for dynamic case studies (excluding GoFounder)
const portfolioItems = [
  {
    id: 1,
    title: 'Nexus Connected',
    subtitle: 'Team Collaboration Platform',
    description: 'Strategic marketing leadership and comprehensive brand development for an innovative femtech platform. Led the creation of a unified brand voice, executed multi-channel campaigns, and drove engagement across digital and community channels to accelerate growth and industry impact.',
    tags: ['Brand Overhaul', 'Product Positioning', 'UX Strategy'],
    image: '/nexus connected team.jpg',
    color: '',
  },
  {
    id: 2,
    title: 'Wellnergy',
    subtitle: 'Health & Wellness Platform',
    description: 'Ghostwriting, branding, and influencer partnership outreach for a wellness community. Developed compelling brand messaging, crafted engaging content, and built strategic relationships with key influencers to amplify the platform’s reach and foster a vibrant, health-focused community.',
    tags: ['Health Tech', 'Holistic Design', 'Wellness Strategy'],
    image: '/wellnergy cover.png',
    color: '',
  },
];

const getPortfolioLink = (title: string) => {
  if (title === 'Nexus Connected') return '/portfolio/nexus-connected';
  if (title === 'Wellnergy') return '/portfolio/wellnergy';
  return '#';
};

const PortfolioCard: React.FC<{ item: typeof portfolioItems[0]; index: number }> = ({ item, index }) => {
  return (
    <div className="block group mt-8 cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.92, rotate: -6, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 18,
          delay: index * 0.18,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
        className="relative rounded-[24px] overflow-hidden h-[500px] group shadow-lg hover:shadow-2xl transition-shadow duration-300 flex"
        style={{ background: 'rgba(228, 71, 130, 0.2)' }}
      >
        {/* Content - Left Side */}
        <div className="relative z-10 flex-1 flex flex-col justify-between pt-20 px-8 pb-8 max-w-xl">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e44782] mb-4 group-hover:text-pink-600 transition-colors duration-300 font-['Montserrat']">
              {item.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Inter']">
              {item.description}
            </p>
            <a href={getPortfolioLink(item.title)} className="inline-flex items-center px-0 py-4 rounded-[12px] bg-transparent text-[#e44782] text-2xl font-bold transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-200">
              <span style={{ color: '#e44782' }}>Read More</span>
              <span className="ml-4 text-3xl font-bold" style={{ color: '#e44782' }}>&gt;</span>
            </a>
          </div>
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
      </motion.div>
    </div>
  );
};

const PortfolioGoFounderPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <CursorTrail />
      <Navigation />
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full flex flex-col md:flex-row items-center justify-center pt-24 pb-12 px-4 md:px-12 max-w-7xl mx-auto gap-12 mt-[150px]"
      >
        {/* Image Left */}
        <motion.div
          className="flex-1 w-full max-w-xl rounded-2xl overflow-hidden shadow-lg relative"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Industry badge absolutely positioned over image */}
          <span
            className="px-6 py-2"
            style={{
              borderRadius: '0.84rem',
              background: '#fff4fa',
              color: '#e44782',
              fontSize: '1rem',
              fontWeight: 500,
              padding: '0.5rem 1.5rem',
              border: '1px solid #fbcfe8',
              fontFamily: 'Inter, Helvetica',
              position: 'absolute',
              top: '24px',
              right: '24px',
              zIndex: 10,
              boxShadow: '0 2px 12px 0 rgba(228,71,130,0.08)'
            }}
          >
            Industry: Startup Accelerator
          </span>
          <img
            src={HERO_IMAGE}
            alt={HERO_HEADING}
            className="w-full h-[420px] object-cover object-center rounded-2xl"
            loading="eager"
          />
        </motion.div>
        {/* Text Right */}
        <motion.div
          className="flex-1 w-full max-w-2xl flex flex-col items-start"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h1 className="text-[40px] md:text-[56px] font-extrabold mb-6 leading-[1.1] font-['Montserrat'] text-gray-900">
            {HERO_HEADING}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-['Inter']">
            {HERO_DESCRIPTION}
          </p>
        </motion.div>
      </motion.section>
      {/* Case Study Section - Example content, update as needed for GoFounder */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full px-0 pb-24 pt-[50px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full mt-[50px]"
        >
          <div className="w-full rounded-[50px]" style={{ background: 'rgba(228,71,130,0.2)' }}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 p-10 py-20">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[40px] font-bold text-black mb-4">The Challenge</h2>
                <p className="text-lg text-gray-700 mb-4">
                  [Replace with GoFounder challenge intro and accordion content]
                </p>
                <Accordion type="single" collapsible className="w-full bg-transparent mt-[10px]" defaultValue="challenge1">
                  <AccordionItem value="challenge1" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      [Challenge 1 Title]
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      [Challenge 1 content]
                    </AccordionContent>
                  </AccordionItem>
                  {/* Add more AccordionItems for GoFounder as needed */}
                </Accordion>
              </motion.div>
              <motion.div
                className="flex-1 flex justify-center items-center"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src={HERO_IMAGE} alt="GoFounder Challenge" className="rounded-2xl w-full max-w-md object-cover" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* What I Did Section - Example content, update as needed for GoFounder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl w-full mx-auto flex flex-col md:flex-row-reverse items-center gap-12 mb-16 p-8 md:p-12 mt-[75px]"
        >
          <div className="flex-1">
            <h2 className="text-[40px] font-bold text-black mb-4">What I Did</h2>
            <p className="text-lg text-gray-700 mb-4">[Replace with GoFounder what I did intro]</p>
            <div style={{ marginTop: '40px' }}>
              <Accordion type="single" collapsible className="w-full bg-transparent mt-0" defaultValue="step1">
                <AccordionItem value="step1" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    [Step 1 Title]
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    [Step 1 content]
                  </AccordionContent>
                </AccordionItem>
                {/* Add more AccordionItems for GoFounder as needed */}
              </Accordion>
            </div>
          </div>
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={HERO_IMAGE} alt="GoFounder What I Did" className="rounded-2xl w-full max-w-md object-cover" />
          </motion.div>
        </motion.div>
        {/* Results & Impact Section - Example content, update as needed for GoFounder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full mt-[50px]"
        >
          <div className="w-full rounded-[50px]" style={{ background: 'rgba(228,71,130,0.2)' }}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 p-10 py-20">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[40px] font-bold text-black mb-4">Results & Impact</h2>
                <p className="text-lg text-gray-700 mb-4">[Replace with GoFounder results intro]</p>
                <Accordion type="single" collapsible className="w-full bg-transparent mt-[10px]" defaultValue="result1">
                  <AccordionItem value="result1" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      [Result 1 Title]
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      [Result 1 content]
                    </AccordionContent>
                  </AccordionItem>
                  {/* Add more AccordionItems for GoFounder as needed */}
                </Accordion>
              </motion.div>
              <motion.div
                className="flex-1 flex justify-center items-center"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src={HERO_IMAGE} alt="GoFounder Results" className="rounded-2xl w-full max-w-md object-cover" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      {/* Dynamic Case Studies Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Montserrat']">
              More Portfolio Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Inter']">
              Explore more projects that showcase strategy, storytelling, and results
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>
          <div style={{ height: '100px' }}></div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default PortfolioGoFounderPage; 