import { IAcademicAccordion } from '@/types';

import AboutIQAC from '../_components/about-iqac';
import Archives from '../_components/archives';
import Manuals from '../_components/manuals';
import Message from '../_components/message';
import NewsEvents from '../_components/news-events';
import Offices from '../_components/offices';
import OrganogramFunction from '../_components/organogram-function';
import SelfAssessmentSurvey from '../_components/self-assessment-survey';
import StudentServiceDesk from '../_components/student-service-desk';
import Sustainibility from '../_components/sustainibility';
import Symposium from '../_components/symposium';
import UgcObeTemplate from '../_components/ugc-obe-template';
import VisionMission from '../_components/vision-mission';
import WorkShop from '../_components/workshop';

const accordions: IAcademicAccordion[] = [
  {
    title: 'Message from Director',
    content: <Message />,
  },
  {
    title: 'About IQAC',
    content: <AboutIQAC />,
  },
  {
    title: 'Vision and Mission',
    content: <VisionMission />,
  },
  {
    title: 'Organogram and Function',
    content: <OrganogramFunction />,
  },
  {
    title: 'Sustainability',
    content: <Sustainibility />,
  },
  {
    title: 'Office of the IQAC',
    content: <Offices />,
  },
  {
    title: 'News and Events',
    content: <NewsEvents />,
  },
  {
    title: 'Manuals',
    content: <Manuals />,
  },
  {
    title: 'UGC OBE Template',
    content: <UgcObeTemplate />,
  },
  {
    title: 'Self Assessment Survey',
    content: <SelfAssessmentSurvey />,
  },
  {
    title: 'Workshop',
    content: <WorkShop />,
  },
  {
    title: 'Symposium',
    content: <Symposium />,
  },
  {
    title: 'Archives',
    content: <Archives />,
  },
  {
    title: 'Service Desk',
    content: <StudentServiceDesk />,
  },
];

export default accordions;
