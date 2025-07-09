import React from 'react';

import { Metadata } from 'next';

import { getAuthoritiesDean } from '@/server/get';

import { generateMetaData as generatePageMetaData } from '@/lib/utils';

import Content from './_components/content';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAuthoritiesDean();

  const metadata = generatePageMetaData({
    pageUrl: '/authorities/dean',
    title: `Dean ${data.personal_info.name} | EUB`,
    description: `Meet ${data.personal_info.name}, Dean at EUB. Learn about his extensive background in Textile Engineering and Color Chemistry.`,
    keywords: [
      'EUB Dean',
      data.personal_info.name,
      'Dean of Engineering EUB',
      'Textile Engineering Bangladesh',
      'Color Chemistry expert',
      'University academic leadership',
      'EUB authorities',
      'Dean profile',
    ],
  });

  return metadata;
}

const Page = async () => {
  const data = await getAuthoritiesDean();

  return <Content data={data} />;
};

export default Page;
