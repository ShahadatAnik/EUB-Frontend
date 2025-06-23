import React from 'react';

import ContentWrapper from '../../content-wrapper';
import {
	accountingMajor,
	coreCourses,
	financeMajor,
	generalCourses,
	hrmMajor,
	internship,
	marketingMajor,
} from '../curriculum/list-of-courses';
import CourseTable from './course-table';

// import UnderDevelopment from '@/components/under-development';

const CoursePath = () => {
	// return (
	//   <ContentWrapper title='Course Map and Path'>
	//     <UnderDevelopment />
	//   </ContentWrapper>
	// );
	return (
		<ContentWrapper title='Curriculum' className='space-y-6 py-4'>
			<div>
				<h6 className='text-lg font-semibold'>
					Curriculum 2025 <br />
					MBA Program (BBA Grad) - 36 Credits <br />
					Department of Business Administration <br />
					European University of Bangladesh
				</h6>

				<div className='mt-6 space-y-12'>
					<CourseTable title='General Education (6 Credits)' data={generalCourses} />
					<CourseTable title='Core Courses (18 Credits)' data={coreCourses} />
					<p className='mt-1'>Major Courses (15 Credits)</p>
					<CourseTable title='Finance Major Courses' data={financeMajor} />
					<CourseTable title='Accounting Major Courses' data={accountingMajor} />
					<CourseTable title='Human Resource Management Major Courses' data={hrmMajor} />
					<CourseTable title='Marketing Major Courses' data={marketingMajor} />
					<CourseTable title='Internship/Project (3 Credits)' data={internship} />
				</div>
			</div>
		</ContentWrapper>
	);
};

export default CoursePath;
