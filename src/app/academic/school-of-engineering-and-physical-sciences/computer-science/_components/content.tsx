'use client';

import ContentLayout from '@/app/academic/_components/content-layout';
import accordions from '../_const/accordion-data';
import { Suspense } from 'react';

const Content = () => {
  return (
    <Suspense>
      <ContentLayout
        accordions={accordions}
        bannerImage={{
          src: '/images/cse.jpg',
          alt: 'CSE',
        }}
      />
    </Suspense>
  );
};

export default Content;
