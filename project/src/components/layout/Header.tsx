import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
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
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Resources", href: "/resources" },
  ];
  return (
    <div className={`navigation-bar ${className}`}>
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="w-8 sm:w-10 lg:w-[52px] h-6 sm:h-8 lg:h-[43px] block">
          <img
            className="w-5 sm:w-6 lg:w-[33px] h-6 sm:h-8 lg:h-[43px] object-cover"
            alt="Logo"
            src={IMAGES.logo}
          />
        </Link>
      </div>

      {/* Navigation Items - Centered */}
      <div className="nav-items">
        {navItems.map((item, index) => (
          <Link 
            key={index}
            to={item.href} 
            className={`nav-item ${location.pathname === item.href ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Get Started Button */}
      <Link to="/get-started" className="get-started-btn">
        Book a Call
      </Link>
    </div>
    );
}; 