import React from 'react';

import Title from '@/components/title';

import UgcGradingTable from '@/app/programs/_components/ugc-grading-table';

import ContentWrapper from '../../content-wrapper';
import PerformanceCriteriaTable from './performance-criteria-table';

const ProgramDetails = () => {
	return (
		<ContentWrapper title='Program Details' className='space-y-8'>
			<p>
				The Bachelor of Science in Electrical and Electronic Engineering (B.Sc. in EEE) program at
				the European University of Bangladesh (EUB) is designed to prepare students for the rapidly
				evolving field of electrical and electronic technologies. This program emphasizes strong
				theoretical foundations and extensive hands-on laboratory experience. Students will explore
				a range of topics including electronics, power systems, signal processing, and
				interdisciplinary engineering. Whether joining as a regular student or through the evening
				batch, students are guided by experienced faculty committed to academic excellence and
				practical skill development.
			</p>

			<div>
				<Title variant={'title'} title='Semesters' />
				<p>There are three semesters in a year.</p>

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
				<ul className='mb-4 list-disc space-y-1.5 pl-6'>
					<li>4 years (12 semesters)</li>
				</ul>
				<p>Each semester spans 16 working weeks, structured as follows:</p>
				<ul className='mt-2 list-disc space-y-1.5 pl-6'>
					<li>Classes and continuous assessments: 12 weeks</li>
					<li>Mid Term and Final Examinations (including Supplementary): 4 weeks</li>
					<li>Total: 16 weeks</li>
				</ul>
			</div>
			<div>
				<Title variant={'title'} title='Credit Hour' />
				<ul className='mb-4 list-disc space-y-1.5 pl-6'>
					<li>Theory Courses: 3 credit hours (3 lecture sessions per week)</li>
					<li>Lab Courses: 2 credit hours (2 lab sessions per week)</li>
					<li>One credit hour = 50 minutes of class time</li>
				</ul>
			</div>
			<div>
				<Title variant={'title'} title='Course Load' />
				<ul className='mb-4 list-disc space-y-1.5 pl-6'>
					<li>Students may take up to 18.00 credits per semester</li>
					<li>The final semester includes only the Project/Thesis</li>
					<li>
						Students must complete all theory and lab courses before registering for the
						Project/Thesis
					</li>
				</ul>
			</div>
			<div>
				<Title variant={'title'} title='Performance Evaluation Criterion' />
				<p className='mb-4'>
					Students must attend at least 70% of classes to be eligible for Mid Term and Final
					Examinations.
				</p>

				<PerformanceCriteriaTable />

				<div className='mt-8'>
					<p className='mb-4'>
						The university will comply with the uniform grading system suggested by UGC as follows.
					</p>
					<UgcGradingTable />
					<p className='my-4'>
						Incomplete (I) Grade: An Incomplete (I) grade is used in special circumstances. An ‘I’
						grade may be given only at the end of a semester to a student who has completed all
						other requirements except the final examination.
					</p>

					<Title variant={'title'} title='Special Grades' />
					<ul className='list-disc space-y-1.5 pl-6'>
						<li>Incomplete (I): 0.00</li>
						<li>Withdrawal (W): 0.00</li>
						<li>Retaken (R): 0.00</li>
					</ul>
				</div>
			</div>

			<div>
				<Title variant={'title'} title='Supplementary Exams & Costs' />
				<ul className='list-disc space-y-1.5 pl-6'>
					<li>Students can attempt a maximum of two supplementary exams per course.</li>
					<li>Immediate Supplementary Exam Fee: BDT 500</li>
					<li>Subsequent Supplementary Exam Fee: BDT 2000</li>
					<li>Held in the 3rd week after regular exams.</li>
				</ul>
			</div>

			<div>
				<Title variant={'title'} title='Tuition Fee Structure' />
				<p>(Refer to the Admission Office, EUB)</p>
			</div>
		</ContentWrapper>
	);
};

export default ProgramDetails;
