import React from 'react';

import Title from '@/components/title';

import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='space-y-6'>
      <p>
        To complete the Bachelor of Science in Industrial and Production program
        successfully, students must meet the following requirements:
      </p>

      <div>
        <Title variant={'title'} title='Minimum GPA to pass program' />
        <ul className='list-disc space-y-2 pl-6'>
          <li>
            <strong>Regular Students:</strong>
            Minimum 161.75 credits
          </li>
          <li>
            <strong>Diploma Students:</strong>
            Minimum 142.75 credits
          </li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Admission Requirements' />
        <ul className='list-disc space-y-2 pl-6'>
          <li>
            <strong>Bangladeshi Students:</strong>
            <ul className='mt-2 space-y-1'>
              <li>
                SSC & HSC (or equivalent) in Science group with at least 2nd
                division or CGPA 2.5
              </li>
              <li>
                O/A-Level: Minimum average B grade with Math, Physics, and
                Chemistry
              </li>
            </ul>
          </li>
          <li>
            <strong>Diploma Holders:</strong>
            <ul className='mt-2 space-y-1'>
              <li>
                Accepted from relevant engineering backgrounds (e.g.,
                Electrical, Mechanical)
              </li>
              <li>Waiver allowed in GED subjects only (Max: 13.5 credits)</li>
              <li>Evening Program: All students are enrolled as part-time</li>
            </ul>
          </li>
          <li>
            <strong>Foreign Students:</strong>
            <ul className='mt-2 space-y-1'>
              <li>Equivalent qualifications</li>
              <li>
                Must have security clearance from their respective embassies in
                Bangladesh
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Course Load Restrictions:' />
        <ul className='list-disc space-y-2 pl-6'>
          <li>Full-time: Up to 15 credits per semester</li>
          <li>Part-time: Up to 9 credits per semester</li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Waivers' />
        <p>
          (Not applicable; refer to the credit transfer guidelines for credit
          transfer)
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Mandatory completions' />
        <p>
          (Not specified; may include project/thesis as outlined in evaluation
          criteria)
        </p>
      </div>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
