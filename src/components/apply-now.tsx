import React from 'react';

import Link from 'next/link';

import { buttonVariants } from './ui/button';

const ApplyNow = () => {
  return (
    <Link href='/online-admission' className={buttonVariants()}>
      Apply Now
    </Link>
  );
};

export default ApplyNow;
