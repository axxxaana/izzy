import React from 'react';
import { Layout } from '../components/layout/Layout';
import { DeliverablesSection } from '../components/sections/DeliverablesSection';
import { CursorTrail } from '../components/CursorTrail';

export const DeliverablesDemo: React.FC = () => {
  return (
    <Layout 
      title="Deliverables Demo"
      description="Demo of the Deliverables Section Component"
    >
      {/* Cursor Trail Effect */}
      <CursorTrail />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your Deliverables Component
            </h1>
            <p className="text-gray-600">
              A card component showing project deliverables with status badges
            </p>
          </div>
          
          <DeliverablesSection />
          
          {/* Example with custom data */}
          <DeliverablesSection 
            className="mt-8"
            deliverables={[
              { id: '1', name: 'Strategy Document', status: 'delivered' },
              { id: '2', name: 'Brand Guidelines', status: 'delivered' },
              { id: '3', name: 'Website Copy', status: 'in-progress' },
              { id: '4', name: 'Social Media Kit', status: 'pending' }
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}; 