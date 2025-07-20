import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Header } from '../components/layout';
import { AboutHeroSection } from '../components/sections/AboutHeroSection';
import { AboutStorySection } from '../components/sections/AboutStorySection';
import { AboutExperienceSection } from '../components/sections/AboutExperienceSection';
import { IzzyProcessAccordion } from '../components/sections/IzzyProcessAccordion';
import { FounderQuoteSection } from '../components/sections/FounderQuoteSection';
import { MyValuesAnimated } from '../components/sections/MyValuesAnimated';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';

export const AboutPage: React.FC = () => {
  return (
    <Layout 
      title="About Izzy Prior" 
      description="Learn about Izzy Prior, a fractional CMO and brand strategist helping femtech, healthtech and social-impact founders create bold, heart-felt brands."
    >
      <div className="flex flex-col items-start w-full bg-white">
        {/* Hero Section with Header */}
        <AboutHeroSection />
        
        {/* Story Section */}
        <AboutStorySection />
        
        {/* Founder Quote Section */}
        <FounderQuoteSection />
        
        {/* Values Section */}
        <MyValuesAnimated />
        
        {/* Process Accordion Section */}
        <IzzyProcessAccordion />
        
        {/* Experience Section */}
        <AboutExperienceSection />
        
        {/* Footer */}
        <FooterSection />
      </div>
    </Layout>
  );
}; 