import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/layout';
import { AboutHeroSection } from '../components/sections/AboutHeroSection';
import { AboutStorySection } from '../components/sections/AboutStorySection';
import { IzzyProcessAccordion } from '../components/sections/IzzyProcessAccordion';
import { FounderQuoteSection } from '../components/sections/FounderQuoteSection';
import { MyValuesAnimated } from '../components/sections/MyValuesAnimated';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { CursorTrail } from '../components/CursorTrail';

export const AboutPage: React.FC = () => {
  return (
    <Layout 
      title="About Izzy Prior" 
      description="Learn about Izzy Prior, a fractional CMO and brand strategist helping femtech, healthtech and social-impact founders create bold, heart-felt brands."
    >
      {/* Cursor Trail Effect */}
      <CursorTrail />
      {/* Navigation */}
      <Navigation />
      <div className="flex flex-col items-start w-full bg-white">
        {/* Hero Section */}
        <AboutHeroSection />
        
        {/* Story Section */}
        <AboutStorySection />
        
        {/* Founder Quote Section */}
        <FounderQuoteSection />
        
        {/* Values Section */}
        <MyValuesAnimated />
        
        {/* Process Accordion Section */}
        <IzzyProcessAccordion />
        
        {/* Footer */}
        <FooterSection />
      </div>
    </Layout>
  );
}; 