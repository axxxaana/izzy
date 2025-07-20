import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const location = useLocation();
  
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
  ];

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
              <Link 
                key={index}
                to={item.href}
                className={`nav-item ${location.pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <button className="get-started-btn">
          Get Started
        </button>
      </div>
    </nav>
  );
}; 