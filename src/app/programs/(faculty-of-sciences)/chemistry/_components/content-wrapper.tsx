import React from 'react';

import Title from '@/components/title';

import { cn } from '@/lib/utils';

const ContentWrapper: React.FC<{
  title: string;
  titleClassName?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ title, titleClassName, className, children }) => {
  return (
    <div>
      <Title title={title} className={titleClassName} />
      <div className={cn('py-2', className)}>{children}</div>
    </div>
  );
};

export default ContentWrapper;
