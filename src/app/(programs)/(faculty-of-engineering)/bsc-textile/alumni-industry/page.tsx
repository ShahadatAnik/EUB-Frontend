import React from 'react';

import { IAlumni } from '@/types';

// import { generateMetaData } from '@/lib/utils';

import AlumniIndustry from '@/app/(programs)/_components/alumni-and-industry';

// export const metadata = generateMetaData({});

const Page = () => {
  const data: IAlumni[] = [
    {
      name: 'Engr. Dr. Nazmul Huda',
      image: '/images/programs/textile/alumni/Dr. Nazmul Huda.jpeg',
      designation:
        'Executive Director, Wash Operations, CWL & SWDL, Tongi Zone',
      description: `Engr. Dr. Nazmul Huda is a seasoned professional in Textile Engineering with a rich academic and career history. He earned his B.Sc. in Textile Engineering, an MBA from the European University of Bangladesh, and a Ph.D. from the European International University in Paris. Dr. Huda began his career in 1996 at Opex Sinha Group, advancing through roles in production management. He gained international experience as Factory Manager at CGM Group in Lesotho and Velocity in Egypt. In 2007, he joined Hameem Group as GM of Technical Operations. From 2018 to 2024, he was EVP of Wash at Sparrow Apparels and Ambattur Clothing LTD. Since December 2024, Dr. Huda has been the Executive Director of Wash Operations at Ha-Meem Group.`,
    },
  ];
  return <AlumniIndustry data={data} />;
};

export default Page;
