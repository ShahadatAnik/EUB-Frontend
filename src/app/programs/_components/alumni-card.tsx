import React from 'react';

import Image from 'next/image';

import { IAlumni } from '@/types';

import { cn } from '@/lib/utils';

const AlumniCard: React.FC<
  IAlumni & {
    imageOrder?: 'left' | 'right';
    className?: string;
  }
> = ({
  image,
  name,
  designation,
  description,
  className,
  imageOrder = 'left',
}) => {
  return (
    <div
      className={cn('flex flex-col items-center gap-8 lg:flex-row', className)}
    >
      <Image
        height={300}
        width={300}
        className='object-contain'
        src={image}
        alt={name}
      />

      <div
        className={cn(
          imageOrder === 'right' ? 'order-last lg:order-first' : 'order-last'
        )}
      >
        <h4 className='text-2xl font-semibold'>{name}</h4>
        <h6 className='mt-1 text-muted-foreground'>{designation}</h6>
        <p className='mt-2 text-justify italic'>{description}</p>
      </div>
    </div>
  );
};

export default AlumniCard;
