import React from 'react';

import { IAlumni } from '@/types';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

import AlumniIndustry from '@/app/(programs)/_components/alumni-and-industry';
import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bba/alumni-industry',
  title:
    'Bachelor of Business Administration(BBA) Alumni & Industry Links | European University of Bangladesh',
  description:
    'Read testimonials from successful Bachelor of Business Administration(BBA) alumni of EUB and learn about our strong connections with the industry for internships and career opportunities.',
  keywords: [
    'EUB Bachelor of Business Administration(BBA) alumni',
    'Bachelor of Business Administration(BBA) success stories',
    'University industry partnership',
    'Engineering career opportunities',
    'Alumni testimonials EUB',
    'Job placement for engineers',
    'Student internship programs',
    'Graduate success stories',
  ],
});
const Page = () => {
  const data: IAlumni[] = [
    {
      name: 'Tareq Hossain Sohag (14th Batch)',
      image: '/images/programs/bba/alumni/Tareq Hossain Sohag (BBA 14th).jpg',
      designation:
        'Head of Sales and Operations, Le Delicia, Reve Foods Limited',
      description: `Tareq Hossain Sohag, an accomplished alumnus of EUB, is currently leading Sales and Operations at Le Delicia, under Reve Foods Limited. With a strong background in business and leadership, he has played a key role in driving brand growth and operational success. His journey reflects the values of EUB—ambition, innovation, and perseverance—making him a role model for current and future students.`,
    },
    {
      name: 'Mohammad Shahrear Arefin (2nd Batch)',
      image:
        '/images/programs/bba/alumni/Mohammad Shahrear Arefin (BBA 2nd).jpg',
      designation: 'Assistant Officer, Jamuna Bank PLC.',
      description: `Mohammad Shahrear Arefin, a dedicated alumnus from EUB’s 2nd BBA batch, is currently serving as an Assistant Officer at Jamuna Bank PLC. With a strong foundation in business education, he has built a career in the banking sector marked by professionalism and perseverance. His journey showcases the early legacy of EUB graduates and their growing impact in Bangladesh’s financial industry.`,
    },
  ];

  return (
    <ContentWrapper title='Alumni and Industry' className='lg:p-8'>
      <AlumniIndustry data={data} />
    </ContentWrapper>
  );
};

export default Page;
