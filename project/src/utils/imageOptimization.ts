// Image optimization utilities

export interface ImageOptimizationConfig {
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'auto';
  width?: number;
  height?: number;
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
}

/**
 * Generates optimized image URLs with WebP fallback
 */
export function getOptimizedImageUrl(
  originalSrc: string,
  config: ImageOptimizationConfig = {}
): string {
  // For now, return the original src
  // In a production environment, you might want to use a CDN or image optimization service
  return originalSrc;
}

/**
 * Generates WebP version of an image path
 */
export function getWebPImagePath(originalSrc: string): string {
  const lastDotIndex = originalSrc.lastIndexOf('.');
  if (lastDotIndex === -1) return originalSrc;
  
  const basePath = originalSrc.substring(0, lastDotIndex);
  const extension = originalSrc.substring(lastDotIndex + 1);
  
  // Only convert jpg, jpeg, and png to WebP
  if (['jpg', 'jpeg', 'png'].includes(extension.toLowerCase())) {
    return `${basePath}.webp`;
  }
  
  return originalSrc;
}

/**
 * Checks if WebP is supported in the current browser
 */
export function isWebPSupported(): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

/**
 * Generates responsive image sizes for different breakpoints
 */
export function getResponsiveSizes(
  defaultWidth: number,
  breakpoints: { [key: string]: number } = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  }
): string {
  const sizes = Object.entries(breakpoints)
    .map(([breakpoint, width]) => {
      const imageWidth = Math.min(width, defaultWidth);
      return `(min-width: ${width}px) ${imageWidth}px`;
    })
    .join(', ');
  
  return `${sizes}, ${defaultWidth}px`;
}

/**
 * Preloads an image for better performance
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Generates a blur placeholder for images
 */
export function generateBlurPlaceholder(width: number, height: number): string {
  // Generate a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle" dy=".3em">
        Loading...
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Calculates the aspect ratio of an image
 */
export function calculateAspectRatio(width: number, height: number): number {
  return width / height;
}

/**
 * Determines if an image should be loaded eagerly (above the fold)
 */
export function shouldLoadEagerly(element: HTMLElement): boolean {
  if (typeof window === 'undefined') return false;
  
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  
  // Load eagerly if the image is in the first viewport
  return rect.top < viewportHeight;
} 