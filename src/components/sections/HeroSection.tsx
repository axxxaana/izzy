import React from 'react';
import { Header } from '../layout/Header';

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  backgroundImage, 
  className = '' 
}) => {
  return (
    <div className={`w-full relative mb-0 ${className}`}>
      <div className="w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[600px] xl:h-[650px] relative p-3 sm:p-4 lg:p-[15px]">
        <div className="relative w-full h-[470px] sm:h-[570px] md:h-[620px] lg:h-[570px] xl:h-[620px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
          <div className="relative h-full">
            <div className="absolute w-full h-full top-0 left-0">
              <div className="relative h-full">
                <div className="absolute w-full h-full top-0 left-0 bg-white opacity-10 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]" />
                <div 
                  className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]"
                  style={{
                    background: `url('${backgroundImage}') 50% 40% / cover`
                  }}
                >
                  <Header />
                </div>
              </div>
            </div>

            {/* Hero Content - Text Only */}
            <div className="absolute max-w-[600px] top-[165px] sm:top-[165px] md:top-[205px] lg:top-[165px] xl:top-[205px] left-[80px] sm:left-[100px] lg:left-[120px] px-4">
              <div className="w-full">
                <h1 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[80px] text-left tracking-[-1.2px] leading-[1.1] mb-6">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 