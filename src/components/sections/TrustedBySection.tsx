import React from 'react';
import { TRUSTED_BY_LOGOS } from '../../constants/trustedBy';

interface TrustedBySectionProps {
  className?: string;
}

export const TrustedBySection: React.FC<TrustedBySectionProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-[120px] mt-6 mx-auto flex items-center relative overflow-hidden bg-white ${className}`}>
      {/* Trusted by text - fixed on left */}
      <div className="absolute left-8 z-30 bg-white">
        <h2 className="[font-family:'Montserrat',Helvetica] font-medium text-black text-[28px] tracking-[0] leading-[32px] whitespace-nowrap">
          Trusted by
        </h2>
      </div>

      {/* Scrolling logos container */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full">
        <div className="flex items-center animate-scroll">
          {/* Multiple sets of logos for seamless loop */}
          <div className="flex items-center space-x-12 ml-96">
            {TRUSTED_BY_LOGOS.map((logo, index) => (
              <div key={`set1-${index}`} className="flex items-center">
                <img 
                  src={logo.image!} 
                  alt={logo.name}
                  className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Second set */}
          <div className="flex items-center space-x-12 ml-12">
            {TRUSTED_BY_LOGOS.map((logo, index) => (
              <div key={`set2-${index}`} className="flex items-center">
                <img 
                  src={logo.image!} 
                  alt={logo.name}
                  className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Third set */}
          <div className="flex items-center space-x-12 ml-12">
            {TRUSTED_BY_LOGOS.map((logo, index) => (
              <div key={`set3-${index}`} className="flex items-center">
                <img 
                  src={logo.image!} 
                  alt={logo.name}
                  className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 