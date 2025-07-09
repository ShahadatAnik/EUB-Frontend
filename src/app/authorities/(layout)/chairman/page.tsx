import React from 'react';

import { Metadata } from 'next';

import { getAuthoritiesChairman } from '@/server/get';

import { generateMetaData as generatePageMetaData } from '@/lib/utils';

import Content from './_components/content';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAuthoritiesChairman();

  const metadata = generatePageMetaData({
    pageUrl: '/authorities/chairman',
    title: `Chairman ${data.personal_info.name} | European University of Bangladesh (EUB)`,
    description: `Meet ${data.personal_info.name}, the Chairman of the European University of Bangladesh. Learn about his role in the leadership and governance of the university.`,
    keywords: [
      'EUB Chairman',
      data.personal_info.name,
      'European University of Bangladesh Chairman',
      'University Board of Trustees',
      'University leadership Dhaka',
      'EUB governance',
      'Authorities of EUB',
      'Chairman profile',
    ],
  });

  return metadata;
}

const Page = async () => {
  const data = await getAuthoritiesChairman();
  return <Content data={data} />;
};

export default Page;
