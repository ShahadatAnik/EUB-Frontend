import React from 'react';

import { IAlumni } from '@/types';

// import { generateMetaData } from '@/lib/utils';

import AlumniIndustry from '@/app/(programs)/_components/alumni-and-industry';

// export const metadata = generateMetaData({});

const Page = () => {
  const data: IAlumni[] = [
    {
      name: 'Md. Ashiqur Rahman',
      image: '/images/programs/ipe/alumni/Md. Ashiqur Rahman.jpeg',
      description: `Engr. Md. Ashiqur Rahman is a dynamic industrial and production engineer excelling in manufacturing and entrepreneurship. Since 2018, the European University of Bangladesh graduate has been a Senior Officer (Production) at DBL Ceramics Ltd., managing operations, quality control, and process enhancements. He is also the founder of the brand INSAAF, aspiring to make it a top 10 brand in Bangladesh through quality, strategic marketing, and customer trust. Skilled in production management and leadership, Ashiqur is a married father who balances his corporate responsibilities with his entrepreneurial vision.`,
    },
  ];
  return <AlumniIndustry data={data} />;
};

export default Page;
