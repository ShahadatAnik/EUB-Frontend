'use client';

import React from 'react';

import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <RotatingLines
        strokeColor='#303188'
        visible={true}
        width='50'
        strokeWidth='5'
        animationDuration='0.75'
        ariaLabel='rotating-lines-loading'
      />
    </div>
  );
};

export default Loader;
