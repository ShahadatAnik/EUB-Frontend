import React from 'react';
import BscHscBackground from './bsc-hsc-background';
import BscDiplomaBackground from './bsc-diploma-background';
import BBA from './bba';
import BA from './ba';
import Others from './others';

const TuitionFees = () => {
  return (
    <div>
      <h4 className='text-2xl text-center font-medium '>Tuition Fees</h4>
      <div className='mt-4 mb-8 space-y-8'>
        <BscHscBackground />
        <BscDiplomaBackground />
        <BA />
        <BBA />
        <Others />
      </div>
      <div className='text-center'>
        <h6 className='text-lg'>
          <span className='font-semibold'>Admission Office : </span>{' '}
          01968774931, 01968774933, 01968774927 (Director).
        </h6>
        <h6 className='text-lg'>
          <span className='font-semibold'>Email : </span>
          admission@eub.edu.bd
        </h6>
        {/* <h6 className='mt-2 text-lg font-semibold'>
          100% waiver for Son/Daughter of Freedom Fighter
        </h6> */}
      </div>
    </div>
  );
};

export default TuitionFees;
