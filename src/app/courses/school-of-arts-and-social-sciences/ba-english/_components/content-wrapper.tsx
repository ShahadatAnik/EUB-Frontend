import React from 'react';
import ContentHeader from './content-header';
import { cn } from '@/lib/utils';

const ContentWrapper: React.FC<{
  title: string;
  titleClassName?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ title, titleClassName, className, children }) => {
  return (
    <div>
      <ContentHeader title={title} className={titleClassName} />
      <div className={cn('py-6', className)}>{children}</div>
    </div>
  );
};

export default ContentWrapper;
