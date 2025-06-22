import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PerformanceEvaluationSection } from '../ui/performance-evaluation';
import {
  semesterInfo,
  programDetails,
  performanceEvaluation,
} from '../../_config/data';

export const ProgramDetailsSection = React.memo(() => {
  return (
    <Card className='mb-6  p-0 border-0 shadow-none'>
      <CardContent className='space-y-4 p-0'>
        {/* Semesters */}
        <div>
          <h4 className='font-semibold mb-2'>2.1.1. Semesters:</h4>
          <div className='ml-4 space-y-1'>
            <p>
              <strong>Spring:</strong> {semesterInfo.spring}
            </p>
            <p>
              <strong>Summer:</strong> {semesterInfo.summer}
            </p>
            <p>
              <strong>Fall:</strong> {semesterInfo.fall}
            </p>
          </div>
        </div>

        {/* Duration */}
        <div>
          <h4 className='font-semibold mb-2'>2.1.2. Duration:</h4>
          <div className='ml-4 space-y-1'>
            <p>
              <strong>Year:</strong> {programDetails.duration.years}
            </p>
            <p>
              <strong>Semester:</strong> {programDetails.duration.semesters}
            </p>
          </div>
        </div>

        {/* Credit Hour */}
        <div>
          <h4 className='font-semibold mb-2'>2.1.3. Credit Hour:</h4>
          <p className='ml-4'>{programDetails.creditHours} Credits</p>
        </div>

        {/* Course Load */}
        <div>
          <h4 className='font-semibold mb-2'>2.1.4. Course Load:</h4>
          <p className='ml-4'>{programDetails.courseLoad}</p>
          <p className='ml-8'>{programDetails.courseLoadDetails}</p>
        </div>

        {/* Performance Evaluation */}
        <PerformanceEvaluationSection evaluations={performanceEvaluation} />

        {/* Tuition Fee Structure */}
        <div>
          <h4 className='font-semibold mb-2'>2.1.6. Tuition Fee Structure:</h4>
        </div>
      </CardContent>
    </Card>
  );
});

ProgramDetailsSection.displayName = 'ProgramDetailsSection';
