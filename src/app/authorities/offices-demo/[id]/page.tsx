'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import PageHeader from '@/components/page-header';

import data from '../_const/offices-data';
import Content from './_components/content';

const Page = () => {
	const pathName = usePathname();
	const title = data.find((item) => item.href === pathName)?.title;

	return (
		<>
			<PageHeader title={title || 'Office Details'} />
			<Content />
		</>
	);
};

export default Page;
