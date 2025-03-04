'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  lowQualitySrc?: string;
  loadingColor?: string;
}

const OptimizedImage = ({
  src,
  alt,
  lowQualitySrc,
  loadingColor = '#f3f4f6',
  className = '',
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src);

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true);
    setCurrentSrc(lowQualitySrc || src);
  }, [src, lowQualitySrc]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: loadingColor }}>
      <Image
        src={currentSrc}
        alt={alt}
        {...props}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
        onLoadingComplete={() => {
          // If we're showing the low quality image, now load the high quality one
          if (lowQualitySrc && currentSrc === lowQualitySrc) {
            setCurrentSrc(src);
          } else {
            setIsLoading(false);
          }
        }}
        loading="lazy"
        sizes={props.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-primary"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 