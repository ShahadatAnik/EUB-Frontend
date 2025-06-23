import React from 'react';

import Image from 'next/image';

import ContentWrapper from './content-wrapper';

const LaboratoriesResources = () => {
	return (
		<ContentWrapper title='Laboratories and Resources' className='space-y-8'>
			<div>
				<h4 className='text-xl font-semibold'>Inorganic Chemistry LAB</h4>
				<div className='mt-2'>
					<Image
						className='float-right ml-6'
						width={300}
						height={300}
						src={'/placeholder.svg'}
						alt='placeholder'
					/>

					<p className='text-justify'>
						In this laboratory course, students will engage in the synthesis, isolation,
						purification, and characterization of a wide range of inorganic compounds. Through
						hands-on experimentation, they will become proficient in various characterization
						techniques, including UV-Visible spectroscopy, infrared (IR) spectroscopy, and
						electrochemical methods. These techniques will be used to analyze the physical and
						chemical properties of the synthesized compounds, reinforcing students&apos;
						understanding of experimental inorganic chemistry.
						<br />
						<br />
						As the course progresses, students will explore fundamental and advanced concepts in
						inorganic chemistry. Topics will include main group chemistry, transition metal
						chemistry, and materials chemistry, along with introductions to bioinorganic and
						organometallic chemistry. The course also integrates theoretical principles,
						particularly molecular orbital theory, to help students interpret experimental data and
						predict chemical behavior.
						<br />
						<br />
						By linking laboratory techniques with theoretical knowledge, students will gain a deeper
						appreciation of inorganic chemistry’s role in scientific discovery and technological
						advancement. The course is designed to strengthen their analytical thinking, technical
						skills, and ability to conduct rigorous scientific investigations.
					</p>
				</div>
			</div>
			<div>
				<h4 className='text-xl font-semibold'>Organic Chemistry LAB</h4>
				<div className='mt-2'>
					<Image
						className='float-left mr-6'
						width={300}
						height={300}
						src={'/placeholder.svg'}
						alt='placeholder'
					/>

					<p className='text-justify'>
						The Organic Chemistry Laboratory is a hands-on course designed to complement the
						theoretical material presented in Organic Chemistry lectures. Tailored for textile
						engineering majors, this introductory-level lab provides practical experience with the
						fundamental techniques used in organic chemistry.
						<br />
						<br />
						Students will engage in the separation, purification, and synthesis of organic compounds
						while developing essential laboratory skills such as recrystallization, melting point
						determination, distillation, extraction, and chromatography. Emphasis is placed on
						laboratory safety, precision, and proper technique throughout each experiment.
						<br />
						<br />
						As part of the course, students will analyze experimental data, interpret results, and
						apply scientific reasoning to draw meaningful conclusions. The lab fosters a deeper
						understanding of organic chemistry by reinforcing theoretical concepts through direct
						experimentation.
						<br />
						<br />
						It is recommended that students have completed or are concurrently enrolled in a
						college-level Organic Chemistry lecture course to maximize the learning experience. By
						the end of the course, students will have gained foundational laboratory competencies
						and a practical appreciation for organic chemistry’s role in chemical processes relevant
						to the field of textile engineering.
					</p>
				</div>
			</div>
		</ContentWrapper>
	);
};

export default LaboratoriesResources;
