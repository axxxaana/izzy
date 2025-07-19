/**
 * Utility to load images with proper error handling and lazy loading support
 */

export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImage = (src: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

export const preloadImages = (srcs: string[]): void => {
  srcs.forEach(preloadImage);
};

/**
 * Generate optimized image URLs with fallbacks
 */
export const getOptimizedImageUrl = (
  src: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'png' | 'jpg';
  } = {}
): string => {
  // For now, return the original src
  // In production, this could integrate with image optimization services
  return src;
};
