import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SystemTable, {
  type SystemTableColumn,
} from '@/components/table/system-table';
import type { Semester } from '../../_config/curriculum';

interface SemesterCardProps {
  semester: Semester;
}

export const SemesterCard = React.memo<SemesterCardProps>(({ semester }) => {
  // Add total row to courses data
  const tableData = [
    ...semester.courses,
    {
      slNo: '',
      courseCode: '',
      courseTitle: 'Total',
      credit: semester.total,
    },
  ];

  const columns: SystemTableColumn<(typeof tableData)[0]>[] = [
    {
      accessorKey: 'slNo',
      header: 'Sl. No.',
      headerClassName: 'w-20 text-center',
      cellClassName: 'text-center font-medium',
    },
    {
      accessorKey: 'courseCode',
      header: 'Course Code',
      headerClassName: 'w-36',
      cellClassName: 'font-mono text-sm font-medium',
    },
    {
      accessorKey: 'courseTitle',
      header: 'Course Title',
      cellClassName: 'text-sm',
    },
    {
      accessorKey: 'credit',
      header: 'Credit',
      headerClassName: 'w-20 text-center',
      cellClassName: 'text-center font-medium',
    },
  ];

  return (
    <Card className='shadow-sm'>
      <CardHeader className='bg-blue-50 border-b'>
        <CardTitle className='text-lg font-semibold text-blue-900'>
          {semester.title}
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <SystemTable
          data={tableData}
          columns={columns}
          className='border-0 rounded-b-lg overflow-hidden'
        />
      </CardContent>
    </Card>
  );
});

SemesterCard.displayName = 'SemesterCard';
