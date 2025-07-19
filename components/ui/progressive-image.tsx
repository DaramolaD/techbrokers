"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  onLoad?: () => void;
  height?: number;
  width?: number;
  fill?: boolean;
  sizes?: string;
}

// Loading skeleton component
function ImageSkeleton({ height = 48 }: { height?: number }) {
  return (
    <div 
      className="bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
      style={{ height: `${height}px` }}
    />
  );
}

export function ProgressiveImage({ 
  src, 
  alt, 
  priority = false, 
  className = "",
  onLoad,
  height,
  width,
  fill,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton while not in view */}
      {!isInView && <ImageSkeleton height={height} />}
      
      {/* Progressive image loading */}
      {isInView && (
        <>
          {/* Low quality placeholder */}
          <Image
            src={src}
            alt={alt}
            {...(fill ? { fill } : { width, height })}
            sizes={sizes}
            priority={priority}
            quality={10}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            className={`object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
          />
          
          {/* High quality image */}
          <Image
            src={src}
            alt={alt}
            {...(fill ? { fill } : { width, height })}
            sizes={sizes}
            priority={priority}
            quality={85}
            className={`object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
          />
        </>
      )}
    </div>
  );
} 