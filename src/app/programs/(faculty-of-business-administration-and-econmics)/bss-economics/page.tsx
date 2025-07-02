import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

const Page = () => {
  return (
    <>
      <PageHeader
        className='object-contain'
        title='Bachelor of Social Sciences (BSS) in Economics'
      />
      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
};

export default Page;
