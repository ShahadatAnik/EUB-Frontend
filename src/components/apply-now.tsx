import React from 'react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';

const ApplyNow = () => {
  return (
    <Link href='/online-admission' className={buttonVariants()}>
      Apply Now
    </Link>
  );
};

export default ApplyNow;
