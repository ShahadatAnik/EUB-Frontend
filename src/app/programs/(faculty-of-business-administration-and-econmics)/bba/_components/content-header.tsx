import React from 'react';

import { cn } from '@/lib/utils';

const ContentHeader: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <h4
      className={cn(
        'border-l-4 border-primary bg-accent px-6 py-2 font-poppins text-lg font-medium text-primary',
        className
      )}
    >
      {title}
    </h4>
  );
};

export default ContentHeader;
