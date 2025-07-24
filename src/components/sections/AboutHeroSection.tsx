import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const AboutHeroSection: React.FC = () => {
  const [counts, setCounts] = useState({
    brands: 0,
    retention: 0,
    years: 0,
    projects: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.hero-stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const animateCount = (target: number, setter: (value: number) => void) => {
        let current = 0;
        const increment = target / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setter(Math.floor(current));
        }, stepDuration);
      };

      animateCount(10, (value) => setCounts(prev => ({ ...prev, brands: value })));
      animateCount(93, (value) => setCounts(prev => ({ ...prev, retention: value })));
      animateCount(5, (value) => setCounts(prev => ({ ...prev, years: value })));
      animateCount(20, (value) => setCounts(prev => ({ ...prev, projects: value })));
    }
  }, [isVisible]);

  return (
    <div className="w-full relative mb-0">
      <div className="w-full h-[700px] relative p-3 sm:p-4 lg:p-[15px]">
        <div className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
          <div className="relative h-full">
            <div className="absolute w-full h-full top-0 left-0">
              <div className="relative h-full">
                <div className="absolute w-full h-full top-0 left-0 bg-white opacity-10 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]" />
                <div className="absolute w-full h-full top-0 left-0 [background:url('/about-izzy-hero.png')_50%_40%_/_cover] rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]">
                </div>
              </div>
            </div>

            {/* Hero Header - Moved Lower */}
            <div className="absolute bottom-[80px] sm:bottom-[100px] lg:bottom-[120px] right-[80px] sm:right-[100px] lg:right-[120px] px-4 text-right">
              <h1 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[75px] text-right tracking-[-1.2px] leading-[1.1] mb-8 text-shadow-medium">
                About Izzy
              </h1>
              
              {/* Minimalistic Stats Section */}
              <div className="hero-stats-section relative max-w-[400px] ml-auto">
                <motion.div 
                  className="grid grid-cols-2 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {/* Stat 1 */}
                  <motion.div 
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-baseline justify-center gap-1 mb-3">
                      <h3 className="text-[36px] font-black text-[#F261A5] leading-none transition-all duration-500 ease-out">
                        {counts.brands}
                      </h3>
                      <span className="text-[24px] font-black text-[#F261A5]">+</span>
                    </div>
                    <p className="text-[12px] font-medium text-[#6E6E6E] uppercase tracking-[0.15em] leading-tight">Brands Untangled</p>
                  </motion.div>

                  {/* Stat 2 */}
                  <motion.div 
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-baseline justify-center gap-1 mb-3">
                      <h3 className="text-[36px] font-black text-[#F261A5] leading-none transition-all duration-500 ease-out">
                        {counts.retention}
                      </h3>
                      <span className="text-[24px] font-black text-[#F261A5]">%</span>
                    </div>
                    <p className="text-[12px] font-medium text-[#6E6E6E] uppercase tracking-[0.15em] leading-tight">Client Retention</p>
                  </motion.div>

                  {/* Stat 3 */}
                  <motion.div 
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-baseline justify-center gap-1 mb-3">
                      <h3 className="text-[36px] font-black text-[#F261A5] leading-none transition-all duration-500 ease-out">
                        {counts.years}
                      </h3>
                      <span className="text-[24px] font-black text-[#F261A5]">+</span>
                    </div>
                    <p className="text-[12px] font-medium text-[#6E6E6E] uppercase tracking-[0.15em] leading-tight">Years in Strategy</p>
                  </motion.div>

                  {/* Stat 4 */}
                  <motion.div 
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-baseline justify-center gap-1 mb-3">
                      <h3 className="text-[36px] font-black text-[#F261A5] leading-none transition-all duration-500 ease-out">
                        {counts.projects}
                      </h3>
                      <span className="text-[24px] font-black text-[#F261A5]">+</span>
                    </div>
                    <p className="text-[12px] font-medium text-[#6E6E6E] uppercase tracking-[0.15em] leading-tight">Projects Delivered</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 