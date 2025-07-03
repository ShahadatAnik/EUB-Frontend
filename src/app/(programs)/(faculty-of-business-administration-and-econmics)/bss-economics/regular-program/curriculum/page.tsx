import React from 'react';

import { NonEngineeringCurriculum } from '../_components/non-engineering-curriculum';
import {
  bssEcoCoreCoursesData,
  bssEcoElectiveCoursesData,
  bssEcoGeneralCoursesData,
  bssEcoNonMajorCoursesData,
} from '../_config/data';

const Page = () => {
  return (
    <NonEngineeringCurriculum
      coreCoursesData={bssEcoCoreCoursesData}
      electiveCoursesData={bssEcoElectiveCoursesData}
      generalCoursesData={bssEcoGeneralCoursesData}
      nonMajorCoursesData={bssEcoNonMajorCoursesData}
    />
  );
};

export default Page;
