import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

const Page = () => {
	return (
		<>
			<PageHeader image='/images/cse-2.jpg' title='B. Sc. in Textile Engineering (TXE)' />
			<PageContainer>
				<Content />
			</PageContainer>
		</>
	);
};

export default Page;
