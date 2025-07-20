import React from 'react';
import { TYPOGRAPHY, COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/design-system';

const VALUES = [
  {
    icon: "🎯",
    title: "Purpose-Driven",
    description: "Every strategy starts with understanding your mission and the real problems you're solving for your audience."
  },
  {
    icon: "💖",
    title: "Heart-First",
    description: "Authentic connections come from genuine care. Your brand should reflect the passion behind your mission."
  },
  {
    icon: "✨",
    title: "No Fluff",
    description: "Clear, compelling messaging that cuts through the noise and speaks directly to your audience's needs."
  },
  {
    icon: "🚀",
    title: "High Impact",
    description: "Strategic thinking that drives real business results while staying true to your brand's core values."
  }
];

export const AboutValuesSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`${TYPOGRAPHY.headings.h2.classes} text-center mb-6`}>
            My Values
          </h2>
          <div className="w-20 h-1 bg-[#e44782] mx-auto mb-8"></div>
          <p className={`${TYPOGRAPHY.body.large.classes} text-center max-w-3xl mx-auto`}>
            These core principles guide every brand strategy I create and every relationship I build with founders.
          </p>
        </div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, index) => (
            <div 
              key={index}
              className={`${BORDER_RADIUS.lg} bg-white p-8 ${SHADOWS.md} hover:${SHADOWS.lg} transition-all duration-300 group`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className={`${TYPOGRAPHY.headings.h5.classes} mb-4 text-[#e44782]`}>
                {value.title}
              </h3>
              <p className={`${TYPOGRAPHY.body.medium.classes} text-gray-600`}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`${TYPOGRAPHY.body.large.classes} mb-8`}>
            Ready to build a brand that truly connects with your audience?
          </p>
          <button className="bg-[#e44782] text-white font-montserrat text-base px-8 py-4 rounded-[0.84rem] hover:bg-white hover:text-[#e44782] hover:border-2 hover:border-[#e44782] transition-all duration-200">
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
}; 