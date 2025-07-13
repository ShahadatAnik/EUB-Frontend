import React from 'react';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const GradingTable = () => {
  const scores = [
    {
      numerical_score: '80% and above',
      letter_grade: 'A+',
      grade_points: '4.0',
    },
    {
      numerical_score: '75% to less than 80%',
      letter_grade: 'A',
      grade_points: '3.75',
    },
    {
      numerical_score: '70% to less than 75%',
      letter_grade: 'A-',
      grade_points: '3.5',
    },
    {
      numerical_score: '65% to less than 70%',
      letter_grade: 'B+',
      grade_points: '3.25',
    },
    {
      numerical_score: '60% to less than 65%',
      letter_grade: 'B',
      grade_points: '3.0',
    },
    {
      numerical_score: '55% to less than 60%',
      letter_grade: 'B-',
      grade_points: '2.75',
    },
    {
      numerical_score: '50% to less than 55%',
      letter_grade: 'C+',
      grade_points: '2.5',
    },
    {
      numerical_score: '45% to less than 50%',
      letter_grade: 'C',
      grade_points: '2.25',
    },
    {
      numerical_score: '40% to less than 45%',
      letter_grade: 'D',
      grade_points: '2.0',
    },
    {
      numerical_score: 'Less than 40%',
      letter_grade: 'F',
      grade_points: '0.0',
    },
  ];

  const columns: SystemTableColumn<{
    numerical_score: string;
    letter_grade: string;
    grade_points: string;
  }>[] = [
    {
      accessorKey: 'numerical_score',
      header: 'Numerical Score',
    },
    {
      accessorKey: 'letter_grade',
      header: 'Letter Grade',
    },
    {
      accessorKey: 'grade_points',
      header: 'Grade Points',
    },
  ];

  return (
    <div className='space-y-4'>
      <SystemTable className='max-w-[1000px]' data={scores} columns={columns} />
      <div>
        <p>
          ** Credits for courses with this grade do not apply towards graduation
          and they are not accepted in the calculation of the grade point
          average.
        </p>
        {/* <br /> */}

        {/* <p>
          The exact cut off points for assigning letter grades is at the
          discretion of individual instructor. The same applies to the
          assignment of + or - after a letter grade. It is meant to give more
          flexibility so that shades of performance can be distinguished and
          rewarded. The + and - has a value of 0.3 grade point.
        </p> */}
      </div>
    </div>
  );
};

export default GradingTable;
