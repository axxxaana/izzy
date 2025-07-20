import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TRUSTED_BY_LOGOS, TRUSTED_BY_CONFIG, TrustedByLogo } from '../constants/trustedBy';

interface TrustedByBannerProps {
  className?: string;
}

export const TrustedByBanner: React.FC<TrustedByBannerProps> = ({ className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle keyboard accessibility
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    // Keyboard controls removed - banner now auto-scrolls continuously
  }, []);

  // Smooth animation control using requestAnimationFrame
  const animate = useCallback(() => {
    if (!scrollRef.current || prefersReducedMotion) return;

    const pixelsPerFrame = isHovered ? TRUSTED_BY_CONFIG.scrollSpeed.slow : TRUSTED_BY_CONFIG.scrollSpeed.normal;
    
    if (pixelsPerFrame > 0) {
      const currentTransform = scrollRef.current.style.transform;
      const currentX = currentTransform ? parseFloat(currentTransform.match(/translateX\(([-\d.]+)px\)/)?.[1] || '0') : 0;
      const newX = currentX - pixelsPerFrame;
      
      // Reset position for seamless loop
      const containerWidth = scrollRef.current.scrollWidth / 2;
      const resetX = newX <= -containerWidth ? newX + containerWidth : newX;
      
      scrollRef.current.style.transform = `translateX(${resetX}px)`;
    }
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isHovered, prefersReducedMotion]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Generate logo elements with proper styling
  const renderLogo = (logo: TrustedByLogo, index: number) => {
    const sizeClasses = {
      small: 'text-lg',
      medium: 'text-xl',
      large: 'text-2xl',
    };

    const weightClasses = {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    };

    const logoElement = (
      <div
        key={`${logo.name}-${index}`}
        className={`text-gray-400 ${sizeClasses[logo.size]} ${weightClasses[logo.weight]} whitespace-nowrap transition-all duration-300 hover:text-gray-600 hover:scale-105 cursor-pointer`}
        onClick={() => logo.url && window.open(logo.url, '_blank', 'noopener,noreferrer')}
        role={logo.url ? 'button' : 'presentation'}
        tabIndex={logo.url ? 0 : -1}
        aria-label={logo.url ? `Visit ${logo.name} website` : undefined}
      >
        {logo.name}
      </div>
    );

    return logoElement;
  };

  // Create multiple sets for seamless looping
  const createLogoSets = () => {
    const sets = [];
    for (let i = 0; i < 4; i++) {
      sets.push(
        <div key={`set-${i}`} className="flex items-center space-x-12 ml-12">
          {TRUSTED_BY_LOGOS.map((logo, index) => renderLogo(logo, index))}
        </div>
      );
    }
    return sets;
  };

  if (prefersReducedMotion) {
    return (
      <div className={`w-full h-[120px] mt-2 mx-auto flex items-center relative bg-white ${className}`}>
        <div className="absolute left-8 z-30 bg-white">
          <h2 className="font-medium text-black text-[28px] tracking-[0] leading-[32px] whitespace-nowrap">
            Trusted by
          </h2>
        </div>
        <div className="flex items-center space-x-12 ml-96">
          {TRUSTED_BY_LOGOS.map((logo, index) => renderLogo(logo, index))}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`w-full h-[120px] mt-2 mx-auto flex items-center relative overflow-hidden bg-white ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Trusted by companies"
      tabIndex={0}
    >
      {/* Trusted by text - fixed on left */}
      <div className="absolute left-8 z-30 bg-white">
        <h2 className="font-medium text-black text-[28px] tracking-[0] leading-[32px] whitespace-nowrap">
          Trusted by
        </h2>
      </div>

      {/* Scrolling logos container */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full">
        <div 
          ref={scrollRef}
          className="flex items-center"
          style={{ transform: 'translateX(0px)' }}
        >
          {createLogoSets()}
        </div>
      </div>

      {/* Fade gradient overlays */}
      <div className="absolute left-0 top-0 w-96 h-full bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

      {/* Loading state */}
      <div className="absolute inset-0 bg-white flex items-center justify-center z-10 opacity-0 pointer-events-none transition-opacity duration-300">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
      </div>
    </div>
  );
}; 