import { cn } from '@/lib/utils';
import React from 'react';

const StickySidebar: React.FC<{
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}> = ({ children, className, containerClassName }) => {
  return (
    <aside className={cn('lg:w-[300px] relative', className)}>
      <div
        className={cn(
          'sticky top-0 left-0 right-0 lg:pt-16',
          containerClassName
        )}
      >
        {children}
      </div>
    </aside>
  );
};

export default StickySidebar;
