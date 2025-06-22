import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { PerformanceEvaluation } from '../regular-program/_config/types';

interface PerformanceEvaluationProps {
  evaluations: PerformanceEvaluation[];
}

export const PerformanceEvaluationSection =
  React.memo<PerformanceEvaluationProps>(({ evaluations }) => {
    return (
      <div>
        <h4 className='font-semibold mb-4'>
          2.1.5. Performance Evaluation Criterion:
        </h4>
        <div className='space-y-6'>
          {evaluations.map((evaluation, evalIndex) => (
            <div key={evalIndex}>
              <h5 className='font-medium mb-3'>{evaluation.category}</h5>
              <div className='border rounded-lg overflow-hidden'>
                <Table>
                  <TableHeader>
                    <TableRow className='bg-primary hover:bg-primary'>
                      <TableHead className='border-r text-white font-semibold'>
                        Evaluation Criteria
                      </TableHead>
                      <TableHead className='w-24 font-semibold text-center text-white'>
                        Percentage
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {evaluation.criteria.map((criterion, criterionIndex) => (
                      <TableRow key={criterionIndex}>
                        <TableCell className='border-r'>
                          {criterion.item}
                        </TableCell>
                        <TableCell className='text-center font-medium'>
                          {criterion.percentage}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className='bg-gray-100 font-semibold border-t-2'>
                      <TableCell className='border-r text-right'>
                        Total
                      </TableCell>
                      <TableCell className='text-center'>100%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  });

PerformanceEvaluationSection.displayName = 'PerformanceEvaluationSection';
