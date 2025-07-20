import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/navigation';
import { NavigationProps } from '../../types';
import { IMAGES } from '../../constants/assets';
import './Navigation.css';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation();
  
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  return (
    <div className={`fixed top-4 sm:top-6 lg:top-[39px] left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-[1280px] h-12 sm:h-14 lg:h-[66px] mx-auto bg-[#ffffffb2] rounded-2xl sm:rounded-3xl shadow-[0px_1px_1px_-0.5px_#00000008,0px_2px_2px_-1px_#00000008,0px_3px_3px_-1.5px_#00000008,0px_5px_5px_-2.5px_#00000008,0px_10px_10px_-5px_#00000008,0px_16px_16px_-8px_#00000008,0px_0px_0px_1px_#0000001a] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] z-50 px-3 sm:px-4 ${className}`}>
      <div className="relative w-full h-8 sm:h-10 lg:h-[54px] top-2 sm:top-2 lg:top-1.5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="w-8 sm:w-10 lg:w-[52px] h-6 sm:h-8 lg:h-[43px] block">
            <img
              className="w-5 sm:w-6 lg:w-[33px] h-6 sm:h-8 lg:h-[43px] object-cover"
              alt="Logo"
              src={IMAGES.logo}
            />
          </Link>

          {/* Navigation Items */}
          <div className="hidden sm:flex h-6 sm:h-8 lg:h-9 relative -top-0.5 ml-2 lg:ml-0">
            {navItems.map((item, index) => (
              <div key={index} className={`h-6 sm:h-8 lg:h-9 w-16 sm:w-20 lg:w-[88px]`}>
                <div className="h-full rounded-full">
                  <div className="w-full h-full rounded-full">
                    <Link 
                      to={item.href}
                      className={`block hover:text-[#e44782] transition-colors duration-200 flex items-center justify-center h-full relative top-0.5 ${location.pathname === item.href ? 'text-[#e44782]' : 'text-black'}`}
                    >
                      <span className="[font-family:'Montserrat',Helvetica] font-normal text-[16px] tracking-[0] leading-5 whitespace-nowrap hover:text-[#e44782] transition-colors duration-200">
                        {item.label}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <button className="get-started-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}; 