import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Grading Policy',
	description: 'The grading policy of the European University of Bangladesh',
});

const Page = () => {
	return (
		<>
			<PageHeader title='Grading Policy' />
			<Content />
		</>
	);
};

export default Page;
