import React from "react";
import { motion } from "framer-motion";
import { TestimonialsSection } from './TestimonialsSection';

const stages = [
  {
    tag: "Stage One",
    heading: "Clarify Your Brand",
    subtext:
      "No fluff. Just a clear, proven system to turn your story into a magnetic personal brand — without burning out or posting every day.",
    accordion: [
      {
        title: "Own Your Narrative",
        content:
          "Stop blending in. We'll help you shape a story that stands out and actually reflects who you are as a founder.",
      },
      {
        title: "Dial In Your Positioning",
        content:
          "Get crystal clear on what you stand for — and who you stand out to — so people get it instantly.",
      },
      {
        title: "Build a Strategic Foundation",
        content:
          "We'll align your vision, voice, and values so your brand feels authentic and built to last.",
      },
    ],
    visual: <img src="/define image.png" alt="Define Image" className="w-full h-full object-contain rounded-[40px]" />,
  },
  {
    tag: "Stage Two",
    heading: "Create Amazing Content",
    subtext:
      "Your story deserves better than a tired content calendar. Let's turn strategy into scroll-stopping content that builds trust — without chasing the algorithm gods.",
    accordion: [
      {
        title: "Say What Matters",
        content:
          "We distill your ideas into meaningful content that reflects your voice and vision. No more generic thought-leadership. Just messages that move.",
      },
      {
        title: "Content Without Burnout",
        content:
          "You don't need to post every day. We design a rhythm and system that fits your life — and still builds momentum. Strategic, high-impact content > chasing virality.",
      },
      {
        title: "Make It Memorable",
        content:
          "From bold hooks to compelling frameworks, we help you shape content that cuts through the scroll. Because trust starts with attention.",
      },
    ],
    visual: <img src="/deliver-image.png" alt="Deliver Image" className="w-full h-full object-contain rounded-[40px]" />,
  },
  {
    tag: "Stage Three",
    heading: "Grow With Intention",
    subtext:
      "You don't need to be everywhere. Just in the right places, consistently. We help you scale your presence with clarity, not chaos.",
    accordion: [
      {
        title: "Choose the Right Channels",
        content:
          "We'll identify where your audience actually listens — and double down on what works. No more spreading yourself thin.",
      },
      {
        title: "Build in Public (Your Way)",
        content:
          "Whether it's LinkedIn, longform, or podcasts, we craft a strategy around your energy and goals. Visibility should feel aligned — not forced.",
      },
      {
        title: "Systems That Scale With You",
        content:
          "From idea capture to publishing, we'll design a repeatable workflow to keep momentum going. So you show up — even on your busiest weeks.",
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
      <section className="w-full max-w-6xl mx-auto py-24 px-4 flex flex-col gap-24">
        {stages.map((stage, idx) => {
          // Animation directions
          let imageInitial, contentInitial;
          if (idx === 0) { // Stage 1
            imageInitial = { opacity: 0, x: -80 };
            contentInitial = { opacity: 0, x: 80 };
          } else if (idx === 1) { // Stage 2
            imageInitial = { opacity: 0, x: 80 };
            contentInitial = { opacity: 0, x: -80 };
          } else { // Stage 3
            imageInitial = { opacity: 0, x: -80 };
            contentInitial = { opacity: 0, x: 80 };
          }
          return (
            <React.Fragment key={stage.tag}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
              >
                {/* Content Side */}
                <motion.div
                  initial={contentInitial}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.4 }}
                  className={idx % 2 === 0 ? 'order-2' : ''}
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
                            {isOpen && <div>{row.content}</div>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
                {/* Visual Side */}
                <motion.div
                  initial={imageInitial}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.4 }}
                  className={`flex justify-center items-center ${idx % 2 === 0 ? 'order-1' : ''}`}
                >
                  <div className="w-full max-w-md h-[520px] rounded-[40px] flex items-center justify-center overflow-hidden">
                    {stage.visual}
                  </div>
                </motion.div>
              </div>
              {/* Remove the arrow between stages */}
              {/* (No arrow rendered here) */}
            </React.Fragment>
          );
        })}
      </section>
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center py-20 px-4 pb-32">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>
          Frequently Asked Questions
        </h2>
        <FAQSection />
      </section>
    </>
  );
};

// FAQSection component
const faqs = [
  {
    q: "How is this different from other personal brand services?",
    a: "This is a founder-first, strategy-led process. No fluff, no generic playbooks. Everything is tailored to your story, your goals, and your schedule."
  },
  {
    q: "Do I need to post every day?",
    a: "No! The system is designed to help you say more with less, so you can build authority and momentum without burning out."
  },
  {
    q: "What if I don’t know my story yet?",
    a: "That’s exactly what we’ll uncover together. The first stage is all about clarifying your narrative and positioning."
  },
  {
    q: "How long does the process take?",
    a: "Most founders see clarity and results in 4–8 weeks, depending on your goals and pace."
  },
  {
    q: "Is this just for LinkedIn?",
    a: "Nope! The strategy works across platforms—wherever your audience is."
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
            className={`transition-all duration-400 border border-[#ececec] shadow-sm ${open ? 'bg-[rgba(228,71,130,0.08)] rounded-2xl' : 'bg-white'} px-8 py-6 group hover:shadow-md`}
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
              className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-40 mt-4 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`}
              style={{ fontSize: '1.08rem', color: '#222', fontWeight: 400, lineHeight: 1.7, transitionProperty: 'max-height, opacity, transform', paddingTop: open ? 8 : 0 }}
            >
              {open && <div>{faq.a}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

 