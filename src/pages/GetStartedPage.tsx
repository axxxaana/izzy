import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/layout';
import { SimpleFooter } from '../components/SimpleFooter';
import { TYPOGRAPHY, COLORS, BORDER_RADIUS, SHADOWS } from '../constants/design-system';
import { BRAND_LOGOS } from '../constants/navigation';
import { CursorTrail } from '../components/CursorTrail';
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
    <div className="flex flex-col items-start w-full min-h-screen" style={{ backgroundColor: 'rgba(228, 71, 130, 0.1)' }}>
      {/* Cursor Trail Effect */}
      <CursorTrail />
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content - Full Height */}
      <section className="w-full flex-1 flex items-start pt-44 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-12">
          
          {/* Right Content Section - Calendly Widget (now first for left side) */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg px-12 pt-12 w-full calendly-container">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/wildmountainimmigration/15min-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=e44782" 
                style={{ minWidth: '320px', height: '550px' }}
              ></div>
            </div>
          </motion.div>

          {/* Left Content Section (now second for right side) */}
          <motion.div 
            className="space-y-4 max-w-lg lg:ml-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h1 
                className="text-gray-900 mb-6 font-semibold"
                style={{ fontSize: '70px', lineHeight: '1.1', fontFamily: 'Montserrat, Helvetica' }}
              >
                Let's talk.
              </h1>
            </motion.div>
            
            {/* Service Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <p 
                className={`${TYPOGRAPHY.body.large.classes} text-gray-600 leading-relaxed`}
                style={{ fontSize: '20px' }}
              >
                Ready to cut through complexity and build a brand that truly moves people?
              </p>
            </motion.div>
            
            {/* Benefits Section */}
            <div className="pt-4 pb-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-8 flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 max-w-none">
                    <p className="text-gray-700 text-base leading-relaxed max-w-4xl">
                      Articulate your unique story, why, values and vision, so every message feels authentic and memorable.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-8 flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 max-w-none">
                    <p className="text-gray-700 text-base leading-relaxed max-w-4xl">
                      Publish high-impact articles, LinkedIn posts and bylines without daily grind, making you the go-to expert.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-8 flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 max-w-none">
                    <p className="text-gray-700 text-base leading-relaxed max-w-4xl">
                      Pinpoint channels and cadence to amplify your voice, build trust and drive growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trusted By Section */}
            <div className="pb-16">
              <p className="text-gray-600 font-medium mb-4">
                trusted by
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
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <SimpleFooter />
    </div>
  );
}; 