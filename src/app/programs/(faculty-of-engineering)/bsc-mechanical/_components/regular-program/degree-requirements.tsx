import React from 'react';

import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='space-y-4 py-4'>
      <div>
        <h4 className='mb-2 font-semibold'>2.4. Degree Requirements</h4>
        <ul className='mt-4 list-disc space-y-2 pl-6'>
          <li>
            Completion of minimum <strong>161 .75</strong> credit hours for
            Regular Students
          </li>
          <li>
            Completion of minimum <strong>142.75</strong> credit hours for
            Diploma Students.
          </li>
        </ul>
      </div>

      <div>
        <h4 className='mb-2 font-semibold'>
          2.4.1. Minimum GPA to pass program: 2.50 CGPA
        </h4>
      </div>

      <div>
        <h4 className='mb-2 font-semibold'>
          2.4.2. Supplementary Rules & Cost
        </h4>
        <ul className='mt-4 list-disc space-y-2 pl-6'>
          <li>
            <strong>Rule:</strong> Students with an &#39;I&#39; grade
            (incomplete due to missing the final exam but having completed other
            requirements) can take the next final supplementary examination
            without re-registering for the course.
          </li>
          <li>
            <strong>Cost:</strong> According to the policy of the university.
          </li>
        </ul>
      </div>

      <div>
        <h4 className='mb-2 font-semibold'>2.4.3. Total Credits of Course</h4>
        <ul className='mt-4 list-disc space-y-2 pl-6'>
          <li>
            <strong>Regular students:</strong> 161.0 credit hours.
          </li>
          <li>
            <strong>Diploma holders:</strong> 142.0 credit hours.
          </li>
        </ul>
      </div>

      <div>
        <h4 className='mb-2 font-semibold'>2.4.4. Waivers (if any)</h4>
        <ul className='mt-4 list-disc space-y-2 pl-6'>
          <li>
            Diploma holders in Electrical /Electronics /Computer /Power
            /Mechanical / Telecommunication are eligible for waivers.
          </li>
          <li>
            Waivers apply only to General Educational Development (GED) group
            courses.
          </li>
          <li>
            Basic sciences, Mathematics, and engineering courses cannot be
            exempted.
          </li>
          <li>Maximum exempted credits: 13.5 credits.</li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
