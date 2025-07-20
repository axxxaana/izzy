import React, { useState, useEffect } from 'react';

export const AboutStorySection: React.FC = () => {
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

    const element = document.querySelector('.stats-section');
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
    <section className="w-full bg-gradient-to-r from-[#e447821a] via-white to-[#e447821a] py-32 md:py-40">
      <div className="flex flex-col md:flex-row gap-16 px-6 max-w-[1120px] mx-auto items-start">
        {/* LEFT: STORY BLOCK */}
        <div className="md:w-1/2">
          <div className="bg-white p-10 md:p-14 rounded-[20px] shadow-md max-w-[720px] transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
            <p className="text-sm font-semibold text-[#e44782] mb-4">How It Started</p>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6 font-['Montserrat']">
              Helping Founders Cut Through the Noise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-[720px]">
              I started my career in traditional marketing—working with big brands, ticking the boxes, and following the playbook.
              But it never felt meaningful. I craved more than performance metrics—I wanted purpose.
              <br /><br />
              That shifted when I discovered femtech and healthtech. Founders solving real human problems—but struggling to express their value in a way that landed.
              I saw a gap: not more marketing, but clearer storytelling.
              <br /><br />
              Now, I help early-stage startups and purpose-led founders untangle their brand decks, find their voice, and show up in a way that actually converts.
              It's not about fluff. It's about building brands that make people feel something—and act.
            </p>
          </div>
        </div>

        {/* RIGHT: IMAGE + CARDS */}
        <div className="md:w-1/2 flex flex-col gap-10">
          
          {/* IMAGE SECTION */}
          <div className="rounded-[20px] overflow-hidden shadow-lg">
            <img 
              src="https://picsum.photos/800/700?random=1"
              alt="Professional business setting" 
              className="w-full h-[500px] object-cover"
              width="800"
              height="700"
            />
          </div>

          {/* STATS GRID */}
          <div className="stats-section grid grid-cols-2 gap-3">
            <div className="bg-white rounded-[20px] p-8 shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-start space-y-3">
                <h3 className="text-4xl font-black text-[#e44782] leading-none transition-all duration-500">
                  {counts.brands}+
                </h3>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Brands Untangled</p>
              </div>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-start space-y-3">
                <h3 className="text-4xl font-black text-[#e44782] leading-none transition-all duration-500">
                  {counts.retention}%
                </h3>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Client Retention</p>
              </div>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-start space-y-3">
                <h3 className="text-4xl font-black text-[#e44782] leading-none transition-all duration-500">
                  {counts.years}+
                </h3>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Years in Strategy</p>
              </div>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-start space-y-3">
                <h3 className="text-4xl font-black text-[#e44782] leading-none transition-all duration-500">
                  {counts.projects}+
                </h3>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 