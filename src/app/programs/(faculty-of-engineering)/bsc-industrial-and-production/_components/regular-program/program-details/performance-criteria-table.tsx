import React from 'react';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import { TableCell, TableFooter, TableRow } from '@/components/ui/table';

const performanceCriteriaData = [
  {
    criteriaName: 'Class Attendance',
    marks: '10',
  },
  {
    criteriaName: 'Continuous Assessment',
    marks: '20',
  },
  {
    criteriaName: 'Midterm Examination',
    marks: '30',
  },
  {
    criteriaName: 'Final Examination',
    marks: '40',
  },
];

const columns: SystemTableColumn<{ criteriaName: string; marks: string }>[] = [
  {
    accessorKey: 'criteriaName',
    header: 'Evaluation Criteria',
    cell: (value) => value,
  },
  {
    accessorKey: 'marks',
    header: 'Marks',
    cell: (value) => value,
  },
];

const PerformanceCriteriaTable = () => {
  return (
    <SystemTable
      caption='Performance Evaluation Criteria'
      data={performanceCriteriaData}
      columns={columns}
    >
      <TableFooter>
        <TableRow>
          <TableCell className='border-r'>Total</TableCell>
          <TableCell>100</TableCell>
        </TableRow>
      </TableFooter>
    </SystemTable>
  );
};

export default PerformanceCriteriaTable;
