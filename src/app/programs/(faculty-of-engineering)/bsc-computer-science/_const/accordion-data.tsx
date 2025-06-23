import { IAcademicAccordion } from '@/types';

import Notices from '@/app/programs/_components/notices';

import AlumniIndustry from '../_components/alumni-industry';
import CoreFacultyMembers from '../_components/core-faculty-members';
import EClassRoutine from '../_components/evening-program/class-routine';
import ECourseOffer from '../_components/evening-program/course-offer';
import ECoursePath from '../_components/evening-program/course-path';
import ECurriculum from '../_components/evening-program/curriculum';
import EDegreeRequirements from '../_components/evening-program/degree-requirements';
import EExamSchedule from '../_components/evening-program/exam-schedule';
import EProgramDetails from '../_components/evening-program/program-details';
import LaboratoriesResources from '../_components/laboratories-resources';
import NewsEvents from '../_components/news-events';
import AboutUs from '../_components/overview/about-us';
import Chairman from '../_components/overview/chairman';
import ClassRoutine from '../_components/regular-program/class-routine';
// Regular Program
import RCourseOffer from '../_components/regular-program/course-offer';
import RCoursePath from '../_components/regular-program/course-path';
import RCurriculum from '../_components/regular-program/curriculum';
import RDegreeRequirements from '../_components/regular-program/degree-requirements';
// Evening Program
import ExamSchedule from '../_components/regular-program/exam-schedule';
import RProgramDetails from '../_components/regular-program/program-details';
import StudentServiceDesk from '../_components/student-service-desk';

const accordions: IAcademicAccordion[] = [
	{
		title: 'Overview',

		children: [
			{
				title: 'About Us',
				content: <AboutUs />,
			},
			{
				title: 'Message from the Chairman',
				content: <Chairman />,
			},
		],
	},

	{
		title: 'Regular Program',

		children: [
			{
				title: 'Program Details',
				content: <RProgramDetails />,
			},
			{
				title: 'Curriculum',
				content: <RCurriculum />,
			},
			{
				title: 'Course Map and Path',
				content: <RCoursePath />,
			},
			{
				title: 'Degree Requirements',
				content: <RDegreeRequirements />,
			},
			{
				title: 'Course Offer',
				content: <RCourseOffer />,
			},
			{
				title: 'Class Routine',
				content: <ClassRoutine />,
			},
			{
				title: 'Exam Schedule',
				content: <ExamSchedule />,
			},
		],
	},
	{
		title: 'Evening Program',
		children: [
			{
				title: 'Program Details',
				content: <EProgramDetails />,
			},
			{
				title: 'Curriculum',
				content: <ECurriculum />,
			},
			{
				title: 'Course Map and Path',
				content: <ECoursePath />,
			},
			{
				title: 'Degree Requirements',
				content: <EDegreeRequirements />,
			},
			{
				title: 'Course Offer',
				content: <ECourseOffer />,
			},
			{
				title: 'Class Routine',
				content: <EClassRoutine />,
			},
			{
				title: 'Exam Schedule',
				content: <EExamSchedule />,
			},
		],
	},
	{
		title: 'Laboratories & Resources',
		content: <LaboratoriesResources />,
	},
	{
		title: 'Alumni & Industry',
		content: <AlumniIndustry />,
	},
	{
		title: 'Faculty Members & Staff',
		content: <CoreFacultyMembers />,
	},
	{
		title: 'Admission Information',
		href: '/admission-information',
	},
	{
		title: 'Financial Information',
		href: '/financial-information',
	},

	{
		title: 'Notices',
		content: <Notices department='BSC-CSE' />,
	},
	{
		title: 'News & Events',
		content: <NewsEvents />,
	},
	{
		title: 'Student Service Desk',
		content: <StudentServiceDesk />,
	},
];

export default accordions;
