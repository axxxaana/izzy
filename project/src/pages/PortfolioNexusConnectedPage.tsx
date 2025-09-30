import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '../components/layout/Navigation';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { CursorTrail } from '../components/CursorTrail';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const HERO_IMAGE = '/nexus connected team.jpg';
const HERO_HEADING = 'Nexus Connected';
const HERO_SUBHEADING = 'Marketing';
const HERO_DESCRIPTION = 'Nexus Connected is an AI-powered women\'s health app built to help users take charge of their wellbeing. When I stepped in, the brand was scattered with no voice, no strategy, no presence online. The community was thriving in real life but missing momentum where it mattered. I rebuilt the brand from the inside out and set them up for scale.';

// Accordion SaaS style utility
const saasAccordionItem = "rounded-xl mb-2 transition-all duration-300 overflow-hidden bg-transparent data-[state=open]:bg-white data-[state=open]:shadow data-[state=open]:border-l-4 data-[state=open]:border-pink-500";
const saasAccordionTrigger = "flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-gray-900 cursor-pointer focus:outline-none transition-all duration-300";
const saasAccordionContent = "px-6 pb-6 pt-2 text-gray-700 text-base";

// Add a new style for What I Did accordion items
const whatIDidAccordionItem = "rounded-xl mb-2 transition-all duration-300 overflow-hidden bg-transparent data-[state=open]:bg-[rgba(228,71,130,0.2)] data-[state=open]:border-l-4 data-[state=open]:border-pink-500 data-[state=open]:shadow";

// Local portfolio items for dynamic case studies (excluding Nexus Connected)
const portfolioItems = [
  {
    id: 2,
    title: 'Wellnergy',
    subtitle: 'HEALTH & WELLNESS Platform',
    description: 'Wellnergy is a wellness event turned high-visibility brand. I led messaging, ghostwrote founder content, and built influencer partnerships to drive traction and boost brand credibility.',
    tags: ['Health Tech', 'Holistic Design', 'Wellness Strategy'],
    image: '/wellnergy cover.png',
    color: '',
  },
  {
    id: 3,
    title: 'GoFounder',
    subtitle: 'Startup Accelerator Platform',
    description: 'GoFounder is a coaching platform for startup founders. I built the brand from the ground up with social strategy, thought leadership, and onboarding experiences that boosted visibility and community growth.',
    tags: ['Brand Strategy', 'Marketing Framework', 'Platform Design'],
    image: '/GoFounder Cover.png',
    color: '',
  },
];

