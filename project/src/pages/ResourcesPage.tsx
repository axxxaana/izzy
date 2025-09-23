import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout';
import { TrustedByBanner } from '../components/TrustedByBanner';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';

// Resource data
const resources = [
  {
    id: '7-messaging-gaps',
    title: 'Messaging Gaps Costing You Leads',
    description: 'Identify and fix messaging gaps costing you customers. Learn how to craft compelling messages that convert prospects into leads.',
    image: '/resource-1.png',
    category: 'Strategy',
    downloadUrl: '/resources/7-messaging-gaps'
  },
  {
    id: 'daca-method',
    title: 'Build Your LinkedIn Personal Brand',
    description: 'A complete guide to building a powerful personal brand on LinkedIn. Learn the strategies and tactics that top founders use to grow their influence.',
    image: '/resource-2.png',
    category: 'Personal Branding',
    downloadUrl: '/resources/daca-method'
  },
  {
    id: 'hook-framework',
    title: 'The Hook Framework',
    description: 'Master the art of creating irresistible hooks that capture attention and drive engagement. Learn the proven framework used by top content creators and marketers to grow their audience.',
    image: '/resource-3.png',
    category: 'Content Strategy',
    downloadUrl: '/resources/hook-framework'
  }
];

// Hero section constants
const RESOURCES_HERO_TAG = "RESOURCES";
const RESOURCES_HERO_HEADLINE = "Free Resources to Level Up Your Brand";
const RESOURCES_HERO_SUBHEADLINE = "Downloadable guides, templates, and frameworks to help you build a brand that connects and converts.";

// Hero Component
const ResourcesHero: React.FC = () => {
  return (
    <div className="w-full relative mb-0">
      <div className="w-full p-3 sm:p-4 lg:p-[15px]" style={{ height: '700px', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          className="relative w-full h-[670px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative h-full">
            {/* Static Background to match portfolio */}
            <div 
              className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
              style={{ background: '#FCEEF3' }}
            />
            {/* Hero Content */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-40 pb-32" style={{ paddingTop: 'calc(8rem + 80px)' }}>

              <motion.h1
                className="max-w-2xl mx-auto text-[36px] md:text-[56px] lg:text-[64px] font-bold text-center mb-6 leading-[1.25]"
                style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica', letterSpacing: '1.2px' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {RESOURCES_HERO_HEADLINE}
              </motion.h1>

              <motion.p
                className="max-w-lg text-center text-[18px] md:text-[20px] text-[#0f0f10] opacity-90 leading-relaxed"
                style={{ fontFamily: 'Inter, Helvetica' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {RESOURCES_HERO_SUBHEADLINE}
              </motion.p>

              {/* CTA Button (match portfolio/services) */}
              <motion.button 
                onClick={(e: React.MouseEvent) => e.preventDefault()}
                className="mt-8 px-8 py-4 rounded-[0.84rem] bg-[#e44782] text-white text-xl font-semibold shadow-lg border-2 border-transparent hover:bg-white hover:text-[#e44782] hover:border-[#e44782] transition-all duration-200"
                style={{ fontFamily: 'Montserrat, Helvetica' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Resource Card Component - Redesigned to match the image style
const ResourceCard: React.FC<{ resource: typeof resources[0]; index: number }> = ({ resource, index }) => {
  return (
    <Link to={resource.downloadUrl} className="block group" tabIndex={0} role="link">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{
          y: -4,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 resource-card-radius"
        style={{ overflow: 'hidden' }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
            {resource.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            {resource.description}
          </p>

          {/* Download Button */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Free Download</span>
            <span className="text-pink-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
              Download →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// Main Resources Page Component
export const ResourcesPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full bg-white">
        {/* Hero Section */}
        <ResourcesHero />

        {/* Logo Scroller (Trusted By) */}
        <TrustedByBanner />
        
        {/* Resources Grid */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-lg mx-auto">
              Free Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Download these free resources to help you build a stronger brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {resources.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <FooterSection />
      </div>
    </Layout>
  );
}; 