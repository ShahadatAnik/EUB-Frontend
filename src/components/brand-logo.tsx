import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BrandLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href={'/'}>
      <Image
        src={'/images/logo-eub.png'}
        alt='EUB Logo'
        width={200}
        height={50}
        className={cn('object-contain', className)}
      />
    </Link>
  );
};

export default BrandLogo;
