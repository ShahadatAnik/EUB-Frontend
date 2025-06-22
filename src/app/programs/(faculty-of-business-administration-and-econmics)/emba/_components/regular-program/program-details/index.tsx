import React from 'react';

import ContentWrapper from '../../content-wrapper';
import Title from '@/components/title';

import UgcGradingTable from '@/app/programs/_components/ugc-grading-table';
import PerformanceCriteriaTable from '@/app/programs/_components/performance-criteria-table';
import Link from 'next/link';

const ProgramDetails = () => {
	return (
		<ContentWrapper title="Program Details" className="space-y-8">
			<p>
				The EMBA program at the European University of Bangladesh is
				designed to provide students with a comprehensive understanding
				of contemporary business and management principles. The program
				is tailored for business executives, government officials,
				social entrepreneurs, NGO officials, military personnel, and
				other professionals. It offers concentrations in Finance,
				Accounting, Human Resource Management, and Marketing. The Master
				of Business Administration (MBA) program (1-Year) at the
				European University of Bangladesh is designed to provide
				students with a comprehensive understanding of contemporary
				business and management principles. The program is tailored for
				recent business graduates entering the job market and
				individuals aspiring to become entrepreneurs. It offers
				concentrations in Finance, Accounting, Human Resource
				Management, and Marketing.
			</p>

			<div>
				<Title variant={'title'} title="Semesters" />
				<p>
					The program comprises 4 semesters (trimesters), each
					spanning four months. Students are required to undertake an
					internship or a project along with their coursework in the
					final semester. The academic year is structured into three
					semesters: Spring, Summer, and Fall.
				</p>

				<ul className="mt-2 list-disc pl-6 space-y-1.5">
					<li className="space-x-1">
						<strong>Spring semester:</strong>{' '}
						<span>January to April</span>
					</li>
					<li className="space-x-1">
						<strong>Summer semester:</strong>{' '}
						<span>May to August</span>
					</li>
					<li className="space-x-1">
						<strong>Fall semester:</strong>{' '}
						<span>September to December</span>
					</li>
				</ul>
			</div>

			<div>
				<Title variant={'title'} title="Duration" />
				<p>
					Duration of the program is 1 year and 4 months (4
					Semesters).
				</p>
			</div>
			<div>
				<Title variant={'title'} title="Credit Hour" />
				<p>
					The program comprises 48 credits, including a 3-credit
					internship/project.
				</p>
			</div>
			<div>
				<Title variant={'title'} title="Course Load" />
				<p>
					In each semester, students are required to complete four
					courses, totaling 12 credits (third semester has a course
					load of 3 courses or 9 credits). In the final semester, they
					must undertake a 3-credit internship/project.
				</p>
			</div>
			<div>
				<Title
					variant={'title'}
					title="Performance Evaluation Criterion"
				/>
				<p className="mb-4">
					The final grade for each course will be determined based on
					students&apos; performance in class attendance, continuous
					assessment (including class tests, assignments,
					presentations, etc.), midterm examination, and final
					examination as outlined below.
				</p>

				<PerformanceCriteriaTable />

				<div className="mt-8">
					<p className="mb-4">
						The university will comply with the uniform grading
						system suggested by UGC as follows.
					</p>
					<UgcGradingTable />
					<p className="mt-4">
						Incomplete (I) Grade: An Incomplete (I) grade is used in
						special circumstances. An ‘I’ grade may be given only at
						the end of a semester to a student who has completed all
						other requirements except the final examination.
					</p>
				</div>
			</div>

			<div>
				<Title variant={'title'} title="Tuition Fee Structure" />
				<p>
					<Link
						href="/tuition-and-other-fees-structure"
						className="underline text-blue-600"
					>
						Please go here for tuition fee structure
					</Link>
				</p>
			</div>
		</ContentWrapper>
	);
};

export default ProgramDetails;
