import React, { useEffect } from 'react';
import { Navigation } from '../components/layout';
import { MainContentSection } from '../screens/ElementLight/sections/MainContentSection/MainContentSection';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { CursorTrail } from '../components/CursorTrail';

export const HomePage: React.FC = () => {
  // Scroll to top when component mounts (page refresh)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-start w-full bg-white">
      {/* Cursor Trail Effect */}
      <CursorTrail />
      {/* Navigation */}
      <Navigation />
      {/* Main Content */}
      <MainContentSection />
      <FooterSection />
    </div>
  );
};
