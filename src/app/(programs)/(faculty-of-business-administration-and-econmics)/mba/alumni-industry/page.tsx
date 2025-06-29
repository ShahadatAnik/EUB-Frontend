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
        name: 'Md. Abu Zafar (23rd Batch)',
        image:
          '/images/programs/mba-regular/alumni/Md. Abu Zafar (MBA Regular 23rd).png',
        designation:
          'Executive Engineer (22nd BCS), Public Works Department (PWD)',
        description: `Md. Abu Zafar, an accomplished graduate of EUB’s 23rd MBA batch, is currently serving as an Executive Engineer in the Public Works Department through the 22nd BCS. His dedication to public service and technical excellence reflects the strength of EUB’s academic foundation. Zafar’s success story stands as an inspiration for students aiming to contribute meaningfully to national development through government service.`,
      },
    ];

  return (
    <ContentWrapper title='Alumni and Industry' className='lg:p-8'>
      <AlumniIndustry data={data} />
    </ContentWrapper>
  );
};

export default Page;
