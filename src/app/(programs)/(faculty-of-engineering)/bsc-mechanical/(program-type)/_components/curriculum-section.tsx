'use client';

import React, { useMemo } from 'react';

import { CourseTable } from '@/app/(programs)/_components/table/course-table';
// import { ElectiveCourseGroupTable } from '@/app/(programs)/_components/table/elective-course-group-table';
import { PrefixTable } from '@/app/(programs)/_components/table/prefix-table';
import { SummaryTable } from '@/app/(programs)/_components/table/summary-table';
import {
  Course,
  CoursePrefix,
  CurriculumSummary,
  // ElectiveCourseGroup,
} from '@/app/(programs)/_config/curriculum';

interface CurriculumSectionProps {
  coreCoursesData: Course[];
  generalEducationCourses: Course[];
  basicScienceCourses: Course[];
  interDisciplinaryCourses: Course[];
  electiveCourses: Course[];
  electiveCoursesIPE: Course[];
  coursePrefixes: CoursePrefix[];
  curriculumSummary: CurriculumSummary[];
}

export const CurriculumSection = React.memo<CurriculumSectionProps>(
  ({
    coreCoursesData,
    electiveCourses,
    electiveCoursesIPE,
    coursePrefixes,
    curriculumSummary,
  }) => {
    const coreTotal = useMemo(
      () => coreCoursesData.reduce((sum, course) => sum + course.credits, 0),
      [coreCoursesData]
    );

    const electiveTotal = useMemo(
      () => electiveCourses.reduce((sum, course) => sum + course.credits, 0),
      [electiveCourses]
    );

    const electiveIPETotal = useMemo(
      () => electiveCoursesIPE.reduce((sum, course) => sum + course.credits, 0),
      [electiveCoursesIPE]
    );

    return (
      <div>
        <h3 className='mb-4 text-lg font-semibold'>List of Courses</h3>

        {/* Core Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>a. List of Core Courses</h4>
          <p className='mb-4 text-sm text-gray-600'>
            In ME discipline, a number of courses are identified as core
            courses, which form the nucleus of the respective bachelor’s degree
            program. A student has to complete the entire designated core
            courses of his/her discipline.
          </p>
          <CourseTable courses={coreCoursesData} totalCredits={coreTotal} />
        </div>

        {/* Prerequisite Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            b. List of Prerequisite Courses
          </h4>

          {/* General Education */}
          <div className='mb-6'>
            <p className='mb-4 text-sm text-gray-600'>
              Some of the core courses are identified as prerequisite courses
              for a specific subject. A prerequisite course is one, which is
              required to be completed before some other course(s) can be taken.
            </p>
          </div>
        </div>

        {/* Elective Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>c. List of Elective Courses</h4>
          <p className='mb-2 text-sm text-gray-600'>
            Apart from the core courses, the students can choose courses from a
            set of elective courses. Elective courses are divided into computer
            science, software engineering, communication technology and computer
            engineering.
          </p>
          <CourseTable courses={electiveCourses} totalCredits={electiveTotal} />

          <h4 className='my-4 font-semibold'>
            Elective Courses offered by IPE Department (Optional for ME
            Students):
          </h4>
          <CourseTable
            courses={electiveCoursesIPE}
            totalCredits={electiveIPETotal}
          />
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

        {/* Course Structure */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>Course Structure</h4>
          <p className='mb-4 text-sm text-gray-600'>
            The first digit in the number indicates the year/level for which the
            course is intended, the second digit in the number indicates for the
            Department and the last digit, if odd, indicates a theory course and
            if even, indicates a laboratory course.
          </p>
          <SummaryTable summaryData={curriculumSummary} />
        </div>
      </div>
    );
  }
);

CurriculumSection.displayName = 'EEECurriculumSection';
