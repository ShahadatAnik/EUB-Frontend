import React from 'react';

import RichTextViewer from '@/components/rich-text-viewer';
import { useGetAboutUs } from '@/hooks/use-get-course';
import ContentWrapper from '../content-wrapper';
const AboutUs = () => {
	const { data } = useGetAboutUs('ma-english');

	return (
		<ContentWrapper title="About Us">
			<RichTextViewer
				content={
					data && data.length > 0
						? data[0].description
						: 'No description available'
				}
			/>
		</ContentWrapper>
	);
};

export default AboutUs;
