import React from 'react';

import FullScreenImage from '@/components/fullscreen-image';
import { Card, CardContent } from '@/components/ui/card';

import { cn } from '@/lib/utils';

import { ILab } from '../../_config/types';

const LabCard: React.FC<ILab> = ({
  title,
  description,
  images,
  equipment,
  software,
}) => {
  return (
    <div className='mb-8'>
      {title && (
        <h3 className='mb-4 text-xl font-semibold text-foreground'>{title}</h3>
      )}
      {images && (
        <Card className='mb-4 shadow-lg'>
          <CardContent
            className={cn(
              'p-2',
              images.length > 1 && 'grid lg:grid-cols-2 gap-2'
            )}
          >
            {images.map((image, index) => (
              <FullScreenImage
                key={index}
                src={image.src}
                alt={image.alt}
                width={800}
                height={400}
                className={cn('h-full w-full rounded-md object-cover')}
              />
            ))}
          </CardContent>
        </Card>
      )}
      {description && typeof description === 'string' ? (
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          {description}
        </p>
      ) : (
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          {description}
        </p>
      )}
      {equipment && (
        <>
          <h4 className='mb-2 text-base font-medium text-foreground'>
            Equipment:
          </h4>
          <p className={cn('text-sm text-gray-600', software && 'mb-4')}>
            {equipment}
          </p>
        </>
      )}
      {software && (
        <>
          <h4 className='mb-2 text-base font-medium text-foreground'>
            Software:
          </h4>
          <p className='text-sm text-gray-600'>{software}</p>
        </>
      )}
    </div>
  );
};

export default LabCard;
