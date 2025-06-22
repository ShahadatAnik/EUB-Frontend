import ContentWrapper from '../../content-wrapper';
import CourseTable from './course-table';
import {
	coreCourses,
	financeMajor,
	accountingMajor,
	hrmMajor,
	marketingMajor,
	internship,
} from './list-of-courses';

const Curriculum = () => {
	return (
		<ContentWrapper title="Curriculum" className="py-4 space-y-6">
			<div>
				<h6 className="text-lg font-semibold">
					Curriculum 2025 <br />
					Executive MBA Program - 48 Credits <br />
					Department of Business Administration <br />
					European University of Bangladesh
				</h6>
				<p className="mt-1"></p>

				<div className="mt-6 space-y-12">
					<CourseTable
						title="Core Courses (30 Credits)"
						data={coreCourses}
					/>
					<p className="mt-1">Major Courses (15 Credits)</p>
					<CourseTable
						title="Finance Major Courses"
						data={financeMajor}
					/>
					<CourseTable
						title="Accounting Major Courses"
						data={accountingMajor}
					/>
					<CourseTable
						title="Human Resource Management Major Courses"
						data={hrmMajor}
					/>
					<CourseTable
						title="Marketing Major Courses"
						data={marketingMajor}
					/>
					<CourseTable
						title="Internship/Project (3 Credits)"
						data={internship}
					/>
				</div>
			</div>
		</ContentWrapper>
	);
};

export default Curriculum;
