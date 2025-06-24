import React from 'react';

import Title from '@/components/title';

import { cn } from '@/lib/utils';

const SectionContent: React.FC<{
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, titleClassName, children, className }) => {
  return (
    <div>
      <Title
        title={title}
        className={cn('font-sans font-semibold', titleClassName)}
      />
      <div className={cn('pl-0 lg:mt-4 lg:pl-4', className)}>{children}</div>
    </div>
  );
};

export default SectionContent;
