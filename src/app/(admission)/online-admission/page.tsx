import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

const Page = () => {
	return (
		<>
			<PageHeader title='Online Admission' />

			<PageContainer>
				<Content />
			</PageContainer>
		</>
	);
};

export default Page;
