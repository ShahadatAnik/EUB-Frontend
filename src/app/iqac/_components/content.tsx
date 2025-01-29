'use client';

import { Suspense } from 'react';
import ContentLayout from '@/app/courses/_components/content-layout';
import accordions from '../_const/accordion-data';

const Content = () => {
  return (
    <Suspense>
      <ContentLayout
        showQuickLinks={false}
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
