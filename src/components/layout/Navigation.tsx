import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ServicesDropdown } from './ServicesDropdown';
import './Navigation.css';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "Portfolio", href: "#portfolio" },
  ];

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const handleServicesMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesOpen(false);
  };

  return (
    <nav className={`navigation-bar ${className}`}>
      <div className="navigation-container">
        
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img
              className="logo-image"
              alt="Logo"
              src="/copy-of-bolt-logo-1.png"
            />
          </Link>

          {/* Navigation Items */}
          <div className="nav-items">
            {navItems.map((item, index) => (
              item.hasDropdown ? (
                <div 
                  key={index}
                  className="nav-item-dropdown-container"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <button
                    className={`nav-item nav-item-dropdown ${location.pathname === item.href ? 'active' : ''}`}
                    onClick={handleServicesClick}
                  >
                    {item.label}
                  </button>
                  <ServicesDropdown 
                    isOpen={isServicesOpen} 
                    onClose={() => setIsServicesOpen(false)} 
                  />
                </div>
              ) : (
                <Link 
                  key={index}
                  to={item.href}
                  className={`nav-item ${location.pathname === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <Link to="/get-started" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </nav>
  );
}; 