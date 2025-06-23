import React from 'react';

import {
  firstYearFirstSemester,
  firstYearSecondSemester,
  firstYearThirdSemester,
  fourthYearFirstSemester,
  fourthYearSecondSemester,
  fourthYearThirdSemester,
  secondYearFirstSemester,
  secondYearSecondSemester,
  secondYearThirdSemester,
  thirdYearFirstSemester,
  thirdYearSecondSemester,
  thirdYearThirdSemester,
} from '../../../_const/semester-wise-courses';
import ContentWrapper from '../../content-wrapper';
import SemesterCourseTable from './semester-course-table';

const CoursePath = () => {
  return (
    <ContentWrapper title='Course Map and Path' className='space-y-4 py-4'>
      <p>
        The B.Sc in Computer Science and Engineering Program consists of the
        following categories of courses:
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
          title='First Year - Third Semester'
          data={firstYearThirdSemester}
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
          title='Second Year - Third Semester'
          data={secondYearThirdSemester}
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
          title='Third Year - Third Semester'
          data={thirdYearThirdSemester}
        />

        <SemesterCourseTable
          title='Fourth Year - First Semester'
          data={fourthYearFirstSemester}
        />
        <SemesterCourseTable
          title='Fourth Year - Second Semester'
          data={fourthYearSecondSemester}
        />
        <SemesterCourseTable
          title='Fourth Year - Third Semester'
          data={fourthYearThirdSemester}
        />
      </div>
    </ContentWrapper>
  );
};

export default CoursePath;
