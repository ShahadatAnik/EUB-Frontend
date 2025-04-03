'use client';

import { cn } from '@/lib/utils';
import React from 'react';

import { RotatingLines } from 'react-loader-spinner';

const Loader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('h-screen flex items-center justify-center', className)}>
      <RotatingLines
        strokeColor='#303188'
        visible={true}
        width='50'
        strokeWidth='5'
        animationDuration='0.75'
        ariaLabel='rotating-lines-loading'
      />
    </div>
  );
};

export default Loader;
