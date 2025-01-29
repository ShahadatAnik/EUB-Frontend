import React from 'react';
import TanstackProvider from './tanstack-provider';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <TanstackProvider>{children}</TanstackProvider>;
};

export default Providers;
