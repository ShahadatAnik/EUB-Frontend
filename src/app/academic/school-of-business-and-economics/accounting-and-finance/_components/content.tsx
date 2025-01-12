'use client';

import { Suspense } from 'react';
import { accordions } from './accordions';
import ContentLayout from '@/app/academic/_components/content-layout';

const Content = () => {
  return (
    <Suspense>
      <ContentLayout
        accordions={accordions}
        bannerImage={{
          src: '/images/accounting-and-finance.jpg',
          alt: 'Accounting and Finance',
        }}
      />
    </Suspense>
  );
};

export default Content;
