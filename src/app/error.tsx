'use client'; // Error boundaries must be Client Components

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='h-screen'>
      <div className='h-full container flex flex-col items-center px-6 justify-center gap-8'>
        <Image
          width={400}
          height={400}
          src={'/server-error-2.svg'}
          alt='Server Error Illustration'
        />
        <div className='text-center w-full'>
          <h2 className='text-2xl lg:text-4xl text-primary mb-2 lg:mb-4 font-poppins'>
            Internal Server Error
          </h2>
          <code className='block break-all text-primary'>{error.message}</code>
        </div>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
