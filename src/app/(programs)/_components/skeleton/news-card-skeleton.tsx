import React from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const NewsCardSkeleton: React.FC<{ items?: number }> = ({ items = 3 }) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {Array.from({ length: items }).map((_, index) => (
        <Card key={index} className='overflow-hidden border-primary/10'>
          <CardHeader className='relative aspect-[3/2] w-full border-b border-primary/10 bg-background p-0'>
            <Skeleton className='size-full' />
          </CardHeader>
          <CardContent className='space-y-4 pt-4'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-12 w-full' />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsCardSkeleton;
