import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '../components/layout/Navigation';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { CursorTrail } from '../components/CursorTrail';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const HERO_IMAGE = '/wellnergy cover.png';
const HERO_HEADING = 'Wellnergy';
const HERO_DESCRIPTION = 'Wellnergy is more than a wellness festival, it\'s a movement. But the brand wasn\'t showing up that way online. The in-person energy was real, but the digital presence didn\'t match. I partnered with the founder to close that gap, sharpening the brand voice, forging high-impact partnerships, and building the founder\'s visibility. Together, we turned a weekend event into a platform with year-round presence and pull.';

const saasAccordionItem = "rounded-xl mb-2 transition-all duration-300 overflow-hidden bg-transparent data-[state=open]:bg-white data-[state=open]:shadow data-[state=open]:border-l-4 data-[state=open]:border-pink-500";
const saasAccordionTrigger = "flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-gray-900 cursor-pointer focus:outline-none transition-all duration-300";
const saasAccordionContent = "px-6 pb-6 pt-2 text-gray-700 text-base";
const whatIDidAccordionItem = "rounded-xl mb-2 transition-all duration-300 overflow-hidden bg-transparent data-[state=open]:bg-[rgba(228,71,130,0.2)] data-[state=open]:border-l-4 data-[state=open]:border-pink-500 data-[state=open]:shadow";

// Local portfolio items for dynamic case studies (excluding Wellnergy)
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
            {item.title === 'Nexus Connected' && (
              <span className="inline-block mb-6 px-6 py-2 rounded-md bg-transparent border border-pink-500 text-pink-600 text-lg font-bold shadow-sm uppercase" style={{ fontFamily: 'Inter, Helvetica' }}>
                FEMTECH
              </span>
            )}
            {item.title === 'GoFounder' && (
              <span className="inline-block mb-6 px-6 py-2 rounded-md bg-transparent border border-pink-500 text-pink-600 text-lg font-bold shadow-sm uppercase" style={{ fontFamily: 'Inter, Helvetica' }}>
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

const PortfolioWellnergyPage: React.FC = () => {
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
              <span className="inline-flex items-center px-6 py-3 rounded-md bg-transparent border border-pink-500 shadow-lg">
                <span className="text-pink-600 font-bold text-sm tracking-wide uppercase">
                  Health & Wellness
                </span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] font-['Montserrat'] text-gray-900 tracking-tight"
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
              className="text-lg md:text-xl text-gray-700 leading-relaxed font-['Inter'] max-w-xl"
            >
              {HERO_DESCRIPTION}
            </motion.p>
          </motion.div>
        </motion.section>
      </div>
      {/* Case Study Section - Example content, update as needed for Wellnergy */}
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
                  Wellnergy had momentum, but not alignment. The energy was real on the ground, but the digital brand was scattered. They were missing structure, strategy, and visibility where it mattered most.
                </p>
                <Accordion type="single" collapsible className="w-full bg-transparent mt-[10px]" defaultValue="challenge1">
                  <AccordionItem value="challenge1" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Weak digital presence
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Despite selling out its wellness festival, Wellnergy had little to no online presence. The story wasn't landing, the narrative wasn't clear, and the brand wasn't showing up where it needed to.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge2" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      No content strategy to drive engagement
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      There was no system. Messaging was inconsistent, content was reactive, and nothing connected the dots between events, audiences, or brand goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge3" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      The founder's voice was underutilized
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      The founder had credibility, but wasn't positioned as a trusted voice in wellness. That meant missed chances for thought leadership, engagement, and long-term brand equity.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge4" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Partnership potential left untapped
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Big wellness brands and influencers were interested but there was no structure to activate those relationships. What could have driven year-round growth was sitting idle.
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
                <img src="/wellnergy-1.png" alt="Wellnergy Challenge" className="rounded-2xl w-full max-w-2xl object-cover" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* What I Did Section - Example content, update as needed for Wellnergy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl w-full mx-auto flex flex-col md:flex-row-reverse items-center gap-12 mb-16 p-8 md:p-12 mt-[75px]"
        >
          <div className="flex-1">
            <h2 className="text-[40px] font-bold text-black mb-4">What I Did</h2>
            <p className="text-lg text-gray-700 mb-4">I stepped in as a strategic partner to build brand authority, sharpen positioning, and elevate visibility while laying down the foundation for sustainable growth.</p>
            <div style={{ marginTop: '40px' }}>
              <Accordion type="single" collapsible className="w-full bg-transparent mt-0" defaultValue="step1">
                <AccordionItem value="step1" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Turned founder insights into thought leadership
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    I ghostwrote LinkedIn content that helped the founder show up with clarity and credibility. The result? More eyes, more invites, and more alignment with sponsors and speakers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step2" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Built a digital brand that matched the live energy
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    We reworked the brand's voice, message, and presence online and off. The story finally felt as strong on screen as it did on stage.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step3" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Made the founder the front door to the brand
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    Instead of hiding behind a logo, we put the founder at the centre of the strategy. His voice became the magnet, driving trust, reach, and relationship-building.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step4" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Activated high-value partnerships
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    I helped guide outreach, pitch strategy, and warm intros turning passive interest from brands and influencers into real conversations, collabs, and long-term value.
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
            <img src="/wellnergy-2.png" alt="Wellnergy What I Did" className="rounded-2xl w-full max-w-2xl object-cover" />
          </motion.div>
        </motion.div>
        {/* Results & Impact Section - Example content, update as needed for Wellnergy */}
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
                <p className="text-lg text-gray-700 mb-4">What started as a one-off event became a movement with momentum. We didn't just boost visibility, we built a brand that lasts beyond the festival.</p>
                <Accordion type="single" collapsible className="w-full bg-transparent mt-[10px]" defaultValue="result1">
                  <AccordionItem value="result1" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Turned 1k into 6.6k
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      The founder's LinkedIn following jumped from 1,000 to over 6,600, not just numbers, but a real community that extended Wellnergy's reach between events.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result2" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Created content people actually cared about
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Our campaigns hit tens of thousands of views, not through clickbait, but clarity. The content didn't just land, it resonated across the wellness space.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result3" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Brought in brand names that mattered
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Partnerships with Nike, Fabletics, Huel, and Third Space weren't just flashy, they showed that Wellnergy had grown from grassroots to a brand the big players wanted in on.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result4" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Built a brand that outlives the weekend
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      The visibility we created didn't fade when the event ended. It laid the foundation for year-round growth, stronger launches, and deeper conversations with future investors.
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
                <img src="/wellnergy-3.png" alt="Wellnergy Results" className="rounded-2xl w-full max-w-2xl object-cover" />
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

export default PortfolioWellnergyPage; 