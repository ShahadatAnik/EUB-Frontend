import PageHeader from '@/components/page-header';
import React from 'react';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

export default async function Page({
  params,
}: {
  params: Promise<{
    type: string;
    program: string;
    id: string;
  }>;
}) {
  const { type, program, id } = await params;

  console.log({
    type,
    program,
    id,
  });

  return (
    <>
      <PageHeader
        image='/images/accounting-and-finance.jpg'
        title='Teacher Name'
      />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
}
