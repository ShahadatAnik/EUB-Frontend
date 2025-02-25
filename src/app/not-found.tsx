'use client';

import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='h-screen'>
      <div className='container flex flex-col items-center h-full gap-4'>
        <Image
          width={400}
          height={400}
          src={'/404.svg'}
          alt='Not Found Illustration'
        />
        <div className='space-y-8 text-center'>
          <h2 className='text-5xl font-poppins text-primary'>Page not found</h2>
          <Link className={buttonVariants()} href='/'>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
