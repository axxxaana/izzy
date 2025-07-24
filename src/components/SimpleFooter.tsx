import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const SimpleFooter = (): JSX.Element => {
  return (
    <motion.footer 
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img src="/copy-of-bolt-logo-1.png" alt="Izzy Prior" className="w-8 h-8 mr-3" />
              <span className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-lg">
                Izzy Prior
              </span>
            </motion.div>
            <motion.p 
              className="[font-family:'Inter',Helvetica] text-gray-600 text-sm leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Fractional CMO and brand strategist helping femtech, healthtech and social-impact founders create bold, heart-felt brands that move people.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.a 
                href="https://www.linkedin.com/in/izzyprior/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#e44782] transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/izprior/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#e44782] transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75 4.75 4.75 0 0 0-4.75-4.75zm6.25 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-base mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Navigation
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/about" className="[font-family:'Inter',Helvetica] text-gray-600 hover:text-[#e44782] transition-colors duration-200 text-sm">About</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/portfolio" className="[font-family:'Inter',Helvetica] text-gray-600 hover:text-[#e44782] transition-colors duration-200 text-sm">Portfolio</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/get-started" className="[font-family:'Inter',Helvetica] text-gray-600 hover:text-[#e44782] transition-colors duration-200 text-sm">Book a Call</Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-base mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Services
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/services/founder-brand-strategy" className="[font-family:'Inter',Helvetica] text-gray-600 hover:text-[#e44782] transition-colors duration-200 text-sm">Founder Brand Strategy</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/services/fractional-marketing" className="[font-family:'Inter',Helvetica] text-gray-600 hover:text-[#e44782] transition-colors duration-200 text-sm">Fractional Marketing</Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Mailing List Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-base mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Get Free Resources
            </motion.h3>
            <motion.p 
              className="[font-family:'Inter',Helvetica] text-gray-600 text-sm mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Join my mailing list for exclusive brand strategy insights and actionable tips.
            </motion.p>
            <motion.form 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#e44782] focus:border-transparent"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                type="submit"
                className="w-full bg-[#e44782] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e44782]/90 transition-colors duration-200"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom Section - Legal Links */}
        <motion.div 
          className="pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="[font-family:'Inter',Helvetica] text-gray-500 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              © 2025 Izzy Prior. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.a 
                href="#" 
                className="[font-family:'Inter',Helvetica] text-gray-500 hover:text-[#e44782] transition-colors duration-200 text-sm"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="[font-family:'Inter',Helvetica] text-gray-500 hover:text-[#e44782] transition-colors duration-200 text-sm"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}; 