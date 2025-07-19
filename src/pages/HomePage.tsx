import React from 'react';
import { Navigation } from '../components/layout';
import { MainContentSection } from '../screens/ElementLight/sections/MainContentSection/MainContentSection';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-start w-full bg-white">
      {/* Navigation */}
      <Navigation />
      {/* Main Content */}
      <MainContentSection />
      <FooterSection />
    </div>
  );
};
