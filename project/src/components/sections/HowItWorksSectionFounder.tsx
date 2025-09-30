import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TestimonialsSection } from './TestimonialsSection';

// CRITICAL FIX: All Book a Call buttons now use React Router Link components
// This fixes the 404 errors when clicking accordion buttons
// Deployed: 2025-01-31
// Build ID: 4c31282-debug-404-fix

const stages = [
  {
    tag: "Strategy",
    heading: "Define Your Brand",
    subtext:
      "We start by getting brutally honest about what you actually stand for. Not the fluffy \"we help people\" spiel, but the story, strengths and positioning that make you worth listening to. Think of it as brand therapy, minus the incense sticks.",
    accordion: [
      {
        title: "Own Your Narrative",
        content:
          "No more blending in. We'll shape a story that actually sounds like you and lands with the people who matter.",
      },
      {
        title: "Dial In Your Positioning",
        content:
          "Get sharp on what you stand for and who it's for. So when you speak, the right people pay attention.",
      },
      {
        title: "Build a Strategic Foundation",
        content:
          "We'll align your vision, voice, and values so your brand feels true, consistent, and impossible to ignore.",
      },
    ],
    visual: <img src="/define image.png" alt="Define Image" className="w-full h-full object-contain rounded-[40px]" />,
  },
  {
    tag: "Voice",
    heading: "Align and Communicate to Your Audience",
    subtext:
      "Most brands are recycling Canva templates and hashtagging their way to engagement. Yours won't. Together we'll align who you are with how you show up, and then find the words that actually land with the people that matter. This is your voice, sharper.",
    accordion: [
      {
        title: "Say what actually matters",
        content:
          "We shape ideas that sound like you and stick. No filler. No forced thought-leadership. Just sharp, intentional content that moves the right people.",
      },
      {
        title: "Keep it sustainable",
        content:
          "You don't need to show up daily to be seen. We build a content system that fits your life and builds trust on your terms.",
      },
      {
        title: "Make it unforgettable",
        content:
          "From scroll-stopping hooks to frameworks that teach and resonate, we help you create content people actually remember and come back for.",
      },
    ],
    visual: <img src="/deliver-image.jpg" alt="Deliver Image" className="w-full h-full object-contain rounded-[40px]" />,
  },
  {
    tag: "Visibility",
    heading: "Amplify Your Presence",
    subtext:
      "Here's the part most people mess up: trying to be everywhere. We'll pick the places that actually matter, set a rhythm you can actually sustain and build campaigns that keep working even when you log off. Growth without the hamster wheel.",
    accordion: [
      {
        title: "Choose what actually works",
        content:
          "We find the channels your audience cares about and focus there. No more stretching yourself across platforms just to keep up.",
      },
      {
        title: "Visibility that fits you",
        content:
          "LinkedIn. Podcasts. Longform. We build a strategy around your strengths, not someone else's playbook. Show up in a way that feels like you.",
      },
      {
        title: "Systems that keep you moving",
        content:
          "From idea capture to publishing, we design a workflow that works even on your busiest days. Because consistency shouldn't depend on motivation.",
      },
    ],
    visual: <img src="/Chat bubble and texting on smartphone.png" alt="Chat bubble and texting on smartphone" className="w-full h-full object-contain rounded-[40px]" />,
  },
];

const PlusMinusIcon = ({ open }: { open: boolean }) => (
  <span
    className="inline-block mr-6 text-3xl font-black select-none"
    style={{ width: '2rem', display: 'inline-block', color: '#a8e10c' }}
  >
    {open ? '−' : '+'}
  </span>
);

