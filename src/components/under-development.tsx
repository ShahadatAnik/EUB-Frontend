import React from 'react';

import { TriangleAlert } from 'lucide-react';

const UnderDevelopment = () => {
  return (
    <div className='flex w-full flex-col items-center gap-2 rounded-lg bg-destructive/5 py-8 pb-10 text-center text-destructive'>
      <TriangleAlert className='size-10 text-destructive' />
      <div className='space-y-1'>
        <h2 className='text-lg font-semibold'> Under development!</h2>
        <p>Exciting updates are on the way. Stay with us!</p>
      </div>
    </div>
  );
};

export default UnderDevelopment;
