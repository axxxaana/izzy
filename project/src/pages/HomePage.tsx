import React from 'react';
import { Layout } from '../components/layout/Layout';
import { MainContentSection } from '../screens/ElementLight/sections/MainContentSection/MainContentSection';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-start w-full bg-white" style={{ minHeight: 'auto', height: 'auto', flexWrap: 'nowrap' }}>
        {/* Main Content */}
        <MainContentSection />
        <FooterSection />
      </div>
    </Layout>
  );
};
