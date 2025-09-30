import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '../components/layout/Navigation';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { CursorTrail } from '../components/CursorTrail';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { TYPOGRAPHY } from '../constants/design-system';

const HERO_IMAGE = '/GoFounder Cover.png';
const HERO_HEADING = 'GoFounder';
const HERO_DESCRIPTION = 'GoFounder is a B2B COACHING service helping startup founders stay accountable, focused, and consistently performing at a high level. Despite a powerful value proposition and strong client retention, their brand didn\'t reflect the quality of their offer. I stepped in to help unify their messaging, build a scalable content engine, and elevate the founders\' visibility to drive long-term authority and growth.';

const saasAccordionItem = "rounded-xl mb-2 transition-all duration-300 overflow-hidden bg-transparent data-[state=open]:bg-white data-[state=open]:shadow data-[state=open]:border-l-4 data-[state=open]:border-pink-500";
const saasAccordionTrigger = "flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-gray-900 cursor-pointer focus:outline-none transition-all duration-300";
const saasAccordionContent = "px-6 pb-6 pt-2 text-[#374151] text-base";
const whatIDidAccordionItem = "rounded-xl mb-2 transition-all duration-300 overflow-hidden bg-transparent data-[state=open]:bg-[rgba(228,71,130,0.2)] data-[state=open]:border-l-4 data-[state=open]:border-pink-500 data-[state=open]:shadow";

// Local portfolio items for dynamic case studies (excluding GoFounder)
const portfolioItems = [
  {
    id: 1,
    title: 'Nexus Connected',
    subtitle: 'Team Collaboration Platform',
    description: 'Nexus is a femtech startup building an AI health coach for women. I led the full reposition, strategy, voice, and campaigns. The result: a clear brand, visible founder, and traction with investors.',
    tags: ['Brand Overhaul', 'Product Positioning', 'UX Strategy'],
    image: '/nexus connected team.jpg',
    color: '',
  },
  {
    id: 2,
    title: 'Wellnergy',
    subtitle: 'Health & Wellness Platform',
    description: 'Wellnergy is a wellness event turned high-visibility brand. I led messaging, ghostwrote founder content, and built influencer partnerships to drive traction and boost brand credibility.',
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
    <Link to={getPortfolioLink(item.title)} className="block group mt-8 cursor-pointer">
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
        <div className="relative z-10 flex-1 flex flex-col justify-center py-8 px-8 max-w-xl">
          <div>
            <h2 className={`${TYPOGRAPHY.headings.h3.classes} text-[#e44782] mb-4 group-hover:text-pink-600 transition-colors duration-300`}>
              {item.title}
            </h2>
            <p className={`${TYPOGRAPHY.body.large.classes} text-[#374151] mb-6`}>
              {item.description}
            </p>
            <div className="inline-flex items-center px-0 py-4 rounded-[12px] bg-transparent text-[#e44782] text-2xl font-bold transition-transform duration-200 group-hover:scale-105">
              <span style={{ color: '#e44782' }}>Read More</span>
              <span className="ml-4 text-3xl font-bold" style={{ color: '#e44782' }}>&gt;</span>
            </div>
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
    </Link>
  );
};

const PortfolioGoFounderPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <CursorTrail />
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <div className="relative w-full overflow-hidden bg-white">
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full flex flex-col lg:flex-row items-center justify-center pt-[180px] pb-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto gap-16 min-h-screen"
        >
          {/* Image Left */}
          <motion.div
            className="flex-1 w-full max-w-2xl order-1 lg:order-1"
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl p-3" style={{ backgroundColor: 'rgba(228, 71, 130, 0.2)' }}>
                {/* Main Image */}
                <img
                  src={HERO_IMAGE}
                  alt={HERO_HEADING}
                  className="w-full h-[500px] md:h-[600px] object-cover object-center rounded-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Right */}
          <motion.div
            className="flex-1 w-full max-w-2xl flex flex-col items-start order-2 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            {/* Industry Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-pink-200 shadow-lg backdrop-blur-sm">
                <span className="text-pink-700 font-medium text-sm tracking-wide">
                  B2B COACHING
                </span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className={`${TYPOGRAPHY.headings.h1.classes} mb-6 text-gray-900`}
            >
              <span className="bg-gradient-to-r from-gray-900 via-pink-800 to-pink-600 bg-clip-text text-transparent">
                {HERO_HEADING}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <span className="text-2xl md:text-3xl font-bold text-pink-500 tracking-wide">
                Case Study
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
              className={`${TYPOGRAPHY.body.large.classes} text-[#374151] max-w-xl`}
            >
              {HERO_DESCRIPTION}
            </motion.p>
          </motion.div>
        </motion.section>
      </div>
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
                <h2 className={`${TYPOGRAPHY.headings.h3.classes} text-black mb-4`}>The Challenge</h2>
                <p className="text-lg text-[#374151] mb-4">
                  GoFounder had a compelling product, but its brand wasn't telling the story. The digital presence lacked polish and consistency, making it difficult to leverage success stories, build trust at scale, or position the business for growth. Brand channels were fragmented, and founder-led content wasn't being used to its full advantage.
                </p>
                <Accordion type="single" collapsible className="w-full bg-transparent mt-[10px]" defaultValue="challenge1">
                  <AccordionItem value="challenge1" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Disconnected Brand Touchpoints
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Onboarding, social channels, and internal communications all felt misaligned — diluting the customer experience and making it harder to communicate value clearly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge2" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Low Founder Visibility
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      The founder and head coach had a strong message, but weren't showing up consistently. This made it harder to build authority or turn audience into clients.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge3" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Unleveraged Market Positioning
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      There was a gap between the results they were getting for clients and how they showed up publicly. That disconnect limited awareness and slowed inbound growth.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge4" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Missing Content Strategy
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Without a clear content engine, marketing efforts were reactive. Nothing was compounding — and founder efforts didn't translate to business results.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
              <motion.div
                className="flex-1 flex justify-center items-center"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src="/gofounder-1.png" alt="GoFounder Challenge" className="rounded-2xl w-full max-w-2xl object-cover" />
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
            <h2 className={`${TYPOGRAPHY.headings.h3.classes} text-black mb-4`}>What I Did</h2>
            <p className="text-lg text-[#374151] mb-4">My focus was to unify GoFounder's message, streamline content across platforms, and help the founder show up as a trusted voice in the coaching space. From brand assets to thought leadership to community design, everything was aligned around clarity and consistency.</p>
            <div style={{ marginTop: '40px' }}>
              <Accordion type="single" collapsible className="w-full bg-transparent mt-0" defaultValue="step1">
                <AccordionItem value="step1" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Social Strategy & Execution
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    Built and led a full-scale content strategy across founder and brand channels — turning fragmented posts into a repeatable, scalable system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step2" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Branded Visual Assets
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    Designed clean, aligned materials for onboarding flows, live events, and podcast visuals to reinforce consistency across touchpoints.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step3" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Community & Thought Leadership
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    Managed an engaged founder community on Heartbeat and ghostwrote content to amplify the founder's voice across LinkedIn and email.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step4" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Content Engine Build-Out
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    Created a long-term strategy for authority building and lead gen — including templates, systems, and planning tools to keep momentum high.
                  </AccordionContent>
                </AccordionItem>
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
            <img src="/gofounder-2.png" alt="GoFounder What I Did" className="rounded-2xl w-full max-w-2xl object-cover" />
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
                <h2 className={`${TYPOGRAPHY.headings.h3.classes} text-black mb-4`}>Results & Impact</h2>
                <p className="text-lg text-[#374151] mb-4">The results weren't just visual — they were tangible. From thousands of new followers to consistent inbound leads and strong client retention, every system we built helped the brand grow louder, sharper, and more scalable.</p>
                <Accordion type="single" collapsible className="w-full bg-transparent mt-[10px]" defaultValue="result1">
                  <AccordionItem value="result1" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Stronger Brand Identity
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Aligned visuals and voice across every channel — making GoFounder instantly recognizable to its target market.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result2" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Expanded Audience Reach
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Grew combined founder audience to 30,000+ LinkedIn followers and significantly improved content visibility and performance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result3" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Scalable Content Ops
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Created backend systems that removed friction, saved time, and kept messaging consistent — even during growth sprints.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result4" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Client Impact at Scale
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Supported over 100 startup founders with a 6-month average retention — solidifying GoFounder's positioning as a go-to in B2B COACHING.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
              <motion.div
                className="flex-1 flex justify-center items-center"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src="/gofounder-3.png" alt="GoFounder Results" className="rounded-2xl w-full max-w-2xl object-cover" />
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
            <h2 className={`${TYPOGRAPHY.headings.h2.classes} text-gray-900 mb-4`}>
              More Portfolio Case Studies
            </h2>
            <p className={`${TYPOGRAPHY.body.large.classes} text-[#374151] max-w-2xl mx-auto`}>
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