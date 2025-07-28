import React from 'react';
import { LayoutProps } from '../../types';
import { APP_CONFIG } from '../../constants/config';

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
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
  }, [description]);

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {children}
    </div>
  );
}; 