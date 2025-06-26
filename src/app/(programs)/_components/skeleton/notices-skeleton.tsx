import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

const NoticesSkeleton: React.FC<{ items?: number }> = ({ items = 5 }) => {
  return (
    <div className='space-y-3'>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className='space-y-3 pb-4'>
          <Skeleton className='h-5 w-full' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      ))}
    </div>
  );
};

export default NoticesSkeleton;
