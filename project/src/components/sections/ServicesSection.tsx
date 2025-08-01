import React from 'react';

import { FOUNDER_BRAND_FEATURES, FRACTIONAL_MARKETING_FEATURES } from '../../constants/services';

export const ServicesSection: React.FC = () => {
  return (
    <>
      {/* Services Intro Section */}
      <div className="w-full max-w-[1512px] mt-16 mx-auto flex flex-col items-center" style={{marginTop: '164px'}}>
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#0f0f10] text-[50px] text-center tracking-[-0.51px] leading-[61.4px] mb-8">
          Strategy. Voice. Visibility
        </h2>

        <p className="max-w-[467px] opacity-60 [font-family:'Inter',Helvetica] font-normal text-[#0f0f10] text-[16.9px] text-center tracking-[0] leading-[25.3px] mb-16">
          End-to-end brand and marketing solutions, refining your core
          message, building scalable content systems, and executing
          data-driven campaigns that drive real growth.
        </p>
      </div>

      {/* Services Section */}
      <div className="w-full max-w-[1200px] mx-auto mt-8 px-4">
        {/* Founder Brand Strategy */}
        <div className="flex items-center justify-between mb-16 gap-6">
          <div className="w-[480px] h-[480px] flex-shrink-0">
            <img
              className="w-full h-full"
              alt="Founder brand strategy"
                              src="/izzy-prior-strategy.png"
            />
          </div>

          <div className="w-[480px] max-w-[480px] flex-shrink-0">
            <div className="mb-0">
              <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-black text-[40px] tracking-[-1.44px] leading-[55px] mb-2">
                Founder personal <br />
                brand strategy
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15.9px] tracking-[0] leading-[25.2px] pb-6">
                For founders who want to build authority, trust and momentum{" "}
                <br />
                without posting daily just for the algorithm gods.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="border-t border-[#0000001a] pt-5">
                <div className="flex items-start gap-5">
                  <div className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0">
                    <img
                      className="w-[22px] h-[18px]"
                      alt="Feature icon"
                      src="/vector-8.svg"
                    />
                  </div>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15px] tracking-[0] leading-[25.2px]">
                    {FOUNDER_BRAND_FEATURES[0]}
                  </p>
                </div>
              </div>
              
              {FOUNDER_BRAND_FEATURES.slice(1).map((feature, index) => (
                <div key={index + 1} className="border-t border-[#0000001a] pt-5">
                  <div className="flex items-start gap-5">
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-[22px] h-[18px]"
                        alt="Feature icon"
                        src="/vector-8.svg"
                      />
                    </div>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15px] tracking-[0] leading-[25.2px]">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Fractional Marketing */}
        <div className="flex items-center justify-between gap-6">
          <div className="w-[480px] max-w-[480px] flex-shrink-0">
            <div className="mb-0">
              <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-black text-[40px] tracking-[-1.44px] leading-[55px] mb-2">
                Fractional marketing <br />
                &amp; brand direction
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15.9px] tracking-[0] leading-[25.2px] pb-6">
                For startups ready to grow with clarity. I help you refine your messaging, build a content system that performs, and turn brand thinking into strategic execution.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="border-t border-[#0000001a] pt-5">
                <div className="flex items-start gap-5">
                  <div className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0">
                    <img
                      className="w-[22px] h-[18px]"
                      alt="Feature icon"
                      src="/vector-8.svg"
                    />
                  </div>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[16px] tracking-[0] leading-[25.2px]">
                    {FRACTIONAL_MARKETING_FEATURES[0]}
                  </p>
                </div>
              </div>
              
              {FRACTIONAL_MARKETING_FEATURES.slice(1).map((feature, index) => (
                <div key={index + 1} className="border-t border-[#0000001a] pt-5">
                  <div className="flex items-start gap-5">
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-[22px] h-[18px]"
                        alt="Feature icon"
                        src="/vector-8.svg"
                      />
                    </div>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[16px] tracking-[0] leading-[25.2px]">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          <div className="w-[480px] h-[480px] flex-shrink-0">
            <img
              className="w-full h-full"
              alt="Fractional marketing"
                              src="/Izzy-Marketing.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}; 