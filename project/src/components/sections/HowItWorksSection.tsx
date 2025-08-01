import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TestimonialsSection } from './TestimonialsSection';

const stages = [
  {
    tag: "Strategy",
    heading: "Define the Vision",
    subtext:
      "No more throwing spaghetti at the wall. We start by getting clear on where you're going, so every brand move builds momentum, not confusion.",
    accordion: [
      {
        title: "Align Brand with Business",
        content:
          "Disjointed messaging? Gone. We tie your business goals to a clear brand strategy so your positioning, offers, and content actually work together.",
      },
      {
        title: "Clarify Your Edge",
        content:
          "You don't need to be louder, just clearer. We'll uncover what makes you different and build a story people actually care about.",
      },
      {
        title: "Simplify the Strategy",
        content:
          "Strategy isn't meant to overwhelm. We focus on what matters, cut what doesn't, and give you a roadmap that's clear and actionable.",
      },
    ],
    visual: <img src="/define image.png" alt="Define Image" className="w-full h-full object-contain rounded-[40px]" />,
  },
  {
    tag: "Voice",
    heading: "Shape the Message",
    subtext:
      "Messaging isn't just words. It's how people get what you do, why it matters, and why they should care. We help you say it with clarity and make it count.",
    accordion: [
      {
        title: "Craft Core Messaging",
        content:
          "We distill your thinking into language that sticks. Website, pitch, deck, content all saying the same thing, and sounding like you.",
      },
      {
        title: "Stand Out Without Screaming",
        content:
          "You don't need to shout. You need a voice that's bold, clear, and unmistakably yours, one people trust when they hear it.",
      },
      {
        title: "Make It Convert",
        content:
          "Clarity builds credibility. We shape messaging that moves your audience to act, not just nod and scroll.",
      },
    ],
    visual: <img src="/deliver-image.png" alt="Deliver Image" className="w-full h-full object-contain rounded-[40px]" />,
  },
  {
    tag: "Visibility",
    heading: "Build Strategic Visibility",
    subtext:
      "You don't need to be everywhere. Just in the right places, with the right message. We help you show up in ways that grow your brand without draining your energy.",
    accordion: [
      {
        title: "Choose the Right Channels",
        content:
          "We cut the noise and double down on what works. Where your audience listens, where you shine, and where momentum builds.",
      },
      {
        title: "Stay Visible Without Losing Focus",
        content:
          "You stay in your zone of genius. We keep your brand front-of-mind with a system that works even when you're heads-down building.",
      },
      {
        title: "Create a System That Scales",
        content:
          "From idea to execution, we design a repeatable workflow so showing up isn't a scramble it's a signal. Clear, consistent, and built to last.",
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

export const HowItWorksSection: React.FC = () => {
  // Ensure first row of each accordion is open by default
  const [openIndexes, setOpenIndexes] = React.useState([0, 0, 0]);

  return (
    <>
      <section className="w-full max-w-6xl mx-auto py-24 px-4 flex flex-col gap-24 relative">
        {/* Stages */}
        {stages.map((stage, idx) => {
          // Fade + subtle upward motion for all sections except "Shape the Message"
          const contentInitial = stage.heading === "Shape the Message" ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 };
          const imageInitial = stage.heading === "Shape the Message" ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 };
          const contentOrder = idx % 2 === 0 ? 'order-2' : '';
          const imageOrder = idx % 2 === 0 ? 'order-1' : '';
          return (
            <React.Fragment key={stage.tag}>
              <div
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10`}
                style={{ minHeight: 520 }}
              >
                {/* Content Side */}
                {stage.heading === "Shape the Message" ? (
                  <div className={contentOrder}>
                    <span className="inline-block mb-4 px-6 py-2 text-[#e44782] text-base font-semibold shadow-sm bg-white uppercase tracking-wide border" style={{ fontFamily: 'Inter, Helvetica', borderRadius: '0.84rem', letterSpacing: '0.04em', borderColor: '#e44782', fontWeight: 600 }}>
                      {stage.tag}
                    </span>
                    <h3 className="text-[34px] font-extrabold mb-4" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>
                      {stage.heading}
                    </h3>
                    <p className="text-lg mb-6 max-w-xl opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>{stage.subtext}</p>
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
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <span className="inline-block mb-4 px-6 py-2 text-[#e44782] text-base font-semibold shadow-sm bg-white uppercase tracking-wide border" style={{ fontFamily: 'Inter, Helvetica', borderRadius: '0.84rem', letterSpacing: '0.04em', borderColor: '#e44782', fontWeight: 600 }}>
                      {stage.tag}
                    </span>
                    <h3 className="text-[34px] font-extrabold mb-4" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>
                      {stage.heading}
                    </h3>
                    <p className="text-lg mb-6 max-w-xl opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>{stage.subtext}</p>
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
                {stage.heading === "Shape the Message" ? (
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
                    viewport={{ once: true, amount: 0.2 }}
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
      {/* FAQSection component and faqs moved to page file for export */}
    </>
  );
};

// FAQSection component and faqs moved to page file for export

 