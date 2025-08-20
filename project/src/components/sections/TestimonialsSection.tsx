import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TestimonialsSectionProps {
  additionalPadding?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ additionalPadding = "0" }) => {
  // Testimonials data
  const testimonials = [
    {
      name: 'Emily Hughes',
      role: 'Wellness Founder',
      text: "Izzy is the absolute best in the business for Personal Branding! Her passion and enthusiasm is infectious. She helped me create a compelling personal brand that truly represents who I am and what I stand for. Her strategic approach and attention to detail are unmatched.",
      image: '/Emily Hughes.jpeg',
    },
    {
      name: 'Sally Douglas',
      role: 'Author & Speaker',
      text: "Izzy made me feel confident and clear on what I need to do. Her passion and enthusiasm is infectious. I've become a lot more effective and efficient at LinkedIn thanks to her help. She truly understands how to build authentic personal brands that connect with your audience.",
      image: '/Sally Douglas.jpeg',
    },
    {
      name: 'Jem Stein',
      role: 'Purpose-led Founder',
      text: "Izzy is the absolute best in the business for Personal Branding! She helped me create a compelling personal brand that truly represents who I am and what I stand for. Her strategic approach and attention to detail are unmatched. I've seen incredible results in my business since working with her.",
      image: '/Jem Stein.jpeg',
    },
    {
      name: 'Emma Abbasi',
      role: 'Femtech Founder',
      text: "Izzy provided guidance in LinkedIn content strategy for community-driven content and lead generation. Her strategic approach helped me build meaningful connections and grow my femtech platform. She's incredibly knowledgeable about building authentic personal brands.",
      image: '/Emma Abbasi.jpeg',
    },
  ];

  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [fade, setFade] = useState(false);
  
  const handleTestimonialClick = (idx: number) => {
    if (idx === activeTestimonialIdx) return;
    setFade(true);
    setTimeout(() => {
      setActiveTestimonialIdx(idx);
      setFade(false);
    }, 250);
  };

  return (
    <motion.section 
      className="w-full flex flex-col items-center justify-center pt-10 pb-44 bg-white" 
      style={{ 
        background: '#fff', 
        width: '100%', 
        paddingTop: `calc(2.5rem + 20px + ${additionalPadding})`,
        paddingBottom: `calc(11rem + ${additionalPadding})`
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight" 
        style={{ fontFamily: 'Montserrat, Helvetica', color: '#091329' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Testimonials
      </motion.h2>
      <motion.div 
        className="w-full max-w-2xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          key={activeTestimonialIdx}
          className={`transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'} w-full`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: fade ? 0 : 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {['Jem Stein', 'Emma Abbasi'].includes(testimonials[activeTestimonialIdx].name) ? (
            <p className="w-full text-xl md:text-2xl text-center text-[#091329] font-normal italic mb-8 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica', lineHeight: '1.5', maxWidth: '44rem' }}>
              "{testimonials[activeTestimonialIdx].text}"
            </p>
          ) : (
            <p className="w-full text-xl md:text-2xl text-center text-[#091329] font-normal italic mb-8 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica', lineHeight: '1.5' }}>
              "{testimonials[activeTestimonialIdx].text}"
            </p>
          )}
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg md:text-xl text-[#091329]" style={{ fontFamily: 'Montserrat, Helvetica' }}>
              {testimonials[activeTestimonialIdx].name}
            </span>
            <span className="text-sm md:text-base text-[#091329]/50 mt-1" style={{ fontFamily: 'Inter, Helvetica' }}>
              {testimonials[activeTestimonialIdx].role}
            </span>
          </div>
        </motion.div>
        {/* Profile Image Carousel */}
        <motion.div 
          className="flex items-center justify-center gap-4 mt-12 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t, idx) => (
            <motion.button
              key={t.name}
              onClick={() => handleTestimonialClick(idx)}
              className="focus:outline-none bg-transparent p-0 m-0"
              aria-label={`Show testimonial from ${t.name}`}
              style={{ background: 'transparent' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                ease: "backOut", 
                delay: 0.8 + (idx * 0.1) 
              }}
              viewport={{ once: true, margin: "-100px" }}

            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-[0.84rem] border border-gray-200 transition-all duration-200 overflow-hidden flex items-center justify-center p-0 m-0
                  ${idx === activeTestimonialIdx ? 'opacity-100' : 'opacity-60 hover:opacity-90'} hover:brightness-110`}
                style={{ boxSizing: 'border-box', borderWidth: '1.5px' }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover rounded-[0.84rem] border-none p-0 m-0"
                  style={{ display: 'block' }}
                />
                              </div>
              </motion.button>
                      ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}; 