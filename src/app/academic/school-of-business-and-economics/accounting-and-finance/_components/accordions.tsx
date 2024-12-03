import AboutUs from './about-us';
import CFAProgram from './cfa-program';
import Chairman from './chairman';

interface IAccordion {
  title: string;
  href?: string;
  content?: React.ReactNode | string;
  children?: IAccordion[];
}

export const accordions: IAccordion[] = [
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
    title: 'CFA University Affiliation Program',
    content: <CFAProgram />,
  },
  {
    title: 'Academic Information',
    children: [
      {
        title: 'Bachelor of Business Administration (Major in Finance)',
        content: 'Bachelor of Business Administration (Major in Finance)',
      },
      {
        title: 'Bachelor of Business Administration (Major in Accounting)',
        content: 'Bachelor of Business Administration (Major in Accounting)',
      },
      {
        title: 'Current Curriculum',
        content: 'Current Curriculum',
      },
      {
        title: 'Recommended Course Path',
        content: 'Recommended Course Path',
      },
      {
        title: 'Offered Courses in Accounting and Finance',
        content: 'Offered Courses in Accounting and Finance',
      },
    ],
  },
  {
    title: 'Research',
    children: [
      {
        title: 'Publications',
        content: 'Publications',
      },
      {
        title: 'Research Grants',
        content: 'Research Grants',
      },
      {
        title: 'Research Seminar',
        content: 'Research Seminar',
      },
    ],
  },
  {
    title: 'Students',
    children: [
      {
        title: 'Finance Club',
        content: 'Finance Club',
      },
      {
        title: 'Accounting Club',
        content: 'Accounting Club',
      },
      {
        title: 'Meet our Students',
        content: 'Meet our Students',
      },
    ],
  },

  {
    title: 'Newsroom',
    content: 'Newsroom',
  },

  {
    title: 'Contact',
    content: 'Contact',
  },
];
