import React from 'react';
import { motion } from 'framer-motion';

interface Value {
  title: string;
  text: string;
  delay: number;
}

const values: Value[] = [
  {
    title: "No Fluff",
    text: "Clear, concise messaging that earns attention and drives action. No jargon. No BS.",
    delay: 0
  },
  {
    title: "Heart-First",
    text: "Brands aren't built by logic alone. I help you connect through emotion, clarity, and care.",
    delay: 150
  },
  {
    title: "High Impact",
    text: "Strategy that drives real results — not just prettier decks.",
    delay: 300
  },
  {
    title: "Purpose-Driven",
    text: "Every decision ties back to your mission and the audience you serve.",
    delay: 450
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.92
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const MyValuesAnimated: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#fff4f7] to-white py-32 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-24"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#0f0f10] text-[48px] md:text-[56px] text-center tracking-[-0.02em] leading-[1.1] mb-6">
            My Values
          </h2>
          <p className="[font-family:'Inter',Helvetica] text-[18px] font-medium text-[#4a4a4a] max-w-2xl mx-auto leading-[1.6]">
            What guides every brand strategy I create.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-[32px] p-8 md:p-10 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)] transform transition-all duration-500 ease-out cursor-pointer overflow-hidden"
              variants={itemVariants}
              custom={value.delay}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e4478208] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-[32px]"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="[font-family:'Montserrat',Helvetica] text-[28px] md:text-[32px] font-semibold text-[#0f0f10] mb-4 tracking-[-0.02em] leading-[1.2]">
                  {value.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] text-[16px] md:text-[17px] font-medium text-[#4a4a4a] leading-[1.7]">
                  {value.text}
                </p>
              </div>

              {/* Subtle border animation */}
              <div className="absolute inset-0 rounded-[32px] border border-[#e4478208] group-hover:border-[#e447821a] transition-colors duration-500 ease-out"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 