export const HowItWorksSectionFounder: React.FC = () => {
  // Ensure first row of each accordion is open by default
  const [openIndexes, setOpenIndexes] = React.useState([0, 0, 0]);

  return (
    <>
      <section className="w-full max-w-6xl mx-auto py-24 px-4 flex flex-col gap-24 relative">
        {/* How It Works Heading */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 relative z-10" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>
              How It Works
            </h2>
            
            {/* Background Image with Twirly Arrow - positioned to the left of heading */}
            <div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-[125px] -translate-y-[34px] w-[400px] h-[200px] bg-contain bg-no-repeat bg-center z-0"
              style={{
                backgroundImage: 'url(/how-it-works.png)'
              }}
            />
          </div>
          
          <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[16px] leading-[24px] max-w-sm mx-auto">
            Don't worry, this isn't another 47-step funnel or a deck you'll never open again. Just a clear process that actually gets you moving.
          </p>
        </div>
        
        {/* Stages */}
        {stages.map((stage, idx) => {
          // Fade + subtle upward motion for all sections
          const contentInitial = { y: 30, opacity: 0 };
          const imageInitial = { y: 30, opacity: 0 };
          const contentOrder = idx % 2 === 0 ? 'order-2' : '';
          const imageOrder = idx % 2 === 0 ? 'order-1' : '';
          return (
            <React.Fragment key={stage.tag}>
              <div
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10`}
                style={{ minHeight: stage.heading === "Clarify Your Brand" || stage.heading === "Create Amazing Content" ? 600 : 520 }}
              >
                {/* Content Side */}
                  <motion.div
                    className={contentOrder}
                    initial={contentInitial}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <span className="inline-block mb-4 px-6 py-2 text-[#e44782] text-base font-semibold shadow-sm bg-white uppercase tracking-wide border" style={{ fontFamily: 'Inter, Helvetica', borderRadius: '0.5rem', letterSpacing: '0.04em', borderColor: '#e44782', fontWeight: 600 }}>
                      {stage.tag}
                    </span>
                    <h3 className="text-[34px] font-extrabold mb-4 leading-tight" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>
                      {stage.heading}
                    </h3>
                    <p className="text-base mb-6 max-w-lg opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>{stage.subtext}</p>
                    <div className="flex flex-col gap-1 w-full h-[400px]">
                      {stage.accordion.map((row, i) => {
                        const isOpen = openIndexes[idx] === i;
                        return (
                          <div
                            key={i}
                            className={`transition-colors duration-300 ease-out ${isOpen ? 'bg-[rgba(228,71,130,0.12)] rounded-2xl p-6' : 'bg-transparent p-6'} flex flex-col`}
                            style={{ minHeight: 0, willChange: 'background-color' }}
                          >
                            <button
                              className="flex items-center w-full text-left focus:outline-none"
                              onClick={() => {
                                setOpenIndexes((prev) => prev.map((v, sidx) => (sidx === idx ? (isOpen ? -1 : i) : v)));
                              }}
                              aria-expanded={isOpen}
                              style={{ fontWeight: 700, color: '#0f0f10', fontSize: '1.15rem' }}
                            >
                              <PlusMinusIcon open={isOpen} />
                              {row.title}
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                              style={{ fontSize: '1rem', color: '#222', fontWeight: 400, lineHeight: 1.7, paddingTop: isOpen ? 16 : 0, willChange: 'max-height, opacity' }}
                            >
                              {isOpen && (
                                <div>
                                  <div>{row.content}</div>
                                  <Link 
                                    to="#"
                                    className="text-[#e44782] font-['Montserrat'] font-semibold text-base hover:opacity-80 transition-all duration-200 mt-3 flex items-center gap-2 "
                                  >
                                    Book a Call
                                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                      <path d="M6 12l4-4-4-4" stroke="#e44782" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                
                {/* Visual Side */}
                  <motion.div
                    className={`flex justify-center items-center ${imageOrder}`}
                    initial={imageInitial}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="w-full max-w-md h-[600px] rounded-[40px] flex items-center justify-center overflow-hidden">
                      {stage.visual}
                    </div>
                  </motion.div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* FAQ Section */}
      <motion.section 
        className="w-full max-w-4xl mx-auto flex flex-col items-center pt-[calc(5rem-50px)] pb-32 px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-center mb-4" 
          style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p 
          className="text-lg text-center mb-8 opacity-80" 
          style={{ fontFamily: 'Inter, Helvetica' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          The need-to-knows, minus the fluff.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <FAQSection />
        </motion.div>
      </motion.section>
    </>
  );
};

// FAQSection component
const faqs = [
  {
    q: "What exactly is the founder brand strategy?",
    a: "It's your story, your positioning, and your visibility - all lined up so people actually get who you are and why they should care. We cut the jargon, sharpen your message and decide where you should show up so your brand builds trust (and sales)."
  },
  {
    q: "How is this different from other personal brand services?",
    a: "I don't follow the \"post 5 times a week and hope for the best\" parade and I don't give you cookie-cutter content calendars to meddle with. Instead, we build a system that actually fits you (your goals, your voice, your stage of growth) and keeps working long after I've left your Slack."
  },
  {
    q: "Is this just for early-stage founders?",
    a: "Nope. Early-stage, scaling, mid-pivot, post-raise - the problems are usually the same. If you're a human leading a business and you want clarity, this is for you."
  },
  {
    q: "Do I need to be posting every day for this to work?",
    a: "Absolutely not. Unless you love the idea of running in circles for vanity metrics. What you actually need is the right rhythm, the right message and the right people paying attention. Quality > quantity, always."
  },
  {
    q: "Is this just for LinkedIn?",
    a: "Nope. LinkedIn's just one piece of the puzzle. This is about your whole ecosystem - podcasts, long-form, newsletters, events, whatever channels actually make sense for you. We'll build a strategy that gets you seen with intention. (P.S. Don't worry, no TikTok dancing required… unless you're into that.)"
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
            className={`transition-all duration-400 border border-[#ececec] shadow-sm ${open ? 'bg-[rgba(228,71,130,0.08)]' : 'bg-white'} px-8 py-6 group hover:shadow-md rounded-[0.84rem]`}
            style={{}}
          >
            <button
              className="flex items-center w-full text-left focus:outline-none"
              onClick={() => setOpenIdx(open ? -1 : i)}
              aria-expanded={open}
              style={{ fontWeight: 700, color: '#0f0f10', fontSize: '1.15rem' }}
            >
              <PlusMinusIcon open={open} />
              <span className="flex-1">
                {faq.q}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ fontSize: '1.08rem', color: '#222', fontWeight: 400, lineHeight: 1.7, paddingTop: open ? 8 : 0 }}
            >
              {open && <div>{faq.a}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
} 