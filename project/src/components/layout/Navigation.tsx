import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ServicesDropdown } from './ServicesDropdown';
import './Navigation.css';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Resources", href: "/resources" },
  ];

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const handleServicesMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    // Add a small delay before closing to make it more user-friendly
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    // Clear any pending close timeout when hovering over dropdown
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    // Add a small delay before closing
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <nav className={`navigation-bar ${className}`}>
      <div className="navigation-container">
        
        {/* Logo - Left Column */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img
              className="logo-image"
              alt="Logo"
              src="/bolt-logo.svg"
            />
          </Link>
        </div>

        {/* Navigation Items - Center Column */}
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

        {/* Get Started Button - Right Column */}
        <div className="get-started-container">
          <Link to="/get-started" className="get-started-btn">
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}; 