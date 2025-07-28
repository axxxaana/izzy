import { useCallback } from 'react';

/**
 * Custom hook for programmatic scroll-to-top functionality
 * @returns Object with scrollToTop function
 */
export const useScrollToTop = () => {
  const scrollToTop = useCallback((behavior: ScrollBehavior = 'instant') => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior,
    });
  }, []);

  const scrollToElement = useCallback((elementId: string, behavior: ScrollBehavior = 'smooth') => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior,
        block: 'start',
        inline: 'nearest'
      });
    } else {
      // If element doesn't exist, scroll to top
      scrollToTop('instant');
    }
  }, [scrollToTop]);

  return {
    scrollToTop,
    scrollToElement,
  };
}; 