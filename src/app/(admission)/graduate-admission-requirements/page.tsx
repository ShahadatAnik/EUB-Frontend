import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Graduate Admission Requirements',
	description: 'The graduate admission requirements of the European University of Bangladesh',
});

const Page = () => {
	return (
		<>
			<PageHeader title='Graduate Admission Requirements' />
			<Content />
		</>
	);
};

export default Page;
