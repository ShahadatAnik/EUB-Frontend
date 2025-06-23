import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Contact Us',
	description: 'The contact us of the European University of Bangladesh',
});

const Page = () => {
	return (
		<>
			<PageHeader title='Contact Us' description='2/4 Gabtoli, Mirpur, Dhaka 1216, Bangladesh' />
			<Content />
		</>
	);
};

export default Page;
