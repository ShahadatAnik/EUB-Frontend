import React from 'react';

import { cn } from '@/lib/utils';
import Title from '@/components/title';

const ContentWrapper: React.FC<{
  title: string;
  titleClassName?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ title, titleClassName, className, children }) => {
  return (
    <div>
      <Title title={title} className={titleClassName} />
      <div className={cn('py-6', className)}>{children}</div>
    </div>
  );
};

export default ContentWrapper;
