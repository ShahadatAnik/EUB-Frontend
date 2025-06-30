import React from 'react';

import { generateMetaData } from '@/lib/utils';

import LaboratoriesAndResources from '@/app/(programs)/_components/laboratories-and-resources';

import { labData } from './_config/lab-data';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/laboratories-and-resources',
  title:
    'Civil Engineering Labs & Resources | European University of Bangladesh',
  description:
    'Explore our state-of-the-art labs for Civil Engineering students at EUB, including facilities for Physics, Chemistry, Geotechnical, and Computer-Aided Design.',
  keywords: [
    'Civil Engineering labs',
    'EUB engineering laboratories',
    'Geotechnical Engineering lab',
    'Physics lab for engineers',
    'Chemistry lab facilities',
    'Computer-Aided Design (CAD) lab',
    'Engineering workshops EUB',
    'Hands-on engineering education',
    'Practical learning facilities',
  ],
});

const Page = () => {
  return (
    <LaboratoriesAndResources
      title='Fostering Practical Excellence in Civil Engineering'
      description='The Department of Civil Engineering at the European University of Bangladesh is committed to providing students with a robust, hands-on learning experience. Our state-of-the-art laboratories are the cornerstone of this commitment, offering a practical dimension to theoretical concepts. These facilities are equipped with modern instruments and software, enabling students to test, analyze, and understand the fundamental principles of civil engineering. From assessing environmental impacts and testing material strength to modeling complex structures and managing transportation systems, our labs prepare students to tackle real-world challenges, fostering innovation and ensuring they are well-prepared for successful careers in the diverse fields of civil engineering.z'
      data={labData}
    />
  );
};

export default Page;
