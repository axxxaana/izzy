import React from 'react';
import { Header } from '../layout/Header';

export const AboutHeroSection: React.FC = () => {
  return (
    <div className="w-full relative mb-0">
      <div className="w-full h-[700px] sm:h-[800px] md:h-[850px] lg:h-[800px] xl:h-[850px] relative p-3 sm:p-4 lg:p-[15px]">
        <div className="relative w-full h-[670px] sm:h-[770px] md:h-[820px] lg:h-[770px] xl:h-[820px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
          <div className="relative h-full">
            <div className="absolute w-full h-full top-0 left-0">
              <div className="relative h-full">
                <div className="absolute w-full h-full top-0 left-0 bg-white opacity-10 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]" />
                <div className="absolute w-full h-full top-0 left-0 [background:url('/about-izzy-hero.png')_50%_40%_/_cover] rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]">
                  <Header />
                </div>
              </div>
            </div>

            {/* Hero Header */}
            <div className="absolute bottom-[80px] sm:bottom-[80px] md:bottom-[100px] lg:bottom-[80px] xl:bottom-[100px] right-[80px] sm:right-[100px] lg:right-[120px] px-4 text-right">
              <h1 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[75px] text-right tracking-[-1.2px] leading-[1.1] mb-6 text-shadow-medium">
                About Izzy
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 