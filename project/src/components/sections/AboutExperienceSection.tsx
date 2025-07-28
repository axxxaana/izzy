import React from 'react';
import { TYPOGRAPHY, COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/design-system';

const EXPERIENCE_ITEMS = [
  {
    year: "2020 - Present",
    title: "Fractional CMO & Brand Strategist",
    company: "Independent Consultant",
    description: "Working with femtech, healthtech, and social-impact startups to develop authentic brand strategies that drive growth and connection."
  },
  {
    year: "2018 - 2020",
    title: "Senior Marketing Director",
    company: "Digital Health Startup",
    description: "Led brand development and marketing strategy for a mental health platform, growing user base by 300% in 18 months."
  },
  {
    year: "2015 - 2018",
    title: "Brand Manager",
    company: "Traditional Marketing Agency",
    description: "Managed campaigns for Fortune 500 companies, but felt disconnected from the impact and authenticity of the work."
  }
];

const EXPERTISE_AREAS = [
  "Brand Strategy & Positioning",
  "Messaging & Copywriting",
  "Marketing Strategy",
  "Content Strategy",
  "Customer Research",
  "Brand Identity Design",
  "Go-to-Market Planning",
  "Social Impact Marketing"
];

export const AboutExperienceSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Timeline */}
          <div>
            <h2 className={`${TYPOGRAPHY.headings.h2.classes} text-left mb-6`}>
              Experience
            </h2>
            <div className="w-20 h-1 bg-[#e44782] mb-8"></div>
            
            <div className="space-y-8">
              {EXPERIENCE_ITEMS.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-[#e44782]">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#e44782] rounded-full"></div>
                  <div className="mb-2">
                    <span className={`${TYPOGRAPHY.body.small.classes} text-[#e44782] font-medium`}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className={`${TYPOGRAPHY.headings.h5.classes} mb-1`}>
                    {item.title}
                  </h3>
                  <p className={`${TYPOGRAPHY.body.medium.classes} text-[#e44782] mb-2`}>
                    {item.company}
                  </p>
                  <p className={`${TYPOGRAPHY.body.medium.classes} text-gray-600`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Expertise Areas */}
          <div>
            <h2 className={`${TYPOGRAPHY.headings.h2.classes} text-left mb-6`}>
              Expertise
            </h2>
            <div className="w-20 h-1 bg-[#e44782] mb-8"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPERTISE_AREAS.map((area, index) => (
                <div 
                  key={index}
                  className={`${BORDER_RADIUS.md} bg-gray-50 p-4 ${SHADOWS.sm} hover:${SHADOWS.md} transition-all duration-300`}
                >
                  <p className={`${TYPOGRAPHY.body.medium.classes} text-gray-800`}>
                    {area}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Specialization Note */}
            <div className={`${BORDER_RADIUS.lg} bg-gradient-to-r from-[#e44782] to-[#d13a6f] p-6 mt-8 ${SHADOWS.custom}`}>
              <h3 className={`${TYPOGRAPHY.headings.h5.classes} text-white mb-3`}>
                Specialized Focus
              </h3>
              <p className={`${TYPOGRAPHY.body.medium.classes} text-white`}>
                I specialize in working with femtech, healthtech, and social-impact founders who are building brands that genuinely improve people's lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 