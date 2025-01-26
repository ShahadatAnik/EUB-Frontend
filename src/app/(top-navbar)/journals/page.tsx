import PageHeader from '@/components/page-header';
import React from 'react';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

const Page = () => {
  return (
    <>
      <PageHeader title='Journals' />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
};

export default Page;
