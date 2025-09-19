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
        <h2 className="[font-family:'Anton',Helvetica] font-medium text-black text-[28px] tracking-[0] leading-[32px] whitespace-nowrap">
          Trusted by
        </h2>
      </div>

      {/* Scrolling logos container */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full">
        <div className="flex items-center animate-scroll">
          {/* Multiple sets of logos for seamless loop */}
          <div className="flex items-center ml-24">
            {TRUSTED_BY_LOGOS.map((logo, index) => {
              let marginStyle = {};
              if (logo.name === 'Nexu') marginStyle = { marginLeft: 10, marginRight: 18 };
              else if (logo.name === 'DF') marginStyle = { marginLeft: 18, marginRight: 18 };
              else if (logo.name === 'GoFounder') marginStyle = { marginLeft: 18, marginRight: 18 };
              else if (logo.name === 'Make Us Care') marginStyle = { marginLeft: 18, marginRight: 18 };
              else if (logo.name === 'Ninjas in Pyjamas') marginStyle = { marginLeft: 18, marginRight: 18 };
              else if (logo.name === 'Dear Bump') marginStyle = { marginLeft: 18, marginRight: 18 };
              return (
                <div
                  key={`set1-${index}`}
                  className="flex items-center"
                  style={marginStyle}
                >
                  <img 
                    src={logo.image!} 
                    alt={logo.name}
                    className={`w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300${logo.name === 'Ninjas in Pyjamas' ? ' h-24' : ' h-20'}`}
                  />
                </div>
              );
            })}
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