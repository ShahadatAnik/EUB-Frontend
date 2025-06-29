'use client';

import React from 'react';

import { cn } from '@/lib/utils';

const NoDataFound: React.FC<{
  message?: string;
  className?: string;
  textClassName?: string;
}> = ({ message = 'No Data Found.', className, textClassName }) => {
  return (
    <div className={cn('rounded-lg bg-primary/5 p-6 text-center', className)}>
      <p className={cn('font-medium text-primary', textClassName)}>{message}</p>
    </div>
  );
};

export default NoDataFound;
