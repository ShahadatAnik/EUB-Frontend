import React from 'react';

import {
	getCertificateTuitionFees,
	getGraduateTuitionFees,
	getUndergraduateTuitionFees,
} from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

export default async function Page() {
	const [undergraduateTuitionFees, graduateTuitionFees, certificateTuitionFees] = await Promise.all(
		[getUndergraduateTuitionFees(), getGraduateTuitionFees(), getCertificateTuitionFees()]
	);

	return (
		<>
			<PageHeader title='Tuition and Other Fees Structure' />
			<PageContainer>
				<Content
					initialData={{
						undergraduateTuitionFees,
						graduateTuitionFees,
						certificateTuitionFees,
					}}
				/>
			</PageContainer>
		</>
	);
}
