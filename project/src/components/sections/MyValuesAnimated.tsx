import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';

interface Value {
  title: string;
  text: string;
  icon: React.ReactElement;
  delay: number;
}

const values: Value[] = [
  {
    title: "Purpose-Driven",
    text: "Strategy starts with clarity, not campaigns. We define the problem and anchor every message in what matters.",
    icon: (
      <img src="/eye-marketing.svg" alt="Eye Marketing" width="36" height="36" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(99%) saturate(1234%) hue-rotate(60deg) brightness(101%) contrast(101%)' }} />
    ),
    delay: 0
  },
  {
    title: "Heart-First",
    text: "People buy into people. I help you show up with honesty and care. Your message should feel human, not hollow.",
    icon: (
      <img src="/heart.svg" alt="Heart" width="36" height="36" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(99%) saturate(1234%) hue-rotate(60deg) brightness(101%) contrast(101%)' }} />
    ),
    delay: 150
  },
  {
    title: "No Fluff",
    text: "No jargon. No filler. Just clear, sharp messaging that makes people feel something and take action.",
    icon: (
      <img src="/time.svg" alt="Time" width="36" height="36" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(99%) saturate(1234%) hue-rotate(60deg) brightness(101%) contrast(101%)' }} />
    ),
    delay: 300
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
    <section className="w-full py-12 md:py-20 rounded-[25px]" style={{ backgroundColor: 'rgba(228, 71, 130, 0.2)' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#0f0f10] text-[48px] md:text-[56px] text-center leading-[1.1] mb-2">
            My Values
          </h2>
          <p className="[font-family:'Inter',Helvetica] text-[18px] text-[#4a4a4a] max-w-2xl mx-auto leading-[1.6]">
            The principles behind every brand I help build.
          </p>
        </motion.div>

        {/* Values Grid - Single Row Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="w-full"
              variants={itemVariants}
              custom={value.delay}
            >
              <Card className="w-full bg-white border border-[#ececec] shadow-md rounded-3xl overflow-hidden transform transition-all duration-200 hover:shadow-xl hover:border-[#e44782] group">
                <CardContent className="p-0">
                  <div className="px-16 pt-16 pb-16 flex flex-col items-center text-center">
                    {/* Icon Section */}
                    <div className="relative mb-6 flex-shrink-0 flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-[#F8F9FA] flex items-center justify-center shadow group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200">
                        {value.icon}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex flex-col items-center">
                      <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#e44782] text-[24px]  leading-[30px] mb-4 flex-shrink-0 text-center">
                        {value.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#091329] text-[16px] tracking-[0] leading-[25.2px] text-center">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 