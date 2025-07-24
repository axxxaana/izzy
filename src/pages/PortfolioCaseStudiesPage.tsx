import React from 'react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import { Navigation } from '../components/layout/Navigation';

const caseStudies = [
  {
    title: 'Nexus Connected',
    description: 'Nexus is a femtech startup creating an AI-driven health coach for women. I led a full brand repositioning, building the strategy, voice, and campaigns across digital and in-person channels. The result: a unified brand, stronger founder visibility, and a clear path to growth and investment.',
    image: '/nexus connected team.jpg',
  },
  {
    title: 'Wellnergy',
    description: 'Ghostwriting, branding, and influencer partnership outreach for a wellness community.',
    image: '/wellnergy cover.png',
  },
  {
    title: 'GoFounder',
    description: 'Marketing, content creation, ghostwriting, and founder onboarding for a startup community platform.',
    image: '/GoFounder Cover.png',
  },
];

export const PortfolioCaseStudiesPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white min-h-screen">
      <Navigation />
      <div className="w-full max-w-5xl mx-auto pt-32 pb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center" style={{ fontFamily: 'Montserrat, Helvetica' }}>
          Portfolio Case Studies
        </h1>
        <ScrollStack>
          {caseStudies.map((cs, idx) => (
            <ScrollStackItem key={cs.title}>
              <div className="flex flex-col md:flex-row items-center gap-8 w-full h-full">
                <div className="flex-1 text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, Helvetica' }}>{cs.title}</h2>
                  <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter, Helvetica' }}>{cs.description}</p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <img src={cs.image} alt={cs.title} className="rounded-2xl shadow-lg w-full max-w-xs object-cover" />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
}; 