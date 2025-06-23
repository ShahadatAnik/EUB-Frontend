import React from 'react';

import { getOffices } from '@/server/get';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
	title: 'Offices',
	description: 'The offices of the European University of Bangladesh',
});

export default async function Page() {
	const data = await getOffices();

	return (
		<>
			<PageHeader title='Offices' />
			<Content initialData={data} />
		</>
	);
}
