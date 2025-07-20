import React, { useEffect } from 'react';
import { Navigation } from '../components/layout';
import { TYPOGRAPHY, COLORS, BORDER_RADIUS, SHADOWS } from '../constants/design-system';
import { BRAND_LOGOS } from '../constants/navigation';
import './GetStartedPage.css';

export const GetStartedPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-start w-full bg-gray-50 min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content - Full Height */}
      <section className="w-full flex-1 flex items-start pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-8">
          
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div>
              <h1 
                className={`${TYPOGRAPHY.headings.h1.classes} text-gray-900 mb-6`}
                style={{ fontSize: '64px', lineHeight: '1.1' }}
              >
                Let's talk.
              </h1>
            </div>
            
            {/* Service Description */}
            <div>
              <p 
                className={`${TYPOGRAPHY.body.large.classes} text-gray-600 leading-relaxed`}
                style={{ fontSize: '20px' }}
              >
                Ready to cut through complexity and build a brand that truly moves people?
              </p>
            </div>
            
            {/* Benefits Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Talk to me today to:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Audit your brand—map competitors, analyze every touchpoint and uncover hidden story gaps</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Sharpen your messaging and visual identity for clarity and impact</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Design a data-driven strategy that drives real growth</span>
                </li>
              </ul>
            </div>
            
            {/* Trusted By Section */}
            <div>
              <p className="text-gray-600 font-medium mb-4">
                Trusted by purpose-led startups and social-impact innovators.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-gray-400 text-lg font-medium hover:text-gray-600 transition-colors duration-300 logo-item">
                  Indeed
                </div>
                <div className="text-gray-400 text-lg font-medium hover:text-gray-600 transition-colors duration-300 logo-item">
                  accuRx
                </div>
                <div className="text-gray-400 text-lg font-medium hover:text-gray-600 transition-colors duration-300 logo-item">
                  Brella
                </div>
                <div className="text-gray-400 text-lg font-medium hover:text-gray-600 transition-colors duration-300 logo-item">
                  VISMA
                </div>
                <div className="text-gray-400 text-lg font-medium hover:text-gray-600 transition-colors duration-300 logo-item">
                  showbie
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content Section - Calendly Widget */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg px-12 pt-12 w-full calendly-container">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/wildmountainimmigration/15min-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=e44782" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
              

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 