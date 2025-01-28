import React from 'react';

import PageHeader from '@/components/page-header';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

const Page = () => {
  return (
    <>
      <PageHeader
        image='/images/cse-2.jpg'
        title='Institutional Quality Assurance Cell (IQAC)'
      />
      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
};

export default Page;
