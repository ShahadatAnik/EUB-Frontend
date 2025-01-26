import { cn } from '@/lib/utils';
import React from 'react';

const Title: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <h3
      className={cn(
        'mb-4 px-6 py-3 border-l-4 bg-accent border-primary text-xl text-primary font-medium font-poppins',
        className
      )}
    >
      {title}
    </h3>
  );
};

export default Title;
