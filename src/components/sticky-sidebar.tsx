import { cn } from '@/lib/utils';
import React from 'react';

const StickySidebar: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <aside className={cn('lg:w-[300px] relative', className)}>
      <div className='sticky top-0 left-0 right-0 lg:pt-16'>{children}</div>
    </aside>
  );
};

export default StickySidebar;
