import { cn } from '@/lib/utils';
import React from 'react';

const ContentHeader: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <h4
      className={cn(
        ' text-lg text-primary font-medium font-poppins bg-accent px-6 py-2 border-l-4 border-primary',
        className
      )}
    >
      {title}
    </h4>
  );
};

export default ContentHeader;
