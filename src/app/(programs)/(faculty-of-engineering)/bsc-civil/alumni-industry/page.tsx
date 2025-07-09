import React from 'react';

import { IAlumni } from '@/types';

import { generateMetaData } from '@/lib/utils';

import AlumniIndustry from '@/app/(programs)/_components/alumni-and-industry';

export const metadata = generateMetaData({
  pageUrl: '/bsc-civil/alumni-industry',
  title:
    'Civil Engineering Alumni & Industry Links | European University of Bangladesh',
  description:
    'Read testimonials from successful Civil Engineering alumni of EUB and learn about our strong connections with the industry for internships and career opportunities.',
  keywords: [
    'EUB Civil Engineering alumni',
    'Civil Engineering success stories',
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
      name: 'Syed Muntasir Hafiz',
      image: '/images/programs/civil/alumni/Syed Muntasir Hafiz.jpg',
      designation: 'Assistant Engineer, Roads and Highways Department',
      description: `The European University of Bangladesh (EUB) stands out as a remarkable institution among those approved by the University Grants Commission, committed to developing a skilled and capable nation. Here, students are provided with extensive opportunities for both personal and academic development. The university is equipped with modern educational facilities, supported by a dedicated team of experienced faculty members and an efficient administrative staff, whose combined efforts have significantly enhanced the institution’s reputation. EUB offers well-furnished classrooms, a rich library, and an open, supportive learning environment that fosters academic excellence. Within a short span of time, EUB has earned recognition as a prestigious academic institution. The university hosts various departmental clubs, including Civil, EEE, Textile, and Mechanical clubs, along with cultural clubs and a strong alumni network that keeps former students connected. All these achievements have been made possible due to the visionary leadership and honest management of the governing body. Best wishes to the university for its continued progress and its contribution to building a self-sufficient Bangladesh.`,
    },
    {
      name: 'Mollah Mohammad Tamal',
      image: '/images/programs/civil/alumni/Mollah Mohammad Tamal.png',
      designation:
        'Master’s Student & Research Assistant, Technical University of Darmstadt, Germany',
      description: `A Heartfelt Thank You to EUB. I am proud to be a graduate of the Department of Civil Engineering, European University of Bangladesh (EUB), 12th Batch. Currently, I am pursuing my Master’s in Tropical Hydrogeology and Environmental Engineering at Technical University of Darmstadt, Germany, and working as a Research Assistant at TU Darmstadt. EUB has been a strong foundation in my academic journey. The quality education, dedicated faculty, and supportive learning environment have helped me achieve my goals. It has served as a bridge, enabling me to pursue higher education at a globally recognized institution. I believe EUB students have the potential to excel worldwide. With determination and the right guidance, they can achieve remarkable success. I am deeply grateful to EUB, my respected teachers, and mentors for their continuous support. Thank you, EUB, for shaping my future!`,
    },
  ];
  return <AlumniIndustry data={data} />;
};

export default Page;
