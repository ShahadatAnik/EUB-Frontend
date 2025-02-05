import React from 'react';

import ContentWrapper from '../../content-wrapper';

const ProgramDetails = () => {
  return (
    <ContentWrapper title='Program Details'>
      <div>
        <p>
          The BSS (Hons.) in Economics is a 141-credit hour program that
          integrates a diverse range of courses to ensure a well-rounded
          education in economics. These courses are categorized into:
        </p>

        <ul className='mt-2 list-disc pl-6'>
          <li>General Courses (compulsory)</li>
          <li>Major Courses (compulsory)</li>
          <li>Non-Major Courses (compulsory)</li>
          <li>Elective Courses (optional)</li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default ProgramDetails;
