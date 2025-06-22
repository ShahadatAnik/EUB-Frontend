import React from 'react';
import type { PerformanceEvaluation } from '../../_config/types';

interface PerformanceEvaluationProps {
  evaluations: PerformanceEvaluation[];
}

export const PerformanceEvaluationSection =
  React.memo<PerformanceEvaluationProps>(({ evaluations }) => {
    return (
      <div>
        <h4 className='font-semibold mb-2'>
          2.1.5. Performance Evaluation Criterion:
        </h4>
        {evaluations.map((evaluation, index) => (
          <div key={index} className='ml-4 mb-4'>
            <h5 className='font-medium mb-2'>{evaluation.category}</h5>
            <div className='ml-4 space-y-1'>
              {evaluation.criteria.map((criterion, criterionIndex) => (
                <p key={criterionIndex}>
                  {criterion.item} {criterion.percentage}
                </p>
              ))}
              <p>
                <strong>Total 100%</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  });

PerformanceEvaluationSection.displayName = 'PerformanceEvaluationSection';
