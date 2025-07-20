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
      <section className="w-full flex-1 flex items-center pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
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
                Izzy Prior Brand Marketing is the easiest way to transform your brand with 
                <span className="text-pink-600 font-semibold"> NO-FLUFF</span> branding that just works.
              </p>
            </div>
            
            {/* Benefits Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Talk to our team today to:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Understand how our branding approach fits your business needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Discover our capabilities and get answers to your questions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Get a customized quote for your branding project</span>
                </li>
              </ul>
            </div>
            
            {/* Trusted By Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Trusted by:
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {BRAND_LOGOS.slice(0, 6).map((logo, index) => (
                  <div 
                    key={index} 
                    className="text-gray-400 text-lg font-medium hover:text-gray-600 transition-colors duration-300 logo-item"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Content Section - Calendly Widget */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full calendly-container">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule Your Free Consultation</h3>
                <p className="text-gray-600 text-sm">15-minute call to discuss your branding needs</p>
              </div>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/wildmountainimmigration/15min-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=e44782" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
              
              {/* Fallback Link */}
              <div className="mt-4 text-center">
                <a 
                  href="https://calendly.com/wildmountainimmigration/15min-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=e44782" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-pink-600 hover:text-pink-700 transition-colors duration-200 font-medium"
                >
                  Can't see the calendar? Click here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 