import React from 'react';

import SystemTable, {
  type SystemTableColumn,
} from '@/components/table/system-table';

import type { ElectiveCourse } from '../../_config/curriculum';

interface ElectiveCourseTableProps {
  courses: ElectiveCourse[];
  totalCredits: number;
  caption?: string;
}

interface FlattenedElectiveCourse {
  sl: string;
  code: string;
  title: string;
  credits: string;
  isFirstRow?: boolean;
  rowSpan?: number;
}

export const ElectiveCourseTable = React.memo<ElectiveCourseTableProps>(
  ({ courses, totalCredits, caption }) => {
    // Flatten the elective courses data
    const flattenedData: FlattenedElectiveCourse[] = [];

    courses.forEach((course) => {
      course.codes.forEach((code, index) => {
        flattenedData.push({
          sl: index === 0 ? `${course.sl}\n(Any one)` : '',
          code: code,
          title: course.titles[index],
          credits: index === 0 ? course.credits.toString() : '',
          isFirstRow: index === 0,
          rowSpan: course.codes.length,
        });
      });
    });

    // Add total row
    flattenedData.push({
      sl: '',
      code: '',
      title: 'Total',
      credits: totalCredits.toString(),
    });

    const columns: SystemTableColumn<FlattenedElectiveCourse>[] = [
      {
        accessorKey: 'sl',
        header: 'Sl.',
        headerClassName: 'w-16 text-center',
        cellClassName: 'text-center font-medium border-b',
        cell: (value) => (
          <div className='whitespace-pre-line text-center'>{value}</div>
        ),
        rowSpan: (row) => (row.isFirstRow ? (row.rowSpan ?? 0) : 0),
        skipRender: (row) => !row.isFirstRow,
      },
      {
        accessorKey: 'code',
        header: 'Course Code',
        headerClassName: 'w-32',
        cellClassName: 'font-mono text-sm ',
      },
      {
        accessorKey: 'title',
        header: 'Course Title',
        colSpan: (row, index, isFirstRow, isLastRow) => (isLastRow ? 2 : 1),
      },
      {
        accessorKey: 'credits',
        header: 'Credits',
        headerClassName: 'w-20 text-center',
        cellClassName: 'text-center font-medium border-l',
        skipRender: (row) => row.isFirstRow === false,
        rowSpan: (row) => (row.isFirstRow ? (row.rowSpan ?? 0) : 0),
      },
    ];

    return (
      <SystemTable
        caption={caption}
        data={flattenedData}
        columns={columns}
        className='overflow-hidden'
      />
    );
  }
);

ElectiveCourseTable.displayName = 'ElectiveCourseTable';
