import React from 'react';

import { IAlumni } from '@/types';

import AlumniIndustry from '@/app/(programs)/_components/alumni-and-industry';

// export const metadata = generateMetaData({
// });

const Page = () => {
  const data: IAlumni[] = [
    {
      name: 'Siam Sarower Jamil',
      designation:
        'PhD Research Scholar/Candidate, Department of Political Science, University of Delhi',
      description: '',
      image: '/person-placeholder.jpg',
    },
    {
      name: 'Abdullah Al Mamun',
      designation: 'Manager, Agrani Bank PLC',
      description: '',
      image: '/person-placeholder.jpg',
    },
    {
      name: 'Md. Asaduzzaman',
      designation: 'Inspector, Bangladesh Police',
      description: '',
      image: '/person-placeholder.jpg',
    },
    {
      name: 'Mahmudoon Nabi',
      designation: 'Sr.Deputy Manager, Energypac Engineering Ltd',
      description: '',
      image: '/person-placeholder.jpg',
    },
    {
      name: 'Nue Mya Mong Marma',
      designation:
        'Cotton Development Officer, Increase Cotton Production & Poverty Alleviation of Farmer in Chittagong Hill Tracks, Chittagong Hill Tracts Development Board',
      description: '',
      image: '/person-placeholder.jpg',
    },
    {
      name: 'S.M. MOKARRAM HOSSEN',
      designation:
        'Asst. Manager (Procurement), ANANDA SHIPYARD & SLIPWAYS LTD.',
      description: '',
      image: '/person-placeholder.jpg',
    },
    {
      name: 'MD. Aminul Haque',
      designation: 'Senior Project Officer, BRAC',
      description: '',
      image: '/person-placeholder.jpg',
    },
    {
      name: 'MD Nizam Hosen',
      designation:
        'Camp Manager- Shelter & Site Development, NGO Forum for Public Health',
      description: '',
      image: '/person-placeholder.jpg',
    },
  ];
  return <AlumniIndustry data={data} />;
};

export default Page;
