'use client';

import TuitionFees from './tuition-fees';
import Waiver from './waiver';

const Content = () => {
  return (
    <div className='space-y-12'>
      <TuitionFees />
      <Waiver />
    </div>
  );
};

export default Content;
