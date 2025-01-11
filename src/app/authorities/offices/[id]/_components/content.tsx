import React from 'react';

import ListOfOffices from './list-of-offices';
import Employees from './employees';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container flex gap-8'>
        <ListOfOffices />
        <div className='flex-1 space-y-4'>
          <p className='text-lg'>
            Office of the Registrar is the central point of the university. This
            office plays a facilitating role in formulating administrative &
            academic policy of the university. Subsequently it acts as an
            implementing & coordinating body for execution of various decisions
            of the university.
          </p>

          <Employees />
        </div>
      </div>
    </div>
  );
};

export default Content;
