import React from 'react';

import Image from 'next/image';

import UnderDevelopment from '@/components/under-development';

import {
  coreCSE,
  electiveCSE1,
  electiveCSE2,
  foundationCourses,
  generalEducation,
  industrialTraining,
  interDisciplinaryCourses,
  projectAndThesis,
} from '../../../_const/list-of-courses';
import ContentWrapper from '../../content-wrapper';
import CourseCategoryTable from './course-category-table';
import CourseStructureTable from './course-structure-table';
import CourseTable from './course-table';

const Curriculum = () => {
  return (
    <ContentWrapper title='Curriculum'>
      <UnderDevelopment />
    </ContentWrapper>
  );

  return (
    <ContentWrapper title='Curriculum' className='space-y-6 py-4'>
      <p>
        The undergraduate students of different years of the Department of
        Computer Science and Engineering have to follow the course schedule
        given below.
      </p>
      <div>
        <h6 className='text-lg font-semibold'>Course Types</h6>
        <p className='mt-1'>
          The courses included in the undergraduate curriculam are divided into
          the following groups:
        </p>
        <ul className='mt-2 list-disc space-y-4 pl-6'>
          <li>
            <h6 className='font-semibold'>Core Courses</h6>
            <p className='mt-1'>
              In CSE discipline, a number of courses are identified as core
              courses, which form the nucleus of the respective bachelor’s
              degree program. A student has to complete the entire designated
              core courses of his/her discipline.
            </p>
          </li>
          <li>
            <h6 className='font-semibold'>Prerequisite Courses</h6>
            <p className='mt-1'>
              Some of the core courses are identified as prerequisite courses
              for a specific subject. A prerequisite course is one, which is
              required to be completed before some other course(s) can be taken.
            </p>
          </li>
          <li>
            <h6 className='font-semibold'>Elective Courses</h6>
            <p className='mt-1'>
              Apart from the core courses, the students can choose courses from
              a set of elective courses. Elective courses are divided into
              computer science, software engineering, communication technology
              and computer engineering
            </p>
          </li>
        </ul>
        <p className='mt-4'>
          Apart from the core courses, the students can choose courses from a
          set of elective courses. Elective courses are divided into computer
          science, software engineering, communication technology and computer
          engineering
        </p>
      </div>
      <div>
        <h6 className='text-lg font-semibold'>Course Category</h6>
        <p className='mt-1'>
          The letter prefix in any course number indicates the
          discipline/subject offering the course.
          <br />
          Letter symbols for course categories are:
        </p>

        <div className='mt-2'>
          <CourseCategoryTable />
        </div>
      </div>

      <div>
        <h6 className='text-lg font-semibold'>Numbering System</h6>
        <p className='mt-1'>
          Each course is designated by a maximum of four letter code identifying
          the department offering the course followed by a three-digit number
          having the following interpretation:
        </p>

        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>
            The first digit corresponds to the year/level in which the course is
            normally taken by the students.
          </li>
          <li>
            The second digit is reserved for departmental use. It usually
            identifies a specific area/group of study within the department.
          </li>
          <li>
            The last digit is an odd number for theoretical courses and an even
            number for sessional courses.
          </li>
        </ul>

        <p className='mt-4'>
          The course designation system is illustrated by the following example.
        </p>
        <div className='my-2'>
          <Image
            src={'/images/course-designation-system.png'}
            alt='Course Designation System'
            width={600}
            height={200}
          />
        </div>
      </div>
      <div>
        <h6 className='text-lg font-semibold'>Credits Assignment</h6>
        <p className='mt-1'>
          The assignment of credits to theoretical course is different from that
          of laboratory course, which is stated as follows:
        </p>

        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>
            For theoretical courses one lecture per week per term is equivalent
            to one credit.
          </li>
          <li>
            For laboratory courses two class hours per week per term is
            equivalent to one credit.
          </li>
          <li>
            Credits are also assigned to project work taken by the students. The
            amount of credits assigned to such work may vary from one discipline
            to another.
          </li>
        </ul>
      </div>
      <div>
        <h6 className='text-lg font-semibold'>Course Structure</h6>
        <p className='mt-1'>
          The B.Sc in Computer Science and Engineering Program consists of the
          following categories of courses:
        </p>

        <div className='my-4'>
          <CourseStructureTable />
        </div>
      </div>

      <div>
        <h6 className='text-lg font-semibold'>List of Courses</h6>
        <p className='mt-1'>
          The list of the courses that will be offered under the program is
          given below:
        </p>

        <div className='mt-6 space-y-12'>
          <CourseTable
            title='General Education (12.00 Credits)'
            data={generalEducation}
          />
          <CourseTable
            title='Foundation Courses (22.50 Credits)'
            data={foundationCourses}
          />
          <CourseTable
            title='Inter-Disciplinary Engineering Courses (15.00 credits)'
            data={interDisciplinaryCourses}
          />
          <CourseTable
            title='CSE Core Courses (91.50 Credits)'
            data={coreCSE}
          />
          <CourseTable
            title='Elective Courses, Option I (Any Two, 6.00 Credits)'
            data={electiveCSE1}
          />
          <CourseTable
            title='Elective Courses, Option II [Any Three (Course with Sessional), 9.00 Credits]'
            data={electiveCSE2}
          />
          <CourseTable
            title='Project & Thesis (6 Credits)'
            data={projectAndThesis}
          />
          <CourseTable
            title='Industrial Training (3 Credits)'
            data={industrialTraining}
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Curriculum;
