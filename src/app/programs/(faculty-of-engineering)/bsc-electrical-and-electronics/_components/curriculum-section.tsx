'use client';

import { CourseTable } from '@/app/programs/_components/ui/course-table';
import { ElectiveCourseTable } from '@/app/programs/_components/ui/elective-course-table';
import { PrefixTable } from '@/app/programs/_components/ui/prefix-table';
import { SummaryTable } from '@/app/programs/_components/ui/summary-table';
import {
  Course,
  CoursePrefix,
  CurriculumSummary,
  ElectiveCourse,
} from '@/app/programs/_config/curriculum';
import React, { useMemo } from 'react';

interface CurriculumSectionProps {
  coreCoursesData: Course[];
  generalEducationCourses: Course[];
  basicScienceCourses: Course[];
  interDisciplinaryCourses: Course[];
  electiveCourses: ElectiveCourse[];
  projectCourses: Course[];
  coursePrefixes: CoursePrefix[];
  curriculumSummary: CurriculumSummary[];
}

export const CurriculumSection = React.memo<CurriculumSectionProps>(
  ({
    coreCoursesData,
    generalEducationCourses,
    basicScienceCourses,
    interDisciplinaryCourses,
    electiveCourses,
    projectCourses,
    coursePrefixes,
    curriculumSummary,
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

    const basicScienceTotal = useMemo(
      () =>
        basicScienceCourses.reduce((sum, course) => sum + course.credits, 0),
      [basicScienceCourses]
    );

    const interDisciplinaryTotal = useMemo(
      () =>
        interDisciplinaryCourses.reduce(
          (sum, course) => sum + course.credits,
          0
        ),
      [interDisciplinaryCourses]
    );

    const electiveTotal = useMemo(
      () => electiveCourses.reduce((sum, course) => sum + course.credits, 0),
      [electiveCourses]
    );

    const projectTotal = useMemo(
      () => projectCourses.reduce((sum, course) => sum + course.credits, 0),
      [projectCourses]
    );

    return (
      <div>
        <h3 className='text-lg font-semibold mb-4'>2.2.1. List of Courses</h3>

        {/* Core Courses */}
        <div className='mb-8'>
          <h4 className='font-semibold mb-4'>a. List of Core Courses</h4>
          <p className='mb-4 text-sm text-gray-600'>
            23 Theory Courses, 18 Laboratory (Lab) Courses (Total: {coreTotal}{' '}
            Credits)
          </p>
          <CourseTable courses={coreCoursesData} totalCredits={coreTotal} />
        </div>

        {/* Prerequisite Courses */}
        <div className='mb-8'>
          <h4 className='font-semibold mb-4'>
            b. List of Prerequisite Courses
          </h4>

          {/* General Education */}
          <div className='mb-6'>
            <h5 className='font-medium mb-2'>
              (I) General Education Courses: English & Others
            </h5>
            <p className='mb-4 text-sm text-gray-600'>
              Any Five including GED-101 (Compulsory) (Total: {generalTotal}{' '}
              Credits)
            </p>
            <CourseTable
              courses={generalEducationCourses}
              totalCredits={generalTotal}
            />
          </div>

          {/* Basic Science and Mathematics */}
          <div className='mb-6'>
            <h5 className='font-medium mb-2'>
              (II) Basic Science and Mathematics Courses:
            </h5>
            <p className='mb-4 text-sm text-gray-600'>
              9 Theory Courses and 3 Laboratory Courses (Total:{' '}
              {basicScienceTotal} Credits)
            </p>
            <CourseTable
              courses={basicScienceCourses}
              totalCredits={basicScienceTotal}
            />
          </div>

          {/* Inter-Disciplinary Engineering */}
          <div className='mb-6'>
            <h5 className='font-medium mb-2'>
              (III) Inter-Disciplinary Engineering Courses
            </h5>
            <p className='mb-4 text-sm text-gray-600'>
              2 Theory Courses, 1 Laboratory (Lab) Course (Total:{' '}
              {interDisciplinaryTotal} Credits)
            </p>
            <CourseTable
              courses={interDisciplinaryCourses}
              totalCredits={interDisciplinaryTotal}
            />
          </div>
        </div>

        {/* Elective Courses */}
        <div className='mb-8'>
          <h4 className='font-semibold mb-4'>c. List of Elective Courses</h4>
          <p className='mb-2 text-sm text-gray-600'>
            Elective courses are divided into three groups: power, electronics
            and communication. A student will have to take five elective courses
            from these area of concentration.
          </p>
          <p className='mb-4 text-sm text-gray-600'>
            5 Theory Courses (Total: {electiveTotal} Credits)
          </p>
          <ElectiveCourseTable
            courses={electiveCourses}
            totalCredits={electiveTotal}
          />
        </div>

        {/* Project/Thesis */}
        <div className='mb-8'>
          <h4 className='font-semibold mb-4'>Project/Thesis</h4>
          <CourseTable courses={projectCourses} totalCredits={projectTotal} />
        </div>

        {/* Course Prefix Table */}
        <div className='mb-8'>
          <h4 className='font-semibold mb-4'>2.2.2. Course Prefix Table</h4>
          <p className='mb-4 text-sm text-gray-600'>
            The letter prefix in any course number indicates the
            discipline/subject offering the course. Letter symbols for course
            categories are:
          </p>
          <PrefixTable prefixes={coursePrefixes} />
        </div>

        {/* Course Structure */}
        <div className='mb-8'>
          <h4 className='font-semibold mb-4'>2.2.3. Course Structure</h4>
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
