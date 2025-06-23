import React from 'react';

import dynamic from 'next/dynamic';

import { useGetAboutUs } from '@/hooks/use-get-course';

import ContentWrapper from '../content-wrapper';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
	ssr: false,
});

const AboutUs = () => {
	const { data } = useGetAboutUs('bsc-cse');

	return (
		<ContentWrapper title='About Us'>
			<RichTextViewer
				content={data && data.length > 0 ? data[0].description : 'No description available'}
			/>
		</ContentWrapper>
	);
};

export default AboutUs;
