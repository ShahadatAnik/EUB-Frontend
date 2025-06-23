import React from 'react';

import Title from '@/components/title';

import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
	return (
		<ContentWrapper title='Degree Requirements' className='space-y-6'>
			<p>To pass the program, a student must complete the following requirements:</p>

			<div>
				<Title variant={'title'} title='Minimum GPA to pass program' />
				<p>
					Students must pass all courses individually and maintain a minimum Cumulative Grade Point
					Average (CGPA) of 2.25.
				</p>
			</div>
			<div>
				<Title variant={'title'} title='Supplementary rules & cost' />
				<p>(Refer to the Office of the Controller of Examination, EUB)</p>
			</div>
			<div>
				<Title variant={'title'} title='Total Credits of Course' />
				<p>(39 credits)</p>
			</div>
			<div>
				<Title variant={'title'} title='Waivers' />
				<p>(Not applicable; refer to the credit transfer guidelines for credit transfer)</p>
			</div>
			<div>
				<Title variant={'title'} title='Mandatory completions' />
				<p>Total Minimum Credit Requirement to complete the program: 39 Credits</p>
				<p>Minimum CGPA Requirements for Graduation: 2.25</p>
				<p>Maximum Academic Year of Completion: 2 Years</p>
			</div>
		</ContentWrapper>
	);
};

export default DegreeRequirements;
