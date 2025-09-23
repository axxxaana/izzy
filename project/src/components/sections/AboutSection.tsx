import React from 'react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-8 leading-tight">
          I&apos;m Izzy. A fractional CMO and brand strategist. I help
          femtech, healthtech and social-impact founders strip back bloated
          messaging and create bold,{' '}
          <span className="bg-pink-200 px-2 py-1 rounded">
            heart-felt brands
          </span>{' '}
          that move people.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/about" className="px-5 py-3 bg-[#e44782] text-white font-['Montserrat'] font-semibold text-base hover:bg-white hover:text-[#e44782] transition-all duration-300 border-2 border-[#e44782] rounded-[0.84rem] ">
            About Izzy
          </Link>
          <Link to="/get-started" className="px-5 py-3 bg-[#e44782] text-white font-['Montserrat'] font-semibold text-base hover:bg-white hover:text-[#e44782] transition-all duration-300 border-2 border-[#e44782] rounded-[0.84rem] ">
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  );
}; 