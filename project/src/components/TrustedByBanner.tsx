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
    const speed = 1.5; // Standardized speed for all pages

    const animate = () => {
      position -= speed;
      
      const logoSetWidth = scrollElement.scrollWidth / 4;
      if (position <= -logoSetWidth) {
        position = 0;
      }
      
      scrollElement.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  // Helper to get logo height
  const getLogoHeight = (size: string, name: string) => {
    if (name === 'Dream Factory') return 'h-12'; // Custom: between small and medium
    if (size === 'large') return 'h-24'; // 96px
    if (size === 'small') return 'h-10'; // 40px
    return 'h-16'; // 64px (default/medium)
  };

  return (
    <div className={`w-full h-[80px] sm:h-[100px] lg:h-[120px] mt-2 mx-auto flex items-center overflow-hidden ${className}`}>
      <div className="w-full relative overflow-hidden">


        <div 
          ref={scrollRef}
          className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6"
          style={{ transform: 'translateX(0px)', minWidth: '100vw' }}
        >
          {/* Multiple logo sets for seamless loop */}
          {TRUSTED_BY_LOGOS.map((logo, index) => (
            <img 
              key={`first-${index}`}
              src={logo.image!} 
              alt={logo.name}
              className={`${getLogoHeight(logo.size, logo.name)} w-auto${logo.name === 'Unlock Your Block' ? ' -ml-2 sm:-ml-3 lg:-ml-4' : ''}${logo.name === 'Nexu' ? ' mr-16 sm:mr-24 lg:mr-32' : ''}`}
              style={logo.name === 'Dear Bump' ? { marginRight: '5px' } : logo.name === 'Dream Factory' ? { marginLeft: '20px' } : {}}
            />
          ))}
          {TRUSTED_BY_LOGOS.map((logo, index) => (
            <img 
              key={`second-${index}`}
              src={logo.image!} 
              alt={logo.name}
              className={`${getLogoHeight(logo.size, logo.name)} w-auto${logo.name === 'Unlock Your Block' ? ' -ml-2 sm:-ml-3 lg:-ml-4' : ''}${logo.name === 'Nexu' ? ' mr-16 sm:mr-24 lg:mr-32' : ''}`}
              style={logo.name === 'Dear Bump' ? { marginRight: '5px' } : logo.name === 'Dream Factory' ? { marginLeft: '20px' } : {}}
            />
          ))}
          {TRUSTED_BY_LOGOS.map((logo, index) => (
            <img 
              key={`third-${index}`}
              src={logo.image!} 
              alt={logo.name}
              className={`${getLogoHeight(logo.size, logo.name)} w-auto${logo.name === 'Unlock Your Block' ? ' -ml-2 sm:-ml-3 lg:-ml-4' : ''}${logo.name === 'Nexu' ? ' mr-16 sm:mr-24 lg:mr-32' : ''}`}
              style={logo.name === 'Dear Bump' ? { marginRight: '5px' } : logo.name === 'Dream Factory' ? { marginLeft: '20px' } : {}}
            />
          ))}
          {TRUSTED_BY_LOGOS.map((logo, index) => (
            <img 
              key={`fourth-${index}`}
              src={logo.image!} 
              alt={logo.name}
              className={`${getLogoHeight(logo.size, logo.name)} w-auto${logo.name === 'Unlock Your Block' ? ' -ml-2 sm:-ml-3 lg:-ml-4' : ''}${logo.name === 'Nexu' ? ' mr-16 sm:mr-24 lg:mr-32' : ''}`}
              style={logo.name === 'Dear Bump' ? { marginRight: '5px' } : logo.name === 'Dream Factory' ? { marginLeft: '20px' } : {}}
            />
          ))}

        </div>
      </div>
    </div>
  );
}; 