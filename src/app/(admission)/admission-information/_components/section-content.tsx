import { cn } from '@/lib/utils';
import React from 'react';

const SectionContent: React.FC<{
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, titleClassName, children, className }) => {
  return (
    <div>
      <h4
        className={cn(
          'bg-accent py-2 px-4 border-l-4 border-primary text-lg font-semibold text-primary',
          titleClassName
        )}
      >
        {title}
      </h4>

      <div className={cn('pl-4 mt-4', className)}>{children}</div>
    </div>
  );
};

export default SectionContent;
