'use client'; // Error boundaries must be Client Components

import { Button } from '@/components/ui/button';
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
    <div className='bg-destructive/5 h-screen '>
      <div className='container flex flex-col items-center px-6 pt-40 gap-8'>
        <div className='text-center w-full'>
          <h2 className='text-2xl lg:text-4xl font-light text-destructive mb-2 lg:mb-4 font-poppins'>
            Something went wrong!
          </h2>
          <code className='block break-all text-destructive'>
            {error.message}
          </code>
        </div>
        <Button variant='destructive' onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </div>
  );
}
