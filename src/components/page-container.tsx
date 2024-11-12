import { cn } from '@/lib/utils';
import React from 'react';

interface IPageContainerProps {
  children: React.ReactNode;
  className?: string;
}
const PageContainer: React.FC<IPageContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'container max-w-[1240px]  py-8 lg:py-16 space-y-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
