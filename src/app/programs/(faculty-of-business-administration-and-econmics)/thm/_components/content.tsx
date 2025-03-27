'use client';

import ContentLayout from '@/app/programs/_components/content-layout';
import { Suspense } from 'react';
import accordions from '../_const/accordion-data';

const Content = () => {
  return (
    <Suspense>
      <ContentLayout
        accordions={accordions}
        bannerImage={{
          src: '/images/programs/thm/lab/Culinary.jpg',
          alt: 'Tourism & Hospitality Management',
        }}
      />
    </Suspense>
  );
};

export default Content;
