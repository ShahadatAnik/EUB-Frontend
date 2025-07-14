import React from 'react';

// import UnderDevelopment from '@/components/under-development';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

import {
  firstYearFirstSemester,
  firstYearSecondSemester,
  firstYearThirdSemester,
  
} from '../../_const/list-of-courses';
// import SemesterCourseTable from './semester-course-table';
import CourseTable from '../curriculum/course-table';
import CourseStructureTable from '../curriculum/course-structure-table';

const Page = () => {
  // return (
  //   <ContentWrapper title='Course Map and Path'>
  //     <UnderDevelopment />
  //   </ContentWrapper>
  // );
  return (
    <ContentWrapper title='Course Map and Path' className='space-y-4 py-4'>
       <div>
        <h6 className='text-lg font-semibold'>List of Courses</h6>
        {/* <p className='mt-1'>
          The list of the courses that will be offered under the program is
          given below:
        </p> */}

        <div className='mt-6 space-y-12'>
          <CourseTable
            title='First Year First Semester (12 Credits)'
            data={firstYearFirstSemester}
          />
          <CourseTable
            title='First Year Second Semester (12 Credits)'
            data={firstYearSecondSemester}
          />
        </div>
        <CourseTable
          title='First Year Third Semester (15 Credits)'
          data={firstYearThirdSemester}
        />
      </div>
      <div>
        <h6 className='text-lg font-semibold'>Course Structure</h6>
        <div className='my-4'>
          <CourseStructureTable/>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Page;
