import React from 'react';
import ContentWrapper from './content-wrapper';

import { IAlumni } from '@/types';
import AlumniGallery from '@/app/programs/_components/alumni-gallery';

const AlumniIndustry = () => {
  const data: IAlumni[] = [
    {
      name: 'Humayun Kabir',
      image: '/images/programs/eee/alumni/Humayun Kabir.jpeg',
      designation: 'Sr. DGM, Maintenance, Nasir Glass Industries Limited',
      description: `Humayun Kabir is a distinguished alumnus of the European University of Bangladesh (EUB), where he earned his degree as a graduate in Electrical and Electronic Engineering. His academic foundation at EUB played a significant role in his journey to becoming the Senior Deputy General Manager (Maintenance), a position he proudly holds today.
  However, reaching this stage was far from easy. He faced numerous struggles along the way. It required hard work, dedication, continuous learning, and confidence to achieve success. There were many moments when he felt exhausted, yet he never gave up. He remained focused and overcame every challenge. Success did not come quickly; it demanded patience, effort, and one powerful tool—his academic certificate—which enabled him to earn a degree as a graduate Electrical and Electronic Engineer from the European University of Bangladesh.
  Reflecting on his journey, he acknowledges that every struggle made him stronger. The experience has taught him valuable lessons, and today, he is ready to apply his skills to contribute to building a better future in any industry.`,
    },
    {
      name: 'Razu Ahmed',
      image: '/images/programs/eee/alumni/Razu Ahmed.jpg',
      designation: 'Assistant General Manager, Credence Housing Limited',
      description: `Razu Ahmed takes pride in being an alumnus of the European University of Bangladesh (EUB), where he successfully completed his BSc in Electrical and Electronic Engineering (EEE). He holds great pride in his university, his respected teachers, and his classmates.
  Previously, he completed Section-A of AMIE and started his first job during that time, which prevented him from continuing his studies. Currently, he has been working in the real estate sector for 20 years. Throughout his service period, he realized the immense importance of higher education—not only for professional growth but also for personal and social development.
  With this understanding, he resumed his education at EUB and successfully completed his course. He expresses gratitude to EUB for providing this opportunity. At present, he is serving as the Assistant General Manager of the Electro-Mechanical Department at Credence Housing Limited.
  He extends heartfelt thanks to all his teachers and classmates for their support and guidance on his new educational path.`,
    },
  ];

  return (
    <ContentWrapper title='Alumni and Industry' className='lg:p-8'>
      <AlumniGallery data={data} />
    </ContentWrapper>
  );
};

export default AlumniIndustry;
