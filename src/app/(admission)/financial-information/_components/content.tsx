import React from 'react';
import TuitionFees from './tuition-fees';
import Waiver from './waiver';
import { IFinancial } from '@/types';

const Content: React.FC<{
  undergraduateInformation: IFinancial;
  graduateInformation: IFinancial;
}> = ({ graduateInformation, undergraduateInformation }) => {
  return (
    <div className='space-y-12'>
      <TuitionFees
        graduateInformation={graduateInformation}
        undergraduateInformation={undergraduateInformation}
      />
      <Waiver />
    </div>
  );
};

export default Content;
