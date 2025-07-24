import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/layout/Navigation';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { CursorTrail } from '../components/CursorTrail';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { portfolioItems, PortfolioCard } from './portfolioData';

const HERO_IMAGE = '/nexus connected team.jpg';
const HERO_HEADING = 'Nexus Connected';
const HERO_SUBHEADING = 'Marketing';
const HERO_DESCRIPTION = 'Strategic marketing leadership and comprehensive brand development for an innovative femtech platform. Led the creation of a unified brand voice, executed multi-channel campaigns, and drove engagement across digital and community channels to accelerate growth and industry impact.';

// Accordion SaaS style utility
const saasAccordionItem = "rounded-xl mb-2 transition-all duration-300 overflow-hidden bg-transparent data-[state=open]:bg-white data-[state=open]:shadow data-[state=open]:border-l-4 data-[state=open]:border-pink-500";
const saasAccordionTrigger = "flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-gray-900 cursor-pointer focus:outline-none transition-all duration-300";
const saasAccordionContent = "px-6 pb-6 pt-2 text-gray-700 text-base";

// Add a new style for What I Did accordion items
const whatIDidAccordionItem = "rounded-xl mb-2 transition-all duration-300 overflow-hidden bg-transparent data-[state=open]:bg-[rgba(228,71,130,0.2)] data-[state=open]:border-l-4 data-[state=open]:border-pink-500 data-[state=open]:shadow";

const PortfolioNexusConnectedPage: React.FC = () => {
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
            Industry: Femtech · Healthtech · AI App
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
                <img src="/nexus connected team.jpg" alt="Nexus Challenge" className="rounded-2xl w-full max-w-md object-cover" />
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
            <img src="/nexus connected team.jpg" alt="Nexus What I Did" className="rounded-2xl w-full max-w-md object-cover" />
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
                <img src="/nexus connected team.jpg" alt="Nexus Results" className="rounded-2xl w-full max-w-md object-cover" />
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
            {portfolioItems.filter(item => item.title !== 'Nexus Connected').map((item, index) => (
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