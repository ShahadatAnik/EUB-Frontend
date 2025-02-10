'use client';

import React from 'react';

import { IFinancial, IFinancialFaculty } from '@/types';
import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const TuitionFees: React.FC<{
  undergraduateInformation: IFinancial;
  graduateInformation: IFinancial;
}> = ({ graduateInformation, undergraduateInformation }) => {
  const columns: SystemTableColumn<IFinancialFaculty>[] = [
    {
      accessorKey: 'department_name',
      header: 'Program / Degree',
      cellClassName: 'min-w-[200px]',
    },
    {
      accessorKey: 'total_credit',
      header: 'Total Credit',
    },
    {
      accessorKey: 'total_cost',
      header: 'Total Cost',
      type: 'currency',
    },
    {
      accessorKey: 'admission_fee',
      header: 'Admission Fee',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_60',
      header: '60% Waiver',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_70',
      header: '70% Waiver',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_80',
      header: '80% Waiver',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_100',
      header: '100% Waiver',
      type: 'currency',
    },
  ];

  return (
    <div className='space-y-12'>
      <div>
        <h4 className='text-2xl text-center font-medium'>
          Undergraduate Program
        </h4>
        <div className='mt-4 mb-8 space-y-8'>
          {Object.keys(undergraduateInformation).map((key, index) => (
            <SystemTable
              key={index}
              caption={key}
              data={undergraduateInformation[key]}
              columns={columns}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className='text-2xl text-center font-medium '>Graduate Program</h4>
        <div className='mt-4 mb-8 space-y-8'>
          {Object.keys(graduateInformation).map((key, index) => (
            <SystemTable
              key={index}
              caption={key}
              data={graduateInformation[key]}
              columns={columns}
            />
          ))}
        </div>
      </div>

      <div className='text-center'>
        <h6 className='text-lg'>
          <span className='font-semibold'>Admission Office : </span>{' '}
          01968774930-31, 01968774933, 01968774927 (Admission Director).
        </h6>
        <h6 className='text-lg'>
          <span className='font-semibold'>Email : </span>
          admission@eub.edu.bd
        </h6>
        <h6 className='mt-2 text-lg font-semibold'>
          100% waiver for Son/Daughter of Freedom Fighter
        </h6>
      </div>
    </div>
  );
};

export default TuitionFees;
