import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';

interface Value {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  delay: number;
}

const values: Value[] = [
  {
    title: "Purpose-Driven",
    text: "This isn't marketing for the sake of it. I work with founders who care. Strategy starts with clarity, not campaigns. We define the real problem you solve and anchor every message in what actually matters.",
    image: "/about-purpose-driven.png",
    imageAlt: "Purpose-driven strategy illustration",
    delay: 0
  },
  {
    title: "Heart-First",
    text: "People buy into people. I help you show up with honesty and care. Your message should feel human, not hollow. It's grounded in your values, your story, and the emotions that create lasting connection.",
    image: "/about-heart-first.png",
    imageAlt: "Heart-first approach illustration",
    delay: 150
  },
  {
    title: "No Fluff",
    text: "No jargon. No filler. Just clear, sharp messaging that makes people feel something and take action. Language that reflects who you are and what you stand for without sounding like everyone else.",
    image: "/about-no-fluff.png",
    imageAlt: "No fluff messaging illustration",
    delay: 300
  },
  {
    title: "High Impact",
    text: "Every word, every move, every channel earns its place. Strategy should drive growth that actually sticks. It turns your vision into execution that scales, resonates, and delivers measurable results that matter.",
    image: "/about-high-impact.png",
    imageAlt: "High impact results illustration",
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
            The principles behind every brand I help build.
          </p>
        </motion.div>

        {/* Values Grid - 2x2 Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mb-16"
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
              <Card className="w-full h-[500px] shadow-[0px_4.8px_4.8px_-6px_#130c3e40,0px_0px_0px_1.2px_#130c3e1c,0px_2.4px_9.6px_-1.2px_#130c3e0a] bg-[linear-gradient(180deg,rgba(228,71,130,0.2)_0%,rgba(228,71,130,0.1)_50%,rgba(228,71,130,0)_100%)] rounded-3xl overflow-hidden transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]">
                <CardContent className="p-0 h-full">
                  <div className="px-12 pt-8 pb-12 h-full flex flex-col">
                    {/* Image Section */}
                    <div className="relative mb-6 flex-shrink-0">
                      <img
                        className="w-[40%] rounded-lg mx-auto"
                        alt={value.imageAlt}
                        src={value.image}
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          e.currentTarget.src = "https://picsum.photos/200/150?random=" + (index + 1);
                        }}
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#091329] text-[40px] tracking-[-0.26px] leading-[46px] mb-4 flex-shrink-0">
                        {value.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#091329] text-[16px] tracking-[0] leading-[25.2px] pr-4 flex-1 pb-8">
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