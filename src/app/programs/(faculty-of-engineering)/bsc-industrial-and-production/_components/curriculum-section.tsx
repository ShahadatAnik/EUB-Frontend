'use client';

import React, { useMemo } from 'react';

import { CourseTable } from '@/app/programs/_components/ui/course-table';
import { PrefixTable } from '@/app/programs/_components/ui/prefix-table';
import { Course, CoursePrefix } from '@/app/programs/_config/curriculum';

interface CurriculumSectionProps {
  coreCoursesData: Course[];
  generalEducationCourses: Course[];
  electiveCourses: Course[];
  coursePrefixes: CoursePrefix[];
}

export const CurriculumSection = React.memo<CurriculumSectionProps>(
  ({
    coreCoursesData,
    generalEducationCourses,
    electiveCourses,
    coursePrefixes,
  }) => {
    const coreTotal = useMemo(
      () => coreCoursesData.reduce((sum, course) => sum + course.credits, 0),
      [coreCoursesData]
    );

    const generalTotal = useMemo(
      () =>
        generalEducationCourses.reduce(
          (sum, course) => sum + course.credits,
          0
        ),
      [generalEducationCourses]
    );

    const electiveTotal = useMemo(
      () => electiveCourses.reduce((sum, course) => sum + course.credits, 0),
      [electiveCourses]
    );

    return (
      <div>
        <h3 className='mb-4 text-lg font-semibold'>List of Courses</h3>

        {/* Core Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>a. Core Courses</h4>
          <p className='mb-4 text-sm text-gray-600'>
            In IPE discipline, a number of courses are identified as core
            courses, which form the nucleus of the respective bachelor‟s degree
            program. A student has to complete the entire designated core
            courses of his/her discipline.
          </p>
          <CourseTable courses={coreCoursesData} totalCredits={coreTotal} />
        </div>

        {/* General Education Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            b. List of Non-Departmental Courses
          </h4>

          {/* General Education */}
          <div className='mb-6'>
            <h5 className='mb-2 font-medium'> General Education Courses:</h5>
            <CourseTable
              courses={generalEducationCourses}
              totalCredits={generalTotal}
            />
          </div>
        </div>

        {/* Elective Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>c. List of Elective Courses</h4>
          <CourseTable courses={electiveCourses} totalCredits={electiveTotal} />
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

CurriculumSection.displayName = 'EEECurriculumSection';
