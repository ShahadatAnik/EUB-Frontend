import PageHeader from '@/components/page-header';
import React from 'react';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

import { secret } from '@/config/secret';

export default async function Page() {
  const data = await fetch(`${secret.apiBaseUrl}/v1/portfolio/info
`);
  const res = await data.json();

  console.log({
    res,
  });

  return (
    <>
      <PageHeader title='Academic Calendar' />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
}
