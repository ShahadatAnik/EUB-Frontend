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
      image: '/images/programs/mgds/alumni/siam-sarower-jamil.jpg',
    },
    {
      name: 'Abdullah Al Mamun',
      designation: 'Manager, Agrani Bank PLC',
      description: '',
      image: '/images/programs/mgds/alumni/abdullah-al-mamun.jpg',
    },
    {
      name: 'Md. Asaduzzaman',
      designation: 'Inspector, Bangladesh Police',
      description: '',
      image: '/images/programs/mgds/alumni/md.-asaduzzaman.jpg',
    },
    {
      name: 'Mahmudoon Nabi',
      designation: 'Sr.Deputy Manager, Energypac Engineering Ltd',
      description: '',
      image: '/images/programs/mgds/alumni/mahmudoon-nabi.jpg',
    },
    {
      name: 'Nue Mya Mong Marma',
      designation:
        'Cotton Development Officer, Increase Cotton Production & Poverty Alleviation of Farmer in Chittagong Hill Tracks, Chittagong Hill Tracts Development Board',
      description: '',
      image: '/images/programs/mgds/alumni/nue-mya-mong-marma.jpg',
    },
    {
      name: 'S.M. MOKARRAM HOSSEN',
      designation:
        'Asst. Manager (Procurement), ANANDA SHIPYARD & SLIPWAYS LTD.',
      description: '',
      image: '/images/programs/mgds/alumni/sm-mokarram-hossen.jpg',
    },
    {
      name: 'MD. Aminul Haque',
      designation: 'Senior Project Officer, BRAC',
      description: '',
      image: '/images/programs/mgds/alumni/md-aminul-haque.jpg',
    },
    {
      name: 'MD Nizam Hosen',
      designation:
        'Camp Manager- Shelter & Site Development, NGO Forum for Public Health',
      description: '',
      image: '/images/programs/mgds/alumni/md-nizam-hosen.jpg',
    },
    {
      name: 'S.M Hasan Muhmud',
      designation: 'Senior Principal Officer, Agrani Bank PLC.',
      description: '',
      image: '/images/programs/mgds/alumni/sm-hasan-muhmud.jpg',
    },
    {
      name: 'Sabuj Dobey',
      designation: 'Chief Executive Officer (CEO), Dobey International Ltd.',
      description: '',
      image: '/images/programs/mgds/alumni/sabuj-dobey.jpeg',
    },
    {
      name: 'Md. Ahsanul Hasan',
      designation: 'Assistant Director, Bangladesh Open University',
      description: '',
      image: '/images/programs/mgds/alumni/md-ahsanul-hassan.jfif',
    },
  ];
  return <AlumniIndustry data={data} />;
};

export default Page;
