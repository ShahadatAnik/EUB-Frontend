import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';
import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <>
      <PageHeader
        image='/images/cse-2.jpg'
        title='Bachelor of Laws - LL.B. (Hons)'
      />
      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
};

export default Page;
