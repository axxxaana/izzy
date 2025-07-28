import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/layout';
import { SimpleFooter } from '../components/SimpleFooter';
import { TYPOGRAPHY, COLORS, BORDER_RADIUS, SHADOWS } from '../constants/design-system';
import { BRAND_LOGOS } from '../constants/navigation';
import { CursorTrail } from '../components/CursorTrail';
import './GetStartedPage.css';

export const GetStartedPage: React.FC = () => {
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
      <section className="w-full flex-1 flex items-start pt-[136px] pb-8 px-4 sm:px-6 lg:px-8">
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
                className={`${TYPOGRAPHY.body.large.classes} text-gray-600`}
                style={{ fontSize: '20px', lineHeight: '1.4' }}
              >
                Whether you're building your personal brand or scaling your startup it starts with clarity.
              </p>
            </motion.div>
            
            {/* Benefits Section */}
            <div className="pt-4 pb-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-8 flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <img src="/check-list-marketing.svg" alt="Check list" className="w-[40px] h-[40px]" />
                    </div>
                  </div>
                  <div className="flex-1 max-w-none">
                    <p className="text-gray-700 text-base leading-relaxed max-w-4xl">
                      We'll sharpen your story so it actually connects not just sounds good on paper.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-8 flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <img src="/announcement-marketing.svg" alt="Announcement" className="w-[40px] h-[40px]" />
                    </div>
                  </div>
                  <div className="flex-1 max-w-none">
                    <p className="text-gray-700 text-base leading-relaxed max-w-4xl">
                      We'll create high-impact content that builds trust and authority without draining your time.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-8 flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <img src="/eye-marketing.svg" alt="Eye" className="w-[40px] h-[40px]" />
                    </div>
                  </div>
                  <div className="flex-1 max-w-none">
                    <p className="text-gray-700 text-base leading-relaxed max-w-4xl">
                      We'll map a visibility strategy that fits your energy and goals and drives real growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trusted By Section */}
            <div className="pb-16">
              <p className="text-black font-medium mb-4">
                Trusted By
              </p>
              <div className="grid grid-cols-3 gap-x-12 gap-y-8 items-center justify-items-center">
                <div className="flex justify-center items-center logo-item">
                  <img src="/parent-promise-grey.png" alt="Parent Promise" className="h-auto w-auto object-contain" style={{maxHeight: '50px', maxWidth: '110px'}} />
                </div>
                <div className="flex justify-center items-center logo-item">
                  <img src="/Ninjas-in-pyjamas.png" alt="Ninjas in Pyjamas" className="h-auto w-auto object-contain" style={{maxHeight: '50px', maxWidth: '110px', marginLeft: '-10px'}} />
                </div>
                <div className="flex justify-center items-center logo-item">
                  <img src="/dear-bump-logo-gray.png" alt="Dear Bump" className="h-auto w-auto object-contain" style={{maxHeight: '50px', maxWidth: '90px', marginLeft: '-24px'}} />
                </div>
                <div className="flex justify-center items-center logo-item">
                  <img src="/make-us-care.png" alt="Make Us Care" className="h-auto w-auto object-contain" style={{maxHeight: '50px', maxWidth: '100px'}} />
                </div>
                <div className="flex justify-center items-center logo-item">
                  <img src="/gofounder-logo.png" alt="GoFounder" className="h-auto w-auto object-contain" style={{maxHeight: '50px', maxWidth: '100px', marginLeft: '-10px'}} />
                </div>
                <div className="flex justify-center items-center logo-item">
                  <img src="/nexu-logo-grey.png" alt="Nexu" className="h-auto w-auto object-contain" style={{maxHeight: '50px', maxWidth: '100px', marginLeft: '-24px'}} />
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