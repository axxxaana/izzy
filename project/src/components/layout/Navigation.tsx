import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ServicesDropdown } from './ServicesDropdown';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

interface NavigationProps {
  className?: string;
}

// Add a simple useMediaQuery hook
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
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

  const toggleMobileMenu = () => {
    console.log('toggleMobileMenu called, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log('New state will be:', !isMobileMenuOpen);
    // Close services dropdown when mobile menu is toggled
    if (isServicesOpen) {
      setIsServicesOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      <style>{`
        .nav-item, a.nav-item, button.nav-item {
          font-weight: 200 !important;
          letter-spacing: 0.8px !important;
          color: #000000 !important;
          font-family: 'Anton', Helvetica, sans-serif !important;
        }
      `}</style>
      <nav className={`navigation-bar ${className}`}>
        <div className="navigation-container">
        
        {/* Logo - Left Column */}
        <div className="logo-container">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            <img
              className="logo-image"
              alt="Logo"
              src="/bolt-logo.svg"
              onError={(e) => {
                console.error('Logo failed to load:', e);
                e.currentTarget.style.border = '2px solid red';
              }}
              onLoad={() => {
                console.log('Logo loaded successfully');
              }}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn block lg:hidden"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked!');
            toggleMobileMenu();
          }}
          aria-label="Toggle mobile menu"
          style={{ display: 'flex' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Items - Center Column (Desktop) */}
        <div className="nav-items hidden lg:flex">
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
                  style={{ fontWeight: 200, letterSpacing: '0.8px', color: '#000000' }}
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
                style={{ 
                  fontWeight: 200, 
                  letterSpacing: '0.8px', 
                  color: '#000000',
                  fontFamily: "'Anton', Helvetica, sans-serif"
                }}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        {/* Desktop Get Started Button - Only show on desktop */}
        {isDesktop && (
          <div className="get-started-container">
            <Link to="/get-started" className="get-started-btn">
              Book a Call
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {(() => {
        if (isMobileMenuOpen) {
          return (
            <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
              <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                <div className="mobile-nav-items">
                  {navItems.map((item, index) => (
                    <div key={index} className="mobile-nav-item-container">
                      {item.hasDropdown ? (
                        <div className="mobile-dropdown-container">
                          <button
                            className={`mobile-nav-item ${location.pathname === item.href ? 'active' : ''}`}
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                          >
                            {item.label}
                            <span className={`mobile-dropdown-arrow ${isServicesOpen ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isServicesOpen && (
                            <div className="mobile-dropdown-menu">
                              <Link 
                                to="/founder-brand-strategy" 
                                className="mobile-dropdown-item"
                                onClick={closeMobileMenu}
                              >
                                Founder Brand Strategy
                              </Link>
                              <Link 
                                to="/fractional-marketing" 
                                className="mobile-dropdown-item"
                                onClick={closeMobileMenu}
                              >
                                Fractional Marketing
                              </Link>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link 
                          to={item.href}
                          className={`mobile-nav-item ${location.pathname === item.href ? 'active' : ''}`}
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Mobile Get Started Button */}
                <div className="mobile-get-started-container">
                  <Link to="/get-started" className="mobile-get-started-btn" onClick={closeMobileMenu}>
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })(      )}
    </nav>
    </>
  );
};