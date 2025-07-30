import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { TrustedByBanner } from '../components/TrustedByBanner';
import { Link } from 'react-router-dom';

// ResourcesPage-specific hero content
const RESOURCES_HERO_TAG = 'RESOURCES';
const RESOURCES_HERO_HEADLINE = 'Free Strategy Resources';
const RESOURCES_HERO_SUBHEADLINE =
  'Downloadable guides, templates, and frameworks to help you build a stronger brand strategy.';

// Resource data
const resources = [
  {
    id: 1,
    title: 'Brand Strategy Framework',
    subtitle: 'Complete Guide',
    description: 'A comprehensive framework to help you define your brand strategy, positioning, and messaging. Perfect for founders and marketing teams.',
    tags: ['Strategy', 'Positioning', 'Messaging'],
    image: '/GoFounder Cover.png',
    downloadUrl: '/resources/brand-strategy-framework',
    category: 'Strategy'
  },
  {
    id: 2,
    title: 'Content Calendar Template',
    subtitle: 'Marketing Tool',
    description: 'A 90-day content calendar template with strategic prompts and posting guidelines to keep your content consistent and engaging.',
    tags: ['Content', 'Social Media', 'Planning'],
    image: '/GoFounder Cover.png',
    downloadUrl: '/resources/content-calendar',
    category: 'Marketing'
  },
  {
    id: 3,
    title: 'Founder Brand Audit',
    subtitle: 'Assessment Tool',
    description: 'A step-by-step audit to evaluate your current brand positioning and identify opportunities for improvement and growth.',
    tags: ['Audit', 'Assessment', 'Growth'],
    image: '/GoFounder Cover.png',
    downloadUrl: '/resources/founder-brand-audit',
    category: 'Assessment'
  },
];

// Resources Hero Component (similar to Portfolio Hero)
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
            {/* Simple Animated Background */}
            <div 
              className="absolute w-full h-full top-0 left-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden"
              style={{
                background: 'linear-gradient(45deg, rgba(228, 71, 130, 0.8), rgba(228, 71, 130, 0.2), rgba(228, 71, 130, 0.8))',
                backgroundSize: '300% 300%',
                animation: 'gradient-shift 8s ease-in-out infinite',
              }}
            />
            {/* Hero Content */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 pt-40 pb-32">
              <motion.span
                className="inline-block mb-8 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-pink-400/30 text-pink-600 text-base font-semibold uppercase tracking-wide"
                style={{ fontFamily: 'Inter, Helvetica' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {RESOURCES_HERO_TAG}
              </motion.span>

              <motion.h1
                className="max-w-4xl mx-auto text-[36px] md:text-[56px] lg:text-[64px] font-bold text-center mb-6 leading-[1.1]"
                style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica', letterSpacing: '-1.5px' }}
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Resource Card Component - Redesigned to match the image style
const ResourceCard: React.FC<{ resource: typeof resources[0]; index: number }> = ({ resource, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Link to={resource.downloadUrl} className="block group" tabIndex={0} role="link">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}
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
          {/* Category Tag */}
          <span className="inline-block mb-4 px-3 py-1 bg-pink-100 text-pink-600 text-sm font-semibold uppercase tracking-wide" style={{ borderRadius: '0.84rem' }}>
            {resource.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-200 font-['Montserrat']">
            {resource.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 font-['Inter']">
            {resource.description}
          </p>

          {/* Call to Action */}
          <div className="flex items-center text-pink-600 font-semibold group-hover:text-pink-700 transition-colors duration-200">
            <span>Download Now</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export const ResourcesPage: React.FC = () => {
  return (
    <Layout>
      <div className="w-full bg-white">
        {/* Hero Section */}
        <ResourcesHero />

        {/* Logo Scroller */}
        <TrustedByBanner />

        {/* Resources Section */}
        <section className="w-full py-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Montserrat']">
                Free Downloads
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Inter']">
                Click on any resource to learn more and download instantly.
              </p>
            </motion.div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>

            <div style={{ height: '100px' }}></div>
          </div>
        </section>

        {/* Footer */}
        <FooterSection />
      </div>
    </Layout>
  );
}; 