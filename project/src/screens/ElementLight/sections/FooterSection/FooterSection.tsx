import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Card } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  return (
    <>
      {/* Main Footer with Background Image */}
      <motion.footer 
        className="w-full bg-[url(/izzy%20footer1.png)] bg-cover bg-center bg-no-repeat rounded-[25px] pt-[50px] pb-48 p-3 sm:p-4 lg:p-[15px]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-8 px-8">
          {/* Left: Image (if any) */}
          {/* Right: Text and Button */}
          <div className="flex-1 flex flex-col items-center md:items-end justify-center py-16 pl-[100px]">
            <motion.div 
              className="max-w-[915px] text-left md:mr-[250px] ml-[100px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[75px] text-left tracking-[-1.2px] leading-[1.1] mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Clarity Starts Here
              </motion.h2>

              <motion.p 
                className="[font-family:'Inter',Helvetica] font-normal text-white text-[18px] text-left tracking-[0] leading-[28px] mt-8 max-w-[580px] mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                I help you cut through the noise, sharpen your message, and show up where it counts, with a brand that actually fits.
              </motion.p>
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/get-started"
                  className="inline-block bg-white text-[#e44782] border-2 border-[#e44782] rounded-[0.84rem] px-5 py-3 text-[20px] font-['Montserrat'] font-medium transition-all duration-300 ease-out shadow-[0_8px_25px_rgba(228,71,130,0.3)] hover:bg-[#e44782] hover:text-white hover:border-white hover:scale-105 cursor-pointer no-underline box-border"
                >
                  Book a Call
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.footer>

      {/* Professional Footer */}
      <motion.footer 
        className="w-full bg-white pt-[100px] pb-8 border-t border-gray-200"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img
                  src="/copy-of-bolt-logo-1.png"
                  alt="Izzy Prior Logo"
                  className="h-8 w-auto mr-3"
                />
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              className="ml-8"
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
    </>
  );
};
