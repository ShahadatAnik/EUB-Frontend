'use client';

import React from 'react';

import { AppProgressProvider as ProgressProvider } from '@bprogress/next';

import TanstackProvider from './tanstack-provider';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TanstackProvider>
      <ProgressProvider
        height='1px'
        color='#ffff'
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
      </ProgressProvider>
    </TanstackProvider>
  );
};

export default Providers;
