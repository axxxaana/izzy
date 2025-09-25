import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../SpotlightCard';
import { Badge } from '../ui/badge';
import { Link } from 'react-router-dom';

export const PortfolioSection: React.FC = () => {
  return (
    <motion.div 
      className="w-full mt-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full bg-white rounded-[67.5px_67.5px_0px_0px] py-16">
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Portfolio Heading */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative inline-block">
              <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#091329] text-[40px]  leading-[50px] mb-6 relative z-10">
                Client Results
              </h3>
              
              {/* Background Image with Twirly Arrow - positioned to the left of heading */}
              <div 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[175px] -translate-y-[61px] w-[400px] h-[200px] bg-contain bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage: 'url(/results-background.png)'
                }}
              />
            </div>
            
            <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[16px] leading-[24px] max-w-sm mx-auto">
              Strategy, voice, and visibility in action, built to perform, not just impress.
            </p>
          </motion.div>
          {/* Portfolio Cards - Only Nexus, Wellnergy, GoFounder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-gray-50/50 to-white/30 rounded-3xl backdrop-blur-sm border border-gray-100/50 shadow-xl shadow-gray-200/20">
              {/* Nexus Connected */}
              <Link to="/portfolio/nexus-connected" className="block h-full">
                <SpotlightCard className="h-[500px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                  <div className="h-full flex flex-col">
                    {/* Image */}
                    <div className="w-full h-96 mb-4 rounded-lg overflow-hidden">
                      <img 
                        src="/nexus connected team.jpg" 
                        alt="Nexus Connected Team" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="mb-4">
                        <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                          Marketing
                        </Badge>
                        <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                          Nexus Connected
                        </h4>
                      </div>
                      <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                        Strategic marketing leadership and brand development for innovative femtech platform.
                      </p>
                      <div className="flex items-center text-[#e44782] text-sm font-semibold hover:text-[#e44782]/80 transition-colors duration-300">
                        <span>Read More</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
              {/* Wellnergy */}
              <Link to="/portfolio/wellnergy" className="block h-full">
                <SpotlightCard className="h-[500px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                  <div className="h-full flex flex-col">
                    {/* Image */}
                    <div className="w-full h-96 mb-4 rounded-lg overflow-hidden">
                      <img 
                        src="/wellnergy cover.png" 
                        alt="Wellnergy Cover" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="mb-4">
                        <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                          Multi-Service
                        </Badge>
                        <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                          Wellnergy
                        </h4>
                      </div>
                      <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                        Ghostwriting, branding, and influencer partnership outreach for wellness community.
                      </p>
                      <div className="flex items-center text-[#e44782] text-sm font-semibold hover:text-[#e44782]/80 transition-colors duration-300">
                        <span>Read More</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
              {/* GoFounder */}
              <Link to="/portfolio/gofounder" className="block h-full">
                <SpotlightCard className="h-[500px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                  <div className="h-full flex flex-col">
                    {/* Image */}
                    <div className="w-full h-96 mb-4 rounded-lg overflow-hidden">
                      <img 
                        src="/GoFounder Cover.png" 
                        alt="GoFounder Cover" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="mb-4">
                        <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                          Multi-Service
                        </Badge>
                        <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                          GoFounder
                        </h4>
                      </div>
                      <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                        Marketing, content creation, ghostwriting, and founder onboarding for startup community platform.
                      </p>
                      <div className="flex items-center text-[#e44782] text-sm font-semibold hover:text-[#e44782]/80 transition-colors duration-300">
                        <span>Read More</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}; 