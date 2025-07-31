import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  sizes = '100vw',
  priority = false,
}) => {
  // Generate WebP version path
  const getWebPSrc = (originalSrc: string) => {
    const lastDotIndex = originalSrc.lastIndexOf('.');
    if (lastDotIndex === -1) return originalSrc;
    
    const basePath = originalSrc.substring(0, lastDotIndex);
    const extension = originalSrc.substring(lastDotIndex + 1);
    
    // Only convert jpg, jpeg, and png to WebP
    if (['jpg', 'jpeg', 'png'].includes(extension.toLowerCase())) {
      return `${basePath}.webp`;
    }
    
    return originalSrc;
  };

  const webpSrc = getWebPSrc(src);
  const isWebPSupported = webpSrc !== src;

  return (
    <picture>
      {isWebPSupported && (
        <source
          srcSet={webpSrc}
          type="image/webp"
          sizes={sizes}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        sizes={sizes}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </picture>
  );
};

export default OptimizedImage; 