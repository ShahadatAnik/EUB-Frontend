import React from 'react';
import ContentWrapper from '../content-wrapper';
import Title from '@/components/title';
import Link from 'next/link';

const DegreeRequirements = () => {
	return (
		<ContentWrapper title="Degree Requirements" className="space-y-6">
			<p>
				To successfully complete the program, students must complete 48
				credits, comprising 15 courses (45 credits) and 1
				internship/project (3 credits).
			</p>

			<div>
				<Title variant={'title'} title="Minimum GPA to pass program" />
				<p>
					Students must pass all courses individually and maintain a
					minimum Cumulative Grade Point Average (CGPA) of 2.25.
				</p>
			</div>
			<div>
				<Title variant={'title'} title="Supplementary rules & cost" />
				<p>
					{/* Please put a link that redirects to supplementary rules &
					cost */}
				</p>
			</div>
			<div>
				<Title variant={'title'} title="Total Credits of Course" />
				<p>48 credits</p>
			</div>
			<div>
				<Title variant={'title'} title="Waivers" />
				<p>
					(Not applicable), please{' '}
					<Link
						href="/credit-transfer"
						className="underline text-blue-600"
					>
						click here
					</Link>
				</p>
			</div>
			<div>
				<Title variant={'title'} title="Mandatory completions" />
				<p>
					Students must complete a 3-credit internship/project to
					fulfill the program requirements.
				</p>
			</div>
		</ContentWrapper>
	);
};

export default DegreeRequirements;
