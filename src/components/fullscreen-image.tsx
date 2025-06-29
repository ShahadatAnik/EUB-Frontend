'use client';

import { useMemo, useRef } from 'react';

import Image from 'next/image';

import { Maximize2, Minimize2 } from 'lucide-react';

import { useFullscreen } from '@/hooks/use-fullscreen';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

/**
 * Props for the LabImage component
 */
export interface FullScreenImageProps {
  /** Image source URL */
  src?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Container width */
  width?: number;
  /** Container height */
  height?: number;
  /** CSS classes for the image */
  className?: string;
  /** Priority loading for above-the-fold images */
  priority?: boolean;
  containerClassName?: string;
}

/**
 * Default configuration for the LabImage component
 */
const DEFAULT_CONFIG = {
  src: '/placeholder.svg',
  alt: 'Lab image',
  width: 800,
  height: 400,
  className: 'size-full  object-cover',
  priority: false,
} as const;

/**
 * LabImage component with native fullscreen functionality
 *
 * @example
 * \`\`\`tsx
 * <LabImage
 *   src="/images/lab-photo.jpg"
 *   alt="Laboratory equipment"
 *   width="600px"
 *   height="400px"
 * />
 * \`\`\`
 */
export default function FullScreenImage({
  src = DEFAULT_CONFIG.src,
  alt = DEFAULT_CONFIG.alt,
  width = DEFAULT_CONFIG.width,
  height = DEFAULT_CONFIG.height,
  priority = DEFAULT_CONFIG.priority,
  className,
  containerClassName,
}: FullScreenImageProps) {
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const {
    isSupported,
    isActive: isFullscreen,
    error,
    toggleFullscreen,
  } = useFullscreen(fullscreenRef);

  /**
   * Memoized image source with fallback
   */
  const imageSrc = useMemo(() => src || DEFAULT_CONFIG.src, [src]);

  /**
   * Memoized sizes attribute for responsive images
   */
  const imageSizes = useMemo(() => {
    if (isFullscreen) return '100vw';
    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  }, [isFullscreen]);

  /**
   * Handle fullscreen toggle
   */
  const handleFullscreenToggle = (): void => {
    toggleFullscreen();
  };

  /**
   * Render fullscreen button
   */
  const renderFullscreenButton = () => {
    if (!isSupported) return null;

    const Icon = isFullscreen ? Minimize2 : Maximize2;
    const label = isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen';

    return (
      <Button
        onClick={handleFullscreenToggle}
        size='icon'
        variant='secondary'
        className='absolute bottom-2 right-2 border-none bg-black/50 text-white opacity-0 transition-opacity duration-200 hover:bg-black/70 focus:opacity-100 group-hover:opacity-100'
        aria-label={label}
        type='button'
      >
        <Icon className='h-4 w-4' aria-hidden='true' />
      </Button>
    );
  };

  /**
   * Render fullscreen container
   */
  const renderFullscreenContainer = () => (
    <div
      ref={fullscreenRef}
      className='flex h-full w-full items-center justify-center bg-black'
      style={{ display: isFullscreen ? 'flex' : 'none' }}
      role='dialog'
      aria-modal={isFullscreen}
      aria-label='Fullscreen image view'
    >
      <div className='relative flex h-full w-full items-center justify-center'>
        <Image
          src={imageSrc || '/placeholder.svg'}
          alt={alt}
          fill
          className='object-contain'
          priority
          sizes='100vw'
          quality={90}
        />

        <Button
          onClick={handleFullscreenToggle}
          size='icon'
          variant='secondary'
          className='absolute right-4 top-4 z-10 border-none bg-black/70 text-white hover:bg-black/90'
          aria-label='Exit fullscreen'
          type='button'
        >
          <Minimize2 className='h-4 w-4' aria-hidden='true' />
        </Button>
      </div>
    </div>
  );

  return (
    <div className={cn('group relative block size-full', containerClassName)}>
      {/* Main image container */}
      <div
        className='relative size-full overflow-hidden'
        role='img'
        aria-label={alt}
      >
        <Image
          src={imageSrc || '/placeholder.svg'}
          alt={alt}
          className={cn(DEFAULT_CONFIG.className, className)}
          sizes={imageSizes}
          priority={priority}
          quality={85}
          height={height}
          width={width}
        />

        {renderFullscreenButton()}
      </div>

      {/* Fullscreen container */}
      {renderFullscreenContainer()}

      {/* Error handling */}
      {error && (
        <div
          className='absolute left-2 top-2 rounded bg-red-500/90 px-2 py-1 text-xs text-white'
          role='alert'
          aria-live='polite'
        >
          {error}
        </div>
      )}
    </div>
  );
}
