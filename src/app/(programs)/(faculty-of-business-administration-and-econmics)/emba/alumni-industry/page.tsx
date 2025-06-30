import React from 'react';

import { IAlumni } from '@/types';

import AlumniIndustry from '@/app/(programs)/_components/alumni-and-industry';

// import { generateMetaData } from '@/lib/utils';

// export const metadata = generateMetaData({

// });
const Page = () => {
  const data: IAlumni[] = [
    {
      name: 'Md. Shahadat Hossain Miah (30th Batch)',
      image:
        '/images/programs/emba/alumni/Md. Shahadat Hossain Miah (EMBA 30th).png',
      designation:
        'Chief Financial Officer (CFO), Aftab Automobile Limited, Navana Group',
      description: `Md. Shahadat Hossain Miah, a distinguished EMBA graduate from EUB’s 30th batch, serves as the Chief Financial Officer at Aftab Automobile Limited, a concern of Navana Group. With extensive experience in financial leadership, his role is pivotal in driving strategic growth. His professional journey highlights the impact of EUB’s executive programs in shaping top-tier industry leaders in Bangladesh’s corporate sector.`,
    },
    {
      name: 'Mohammad Abdul Qayum (32nd Batch)',
      image:
        '/images/programs/emba/alumni/Mohammad Abdul Qayum (EMBA 32nd).jpg',
      designation: 'Assistant Vice President (AVP), EXIM Bank PLC.',
      description: `Mohammad Abdul Qayum, an EMBA graduate from EUB’s 32nd batch, is currently serving as an Assistant Vice President at EXIM Bank PLC. With a solid background in banking and finance, he has consistently demonstrated excellence in leadership and strategic execution. His rise in the banking industry reflects the value of EUB’s executive education in preparing professionals for impactful roles in the financial sector.`,
    },
  ];

  return <AlumniIndustry data={data} />;
};

export default Page;
