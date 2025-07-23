import React from "react";

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
          "Stop blending in. We’ll help you shape a story that stands out and actually reflects who you are as a founder.",
      },
      {
        title: "Dial In Your Positioning",
        content:
          "Get crystal clear on what you stand for — and who you stand out to — so people get it instantly.",
      },
      {
        title: "Build a Strategic Foundation",
        content:
          "We’ll align your vision, voice, and values so your brand feels authentic and built to last.",
      },
    ],
    visual: <span className="text-[#e44782] text-2xl font-bold opacity-60">[Stage Visual]</span>,
  },
  {
    tag: "Stage Two",
    heading: "Create Amazing Content",
    subtext:
      "Turn your strategy into scroll-stopping ideas and purposeful content that actually moves your audience.",
    accordion: [
      {
        title: "Turn Strategy into Story",
        content:
          "Together, we’ll translate your strategy into scroll-stopping ideas that reflect your core message.",
      },
      {
        title: "Post Less, Say More",
        content:
          "You don’t need to post every day — just powerfully. We’ll help you say more in fewer, better pieces of content.",
      },
      {
        title: "Show Up with Purpose",
        content:
          "Everything we make ties back to your goals. No filler content. No generic posts.",
      },
    ],
    visual: <span className="text-[#e44782] text-2xl font-bold opacity-60">[Stage Visual]</span>,
  },
  {
    tag: "Stage Three",
    heading: "Amplify with Systems",
    subtext:
      "Get lightweight systems to stay consistent, build momentum, and actually grow — without chaos.",
    accordion: [
      {
        title: "Choose the Right Channels",
        content:
          "We’ll help you focus on the right platforms for your audience and business — not what’s trending.",
      },
      {
        title: "Find Your Cadence",
        content:
          "Set a pace that’s sustainable, not soul-sucking. We’ll create a plan that fits your life.",
      },
      {
        title: "Scale Without Chaos",
        content:
          "You’ll get lightweight systems to stay consistent, build momentum, and actually grow.",
      },
    ],
    visual: <span className="text-[#e44782] text-2xl font-bold opacity-60">[Stage Visual]</span>,
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
          const isImageLeft = idx % 2 === 1;
          return (
            <React.Fragment key={stage.tag}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isImageLeft ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className={isImageLeft ? 'order-2' : ''}>
                  <span className="inline-block mb-4 px-6 py-2 text-[#e44782] text-base font-semibold shadow-sm bg-white uppercase tracking-wide border" style={{ fontFamily: 'Inter, Helvetica', borderRadius: '0.84rem', letterSpacing: '0.04em', borderColor: '#e44782', fontWeight: 600 }}>
                    {stage.tag}
                  </span>
                  <h3 className="text-[34px] font-extrabold mb-4" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>
                    {stage.heading}
                  </h3>
                  <p className="text-lg mb-6 max-w-xl opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>{stage.subtext}</p>
                  <div className="flex flex-col gap-1 w-full">
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
                </div>
                {/* Visual Side */}
                <div className={`flex justify-center items-center ${isImageLeft ? 'order-1' : ''}`}>
                  <div className="w-full max-w-md h-[340px] rounded-[40px] bg-[#f8f7f4] flex items-center justify-center overflow-hidden">
                    {stage.visual}
                  </div>
                </div>
              </div>
              {/* Remove the arrow between stages */}
              {/* (No arrow rendered here) */}
            </React.Fragment>
          );
        })}
      </section>
      {/* Review Section */}
      <ReviewSection />
      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center py-20 px-4">
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
              className="flex items-center w-full text-left focus:outline-none text-lg font-bold gap-4"
              style={{ color: '#e44782', fontFamily: 'Montserrat, Helvetica' }}
              onClick={() => setOpenIdx(open ? -1 : i)}
              aria-expanded={open}
            >
              <span
                className={`inline-block select-none transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}
                style={{ color: '#e44782', minWidth: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {/* Chevron SVG icon */}
                <svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 5l6 5-6 5" stroke="#e44782" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="flex-1 text-[#0f0f10] text-xl font-semibold group-hover:underline transition-all duration-200">
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

// ReviewSection component
const testimonials = [
  {
    quote: "Izzy is the absolute best in the business for Personal Branding! Her passion and enthusiasm is infectious. She helped me create a compelling personal brand that truly represents who I am and what I stand for. Her strategic approach and attention to detail are unmatched.",
    name: "Emily Hughes",
    title: "Wellness Founder",
    image: "/Emily.jpeg"
  },
  {
    quote: "Izzy made me feel confident and clear on what I need to do. Her passion and enthusiasm is infectious. I've become a lot more effective and efficient at LinkedIn thanks to her help. She truly understands how to build authentic personal brands that connect with your audience.",
    name: "Emma Abbasi",
    title: "Femtech Founder",
    image: "/Emma.jpeg"
  },
  {
    quote: "Izzy is the absolute best in the business for Personal Branding! She helped me create a compelling personal brand that truly represents who I am and what I stand for. Her strategic approach and attention to detail are unmatched. I've seen incredible results in my business since working with her.",
    name: "Jem Stein",
    title: "Purpose-led Founder",
    image: "/Jem.jpeg"
  },
  {
    quote: "Izzy provided guidance in LinkedIn content strategy for community-driven content and lead generation. Her strategic approach helped me build meaningful connections and grow my femtech platform. She's incredibly knowledgeable about building authentic personal brands.",
    name: "Ben Hughes",
    title: "GoFounder CEO",
    image: "/Ben.jpg"
  }
];

function ReviewSection() {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const t = testimonials[activeIdx];
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center py-24 px-4">
      <h2 className="text-5xl font-extrabold text-center mb-10" style={{ color: '#19213a', fontFamily: 'Montserrat, Helvetica' }}>
        What My Clients Say
      </h2>
      <blockquote className="italic text-2xl md:text-3xl text-center mb-8 max-w-3xl mx-auto" style={{ color: '#19213a', fontFamily: 'Inter, Helvetica', fontWeight: 400 }}>
        {`"${t.quote}"`}
      </blockquote>
      <div className="text-xl font-extrabold text-center mb-1" style={{ color: '#19213a', fontFamily: 'Montserrat, Helvetica' }}>
        {t.name}
      </div>
      <div className="text-base text-center mb-8 opacity-60" style={{ color: '#19213a', fontFamily: 'Inter, Helvetica' }}>
        {t.title}
      </div>
      <div className="flex gap-6 justify-center items-center">
        {testimonials.map((review, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`focus:outline-none transition-all duration-200 ${activeIdx === i ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
            aria-label={`Show testimonial from ${review.name}`}
          >
            <img src={review.image} alt={review.name} className="w-20 h-20 rounded-2xl object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
} 