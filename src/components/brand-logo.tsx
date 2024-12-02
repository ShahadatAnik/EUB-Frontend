import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BrandLogo = () => {
  return (
    <Link href={'/'}>
      <Image
        src={'/images/logo-eub.png'}
        alt='EUB Logo'
        width={200}
        height={50}
        className='object-contain'
      />
    </Link>
  );
};

export default BrandLogo;
