import React from 'react';
import TuitionFeesTable from './tuition-fees-table';
import { graduateFeesData } from '../_const/data';

const Graduate = () => {
  return <TuitionFeesTable isGraduate data={graduateFeesData} />;
};

export default Graduate;
