import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Facts about EUB',
	description: 'Facts about the European University of Bangladesh',
});

const Page = () => {
	return (
		<>
			<PageHeader title='Facts about EUB' />
			<Content />
		</>
	);
};

export default Page;
