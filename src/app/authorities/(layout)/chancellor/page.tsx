import React from 'react';

import { getAuthoritiesChancellor } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Chancellor',
	description: 'The chancellor of the European University of Bangladesh',
});

const Page = async () => {
	const data = await getAuthoritiesChancellor();

	return <Content data={data} />;
};

export default Page;
