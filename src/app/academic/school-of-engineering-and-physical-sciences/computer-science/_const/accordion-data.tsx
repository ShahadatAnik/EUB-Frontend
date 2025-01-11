import { IAcademicAccordion } from '@/types';
import AdmissionInformation from '../_components/admission-information';
import AlumniIndustry from '../_components/alumni-industry';
import CoreFacultyMembers from '../_components/core-faculty-members';
import FinancialInformation from '../_components/financial-information';
import LaboratoriesResources from '../_components/laboratories-resources';
import AboutUs from '../_components/overview/about-us';
import Chairman from '../_components/overview/chairman';
import PhotoGallery from '../_components/photo-gallery';
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
        content: 'Program Details',
      },
      {
        title: 'Curriculum',
        content: 'Curriculum',
      },
      {
        title: 'Course Map and Path',
        content: 'Course Map and Path',
      },
      {
        title: 'Degree Requirements',
        content: 'Degree Requirements',
      },
      {
        title: 'Class Routine',
        content: 'Class Routine',
      },
      {
        title: 'Exam Schedule',
        content: 'Exam Schedule',
      },
    ],
  },
  {
    title: 'Evening Program',
    children: [
      {
        title: 'Program Details',
        content: 'Program Details',
      },
      {
        title: 'Curriculum',
        content: 'Curriculum',
      },
      {
        title: 'Course Map and Path',
        content: 'Course Map and Path',
      },
      {
        title: 'Degree Requirements',
        content: 'Degree Requirements',
      },
      {
        title: 'Class Routine',
        content: 'Class Routine',
      },
      {
        title: 'Exam Schedule',
        content: 'Exam Schedule',
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
    title: 'Core Faculty Members & Staff',
    content: <CoreFacultyMembers />,
  },
  {
    title: 'Admission Information',
    content: <AdmissionInformation />,
  },
  {
    title: 'Financial Information',
    content: <FinancialInformation />,
  },
  {
    title: 'Photo Gallery',
    content: <PhotoGallery />,
  },
  {
    title: 'Student Service Desk',
    content: <StudentServiceDesk />,
  },
];

export default accordions;
