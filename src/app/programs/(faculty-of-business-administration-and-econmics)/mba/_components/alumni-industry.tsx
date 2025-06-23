import React from 'react';

import { IAlumni } from '@/types';

import AlumniGallery from '@/app/programs/_components/alumni-gallery';

import ContentWrapper from './content-wrapper';

const AlumniIndustry = () => {
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
      <AlumniGallery data={data} />
    </ContentWrapper>
  );
};

export default AlumniIndustry;
