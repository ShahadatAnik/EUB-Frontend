import ContentWrapper from '../../content-wrapper';
import CourseTable from './course-table';
import {
	accountingMajor,
	coreCourses,
	financeMajor,
	generalCourses,
	hrmMajor,
	internship,
	marketingMajor,
} from './list-of-courses';

const Curriculum = () => {
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
					<CourseTable title='General Education (30 Credits)' data={generalCourses} />
					<CourseTable title='Core Courses (79 Credits)' data={coreCourses} />
					<p className='mt-1'>Major/Minor Courses (Major: 15 Credits, Minor: 9 Credits)</p>
					<CourseTable title='Finance Major/Minor Courses' data={financeMajor} />
					<CourseTable title='Accounting Major/Minor Courses' data={accountingMajor} />
					<CourseTable title='Human Resource Management Major/Minor Courses' data={hrmMajor} />
					<CourseTable title='Marketing Major/Minor Courses' data={marketingMajor} />
					<CourseTable title='Internship/Project (3 Credits)' data={internship} />
				</div>
			</div>
		</ContentWrapper>
	);
};

export default Curriculum;
