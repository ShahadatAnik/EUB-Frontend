import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';
import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <>
      <PageHeader
        image='/images/english-2.jpg'
        title='Bachelor of Arts (B.A.) (Honors) in English'
      />
      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
};

export default Page;
