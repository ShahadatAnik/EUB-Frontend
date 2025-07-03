'use client';

import { memo, useMemo } from 'react';

import { CourseTable } from '@/app/(programs)/_components/table/course-table';
import { PrefixTable } from '@/app/(programs)/_components/table/prefix-table';
import { PrerequisiteCourseTable } from '@/app/(programs)/_components/table/prerequisite-course-table';
import {
  Course,
  CoursePrefix,
  Prerequisite,
} from '@/app/(programs)/_config/curriculum';

interface CurriculumSectionProps {
  specializationCourses: Course[];
  internshipCourses: Course[];
  prerequisiteCourses: Prerequisite[];
  coreCoursesData: Course[];
  generalEducationCourses: Course[];
  coursePrefixes: CoursePrefix[];
}

export const CurriculumSection = memo<CurriculumSectionProps>(
  ({
    coreCoursesData,
    generalEducationCourses,
    prerequisiteCourses,
    specializationCourses,
    internshipCourses,
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

    const specializationTotal = useMemo(
      () =>
        specializationCourses.reduce((sum, course) => sum + course.credits, 0),
      [specializationCourses]
    );

    const internshipTotal = useMemo(
      () => internshipCourses.reduce((sum, course) => sum + course.credits, 0),
      [internshipCourses]
    );

    const prerequisiteTotal = useMemo(
      () =>
        prerequisiteCourses.reduce(
          (sum, prerequisite) =>
            sum +
            (prerequisite.prerequisites
              .map((p) => p.credits)
              .reduce((a, b) => a + b, 0) ?? 0),
          0
        ),
      [prerequisiteCourses]
    );

    return (
      <div>
        <h3 className='mb-4 text-lg font-semibold'>List of Courses</h3>

        {/* General Education */}
        <div className='mb-6'>
          <h5 className='mb-2 font-medium'>
            General Education (Total: {generalTotal} Credits)
          </h5>
          <CourseTable
            courses={generalEducationCourses}
            totalCredits={generalTotal}
          />
        </div>

        {/* Core Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            Core Courses (Total: {coreTotal} Credits)
          </h4>
          <CourseTable courses={coreCoursesData} totalCredits={coreTotal} />
        </div>

        {/* Specialization Courses */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            Course for Specialization (Total: {specializationTotal} Credits)
          </h4>
          <CourseTable
            courses={specializationCourses}
            totalCredits={specializationTotal}
          />
        </div>

        {/* Internship */}
        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>
            Internship (Total: {internshipTotal} Credits)
          </h4>
          <CourseTable
            courses={internshipCourses}
            totalCredits={internshipTotal}
          />
        </div>

        <div className='mb-8'>
          <h4 className='mb-4 font-semibold'>List of Prerequisite Courses</h4>
          <PrerequisiteCourseTable
            courses={prerequisiteCourses}
            totalCredits={prerequisiteTotal}
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
      </div>
    );
  }
);

CurriculumSection.displayName = 'EEECurriculumSection';
