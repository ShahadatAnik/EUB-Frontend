import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Student Records',
	description: 'Student records of the European University of Bangladesh',
});

const Page = () => {
	return (
		<>
			<PageHeader title='Student Records' />
			<Content />
		</>
	);
};

export default Page;
