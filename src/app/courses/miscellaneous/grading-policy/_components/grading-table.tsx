import React from 'react';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const GradingTable = () => {
  const scores = [
    {
      numerical_score: '93 and above',
      letter_grade: 'A (Excellent)',
      grade_points: '4.0',
    },
    {
      numerical_score: '90 - 92',
      letter_grade: 'A-',
      grade_points: '3.7',
    },
    {
      numerical_score: '87 - 89',
      letter_grade: 'B+',
      grade_points: '3.3',
    },
    {
      numerical_score: '83 - 86',
      letter_grade: 'B (Good)',
      grade_points: '3.0',
    },
    {
      numerical_score: '80 - 82',
      letter_grade: 'B-',
      grade_points: '2.7',
    },
    {
      numerical_score: '77 - 79',
      letter_grade: 'C+',
      grade_points: '2.3',
    },
    {
      numerical_score: '73 - 76',
      letter_grade: 'C (Average)',
      grade_points: '2.0',
    },
    {
      numerical_score: '70 - 72',
      letter_grade: 'C-',
      grade_points: '1.7',
    },
    {
      numerical_score: '67 - 69',
      letter_grade: 'D+',
      grade_points: '1.3',
    },
    {
      numerical_score: '60 - 66',
      letter_grade: 'D (Poor)',
      grade_points: '1.0',
    },
    {
      numerical_score: 'Below 60',
      letter_grade: 'F (Fail)',
      grade_points: '0.0',
    },

    {
      numerical_score: 'I',
      letter_grade: 'Incomplete',
      grade_points: '0.0',
    },
    {
      numerical_score: 'W',
      letter_grade: 'Withdrawal',
      grade_points: '0.0',
    },
  ];

  const columns: SystemTableColumn<any>[] = [
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
        <p>* Credits for courses with this grade do not apply towards grad</p>
        <p>
          ** Credits for courses with this grade do not apply towards graduation
          and they are not accepted in the calculation of the grade point
          average.
        </p>
        <br />

        <p>
          The exact cut off points for assigning letter grades is at the
          discretion of individual instructor. The same applies to the
          assignment of + or - after a letter grade. It is meant to give more
          flexibility so that shades of performance can be distinguished and
          rewarded. The + and - has a value of 0.3 grade point.
        </p>
      </div>
    </div>
  );
};

export default GradingTable;
