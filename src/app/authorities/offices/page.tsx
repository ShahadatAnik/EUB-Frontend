import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';
import { getOffices } from '@/server/get';

export const metadata = generateMetaData({
  title: 'Offices',
  description: 'The offices of the European University of Bangladesh',
});

export default async function Page() {
  const data = await getOffices();

  return (
    <>
      <PageHeader title='Offices' />
      <Content initialData={data} />
    </>
  );
}
