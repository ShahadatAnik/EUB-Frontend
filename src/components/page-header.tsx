import React from 'react';

import { cn } from '@/lib/utils';

interface IPageHeaderProps {
  title: string | React.ReactNode;
  description?: string;
  image?: string;
  externalImage?: boolean;
  className?: string;
  disabledOverlay?: boolean;
}

const PageHeader: React.FC<IPageHeaderProps> = ({
  title,
  description,
  image = '/images/textures/texture-7.jpg',
  externalImage = false,
  className,
  disabledOverlay = true,
}) => {
  return (
    <div
      style={{
        backgroundImage: externalImage
          ? `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${image})`
          : `url(${image})`,
      }}
      className={cn(
        'bg-primary relative flex items-center py-8 lg:py-16 bg-no-repeat bg-center bg- bg-fixed bg-cover',
        className
      )}
    >
      {!disabledOverlay && <div className='absolute inset-0 bg-black/50'></div>}
      <div className='container relative z-10 text-center'>
        {
          <h1 className='text-wrap font-poppins text-2xl font-semibold text-white lg:text-4xl 2xl:text-5xl 2xl:leading-[1.25]'>
            {title}
          </h1>
        }
        {description && (
          <p className='text-base text-slate-300 lg:mt-2 lg:text-lg'>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
