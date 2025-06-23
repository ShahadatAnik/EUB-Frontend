import React from 'react';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Vice Chancellor',
	description: 'The vice chancellor of the European University of Bangladesh',
});

const Page = async () => {
	return <Content />;
};

export default Page;
