import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Accreditation | European University of Bangladesh (EUB)',
  description:
    'The European University of Bangladesh is fully accredited by the UGC. Learn about our commitment to academic excellence and our ongoing efforts to achieve international accreditation from ABET for Engineering and ACBSP for Business programs.',

  keywords: [
    'EUB accreditation',
    'UGC approved university Bangladesh',
    'European University of Bangladesh recognition',
    'ABET accreditation Bangladesh',
    'ACBSP accreditation business school',
    'University quality assurance',
    'Accredited engineering programs',
    'Accredited business programs',
    'Higher education accreditation',
    'International university accreditation',
  ],
  pageUrl: '/about/accreditation',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Accreditation' />
      <Content />
    </>
  );
};

export default Page;
