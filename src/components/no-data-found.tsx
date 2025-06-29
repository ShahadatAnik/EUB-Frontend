'use client';

import React from 'react';

const NoDataFound: React.FC<{ message?: string }> = ({
  message = 'No Data Found.',
}) => {
  return (
    <div className='rounded-lg bg-primary/5 p-6 text-center'>
      <p className='font-medium text-primary'>{message}</p>
    </div>
  );
};

export default NoDataFound;
