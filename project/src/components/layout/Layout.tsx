import React from 'react';
import { LayoutProps } from '../../types';
import { APP_CONFIG } from '../../constants/config';
import { Navigation } from './Navigation';
import { CursorTrail } from '../CursorTrail';

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  description, 
  className = '' 
}) => {

  // Update document title if provided
  React.useEffect(() => {
    if (title) {
      document.title = `${title} | ${APP_CONFIG.title}`;
    } else {
      document.title = APP_CONFIG.title;
    }
  }, [title]);

  // Update meta description if provided
  React.useEffect(() => {
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (description) {
      if (metaDescription) {
        // Update existing meta description
        metaDescription.setAttribute('content', description);
      } else {
        // Create new meta description if it doesn't exist
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }
    }
  }, [description]);

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {/* Cursor Trail Effect */}
      <CursorTrail />
      {/* Navigation - Consistent across all pages */}
      <Navigation />
      {children}
    </div>
  );
}; 