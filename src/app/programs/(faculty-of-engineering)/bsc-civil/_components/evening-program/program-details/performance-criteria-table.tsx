import React from 'react';

import SystemTable, {
  type SystemTableColumn,
} from '@/components/table/system-table';
import { TableCell, TableFooter, TableRow } from '@/components/ui/table';

const theoryCourses = [
  {
    criteriaName: 'Class Participation (Attendance)',
    marks: '20',
  },
  {
    criteriaName: 'Class Tests, Presentations & Assignments',
    marks: '20',
  },
  {
    criteriaName: 'Midterm Examination',
    marks: '30',
  },
  {
    criteriaName: 'Final Examination',
    marks: '30',
  },
];
const labs = [
  {
    criteriaName: 'Class Participation (Attendance)',
    marks: '20',
  },
  {
    criteriaName: 'Quiz',
    marks: '20',
  },
  {
    criteriaName: 'Viva Voce',
    marks: '20',
  },
  {
    criteriaName: 'Performance/Reports',
    marks: '40',
  },
];
const projectAndThesis = [
  {
    criteriaName: 'Attendance',
    marks: '10',
  },
  {
    criteriaName: 'Presentation and Viva Voce',
    marks: '20',
  },
  {
    criteriaName: 'Co-Supervisor',
    marks: '20',
  },
  {
    criteriaName: 'Supervisor',
    marks: '50',
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
    <div className='space-y-8'>
      <SystemTable
        caption='Theory Courses'
        data={theoryCourses}
        columns={columns}
      >
        <TableFooter>
          <TableRow>
            <TableCell className='border-r'>Total</TableCell>
            <TableCell>100</TableCell>
          </TableRow>
        </TableFooter>
      </SystemTable>
      <SystemTable
        caption='Laboratory/Sessional/Field Work Courses'
        data={labs}
        columns={columns}
      >
        <TableFooter>
          <TableRow>
            <TableCell className='border-r'>Total</TableCell>
            <TableCell>100</TableCell>
          </TableRow>
        </TableFooter>
      </SystemTable>
      <SystemTable
        caption='Project and Thesis'
        data={projectAndThesis}
        columns={columns}
      >
        <TableFooter>
          <TableRow>
            <TableCell className='border-r'>Total</TableCell>
            <TableCell>100</TableCell>
          </TableRow>
        </TableFooter>
      </SystemTable>
    </div>
  );
};

export default PerformanceCriteriaTable;
