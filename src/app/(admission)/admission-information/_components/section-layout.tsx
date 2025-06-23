import React from 'react';

import { cn } from '@/lib/utils';

const SectionLayout: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, title, children, className }) => {
  return (
    <section id={id}>
      <div className='bg-primary px-4 py-2.5 lg:px-6 lg:py-4'>
        <h3 className='text-lg font-semibold text-white lg:text-2xl'>
          {title}
        </h3>
      </div>

      <div className={cn('space-y-6 border px-4 py-4 lg:px-6', className)}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
