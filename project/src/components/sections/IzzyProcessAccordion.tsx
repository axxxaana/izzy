import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProcessStep {
  title: string;
  bgColor: string;
  textColor: string;
  contentText: string;
  tags: string[];
}

const processSteps: ProcessStep[] = [
  {
    title: "Strategy",
    bgColor: "#F8F9FA",
    textColor: "#1e1e1e",
    contentText: "Before any brand shows up boldly, it needs to get clear. This is where we go deep into your goals, your audience, and your positioning. We define what sets you apart and shape a foundation that guides every move.",
    tags: []
  },
  {
    title: "Voice",
    bgColor: "#F8F9FA",
    textColor: "#1e1e1e",
    contentText: "Forget bloated decks and buzzword soup. This is where we sharpen your message. We craft clear, human, confident language that sounds like you and actually connects.",
    tags: []
  },
  {
    title: "Visibility",
    bgColor: "#F8F9FA",
    textColor: "#1e1e1e",
    contentText: "Now we bring it to life. From content systems to design direction, we shape how your brand shows up with consistency, intention, and impact.",
    tags: []
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
    y: 40,
    scale: 0.95
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

export const IzzyProcessAccordion: React.FC = () => {
  return (
    <section className="w-full bg-white py-32 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side - Sticky Title */}
          <div className="lg:sticky lg:top-48 lg:h-fit order-2 lg:order-1">
            <motion.div 
              className="text-center lg:text-left mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white border border-[#e44782] rounded-lg mb-6">
                <span className="text-[#e44782] text-sm font-bold tracking-widest uppercase">THE PROCESS</span>
              </div>
              
              {/* Main Title */}
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-gray-900 mb-6 font-['Montserrat'] tracking-tight leading-[1.1]">
                A Brand Process That Actually Works
              </h2>
              
              {/* Subtitle */}
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed mb-8 max-w-[480px] mx-auto lg:mx-0">
                A clear, human, and commercially-minded journey to brand clarity built to cut through the noise, simplify decisions, and drive results that actually move the needle.
              </p>
              
              {/* Book a Call Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link to="/get-started">
                  <motion.button 
                    className="px-5 py-3 bg-[#e44782] text-white font-['Montserrat'] font-semibold text-base hover:bg-white hover:text-[#e44782] transition-all duration-300 border-2 border-[#e44782] rounded-[0.84rem] "
                    style={{ fontFamily: "Montserrat, Helvetica, Arial, sans-serif" }}
                  >
                    Book a Call
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Process Steps */}
          <motion.div 
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                custom={index}
              >
                {/* Step Card */}
                <div 
                  className="relative rounded-[20px] lg:rounded-[24px] p-8 lg:p-12 shadow-lg hover:shadow-xl transform transition-all duration-500 ease-out overflow-hidden"
                  style={{ backgroundColor: step.bgColor }}
                >
                  {/* Large Background Number */}
                  <div 
                    className="absolute top-3 right-3 lg:top-4 lg:right-4 text-[80px] lg:text-[120px] font-black opacity-100 leading-none pointer-events-none"
                    style={{ color: "#a8e10c" }}
                  >
                    {index + 1}
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-[28px] lg:text-[40px] font-bold font-['Montserrat'] leading-tight mb-8 lg:mb-12 relative z-10"
                    style={{ color: step.textColor }}
                  >
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-[15px] lg:text-[16px] leading-relaxed mb-6 lg:mb-8 opacity-90"
                    style={{ color: step.textColor }}
                  >
                    {step.contentText}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[13px] font-medium px-3 py-1.5 rounded-full border transition-all duration-200 hover:shadow-sm"
                        style={{
                          color: step.textColor,
                          borderColor: step.textColor,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 