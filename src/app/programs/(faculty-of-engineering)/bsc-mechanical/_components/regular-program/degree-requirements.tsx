import React from 'react';
import ContentWrapper from '../content-wrapper';
import Title from '@/components/title';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='space-y-6'>
      <p>
        To successfully complete the B.Sc. in Mechanical Engineering program:
      </p>

      <div>
        <Title variant={'title'} title='Minimum GPA to pass program' />
        <p>
          Students must maintain a minimum CGPA of 2.50 and pass all required
          courses.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Supplementary rules & cost' />
        <ul className='list-disc pl-6 space-y-2'>
          <li>
            <p>
              <strong>Rule:</strong>Students receiving an &apos;I&apos; grade
              may take the next final supplementary examination without
              re-registering.
            </p>
          </li>
          <li>
            <p>
              <strong>Cost:</strong>As per university policy.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Total Credits of Course' />
        <ul className='list-disc pl-6 space-y-2'>
          <li>
            <strong>Regular Students:</strong> 161.0 credit hours
          </li>
          <li>
            <strong>Diploma Holders:</strong> 142.0 credit hours
          </li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Waivers' />
        <p>
          Applicable to diploma holders in Electrical, Electronics, Computer,
          Power, Mechanical, or Telecommunication.
        </p>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>
            Waivers apply only to General Educational Development (GED) courses.
          </li>
          <li>
            Basic sciences, Mathematics, and core engineering courses are not
            eligible for waivers.
          </li>
          <li>Maximum waiver: 13.5 credits</li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Mandatory completions' />
        <ul className='list-disc pl-6 space-y-2'>
          <li>
            ME 370: Industrial Training (4 weeks; non-credit; graded as
            &apos;S&apos; or &apos;U&apos;)
          </li>
          <li>Industrial Tour (3 weeks; co-curricular activity)</li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
