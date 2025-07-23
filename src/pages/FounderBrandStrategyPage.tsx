import React, { useEffect, useState } from 'react';
import { Navigation } from '../components/layout';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { TrustedByBanner } from '../components/TrustedByBanner';
import { IdealClientSection } from '../components/sections';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';

const ROTATING_WORDS = [
  'Unforgettable',
  'Respected',
  'Trusted',
  'Relatable',
];

export const FounderBrandStrategyPage: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFade(false);
      }, 350); // fade out duration
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full bg-white" style={{ minHeight: 'auto', height: 'auto', flexWrap: 'nowrap' }}>
      {/* Hero Section (with text content) */}
      <div className="w-full relative mb-0">
        <div className="w-full h-[700px] relative p-3 sm:p-4 lg:p-[15px] pt-24">
          <div className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
            <div className="relative h-full">
              <div className="absolute w-full h-full top-0 left-0">
                <div className="relative h-full">
                  <div className="absolute w-full h-full top-0 left-0 bg-white opacity-10 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]" />
                  <div
                    className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]"
                    style={{
                      background: 'rgba(228, 71, 130, 0.2)',
                    }}
                  >
                    <Navigation />
                  </div>
                </div>
              </div>
              {/* Hero Content - Text Only */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-32 pb-32" style={{ paddingTop: 'calc(8rem + 50px)' }}>
                <span className="inline-block mb-6 px-6 py-2 rounded-full bg-white text-lg font-semibold shadow-sm" style={{ color: '#e44782', background: '#fff', fontFamily: 'Inter, Helvetica' }}>
                  FOUNDERS
                </span>
                <h1 className="max-w-4xl mx-auto text-[40px] md:text-[64px] font-extrabold text-center mb-4 leading-[1.1]" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica', letterSpacing: '-2px' }}>
                  Build a Personal Brand That Makes You{' '}
                  <span
                    className={`inline-block transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
                    style={{ color: '#e44782', minWidth: 120, transition: 'opacity 0.3s' }}
                  >
                    {ROTATING_WORDS[currentWordIndex]}
                  </span>
                </h1>
                <p className="max-w-2xl text-center text-[20px] text-[#0f0f10] opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>
                  Shape your story, sharpen your message, and grow your reputation, all without posting every day. This is brand strategy for founders who want to lead with purpose, not noise.
                </p>
                <button className="mt-8 px-8 py-4 rounded-full bg-[#e44782] text-white text-xl font-semibold shadow-lg hover:bg-[#c13e74] transition-all duration-200" style={{ fontFamily: 'Montserrat, Helvetica' }}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logo Scroller */}
      <TrustedByBanner />
      {/* Who it's for feature cards section */}
      <IdealClientSection />
      {/* How It Works Section Heading */}
      <div className="w-full flex flex-col items-center justify-center mb-10">
        <h2 className="text-[40px] font-extrabold text-center mb-4" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>
          How It Works
        </h2>
        <p className="text-lg text-center max-w-2xl opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>
          No fluff. Just a clear, proven system to turn your story into a magnetic personal brand — without burning out or posting every day.
        </p>
      </div>
      {/* How It Works Section */}
      <HowItWorksSection />
      {/* Ideal Client Section */}
      <FooterSection />
    </div>
  );
}; 