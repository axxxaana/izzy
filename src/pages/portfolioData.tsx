import React from 'react';
import { motion } from 'framer-motion';

// Portfolio items data structure
export const portfolioItems = [
  {
    id: 1,
    title: 'Nexus Connected',
    subtitle: 'Team Collaboration Platform',
    description: 'Nexus is a femtech startup creating an AI-driven health coach for women. I led a full brand repositioning, building the strategy, voice, and campaigns across digital and in-person channels. The result: a unified brand, stronger founder visibility, and a clear path to growth and investment.',
    tags: ['Brand Overhaul', 'Product Positioning', 'UX Strategy'],
    image: '/nexus connected team.jpg',
    color: '',
  },
  {
    id: 2,
    title: 'Wellnergy',
    subtitle: 'Health & Wellness Platform',
    description: 'Wellnergy is a fast-growing wellness event celebrating holistic health. I led brand messaging, ghostwrote founder content, and built influencer partnerships — turning a grassroots festival into a credible, high-visibility brand with strategic alliances and strong digital traction.',
    tags: ['Health Tech', 'Holistic Design', 'Wellness Strategy'],
    image: '/wellnergy cover.png',
    color: '',
  },
  {
    id: 3,
    title: 'GoFounder',
    subtitle: 'Startup Community Platform',
    description: 'GoFounder is a coaching platform for startup founders focused on accountability and performance. I built the brand presence from the ground up — leading social strategy, ghostwriting thought leadership, and designing onboarding experiences that elevated visibility and drove community growth.',
    tags: ['Community Building', 'Content Strategy', 'Founder Support'],
    image: '/GoFounder Cover.png',
    color: '',
  },
];

// Helper function to get portfolio links
export const getPortfolioLink = (title: string) => {
  if (title === 'Nexus Connected') return '/portfolio/nexus-connected';
  if (title === 'Wellnergy') return '/portfolio/wellnergy';
  if (title === 'GoFounder') return '/portfolio/gofounder';
  return '#';
};

// Shared PortfolioCard component
export const PortfolioCard: React.FC<{ item: typeof portfolioItems[0]; index: number }> = ({ item, index }) => {
  return (
    <div className="block group mt-8 cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.92, rotate: -6, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.15,
        }}
        viewport={{ once: true, margin: '-100px' }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex flex-col h-full">
          <motion.div
            className="mb-6 rounded-[16px] overflow-hidden aspect-[16/10] bg-gray-50"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-gray-900 font-['Montserrat']">
                {item.title}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-4 text-base leading-relaxed flex-1">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-pink-50 text-pink-700 border border-pink-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <a href={getPortfolioLink(item.title)} className="inline-flex items-center px-0 py-4 rounded-[12px] bg-transparent text-[#e44782] text-2xl font-bold transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 group">
              <span className="mr-2">View Case Study</span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 