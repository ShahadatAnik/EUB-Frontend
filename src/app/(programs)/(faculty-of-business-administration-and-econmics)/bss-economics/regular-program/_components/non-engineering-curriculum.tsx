'use client';

import React, { useMemo } from 'react';

import { CourseTable } from '@/app/(programs)/_components/table/course-table';
import { Course } from '@/app/(programs)/_config/curriculum';

interface CurriculumSectionProps {
  coreCoursesData: Course[];
  electiveCoursesData: Course[];
  generalCoursesData: Course[];
  nonMajorCoursesData: Course[];
}

export const NonEngineeringCurriculum = React.memo<CurriculumSectionProps>(
  ({
    coreCoursesData,
    electiveCoursesData,
    generalCoursesData,
    nonMajorCoursesData,
  }) => {
    const coreTotal = useMemo(
      () => coreCoursesData.reduce((sum, course) => sum + course.credits, 0),
      [coreCoursesData]
    );

    const electiveTotal = useMemo(
      () =>
        electiveCoursesData.reduce((sum, course) => sum + course.credits, 0),
      [electiveCoursesData]
    );

    const generalTotal = useMemo(
      () => generalCoursesData.reduce((sum, course) => sum + course.credits, 0),
      [generalCoursesData]
    );

    const nonMajorTotal = useMemo(
      () =>
        nonMajorCoursesData.reduce((sum, course) => sum + course.credits, 0),
      [nonMajorCoursesData]
    );

    return (
      <div>
        {/* Core Courses */}
        <div className='mb-8'>
          <h3 className='mb-4 text-lg font-semibold'>List of Courses</h3>
          <CourseTable courses={coreCoursesData} totalCredits={coreTotal} />
        </div>

        {/* Elective Courses */}
        <div className='mb-8'>
          <h3 className='mb-4 text-lg font-semibold'>List of Elective</h3>
          <CourseTable
            courses={electiveCoursesData}
            totalCredits={electiveTotal}
          />
        </div>

        {/* General Courses */}
        <div className='mb-8'>
          <h3 className='mb-4 text-lg font-semibold'>
            List of General Courses
          </h3>
          <CourseTable
            courses={generalCoursesData}
            totalCredits={generalTotal}
          />
        </div>

        {/* Non-Major Courses */}
        <div className='mb-8'>
          <h3 className='mb-4 text-lg font-semibold'>List of Non-Major</h3>
          <CourseTable
            courses={nonMajorCoursesData}
            totalCredits={nonMajorTotal}
          />
        </div>
      </div>
    );
  }
);

NonEngineeringCurriculum.displayName = 'NonEngineeringCurriculum';
