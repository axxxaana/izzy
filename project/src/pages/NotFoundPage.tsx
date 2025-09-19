import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { TYPOGRAPHY, SPACING } from '../constants/design-system';
import { BUTTON_STYLES, BUTTON_ANIMATIONS } from '../constants/buttons';

export const NotFoundPage: React.FC = () => {
  return (
    <Layout 
      title="Page Not Found - Izzy Prior" 
      description="The page you're looking for doesn't exist. Let's get you back on track with Izzy Prior's brand strategy services."
    >
      <div className="flex flex-col items-start w-full bg-white">
        {/* Simple 404 Section */}
        <div className="w-full min-h-[70vh] flex items-center justify-center pt-[250px]">
          <div className={`w-full max-w-4xl mx-auto text-center ${SPACING.padding.responsive}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* 404 Number */}
              <div className="text-8xl sm:text-9xl font-bold text-[#e44782] leading-none mb-6 font-['Anton']">
                404
              </div>
              
              {/* Main Heading */}
              <h1 className={`${TYPOGRAPHY.headings.h2.classes} text-black mb-6`}>
                Page not found
              </h1>
              
              {/* Subtitle */}
              <p className={`${TYPOGRAPHY.body.large.classes} text-black/80 leading-relaxed max-w-2xl mx-auto mb-12`}>
                Looks like this page took a detour. Let's get you back on track.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <motion.button 
                    className={BUTTON_STYLES.primary.base}
                    whileHover={BUTTON_ANIMATIONS.hover.primary}
                    whileTap={BUTTON_ANIMATIONS.tap.primary}
                  >
                    Go Home
                  </motion.button>
                </Link>
                
                <Link to="/get-started">
                  <motion.button 
                    className={BUTTON_STYLES.secondary.base}
                    whileHover={BUTTON_ANIMATIONS.hover.secondary}
                    whileTap={BUTTON_ANIMATIONS.tap.secondary}
                  >
                    Book a Call
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 