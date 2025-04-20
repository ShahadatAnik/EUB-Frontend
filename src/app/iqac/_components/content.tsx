'use client';

import ContentLayout from '@/app/programs/_components/content-layout';
import { Suspense } from 'react';
import accordions from '../_const/accordion-data';

const Content = () => {
  return (
    <Suspense>
      <ContentLayout
        showQuickLinks={false}
        accordions={accordions}
        bannerImage={{
          src: '/banner.jpg',
          alt: 'CSE',
        }}
      />
    </Suspense>
  );
};

export default Content;
