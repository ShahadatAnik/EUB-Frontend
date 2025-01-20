import { cn } from '@/lib/utils';
import React from 'react';

const SectionLayout: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, title, children, className }) => {
  return (
    <section id={id}>
      <div className='py-4 px-6  bg-primary'>
        <h3 className='text-2xl font-semibold text-white'>{title}</h3>
      </div>

      <div className={cn('py-4 px-6 border space-y-6', className)}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
