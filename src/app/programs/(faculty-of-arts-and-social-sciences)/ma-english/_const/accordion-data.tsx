import { IAcademicAccordion } from '@/types';
import AlumniIndustry from '../_components/alumni-industry';
import CoreFacultyMembers from '../_components/core-faculty-members';
import NewsEvents from '../_components/news-events';
import AboutUs from '../_components/overview/about-us';
import Chairman from '../_components/overview/chairman';
import StudentServiceDesk from '../_components/student-service-desk';

// Regular Program
import RCourseOffer from '../_components/regular-program/course-offer';
import RCoursePath from '../_components/regular-program/course-path';
import RCurriculum from '../_components/regular-program/curriculum';
import RDegreeRequirements from '../_components/regular-program/degree-requirements';
import RProgramDetails from '../_components/regular-program/program-details';

import Notices from '@/app/programs/_components/notices';
import ClassRoutine from '@/app/programs/_components/class-routine';
import ExamSchedule from '@/app/programs/_components/exam-schedule';

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
        content: <ClassRoutine department='MA-ENGLISH' />,
      },
      {
        title: 'Exam Schedule',
        content: <ExamSchedule department='MA-ENGLISH' />,
      },
    ],
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
    content: <Notices department='MA-ENGLISH' />,
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
