'use client';

import { Suspense } from 'react';

import ContentLayout from '@/app/programs/_components/content-layout';

import accordions from '../_const/accordion-data';

const Content = () => {
  return (
    <Suspense>
      <ContentLayout
        accordions={accordions}
        bannerImage={{
          src: '/banner.jpg',
          alt: 'Physics',
        }}
      />
    </Suspense>
  );
};

export default Content;
