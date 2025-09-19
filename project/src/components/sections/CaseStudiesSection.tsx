import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from '../SpotlightCard';
import { Badge } from '../ui/badge';

export const CaseStudiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("FemTech");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <motion.div 
      className="w-full mt-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full bg-white rounded-[67.5px_67.5px_0px_0px] py-16">
        <div className="w-full max-w-[1200px] mx-auto">
          
          {/* Case Studies Heading */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="[font-family:'Anton',Helvetica] font-semibold text-[#091329] text-[40px] tracking-[1.2px] leading-[50px] mb-6">
              Client Results
            </h3>
            <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[16px] leading-[24px] max-w-lg mx-auto">
              Real work with real outcomes. Strategy, voice, and visibility in action, built to perform, not just impress.
            </p>
          </motion.div>
            
          {/* Category Tabs */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-1.5 gap-1 shadow-lg">
              {['FemTech', 'Community'].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-10 py-4 rounded-2xl font-semibold transition-all duration-500 ease-out ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-[#e44782] to-[#e44782]/90 text-white shadow-xl shadow-[#e44782]/25'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FemTech Category */}
          <AnimatePresence mode="wait">
            {activeCategory === 'FemTech' && (
              <motion.div
                key="femtech"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mb-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-gray-50/50 to-white/30 rounded-3xl backdrop-blur-sm border border-gray-100/50 shadow-xl shadow-gray-200/20">
                  {/* Nexus Connected */}
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
                          <h4 className="[font-family:'Anton',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
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

                  {/* Parent Promise */}
                  <SpotlightCard className="h-[500px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                    <div className="h-full flex flex-col">
                      {/* Image */}
                      <div className="w-full h-96 mb-4 rounded-lg overflow-hidden">
                        <img 
                          src="/parent promise cover.jpg" 
                          alt="Parent Promise Cover" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="mb-4">
                          <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                            Ghostwriting
                          </Badge>
                          <h4 className="[font-family:'Anton',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                            Parent Promise
                          </h4>
                        </div>
                        <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                          Content creation and ghostwriting for Dear Bump, connecting parents through authentic storytelling.
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

                  {/* Dear Bump */}
                  <SpotlightCard className="h-[500px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                    <div className="h-full flex flex-col">
                      {/* Image */}
                      <div className="w-full h-96 mb-4 rounded-lg overflow-hidden">
                        <img 
                          src="/dear bump cover.webp" 
                          alt="Dear Bump Cover" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="mb-4">
                          <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                            Ghostwriting
                          </Badge>
                          <h4 className="[font-family:'Anton',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                            Dear Bump
                          </h4>
                        </div>
                        <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                          Ghostwriting and content creation for pregnancy and parenting community platform.
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
                </div>
              </motion.div>
            )}

            {/* Community Category */}
            {activeCategory === 'Community' && (
              <motion.div
                key="community"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mb-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-gray-50/50 to-white/30 rounded-3xl backdrop-blur-sm border border-gray-100/50 shadow-xl shadow-gray-200/20">
                  {/* GoFounder */}
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
                          <h4 className="[font-family:'Anton',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
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

                  {/* Wellnergy */}
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
                          <h4 className="[font-family:'Anton',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
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

                  {/* Enara */}
                  <SpotlightCard className="h-[500px] cursor-pointer" spotlightColor="rgba(228, 71, 130, 0.2)">
                    <div className="h-full flex flex-col">
                      {/* Image */}
                      <div className="w-full h-96 mb-4 rounded-lg overflow-hidden">
                        <img 
                          src="/enara cover.jpg" 
                          alt="Enara Cover" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="mb-4">
                          <Badge className="bg-white border border-[#e44782] text-[#e44782] text-xs px-3 py-1.5 rounded-[0.84rem] font-medium shadow-sm mb-3 hover:bg-[#e44782] hover:text-white transition-colors duration-300">
                            Creator Commerce
                          </Badge>
                          <h4 className="[font-family:'Anton',Helvetica] font-bold text-[#091329] text-[26px] tracking-tight">
                            Enara
                          </h4>
                        </div>
                        <p className="[font-family:'Inter',Helvetica] text-[#091329]/70 text-[15px] leading-[20px] mb-8 font-medium">
                          Brand creation, visual identity, social strategy, lead magnets, founder ghostwriting, and creator acquisition.
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}; 