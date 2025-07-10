import React from 'react';

import { Metadata } from 'next';

import { getAuthoritiesVC } from '@/server/get';

import { generateMetaData as generatePageMetaData } from '@/lib/utils';

import Content from './_components/content';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAuthoritiesVC();

  const metadata = generatePageMetaData({
    pageUrl: '/authorities/vice-chancellor',
    title: `Vice Chancellor ${data.personal_info.name} | EUB`,
    description: `Official profile of ${data.personal_info.name}, the Vice Chancellor of the European University of Bangladesh. Learn about EUB's academic and administrative head.`,
    keywords: [
      'EUB Vice Chancellor',
      data.personal_info.name,
      'VC of European University of Bangladesh',
      'University leadership Bangladesh',
      'EUB academic head',
      'EUB administration',
      'Profile of VC EUB',
      'Authorities of European University',
    ],
  });

  return metadata;
}

const Page = async () => {
  const data = await getAuthoritiesVC();
  return <Content data={data} />;
};

export default Page;
