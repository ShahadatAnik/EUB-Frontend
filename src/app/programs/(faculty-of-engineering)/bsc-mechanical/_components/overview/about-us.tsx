import React from 'react';

import ContentWrapper from '../content-wrapper';

const AboutUs = () => {
  return (
    <ContentWrapper title='About Us'>
      <div className='text-center'>
        <h3 className='text-xl font-semibold text-primary'>
          Bachelor of Science in Computer Science and Engineering (CSE){' '}
        </h3>

        <p className='text-sm  text-muted-foreground mt-1'>
          Department of Computer Science and Engineering (CSE), Science and
          Engineering
        </p>
      </div>

      <div className='mt-4'>
        <h6 className='text-lg font-semibold'>Objectives and Goals</h6>
        <p className='mt-1'>
          The increasing needs for computer science and engineers in worldwide
          job markets need not to be overemphasized. To keep pace with the
          advancement in computer science and engineering and provide emphasis
          in fulfilling the needs, it is essential that efforts to be made both
          in the public and private sectors to develop human resources in this
          particular field in Bangladesh
        </p>

        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>
            The prime objective in establishing the Computer Science and
            Engineering Department at the European University of Bangladesh is
            to make a concerted effort towards achieving the goal to provide
            quality education of 4 years duration at the undergraduate level.
          </li>
          <li>
            To give students of undergraduate programs a rigorous and
            comprehensive academic training on both the fundamental and advanced
            aspects of Computer Science and Engineering (CSE).
          </li>
          <li>
            To make provisions for research and development and dissemination of
            knowledge in the field of Computer Science and Engineering.
          </li>
        </ul>

        <p className='mt-2'>
          A student in CSE must not only have a sound basis in the fundamental
          of Engineering but also should be aware of socio-economic problems of
          the country. Therefore, courses in science, humanities, economics and
          management are also included in the curricula. The last two semesters
          will offer the students a number of alternatives to choose from and to
          specialize in a particular field. Theory and Sessional work shall be
          supplemented by Project/Thesis work, seminars and visits to relevant
          research and industrial organization.
        </p>
      </div>
    </ContentWrapper>
  );
};

export default AboutUs;
