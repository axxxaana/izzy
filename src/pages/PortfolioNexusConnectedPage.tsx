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
const HERO_DESCRIPTION = 'Nexus Connected is an AI-powered women\'s health app that helps users take control of their wellbeing. When I stepped in, the brand lacked clarity, consistency, and digital presence. Their community thrived offline but didn\'t translate online. I led a strategic repositioning to unify their brand and prepare them for scalable growth.';

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
    subtitle: 'Health & Wellness Platform',
    description: 'Wellnergy is a fast-growing wellness event celebrating holistic health. I led brand messaging, ghostwrote founder content, and built influencer partnerships — turning a grassroots festival into a credible, high-visibility brand with strategic alliances and strong digital traction.',
    tags: ['Health Tech', 'Holistic Design', 'Wellness Strategy'],
    image: '/wellnergy cover.png',
    color: '',
  },
  {
    id: 3,
    title: 'GoFounder',
    subtitle: 'Startup Accelerator Platform',
    description: 'GoFounder is a coaching platform for startup founders focused on accountability and performance. I built the brand presence from the ground up — leading social strategy, ghostwriting thought leadership, and designing onboarding experiences that elevated visibility and drove community growth.',
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
        <div className="relative z-10 flex-1 flex flex-col justify-between pt-20 px-8 pb-8 max-w-xl">
          <div>
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
               <span className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-pink-200 shadow-lg backdrop-blur-sm">
                 <span className="text-pink-700 font-medium text-sm tracking-wide">
                   Femtech
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
                  When Nexus—a revolutionary AI-driven women’s health platform—approached me, they had a powerful product but a fragmented brand story. Despite having real traction offline, their digital presence was underdeveloped and disconnected. Some of the challenges they were having were:
                </p>
                <Accordion type="single" collapsible className="w-full bg-transparent mt-[10px]" defaultValue="challenge1">
                  <AccordionItem value="challenge1" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Brand Identity Fragmentation
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Brand identity lacked cohesion across core assets (pitch deck, social media, and product UI). It felt like three different companies telling three different stories.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge2" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Weak LinkedIn Presence
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      LinkedIn presence was almost nonexistent—missing a key opportunity to establish thought leadership in a competitive space.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge3" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Offline Community Not Leveraged Online
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Thriving in-person community wasn’t being leveraged for growth or advocacy online.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenge4" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      No Content Strategy or Brand Voice
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      No defined content strategy, brand voice, or positioning—making it hard to attract funding, partners, or press.
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
            <p className="text-lg text-gray-700 mb-4">I stepped in as a fractional CMO and brand strategist to bring clarity, consistency, and visibility to the Nexus brand. My approach combined foundational strategy with execution across key channels.</p>
            <div style={{ marginTop: '40px' }}>
              <Accordion type="single" collapsible className="w-full bg-transparent mt-0" defaultValue="step1">
                <AccordionItem value="step1" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Brand Audit & Strategic Repositioning
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Conducted a deep brand audit across all touchpoints to identify inconsistencies and missed opportunities</li>
                      <li>Created a new positioning framework that captured Nexus’s unique value in the femtech landscape</li>
                      <li>Aligned the brand’s visuals, messaging, and voice across digital and physical touchpoints</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step2" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Core Messaging & Narrative Development
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Developed crisp value propositions tailored to each audience: investors, end users, and collaborators</li>
                      <li>Defined a distinct tone of voice that balanced scientific credibility with emotional resonance</li>
                      <li>Refined the brand narrative for use in pitch materials, public speaking, and investor comms</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step3" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Social Media Strategy & Thought Leadership
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Built a targeted social media strategy (primarily LinkedIn) focused on awareness, credibility, and engagement</li>
                      <li>Ghostwrote high-performing LinkedIn posts for the founders—positioning them as emerging voices in femtech and AI</li>
                      <li>Created a content calendar to maintain consistency across platforms</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step4" className={whatIDidAccordionItem}>
                  <AccordionTrigger className={saasAccordionTrigger}>
                    Go-to-Market Strategy & Investor Readiness
                  </AccordionTrigger>
                  <AccordionContent className={saasAccordionContent}>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Designed a compelling pre-seed pitch deck and supported messaging during investor meetings</li>
                      <li>Developed a go-to-market roadmap to guide the next 12 months of growth and community activation</li>
                      <li>Supported a £300k fundraising strategy through refined messaging and storytelling</li>
                    </ul>
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
                  This wasn’t just a rebrand — it was a strategic transformation. From messaging to momentum, we helped the brand cut through noise, connect with users, and accelerate growth.
                </p>
                <Accordion type="single" collapsible className="w-full bg-transparent mt-[10px]" defaultValue="result1">
                  <AccordionItem value="result1" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Brand & Messaging Clarity
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      We built a cohesive brand that aligned with both the product’s current value and its future vision. The messaging was sharpened across all touchpoints — from pitch decks to product UX — giving the team confidence and consistency as they scaled.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result2" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Audience Engagement & Community Growth
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      Through strategic content and events, we sparked real engagement. Community events in London sold out, drawing a network of over 400 users. At the same time, the content system kept the waitlist active and the audience growing.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result3" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Funding & Investor Confidence
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      The new brand narrative laid the groundwork for a successful crowdfunding campaign and helped position the team for pre-seed investment. Clear messaging and a refined strategy gave investors a reason to believe — and back — the vision.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="result4" className={saasAccordionItem + " data-[state=open]:border-l-4 data-[state=open]:border-pink-500"}>
                    <AccordionTrigger className={saasAccordionTrigger}>
                      Visibility & Strategic Partnerships
                    </AccordionTrigger>
                    <AccordionContent className={saasAccordionContent}>
                      We helped the founders step confidently into the spotlight. Visibility grew across digital channels, public panels, and industry conversations. Strategic partnerships with other femtech brands and academic institutions followed, further anchoring the brand’s authority.
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