const getPortfolioLink = (title: string) => {
  if (title === 'Wellnergy') return '/portfolio/wellnergy';
  if (title === 'GoFounder') return '/portfolio/gofounder';
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
            {/* Service badges for each card */}
            {item.title === 'Wellnergy' && (
              <span className="inline-block mb-6 px-6 py-2 rounded-md bg-transparent border border-pink-500 text-pink-600 text-lg font-bold shadow-sm uppercase" style={{ fontFamily: 'Inter, Helvetica' }}>
                Health & Wellness
              </span>
            )}
            {item.title === 'GoFounder' && (
              <span className="px-4 py-2 bg-white border border-[#e44782] rounded-lg text-sm font-bold text-[#e44782] tracking-widest uppercase">
                B2B COACHING
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-[#e44782] mb-4 group-hover:text-pink-600 transition-colors duration-300 font-['Montserrat']">
              {item.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Inter']">
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

const PortfolioNexusConnectedPage: React.FC = () => {
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
              <span className="inline-flex items-center px-6 py-3 rounded-md bg-transparent border border-pink-500 shadow-lg">
                <span className="text-pink-600 font-bold text-sm tracking-wide uppercase">
                  FEMTECH
                </span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[0.9] font-['Montserrat'] text-gray-900 tracking-tight"
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
              className="mb-6"
            >
              <span className="text-xl md:text-2xl font-bold text-pink-500 tracking-wide">
                Case Study
              </span>
            </motion.div>

                         {/* Description */}
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
               className="text-lg md:text-xl text-gray-700 leading-relaxed font-['Inter'] max-w-xl"
             >
               {HERO_DESCRIPTION}
             </motion.p>
          </motion.div>

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
        </motion.section>
      </div>

      {/* Case Study Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full px-0 pb-24 pt-[50px]"
      >
        {/* The Challenge */}
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
                  When Nexus came to me, they had a game-changing product: an AI-powered women's health platform. But their brand wasn't pulling its weight. They had real traction offline. Online, they were nearly invisible. Here's what wasn't working:
                </p>
                <Accordion type="single" collapsible className="w-full bg-transparent mt-[10px]" defaultValue="challenge1">
                  <AccordionItem value="challenge1" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Fragmented Identity
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      The pitch deck, social channels, and product UI were all telling different stories. It felt like three separate brands competing for attention.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge2" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      No LinkedIn Strategy
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Their LinkedIn presence was nearly non-existent. No founder voice. No thought leadership. No trust.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge3" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Untapped Community Power
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Their in-person community was thriving, but that momentum wasn't being translated into digital growth.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge4" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Lack of Strategy and Positioning
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      No content plan. No clear voice. No strong positioning. Which meant they struggled to attract funding, partners, and press.
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
                <img src="/nexus-2.png" alt="Nexus Challenge" className="rounded-2xl w-full max-w-2xl object-cover" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* What I Did */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl w-full mx-auto flex flex-col md:flex-row-reverse items-center gap-12 mb-16 p-8 md:p-12 mt-[75px]"
        >
          <div className="flex-1">
            <h2 className="text-[40px] font-bold text-black mb-4">What I Did</h2>
            <p className="text-lg text-gray-700 mb-4">I stepped in as a fractional CMO and brand strategist to bring clarity, consistency, and visibility to the Nexus brand. My focus was on building the foundation while driving execution across the channels that mattered most.</p>
            <div style={{ marginTop: '40px' }}>
              <Accordion type="single" collapsible className="w-full bg-transparent mt-0" defaultValue="step1">
                <AccordionItem value="step1" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Brand Audit and Repositioning
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    I started with a full audit of every brand touchpoint. From pitch decks to social posts to the product UI, I mapped what was working and what wasn't. From there, I built a new positioning framework that clarified Nexus's place in the femtech space and unified the brand across platforms. This meant aligning visuals, messaging, and tone so that every touchpoint told the same story.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step2" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Messaging and Narrative
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    Once the strategy was locked, I crafted value props for each core audience with investors, users, and collaborators and defined a tone that was equal parts credible and human. The narrative got sharper and more compelling, showing up in decks, emails, speaking notes, and partner conversations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step3" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Social and Founder Visibility
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    To build momentum, I developed a LinkedIn-led strategy that focused on thought leadership and brand trust. I ghostwrote posts for the founders that began to land with real engagement, helping position them as rising voices in femtech. A content calendar kept things consistent and intentional.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step4" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Investor Readiness and GTM
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    Behind the scenes, I built a fundraising narrative and pre-seed pitch deck that helped bring in £300k. I also laid out a go-to-market roadmap for the next 12 months giving the team a clear path to activate their community, build product traction, and grow with focus.
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
            <img src="/nexus-3.png" alt="Nexus What I Did" className="rounded-2xl w-full max-w-2xl object-cover" />
          </motion.div>
        </motion.div>
        {/* Results & Impact */}
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
                <p className="text-lg text-gray-700 mb-4">
                  This wasn't just a rebrand. It was a reset. One that gave the team language they could own, clarity they could scale with, and visibility that moved the needle across community, capital, and credibility.
                </p>
                <Accordion type="single" collapsible className="w-full bg-transparent mt-[10px]" defaultValue="result1">
                  <AccordionItem value="result1" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Brand and Messaging Clarity
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      We built a brand that finally reflected the product's depth and ambition. From pitch decks to product UX, everything told the same story. That consistency became a foundation for growth and made every conversation from users to investors, clearer and stronger.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result2" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Audience Engagement and Community Growth
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      We didn't just grow the audience, we activated it. Events in London sold out. A thriving offline community became a powerful online one. The content system created momentum that didn't rely on chasing algorithms it fed real interest and trust.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result3" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Funding and Investor Confidence
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Messaging shifted investor conversations from confused to convinced. The new brand story set the stage for a successful crowdfunding campaign and pre-seed traction. With clearer materials and a stronger narrative, the team had what they needed to raise.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result4" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Visibility and Strategic Partnerships
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      The brand finally showed up like it meant it. Founders gained visibility on panels and in digital spaces. That visibility unlocked partnerships with other femtech brands and institutions putting Nexus in rooms that move the category forward.
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
                <img src="/nexus-4.png" alt="Nexus Results" className="rounded-2xl w-full max-w-2xl object-cover" />
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

export default PortfolioNexusConnectedPage; 