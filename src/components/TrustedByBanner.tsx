import React, { useEffect, useRef } from 'react';
import { TRUSTED_BY_LOGOS } from '../constants/trustedBy';

interface TrustedByBannerProps {
  className?: string;
}

export const TrustedByBanner: React.FC<TrustedByBannerProps> = ({ className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let position = 0;
    const speed = 1; // pixels per frame

    const animate = () => {
      position -= speed;
      scrollElement.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={`w-full h-[120px] mt-2 mx-auto flex items-center bg-white overflow-hidden ${className}`}>
      {/* Trusted by text */}
      <div className="mr-8 z-10 bg-white">
        <h2 className="font-medium text-black text-[28px]">
          Trusted by
        </h2>
      </div>

      {/* Scrolling logos */}
      <div 
        ref={scrollRef}
        className="flex items-center space-x-8"
        style={{ transform: 'translateX(0px)' }}
      >
        {/* Double the logos for seamless loop */}
        {TRUSTED_BY_LOGOS.map((logo, index) => (
          <div key={`first-${index}`} className="flex items-center">
            <img 
              src={logo.image!} 
              alt={logo.name}
              className="max-h-16 w-auto object-contain"
            />
          </div>
        ))}
        {TRUSTED_BY_LOGOS.map((logo, index) => (
          <div key={`second-${index}`} className="flex items-center">
            <img 
              src={logo.image!} 
              alt={logo.name}
              className="max-h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 