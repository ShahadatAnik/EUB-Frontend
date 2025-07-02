'use client';

import React, { useMemo } from 'react';

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

interface CurriculumSectionProps {
  textileEngineeringCourses: Course[];
  nonDepartmentalCourses: Course[];
  electiveCourses: ElectiveCourse[];
  projectCourses: Course[];
  coursePrefixes: CoursePrefix[];
  curriculumSummary: CurriculumSummary[];
}

export const CurriculumSection = React.memo<CurriculumSectionProps>(
  ({
    textileEngineeringCourses,
    nonDepartmentalCourses,
    electiveCourses,
    projectCourses,
    coursePrefixes,
    curriculumSummary,
  }) => {
    const textileTotal = useMemo(
      () =>
        textileEngineeringCourses.reduce(
          (sum, course) => sum + course.credits,
          0
        ),
      [textileEngineeringCourses]
    );

    const nonDeptTotal = useMemo(
      () =>
        nonDepartmentalCourses.reduce((sum, course) => sum + course.credits, 0),
      [nonDepartmentalCourses]
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
        <h3 className='mb-4 text-lg font-semibold'>List of Courses</h3>

        {/* Textile Engineering Core Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            a. Textile Engineering Core Courses & Lab:
          </h4>
          <p className='mb-4 text-sm text-gray-600'>
            23 Theory Courses & 12 Lab Courses (Total: {textileTotal} Credits)
          </p>
          <CourseTable
            courses={textileEngineeringCourses}
            totalCredits={textileTotal}
          />
        </div>

        {/* Non-Departmental Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            b. List of Non-Departmental Courses
          </h4>
          <p className='mb-2 text-sm text-gray-600'>
            i. General Education Courses (Inter Disciplinary Engineering Courses
            include ICT/ Computer, Technical Elective Courses, Basic Science),
            Compulsory Courses, Social Science & Humanities:
          </p>
          <p className='mb-4 text-sm text-gray-600'>
            24 Theory Courses & 7 Lab (Total: {nonDeptTotal} Credits)
          </p>
          <CourseTable
            courses={nonDepartmentalCourses}
            totalCredits={nonDeptTotal}
          />
        </div>

        {/* Elective Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            c. Elective Courses (Textile Engineering Advanced Courses):
          </h4>
          <p className='mb-4 text-sm text-gray-600'>
            3 Theory Courses & 2 Labs (Total: {electiveTotal} Credits)
          </p>
          <ElectiveCourseTable
            courses={electiveCourses}
            totalCredits={electiveTotal}
          />
        </div>

        {/* Project Work */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            d. Project work, Industrial Attachment & Comprehensive Viva:
          </h4>
          <p className='mb-4 text-sm text-gray-600'>
            3 Courses (Total: {projectTotal} Credits)
          </p>
          <CourseTable courses={projectCourses} totalCredits={projectTotal} />
        </div>

        {/* Course Prefix Table */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>Course Prefix Table:</h4>
          <PrefixTable prefixes={coursePrefixes} />
        </div>

        {/* Course Structure */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            Course Structure: The B. Sc. in Textile Engineering Program consists
            of the following categories of courses:
          </h4>
          <SummaryTable summaryData={curriculumSummary} />
        </div>
      </div>
    );
  }
);

CurriculumSection.displayName = 'CurriculumSection';
