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
        percentage: '100%',
      },
    ];

    const columns: SystemTableColumn<CurriculumSummary>[] = [
      {
        accessorKey: 'category',
        header: 'Curriculum Summary',
        cell: (value) => (
          <div className='whitespace-pre-line text-sm'>{value}</div>
        ),
      },
      {
        accessorKey: 'credits',
        header: 'Credit',
        headerClassName: 'w-24 text-center',
        cellClassName: 'text-center font-medium',
        cell: (value) => Number(value).toFixed(2),
      },
      {
        accessorKey: 'percentage',
        header: 'Credit Proportions (Percentage)',
        headerClassName: 'w-32 text-center',
        cellClassName: 'text-center font-medium',
      },
    ];

    return (
      <SystemTable
        caption={caption}
        data={tableData}
        columns={columns}
        className='overflow-hidden'
      />
    );
  }
);

SummaryTable.displayName = 'SummaryTable';
