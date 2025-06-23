import React from 'react';

import { IAlumni } from '@/types';

import AlumniGallery from '@/app/programs/_components/alumni-gallery';

import ContentWrapper from './content-wrapper';

const AlumniIndustry = () => {
	const data: IAlumni[] = [
		{
			name: 'Tareq Hossain Sohag (14th Batch)',
			image: '/images/programs/bba/alumni/Tareq Hossain Sohag (BBA 14th).jpg',
			designation: 'Head of Sales and Operations, Le Delicia, Reve Foods Limited',
			description: `Tareq Hossain Sohag, an accomplished alumnus of EUB, is currently leading Sales and Operations at Le Delicia, under Reve Foods Limited. With a strong background in business and leadership, he has played a key role in driving brand growth and operational success. His journey reflects the values of EUB—ambition, innovation, and perseverance—making him a role model for current and future students.`,
		},
		{
			name: 'Mohammad Shahrear Arefin (2nd Batch)',
			image: '/images/programs/bba/alumni/Mohammad Shahrear Arefin (BBA 2nd).jpg',
			designation: 'Assistant Officer, Jamuna Bank PLC.',
			description: `Mohammad Shahrear Arefin, a dedicated alumnus from EUB’s 2nd BBA batch, is currently serving as an Assistant Officer at Jamuna Bank PLC. With a strong foundation in business education, he has built a career in the banking sector marked by professionalism and perseverance. His journey showcases the early legacy of EUB graduates and their growing impact in Bangladesh’s financial industry.`,
		},
	];

	return (
		<ContentWrapper title='Alumni and Industry' className='lg:p-8'>
			<AlumniGallery data={data} />
		</ContentWrapper>
	);
};

export default AlumniIndustry;
