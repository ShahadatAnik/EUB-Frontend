'use client';

import React, { useMemo } from 'react';

import { CourseTable } from '@/app/(programs)/_components/table/course-table';
import { PrefixTable } from '@/app/(programs)/_components/table/prefix-table';
import { Course, CoursePrefix } from '@/app/(programs)/_config/curriculum';

interface CurriculumSectionProps {
  coreCoursesData: Course[];
  coursePrefixes: CoursePrefix[];
}

export const NonEngineeringCurriculum = React.memo<CurriculumSectionProps>(
  ({ coreCoursesData, coursePrefixes }) => {
    const coreTotal = useMemo(
      () => coreCoursesData.reduce((sum, course) => sum + course.credits, 0),
      [coreCoursesData]
    );

    return (
      <div>
        {/* Core Courses */}
        <div className='mb-8'>
          <h3 className='mb-4 text-lg font-semibold'>List of Courses</h3>
          <CourseTable courses={coreCoursesData} totalCredits={coreTotal} />
        </div>

        {/* Course Prefix Table */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>Course Prefix Table</h4>
          <p className='mb-4 text-sm text-gray-600'>
            The letter prefix in any course number indicates the
            discipline/subject offering the course. Letter symbols for course
            categories are:
          </p>
          <PrefixTable prefixes={coursePrefixes} />
        </div>
      </div>
    );
  }
);

NonEngineeringCurriculum.displayName = 'NonEngineeringCurriculum';
