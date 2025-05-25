import React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const titleVariants = cva('font-medium font-poppins ', {
  variants: {
    variant: {
      header:
        'mb-3 lg:mb-4 px-4 lg:px-6 py-1.5 lg:py-3 border-l-4 bg-accent border-primary text-lg lg:text-xl text-primary',
      title: 'mb-2 text-lg text-foreground',
    },
  },
  defaultVariants: {
    variant: 'header',
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className, variant }) => {
  return <h3 className={cn(titleVariants({ variant }), className)}>{title}</h3>;
};

export default Title;
