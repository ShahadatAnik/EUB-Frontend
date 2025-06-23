import React from 'react';

import SectionContent from './section-content';

const Content = () => {
	return (
		<div className='py-6 lg:py-12'>
			<div className='container space-y-8'>
				<SectionContent
					title={`University Policy`}
					content={`European University (EUB) maintains various student records to document academic progress and to record interactions with the University staff and officials. To protect each student's right to privacy the University has an established policy for handling student records. Interpretation of this policy is based on experience with educational records, and the policy itself may subsequently be modified in light of this experience.`}
				/>
				<SectionContent
					title={`Directory Information`}
					content={
						<p>
							Certain information concerning students is open to the public upon inquiry. This
							public information is called directory information and includes a student&apos;s name,
							local address, and telephone number, mailing address, major, classification, date and
							place of birth, dates of attendance at EUB, awards and academic honors, degrees and
							dates awarded, previously attended educational institutions, participation in
							officially recognized University activities and sports, and the height and weight of
							members of athletic teams.
							<br />
							Directory information as defined above will be released for individual students by the
							Office of the Registrar to anyone upon inquiry, unless the student has requested
							within ten days after registering that specific items not be released. The
							student&apos;s request to have directory information withheld must be submitted for
							each semester the student is registered and should be made at the Office of the
							Registrar, which will notify other appropriate University offices.
						</p>
					}
				/>
				<SectionContent
					title={`Confidential Information`}
					content={`Except for the information noted above, student records are generally considered to be confidential. Each type of student record is the responsibility of a designated University official, and only that person or the Vice-Chancellor, Pro-Vice-Chancellor or superior to whom that person reports has authority to release the record.`}
				/>
				<SectionContent
					title={`Release of Grades`}
					content={`Students get their grade of each course through SMS after the grade submission for the semester. Students can see their grades through their Student Portal (RDS) and parents also can see the student’s grades through Parent Portal (RDS).`}
				/>
				<SectionContent
					title={`Withholding Records`}
					content={`In the case of a student who is delinquent in an account to the University or against whom official disciplinary action has been taken, the student records might not be released. The effect of this action is that transcripts are not released. In order to release records, the student must meet all the obligations.`}
				/>
				<SectionContent
					title={`Transcripts`}
					content={
						<p>
							A transcript is a certified, official copy of a student&apos;s academic records.
							Because the transcript contains confidential information, it can be released to the
							student, or parents of a dependent student, or an authorized person with a specific
							request signed by the student.
							<br />
							The required fee for the transcript must be paid in advance through RDS or nominated
							banks. A transcript request must be made through RDS or by submitting the completed
							application form at the Office of the Controller of Examinations.
						</p>
					}
				/>
				<SectionContent
					title={`Provisional Certificate`}
					content={`A student can apply for a provisional certificate only when s/he meets all the requirements of the degree. A student’s degree application must be approved by the respective department, Finance & Accounts Office, and the Office of the Controller of Examinations before s/he applies for her/his provisional certificate. Application for provisional certificate and the required fee must be submitted through RDS.`}
				/>
				<SectionContent
					title={`Sending Educational Documents (Certificate/ Transcript) from EUB to other Institution/ Organization`}
					content={`EUB does not have any provision to send any document (certificate, transcript) directly to any person/ institution/ organization. A student has to collect verified photocopy of his/her educational documents (transcript/ certificate) in a sealed envelope from the Office of the Controller of Examinations and send to the respective person/ institution/ organization. Students/ graduates may ask them to communicate with the Office of the Controller of Examinations if they need to verify the documents or if they want the Office of the Controller of Examinations to send documents directly to them.`}
				/>
				<SectionContent
					title={`Undergraduate Degree Requirements`}
					content={
						<div>
							<p>
								As EUB is based on the US University system, most undergraduate degrees are of
								four-year duration. For each degree, at least 120 credits are required. If an
								undergraduate student takes 15-16 credits per semester, it will take approximately
								eight semesters to complete degree requirements. This can be done in less than four
								years if a student registers for more than two semesters in some years, has
								sufficient proficiency in English and Mathematics, and plans the schedules well.
								Students are responsible for meeting the requirements of their curriculum. Before
								selecting the courses in each semester, students should consult their academic
								advisor. The University reserves the right to change programs and curricula without
								notice whenever circumstances warrant such changes.
							</p>
							<p className='mb-1 mt-2 font-medium'>
								Meeting graduation requirements is each student&apos;s responsibility. They include
								the following:
							</p>
							<ul className='list-inside list-decimal space-y-1'>
								<li>
									<span className='italic'>
										A minimum of 120 credits for a bachelor&apos;s degree of which at least 60 must
										have been earned at EUB as a student admitted into a degree program.
									</span>
								</li>
								<li>
									<span className='italic'>
										Completion of all course requirements for the degree including Ged, core,
										concentration/major, minor etc.
									</span>
								</li>
								<li>
									<span className='italic'>
										A student must get an overall CGPA 2.00 (C) on a scale of 4.00 to be qualified
										for his/ her degree. CGPA 2.00 (C) is required in all categories and CGPA 2.5 in
										the Concentration/ Major, Minor category to qualify for the degree with
										Concentration/ Major, Minor. If any student is unable to get CGPA 2.5 in
										Concentration/ Major, Minor category, s/he must get CGPA 2.00 to qualify for the
										degree without Concentration/ Major, Minor.
									</span>
								</li>
								<li>
									<span className='italic'>
										A student must earn a grade of D or better to pass a course.
									</span>
								</li>
								<li>
									<span className='italic'>
										Fulfillment of the above conditions does not necessarily mean that a degree will
										be conferred on the student. The University reserves the right to refuse the
										awarding of a degree on disciplinary and other grounds.
									</span>
								</li>
							</ul>
							<p className='mb-1 mt-2 font-medium'>
								The courses comprising the 120-credit requirement can be categorized as follows:
							</p>
							<ul className='list-inside list-disc space-y-2'>
								<li>
									<span className='font-semibold'>General Education (GEd) Courses</span>
									<p className='mt-0.5'>
										A minimum of 120 credits for a bachelor&apos;s degree of which at least 60 must
										have been earned at EUB as a student admitted into a degree program.
									</p>
								</li>
								<li>
									<span className='font-semibold'>Core Courses</span>
									<p className='mt-0.5'>
										These are the courses specifically required for a degree. The required credits
										vary for each degree. Students must maintain at least CGPA 2.00 in these
										courses.
									</p>
								</li>
								<li>
									<span className='font-semibold'>Concentration/ Major</span>
									<p className='mt-0.5'>
										These are courses specifically required for concentration/ major within a
										degree. Students must get CGPA 2.5 in this category to qualify for the degree
										with Concentration/ Major.
									</p>
								</li>
								<li>
									<span className='font-semibold'>Minor</span>
									<p className='mt-0.5'>
										Students may choose to do a Minor in addition to their major/ concentration by
										completing additional course requirements advised by the respective department.
										Students must get a CGPA 2.5 in this category to qualify for the degree with
										Minor. Minor broadens students&apos; specialization and increases their
										marketability.
									</p>
								</li>
								<li>
									<span className='font-semibold'>Open Electives</span>
									<p className='mt-0.5'>
										Any course selected by a student to fulfill the degree requirement after GEd,
										core, concentration/major, and minor requirements are satisfied, is an open
										elective course. Open electives are selected according to availability and the
										student’s preference. Students can take open elective courses from any area.
									</p>
								</li>
								<li>
									<span className='font-semibold'>Dual Major</span>
									<p className='mt-0.5'>
										Departments and Programs also offer Dual Major. A student must fulfill the
										requirements for two major/ concentration areas to obtain a Dual Major. Students
										must get a CGPA 2.5 in this category to qualify for the degree with Dual Major.
									</p>
								</li>
							</ul>
						</div>
					}
				/>

				<SectionContent
					title={`Internship`}
					content={`An internship is a program whereby a student, usually after completing all courses, undertakes an affiliation with an organization, under faculty supervision, for the purpose of applying knowledge gained from their EUB studies and to gain experience in the business world. The Career Placement Centre provides assistance to students in arranging internships. Such experiences are approved in advance by the faculty advisor and can last from 8-10 weeks after which the student is assigned credits and grades based on an evaluation by the faculty supervisor, by a staff where the internship is performed, and a written report prepared by the intern. Credits assigned may vary for internships. Special projects or research work of high standard may be substituted for an internship when formally authorized in advance by the Academic Council. Internships can also be used as electives or to replace a required course if approved in advance by the Academic Council.`}
				/>
				<SectionContent
					title={`Conditions of Internship`}
					content={`A student must complete at least 100 credits to be eligible for an internship. Students shall not be registered into any course during internship unless authorized by the Department Chair and the Dean.`}
				/>
				<SectionContent
					title={`Duration of Internship`}
					content={`For purpose of fulfilling degree requirement, students should be interned in organizations ideally for 8-10 weeks allowing two to three more weeks for preparing draft and final reports.`}
				/>
			</div>
		</div>
	);
};

export default Content;
