'use client';

import ContentLayout from '@/app/academic/_components/content-layout';
import accordions from '../_const/accordion-data';

const Content = () => {
  return (
    <ContentLayout
      accordions={accordions}
      bannerImage={{
        src: '/images/cse.jpg',
        alt: 'CSE',
      }}
    />
  );
};

export default Content;
