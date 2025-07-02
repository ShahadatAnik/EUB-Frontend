import React from 'react';

import SystemTable, {
  type SystemTableColumn,
} from '@/components/table/system-table';

import type { PerformanceEvaluation } from '../../_config/curriculum';

interface PerformanceEvaluationProps {
  evaluations: PerformanceEvaluation[];
}

interface FlattenedEvaluation {
  item: string;
  percentage: string;
}

export const PerformanceEvaluationSection =
  React.memo<PerformanceEvaluationProps>(({ evaluations }) => {
    const columns: SystemTableColumn<FlattenedEvaluation>[] = [
      {
        accessorKey: 'item',
        header: 'Evaluation Criteria',
      },
      {
        accessorKey: 'percentage',
        header: 'Percentage',
        headerClassName: 'w-24 text-center',
        cellClassName: 'text-center font-medium',
      },
    ];

    return (
      <div>
        <h4 className='mb-4 font-semibold'>
          Performance Evaluation Criterion:
        </h4>
        <div className='space-y-6'>
          {evaluations.map((evaluation, evalIndex) => {
            // Add total row to criteria data
            const tableData = [
              ...evaluation.criteria,
              {
                item: 'Total',
                percentage: '100%',
              },
            ];

            return (
              <div key={evalIndex}>
                <h5 className='mb-3 font-medium'>{evaluation.category}</h5>
                <SystemTable
                  data={tableData}
                  columns={columns}
                  className='overflow-hidden'
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  });

PerformanceEvaluationSection.displayName = 'PerformanceEvaluationSection';
