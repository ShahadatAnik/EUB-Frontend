import React from 'react';

import { Metadata } from 'next';

import { getAuthoritiesTreasurer } from '@/server/get';

import { generateMetaData as generatePageMetaData } from '@/lib/utils';

import Content from './_components/content';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAuthoritiesTreasurer();

  const metadata = generatePageMetaData({
    pageUrl: '/authorities/treasurer',
    title: `Treasurer ${data.personal_info.name} | EUB`,
    description: `Meet ${data.personal_info.name}, the Treasurer of the European University of Bangladesh, responsible for overseeing the university's financial management.`,
    keywords: [
      'EUB Treasurer',
      data.personal_info.name,
      'University financial officer',
      'EUB financial management',
      'University administration Bangladesh',
      'EUB authorities',
      'Treasurer profile',
      'University finance',
    ],
  });

  return metadata;
}

const Page = async () => {
  const data = await getAuthoritiesTreasurer();
  return <Content data={data} />;
};

export default Page;
