import React from 'react';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const tuitionFees = [
  {
    title: 'Tuition Fee per credit',
    amount: '6500',
  },
  {
    title: 'Student Activity Fee per Semester',
    amount: '4500',
  },
  {
    title: 'Computer Lab Fee per Semester',
    amount: '3750',
  },
  {
    title: 'Library Fee per Semester',
    amount: '2250',
  },
];

const columns: SystemTableColumn[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
];

const TuitionFeesTable = () => {
  return (
    <SystemTable caption='Tuition Fees' data={tuitionFees} columns={columns} />
  );
};

export default TuitionFeesTable;
