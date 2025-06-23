import React from 'react';

import { getAuthoritiesDirectorCoordination } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Director Coordination',
	description: 'The director coordination of the European University of Bangladesh',
});

const Page = async () => {
	const data = await getAuthoritiesDirectorCoordination();
	return <Content data={data} />;
};

export default Page;
