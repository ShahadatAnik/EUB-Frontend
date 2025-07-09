import React from 'react';

import { getAuthoritiesAcademicCouncil } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/authorities/academic-council',
  title: 'Academic Council | European University of Bangladesh (EUB)',
  description:
    'Meet the members of the Academic Council at EUB, the principal academic body responsible for maintaining the standards of teaching, research, and examinations.',
  keywords: [
    'EUB Academic Council',
    'University academic body',
    'Academic standards university',
    'EUB teaching and research',
    'University examination policies',
    'List of Academic Council members',
    'EUB academic governance',
    'Higher education standards Bangladesh',
  ],
});

const Page = async () => {
  const data = await getAuthoritiesAcademicCouncil();

  return <Content data={data} />;
};

export default Page;
