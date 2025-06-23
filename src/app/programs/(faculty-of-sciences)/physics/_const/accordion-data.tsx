import { IAcademicAccordion } from '@/types';

import Notices from '@/app/programs/_components/notices';

import CoreFacultyMembers from '../_components/core-faculty-members';
import LaboratoriesResources from '../_components/laboratories-resources';
import NewsEvents from '../_components/news-events';
import AboutUs from '../_components/overview/about-us';
import Chairman from '../_components/overview/chairman';
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
    title: 'Laboratories & Resources',
    content: <LaboratoriesResources />,
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
    content: <Notices department='Physics' />,
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
