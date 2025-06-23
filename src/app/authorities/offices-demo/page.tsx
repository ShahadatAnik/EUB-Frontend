import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Offices',
  description: 'The offices of the European University of Bangladesh',
});

export default async function Page() {
  return (
    <>
      <PageHeader title='Offices' />
      <Content />
    </>
  );
}
