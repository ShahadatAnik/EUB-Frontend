import React from 'react';

import Title from '@/components/title';

import PerformanceCriteriaTable from '@/app/programs/_components/performance-criteria-table';

import ContentWrapper from '../../content-wrapper';

const ProgramDetails = () => {
	return (
		<ContentWrapper title='Program Details' className='space-y-8'>
			<div>
				<Title variant={'title'} title='Semesters' />
				<p>
					The program consists of 12 semesters (trimesters), each lasting four months. The first 11
					trimesters focus on coursework, while the final trimester is designated for an internship.
					The academic year is divided into three semesters:
				</p>

				<ul className='mt-2 list-disc space-y-1.5 pl-6'>
					<li className='space-x-1'>
						<strong>Spring semester:</strong> <span>January to April</span>
					</li>
					<li className='space-x-1'>
						<strong>Summer semester:</strong> <span>May to August</span>
					</li>
					<li className='space-x-1'>
						<strong>Fall semester:</strong> <span>September to December</span>
					</li>
				</ul>
			</div>

			<div>
				<Title variant={'title'} title='Duration' />
				<p> The duration of the program is 4 years (12 Semesters).</p>
			</div>
			<div>
				<Title variant={'title'} title='Credit Hour' />
				<p>The program consists of 132 credits, which include a 3-credit internship.</p>
			</div>
			<div>
				<Title variant={'title'} title='Course Load' />
				<p>Total 16 Weeks Class in a Semester</p>
			</div>
			<div>
				<Title variant={'title'} title='Performance Evaluation Criterion' />
				<p className='mb-4'>
					The final grade for each course will be determined based on students&apos; performance in
					class attendance, continuous assessment (including class tests, assignments,
					presentations, etc.), midterm examination, and final examination as outlined below.
				</p>

				<PerformanceCriteriaTable />
			</div>

			<div>
				<Title variant={'title'} title='Tuition Fee Structure' />
				<p>(Refer to the Admission Office, EUB)</p>
			</div>
		</ContentWrapper>
	);
};

export default ProgramDetails;
