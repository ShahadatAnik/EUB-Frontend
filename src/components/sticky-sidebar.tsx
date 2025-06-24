import React from 'react';

import { cn } from '@/lib/utils';

const StickySidebar: React.FC<{
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}> = ({ children, className, containerClassName }) => {
  return (
    <aside className={cn('relative lg:w-[300px]', className)}>
      <div
        className={cn(
          'sticky left-0 right-0 top-0 lg:pt-16',
          containerClassName
        )}
      >
        {children}
      </div>
    </aside>
  );
};

export default StickySidebar;
