import React from 'react';

import {
  firstYearFirstSemester,
  firstYearSecondSemester,
  fourthYearFirstSemester,
  fourthYearSecondSemester,
  secondYearFirstSemester,
  secondYearSecondSemester,
  thirdYearFirstSemester,
  thirdYearSecondSemester,
} from '../../../_const/semester-wise-courses';
import ContentWrapper from '../../content-wrapper';
import SemesterCourseTable from './semester-course-table';

const CoursePath = () => {
  return (
    <ContentWrapper title='Course Map and Path' className='space-y-4 py-4'>
      <p>
        The B.Sc in Mechanical Program consists of the following categories of
        courses:
      </p>
      <div className='space-y-16'>
        <SemesterCourseTable
          title='First Year - First Semester'
          data={firstYearFirstSemester}
        />
        <SemesterCourseTable
          title='First Year - Second Semester'
          data={firstYearSecondSemester}
        />

        <SemesterCourseTable
          title='Second Year - First Semester'
          data={secondYearFirstSemester}
        />
        <SemesterCourseTable
          title='Second Year - Second Semester'
          data={secondYearSecondSemester}
        />

        <SemesterCourseTable
          title='Third Year - First Semester'
          data={thirdYearFirstSemester}
        />
        <SemesterCourseTable
          title='Third Year - Second Semester'
          data={thirdYearSecondSemester}
        />

        <SemesterCourseTable
          title='Fourth Year - First Semester'
          data={fourthYearFirstSemester}
        />
        <SemesterCourseTable
          title='Fourth Year - Second Semester'
          data={fourthYearSecondSemester}
        />
      </div>
    </ContentWrapper>
  );
};

export default CoursePath;
