import { IAcademicAccordion } from '@/types';
import Message from '../_components/message';
import AboutIQAC from '../_components/about-iqac';
import VisionMission from '../_components/vision-mission';
import OrganogramFunction from '../_components/organogram-function';
import Sustainibility from '../_components/sustainibility';
import Manuals from '../_components/manuals';
import UgcObeTemplate from '../_components/ugc-obe-template';
import SelfAssessmentSurvey from '../_components/self-assessment-survey';
import WorkShop from '../_components/workshop';
import Symposium from '../_components/symposium';
import Archives from '../_components/archives';
import NewsEvents from '../_components/news-events';
import StudentServiceDesk from '../_components/student-service-desk';
import Offices from '../_components/offices';

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
