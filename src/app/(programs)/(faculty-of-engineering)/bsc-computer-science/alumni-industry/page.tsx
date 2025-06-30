import React from 'react';

import { IAlumni } from '@/types';

// import { generateMetaData } from '@/lib/utils';

import AlumniIndustry from '@/app/(programs)/_components/alumni-and-industry';

// export const metadata = generateMetaData({});

const Page = () => {
  const data: IAlumni[] = [
    {
      name: 'Shaikh Tariqul Islam',
      image: '/images/programs/cse/alumni/Shaikh Tariqul Islam.png',
      designation: 'Cyber Security Specialist, First Security Islami Bank Ltd.',
      description: ``,
    },
    {
      name: 'Md. Ashiouzzaman',
      image: '/images/programs/cse/alumni/Md. Ashiouzzaman.png',
      designation: 'Product Designer, Astha IT',
      description: ``,
    },
    {
      name: 'Md.Golam Habib',
      image: '/images/programs/cse/alumni/Md.Golam Habib.png',
      designation: 'Senior Software Engineer, Leads corporation Ltd.',
      description: ``,
    },
    {
      name: 'Md.Mahafuj Rahman',
      image: '/images/programs/cse/alumni/Md.Mahafuj Rahman.png',
      designation: 'Co- founder & Senior Developer, Digital WebXary',
      description: ``,
    },
    {
      name: 'Jahirul Islam',
      image: '/images/programs/cse/alumni/Jahirul Islam.png',
      designation: 'CEO, ItSolutions',
      description: ``,
    },
    {
      name: 'Md. Khalid Hossain Ripon',
      image: '/images/programs/cse/alumni/Md. Khalid Hossain Ripon.png',
      designation: 'Senior IT Officer Team Leader, MR Tech',
      description: ``,
    },
    {
      name: 'Arafat Zahan',
      image: '/images/programs/cse/alumni/Arafat Zahan.png',
      designation: 'Sr. Javascript Engineer, 10up, California, USA',
      description: ``,
    },
    {
      name: 'Md.Shofikul Islam',
      image: '/images/programs/cse/alumni/Md.Shofikul Islam.png',
      designation: 'CEO of Founder, Razinsoft',
      description: ``,
    },
  ];
  return <AlumniIndustry data={data} />;
};

export default Page;
