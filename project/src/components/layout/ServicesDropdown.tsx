import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesDropdown.css';

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isOpen, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (!isHovering) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    closeTimeoutRef.current = setTimeout(() => {
      if (!isHovering) {
        onClose();
      }
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`services-dropdown-container ${isOpen ? 'show' : ''}`}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dropdown-header">
        <div className="dropdown-title">Services</div>
        <div className="dropdown-subtitle">Choose your path to growth</div>
      </div>
      
      <div className="services-dropdown-items">
        <Link to="/services/founder-brand-strategy" className="service-dropdown-item" onClick={onClose}>
          <div className="service-content">
            <div className="service-tag">Personal Branding</div>
            <div className="service-name">Founder Personal<br />Brand Strategy</div>
          </div>
          <div className="service-arrow">→</div>
        </Link>
        
        <Link to="/services/fractional-marketing" className="service-dropdown-item" onClick={onClose}>
          <div className="service-content">
            <div className="service-tag">Strategic Marketing</div>
            <div className="service-name">Fractional Marketing<br />& Brand Direction</div>
          </div>
          <div className="service-arrow">→</div>
        </Link>
      </div>
    </div>
  );
}; 