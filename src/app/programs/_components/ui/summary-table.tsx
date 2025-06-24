import React from 'react';

import SystemTable, {
  type SystemTableColumn,
} from '@/components/table/system-table';

import type { CurriculumSummary } from '../../_config/curriculum';

interface SummaryTableProps {
  summaryData: CurriculumSummary[];
  caption?: string;
}

export const SummaryTable = React.memo<SummaryTableProps>(
  ({ summaryData, caption }) => {
    // Calculate total credits
    const totalCredits = summaryData.reduce(
      (sum, item) => sum + item.credits,
      0
    );

    // Add total row to data
    const tableData = [
      ...summaryData,
      {
        category: 'Total',
        credits: totalCredits,
        percentage: summaryData.some((item) => item.percentage)
          ? `100%`
          : undefined,
      },
    ];

    const columns: SystemTableColumn<CurriculumSummary>[] = [
      {
        accessorKey: 'category',
        header: 'Category',
        cellClassName: (row, index, isFirstRow, isLastRow) => {
          return isLastRow
            ? 'text-right pr-4 font-medium border-b'
            : 'border-b w-40';
        },
        cell: (value) => (
          <div className='whitespace-pre-line text-sm'>{value}</div>
        ),

        colSpan(row, index, isFirstRow, isLastRow) {
          return isLastRow
            ? Object.values(summaryData?.[0]).filter(Boolean).length === 2
              ? 1
              : Object.values(summaryData?.[0]).filter(Boolean).length - 1
            : 1;
        },
      },
      {
        accessorKey: 'theory_courses',
        header: 'Theory Courses',
        headerClassName: 'w-24 text-center',
        cellClassName: 'text-center font-medium',
        isHidden: tableData.every((row) => row.theory_courses === undefined),
        skipRender: (row, index, isFirstRow, isLastRow) => isLastRow,
      },
      {
        accessorKey: 'sessional_courses',
        header: 'Sessional Courses',
        headerClassName: 'w-24 text-center',
        cellClassName: 'text-center font-medium',
        isHidden: tableData.every((row) => row.sessional_courses === undefined),
        skipRender: (row, index, isFirstRow, isLastRow) => isLastRow,
      },

      {
        accessorKey: 'percentage',
        header: 'Credit Proportions (Percentage)',
        headerClassName: 'w-32 text-center',
        cellClassName: 'text-center font-medium',
        isHidden: tableData.every((row) => row.percentage === undefined),
        skipRender: (row, index, isFirstRow, isLastRow) => isLastRow,
      },
      {
        accessorKey: 'credits',
        header: 'Credit',
        headerClassName: 'w-24 text-center',
        cellClassName: 'text-center font-medium',
      },
    ];

    return (
      <SystemTable
        caption={caption}
        data={tableData}
        columns={columns}
        className='overflow-hidden'
        rowClassName={(row, index, isFirstRow, isLastRow) =>
          isLastRow ? 'bg-primary/10 text-foreground' : ''
        }
      />
    );
  }
);

SummaryTable.displayName = 'SummaryTable';
