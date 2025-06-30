import React from 'react';

import LaboratoriesAndResources from '@/app/(programs)/_components/laboratories-and-resources';

import { labData } from './_config/lab-data';

// export const metadata = generateMetaData({});

const Page = () => {
  return (
    <LaboratoriesAndResources
      title='Driving Industrial Innovation and Efficiency'
      description='The Department of Industrial and Production Engineering (IPE) at the European University of Bangladesh is dedicated to equipping students with the skills to optimize processes, reduce waste, and improve manufacturing systems. Our laboratories are central to this mission, providing a hands-on environment where theoretical knowledge is applied to real-world challenges. These state-of-the-art facilities support a comprehensive curriculum covering manufacturing, quality control, operations research, and production planning, ensuring our graduates are prepared to lead and innovate in a rapidly evolving industrial landscape.'
      data={labData}
    />
  );
};

export default Page;
