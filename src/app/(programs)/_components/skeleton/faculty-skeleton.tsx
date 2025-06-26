import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

const FacultySkeleton: React.FC<{ items?: number }> = ({ items = 4 }) => {
  return (
    <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4'>
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          className='flex gap-2 rounded-md border border-gray-100 bg-white p-2 lg:gap-4 lg:p-4'
        >
          <Skeleton className='size-[100px] lg:size-[140px]' />

          <div className='flex-1 space-y-2 lg:space-y-4'>
            <Skeleton className='h-4 w-full lg:h-6' />
            <Skeleton className='h-6 w-full lg:h-8' />
            <Skeleton className='h-10 w-full lg:h-12' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultySkeleton;
