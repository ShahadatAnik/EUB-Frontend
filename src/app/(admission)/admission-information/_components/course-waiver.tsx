import React from 'react';

import SectionContent from './section-content';
import SectionLayout from './section-layout';

const CourseWaiver = () => {
  return (
    <SectionLayout title='Course Waiver' id='course-waiver'>
      <SectionContent title='Diploma holders in relevant engineering fields may receive course waivers based on UGC guidelines:'>
        <ul className='list-inside list-decimal space-y-3'>
          <li>Civil Engineering diploma holders: Waivers up to 19 credits.</li>
          <li>
            Other Engineering diplomas: Waivers up to 13.5 credits (GED courses
            only).
          </li>
        </ul>
      </SectionContent>
    </SectionLayout>
  );
};

export default CourseWaiver;
