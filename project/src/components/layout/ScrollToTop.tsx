import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes (route changes)
    // but allow hash-based navigation within the same page
    if (hash === '') {
      // Use setTimeout to ensure the navigation is complete before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }, 0);
    } else if (hash) {
      // Handle hash navigation - scroll to the element if it exists
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If hash element doesn't exist, scroll to top
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
        }
      }, 100);
    }
  }, [pathname, hash, key]);

  // Handle page reload case
  useEffect(() => {
    // This effect runs only on component mount (page load/reload)
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};

export default ScrollToTop; 