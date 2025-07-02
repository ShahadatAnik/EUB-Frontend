import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

const Page = () => {
  return (
    <>
      <PageHeader
        className='object-contain'
        title='Bachelor of Laws (LL. B.) (Honors) in Law'
      />
      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
};

export default Page;
