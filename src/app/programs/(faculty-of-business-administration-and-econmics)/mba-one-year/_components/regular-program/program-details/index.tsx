import React from 'react';

import ContentWrapper from '../../content-wrapper';

const ProgramDetails = () => {
  return (
    <ContentWrapper title='Program Details'>
      <div>
        <p>
          School of Business offers a number of highly sought-after Master of
          Business Administration (MBA) degree programs (with potential Major
          concentration) in:
        </p>

        <ul className='mt-2 list-disc pl-6'>
          <li>Marketing </li>
          <li>Finance</li>
          <li>Human Resource Management (HRM)</li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default ProgramDetails;
