import React from 'react';

import { getAuthoritiesVC } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Vice Chancellor',
	description: 'The vice chancellor of the European University of Bangladesh',
});

const Page = async () => {
	const data = await getAuthoritiesVC();
	return <Content data={data} />;
};

export default Page;
