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
    heading: "Clarify Your Brand",
    subtext:
      "We'll cut the noise and get clear on what makes you different. This is the foundation built on your story, not someone else's playbook.",
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
    heading: "Create Amazing Content",
    subtext:
      "Your story deserves more than recycled tips and a bloated calendar. We turn strategy into content that connects without chasing trends or dancing for the algorithm.",
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
    visual: <img src="/deliver-image.png" alt="Deliver Image" className="w-full h-full object-contain rounded-[40px]" />,
  },
  {
    tag: "Visibility",
    heading: "Grow With Intention",
    subtext:
      "You don't need to be everywhere. You need to show up in the right places with the right message. We help you grow with clarity, not chaos.",
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
    style={{ width: '2rem', display: 'inline-block', color: '#e44782' }}
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
        {/* Stages */}
        {stages.map((stage, idx) => {
          // Fade + subtle upward motion for all sections except "Create Amazing Content"
          const contentInitial = stage.heading === "Create Amazing Content" ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 };
          const imageInitial = stage.heading === "Create Amazing Content" ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 };
          const contentOrder = idx % 2 === 0 ? 'order-2' : '';
          const imageOrder = idx % 2 === 0 ? 'order-1' : '';
          return (
            <React.Fragment key={stage.tag}>
              <div
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10`}
                style={{ minHeight: 520 }}
              >
                {/* Content Side */}
                {stage.heading === "Create Amazing Content" ? (
                  <div className={contentOrder}>
                    <span className="inline-block mb-4 px-6 py-2 text-[#e44782] text-base font-semibold shadow-sm bg-white uppercase tracking-wide border" style={{ fontFamily: 'Inter, Helvetica', borderRadius: '0.84rem', letterSpacing: '0.04em', borderColor: '#e44782', fontWeight: 600 }}>
                      {stage.tag}
                    </span>
                    <h3 className="text-[34px] font-extrabold mb-4" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>
                      {stage.heading}
                    </h3>
                    <p className="text-lg mb-6 max-w-lg opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>{stage.subtext}</p>
                    <div className="flex flex-col gap-1 w-full h-[400px]">
                      {stage.accordion.map((row, i) => {
                        const isOpen = openIndexes[idx] === i;
                        return (
                          <div
                            key={i}
                            className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'bg-[rgba(228,71,130,0.12)] rounded-2xl p-6' : 'bg-transparent p-6'} flex flex-col`}
                            style={{ minHeight: 0 }}
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
                              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-40 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`}
                              style={{ fontSize: '1rem', color: '#222', fontWeight: 400, lineHeight: 1.7, transitionProperty: 'max-height, opacity, transform', paddingTop: isOpen ? 16 : 0 }}
                            >
                              {isOpen && (
                                <div>
                                  <div>{row.content}</div>
                                  <Link 
                                    to="#"
                                    className="text-[#e44782] font-semibold text-base hover:opacity-80 transition-all duration-200 mt-3 flex items-center gap-2"
                                    style={{ fontFamily: 'Inter, Helvetica' }}
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
                  </div>
                ) : (
                  <motion.div
                    className={contentOrder}
                    initial={contentInitial}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <span className="inline-block mb-4 px-6 py-2 text-[#e44782] text-base font-semibold shadow-sm bg-white uppercase tracking-wide border" style={{ fontFamily: 'Inter, Helvetica', borderRadius: '0.84rem', letterSpacing: '0.04em', borderColor: '#e44782', fontWeight: 600 }}>
                      {stage.tag}
                    </span>
                    <h3 className="text-[34px] font-extrabold mb-4" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>
                      {stage.heading}
                    </h3>
                    <p className="text-lg mb-6 max-w-lg opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>{stage.subtext}</p>
                    <div className="flex flex-col gap-1 w-full h-[400px]">
                      {stage.accordion.map((row, i) => {
                        const isOpen = openIndexes[idx] === i;
                        return (
                          <div
                            key={i}
                            className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'bg-[rgba(228,71,130,0.12)] rounded-2xl p-6' : 'bg-transparent p-6'} flex flex-col`}
                            style={{ minHeight: 0 }}
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
                              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-40 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`}
                              style={{ fontSize: '1rem', color: '#222', fontWeight: 400, lineHeight: 1.7, transitionProperty: 'max-height, opacity, transform', paddingTop: isOpen ? 16 : 0 }}
                            >
                              {isOpen && (
                                <div>
                                  <div>{row.content}</div>
                                  <Link 
                                    to="#"
                                    className="text-[#e44782] font-semibold text-base hover:opacity-80 transition-all duration-200 mt-3 flex items-center gap-2"
                                    style={{ fontFamily: 'Inter, Helvetica' }}
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
                )}
                
                {/* Visual Side */}
                {stage.heading === "Create Amazing Content" ? (
                  <div className={`flex justify-center items-center ${imageOrder}`}>
                    <div className="w-full max-w-md h-[520px] rounded-[40px] flex items-center justify-center overflow-hidden">
                      {stage.visual}
                    </div>
                  </div>
                ) : (
                  <motion.div
                    className={`flex justify-center items-center ${imageOrder}`}
                    initial={imageInitial}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <div className="w-full max-w-md h-[520px] rounded-[40px] flex items-center justify-center overflow-hidden">
                      {stage.visual}
                    </div>
                  </motion.div>
                )}
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
    a: "It's your message, your positioning, and your visibility, aligned. We get clear on what you stand for, how you say it, and where you show up so people trust you before they even hit your site."
  },
  {
    q: "How is this different from other personal brand services?",
    a: "Most services focus on surface-level visibility and more posts, more noise. This goes deeper. We build a strategic foundation so everything you say and share is rooted, intentional, and aligned with where you're headed."
  },
  {
    q: "Is this just for early-stage founders?",
    a: "Not at all. Whether you're just starting or scaling fast, having a clear, strategic brand helps you lead with confidence and attract the right people."
  },
  {
    q: "Do I need to be posting every day for this to work?",
    a: "Nope. This is about consistency, not quantity. We'll build a content rhythm that fits your life and still gets results, no daily grind required."
  },
  {
    q: "Is this just for LinkedIn?",
    a: "Nope. LinkedIn's great but this is about your whole ecosystem. Whether it's podcasts, longform, newsletters, or whatever channels make sense for you, we build a strategy that meets your goals, not just the algorithm."
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
              className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ fontSize: '1.08rem', color: '#222', fontWeight: 400, lineHeight: 1.7, transitionProperty: 'max-height, opacity, margin-top', paddingTop: open ? 8 : 0 }}
            >
              {open && <div>{faq.a}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
} 