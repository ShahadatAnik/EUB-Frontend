'use client';

import React, { useMemo } from 'react';

import { CourseTable } from '@/app/(programs)/_components/table/course-table';
import { ElectiveCourseGroupTable } from '@/app/(programs)/_components/table/elective-course-group-table';
// import { PrefixTable } from '@/app/(programs)/_components/table/prefix-table';
// import { SummaryTable } from '@/app/(programs)/_components/table/summary-table';
import {
  Course,
  CoursePrefix,
  CurriculumSummary,
  ElectiveCourseGroup,
} from '@/app/(programs)/_config/curriculum';

interface CurriculumSectionProps {
  coreCoursesData: Course[];
  generalEducationCourses: Course[];
  basicScienceCourses: Course[];
  foundationCourses: Course[];
  interDisciplinaryCourses: Course[];
  electiveCourses: ElectiveCourseGroup[];
  coursePrefixes: CoursePrefix[];
  curriculumSummary: CurriculumSummary[];
  projectCourses: Course[];
  industrialCourses: Course[];
}

export const CurriculumSection = React.memo<CurriculumSectionProps>(
  ({
    coreCoursesData,
    generalEducationCourses,
    // basicScienceCourses,
    interDisciplinaryCourses,
    electiveCourses,
    // coursePrefixes,
    // curriculumSummary,
    foundationCourses,
    projectCourses,
    industrialCourses,
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

    // const basicScienceTotal = useMemo(
    //   () =>
    //     basicScienceCourses.reduce((sum, course) => sum + course.credits, 0),
    //   [basicScienceCourses]
    // );

    const foundationTotal = useMemo(
      () => foundationCourses.reduce((sum, course) => sum + course.credits, 0),
      [foundationCourses]
    );

    const projectTotal = useMemo(
      () => projectCourses.reduce((sum, course) => sum + course.credits, 0),
      [projectCourses]
    );

    const industrialTotal = useMemo(
      () => industrialCourses.reduce((sum, course) => sum + course.credits, 0),
      [industrialCourses]
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
      () =>
        electiveCourses.reduce(
          (sum, group) =>
            sum +
            (group.courses
              ? group.courses.reduce((gSum, course) => gSum + course.credits, 0)
              : 0),
          0
        ),
      [electiveCourses]
    );

    return (
      <div>
        <h3 className='mb-4 text-lg font-semibold'>2.2.1. List of Courses</h3>

        {/* Core Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>a. List of Core Courses</h4>
          <p className='mb-4 text-sm text-gray-600'>
            List of Core Courses: 28 Theory Courses & 19 Lab Courses with
            Project/ Thesis <br /> (Total: {coreTotal} Credits)
          </p>
          <CourseTable courses={coreCoursesData} totalCredits={coreTotal} />
        </div>

        {/* Prerequisite Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            b. List of Non-Departmental Courses
          </h4>

          {/* General Education */}
          <div className='mb-6'>
            <h5 className='mb-2 font-medium'>(I) General Education Courses:</h5>
            <p className='mb-4 text-sm text-gray-600'>
              5 Theory Courses & 1 Lab (Total: {generalTotal} Credits)
            </p>
            <CourseTable
              courses={generalEducationCourses}
              totalCredits={generalTotal}
            />
          </div>

          {/* Basic Science and Mathematics */}
          {/* <div className='mb-6'>
            <h5 className='mb-2 font-medium'>
              (II) Basic Science and Mathematics Courses:
            </h5>
            <p className='mb-4 text-sm text-gray-600'>
              7 Theory Courses and 2 Laboratory Courses (Total:{' '}
              {basicScienceTotal} Credits)
            </p>
            <CourseTable
              courses={basicScienceCourses}
              totalCredits={basicScienceTotal}
            />
          </div> */}

          {/* Foundation Courses */}
          <div className='mb-6'>
            <h5 className='mb-2 font-medium'>(II) Foundation Courses:</h5>
            <p className='mb-4 text-sm text-gray-600'>
              7 Theory Courses and 2 Laboratory Courses (Total:{' '}
              {foundationTotal} Credits)
            </p>
            <CourseTable
              courses={foundationCourses}
              totalCredits={foundationTotal}
            />
          </div>

          {/* Inter-Disciplinary Engineering */}
          <div className='mb-6'>
            <h5 className='mb-2 font-medium'>
              (III) Other Engineering Discipline Courses:
            </h5>
            <p className='mb-4 text-sm text-gray-600'>
              1 Theory Course (Total: {interDisciplinaryTotal} Credits)
            </p>
            <CourseTable
              courses={interDisciplinaryCourses}
              totalCredits={interDisciplinaryTotal}
            />
          </div>
        </div>

        {/* Elective Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>c. List of Elective Courses</h4>
          <p className='mb-2 text-sm text-gray-600'>
            Elective courses are divided into three groups: power, electronics
            and communication. A student will have to take five elective courses
            from these area of concentration.
          </p>
          <p className='mb-4 text-sm text-gray-600'>
            5 Theory Courses (Total: {electiveTotal} Credits)
          </p>
          <ElectiveCourseGroupTable
            electiveCourses={electiveCourses}
            totalCredits={electiveTotal}
          />
        </div>

        {/* Project and Thesis Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>d. Project and Thesis Courses</h4>

          <p className='mb-4 text-sm text-gray-600'>
            (Total: {projectTotal} Credits)
          </p>
          <CourseTable courses={projectCourses} totalCredits={projectTotal} />
        </div>

        {/* Project and Thesis Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>e. Industrial Courses</h4>

          <p className='mb-4 text-sm text-gray-600'>
            (Total: {industrialTotal} Credits)
          </p>
          <CourseTable
            courses={industrialCourses}
            totalCredits={industrialTotal}
          />
        </div>

        {/* Course Prefix Table */}
        {/* <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>2.2.2. Course Prefix Table</h4>
          <p className='mb-4 text-sm text-gray-600'>
            The letter prefix in any course number indicates the
            discipline/subject offering the course. Letter symbols for course
            categories are:
          </p>
          <PrefixTable prefixes={coursePrefixes} />
        </div> */}

        {/* Course Structure */}
        {/* <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>2.2.3. Course Structure</h4>
          <p className='mb-4 text-sm text-gray-600'>
            The B.Sc in Civil Engineering Program consists of the following
            categories of courses:
          </p>
          <SummaryTable summaryData={curriculumSummary} />
        </div> */}
      </div>
    );
  }
);

CurriculumSection.displayName = 'EEECurriculumSection';
