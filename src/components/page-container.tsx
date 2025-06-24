import React from 'react';

import { cn } from '@/lib/utils';

interface IPageContainerProps {
  children: React.ReactNode;
  className?: string;
}
const PageContainer: React.FC<IPageContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('container space-y-8 py-4 lg:py-12', className)}>
      {children}
    </div>
  );
};

export default PageContainer;
