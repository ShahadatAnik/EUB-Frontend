import React from 'react';

import ContentWrapper from '../../content-wrapper';

const ProgramDetails = () => {
  return (
    <ContentWrapper className='space-y-8' title='Program Details'>
      <p>
        The demand for civil engineers in the global job market is rapidly
        increasing. To meet this growing need and keep pace with advancements in
        civil engineering, it is essential to develop skilled professionals in
        both the public and private sectors of Bangladesh.
        <br />
        <br />
        The primary objective of the Department of Civil Engineering at EUB is
        to provide a high-quality undergraduate education through a four-year
        Bachelor of Science (B.Sc.) program. Our curriculum is designed to offer
        comprehensive academic training in fundamental and advanced aspects of
        civil engineering, opportunities for research, innovation, and knowledge
        dissemination in the field and a well-rounded education, integrating two
        semesters, students will have the flexibility to choose from specialized
        courses, allowing them to focus on a particular area of civil
        engineering. The curriculum includes theory and sessional work,
        supplemented by project/thesis work, seminars, and site visits to
        relevant research and construction projects, ensuring a practical,
        hands-on learning experience.
      </p>

      <div>
        <h6 className='text-lg font-semibold'>
          The academic year consists of three semesters:
        </h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>Spring Semester (January – April)</li>
          <li>Summer Semester (May – August) Summer Semester (May – August)</li>
          <li>Fall Semester (September – December)</li>
        </ul>
      </div>

      <div>
        <h6 className='text-lg font-semibold'>
          Each semester spans 17 weeks, which includes:
        </h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>12 weeks of class lectures</li>
          <li>1 week for examination preparation</li>
          <li>3 weeks for examinations</li>
          <li>1 week for government and other holidays</li>
        </ul>
      </div>

      <div>
        <h6 className='text-lg font-semibold'>
          The B.Sc. in Civil Engineering program is four years long, divided
          into 12 semesters, with the following credit hour distribution:
        </h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>
            Theory Courses: Each credit hour consists of a 50-minute lecture per
            week.
          </li>
          <li>
            Sessional/Laboratory Courses: A 1.5-credit course requires three
            hours of lab work or demonstrations per week.
          </li>
        </ul>
      </div>

      <p>
        Through this structured and dynamic program, the Department of Civil
        Engineering at EUB ensures that graduates are technically proficient,
        innovative, and well-prepared to contribute to the ever-evolving field
        of civil engineering.
      </p>
    </ContentWrapper>
  );
};

export default ProgramDetails;
