import React from 'react';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Academic Council',
	description: 'The academic council of the European University of Bangladesh',
});

const Page = async () => {
	return <Content />;
};

export default Page;
