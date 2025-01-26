import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Academic Council',
  description: 'The academic council of the European University of Bangladesh',
});

const Page = () => {
  return <Content />;
};

export default Page;
