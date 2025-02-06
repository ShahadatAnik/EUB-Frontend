import { INavLink, ITopNavLink } from '@/types';

export const topNavLinks: ITopNavLink[] = [
  {
    title: 'Publications',
    href: '/publications',
  },
  {
    title: 'Journal',
    href: '/journal',
  },
  {
    title: 'Academic Calendar',
    href: '/academic-calendar',
  },
  {
    title: 'News & Events',
    href: '/news-events',
  },
  {
    title: 'Student Portal',
    href: 'https://iems.eub.edu.bd/',
    newTab: true,
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
  },
];

export const navLinks: INavLink[] = [
  {
    title: 'About',
    className: 'gap-2 ',
    children: [
      {
        title: 'Brief History',
        href: '/about/brief-history',
      },

      {
        title: 'Vision, Mission and Strategy',
        href: '/about/vision-mission-strategy',
      },

      {
        title: 'Accreditation',
        href: '/about/accreditation',
      },
      {
        title: 'Facts About EUB',
        href: '/about/facts-about-eub',
      },
    ],
  },
  {
    title: 'Programs',
    children: [
      {
        title: 'School of Business Administration',
        href: '/courses/school-of-business-administration',
        children: [
          {
            title: 'BBA',
            href: '/courses/school-of-business-administration/bba',
          },
          {
            title: 'MBA',
            href: '/courses/school-of-business-administration/mba',
          },
          {
            title: 'Executive MBA',
            href: '/courses/school-of-business-administration/emba',
          },
          {
            title: 'MBA (1 Year)',
            href: '/courses/school-of-business-administration/mba-one-year',
          },
          {
            title: 'THM',
            href: '/courses/school-of-business-administration/thm',
          },
        ],
      },
      {
        title: 'School of Arts and Social Sciences',
        href: '/courses/school-of-arts-and-social-sciences',
        children: [
          {
            title: 'BA in English',
            href: '/courses/school-of-arts-and-social-sciences/ba-english',
          },
          {
            title: 'MA in English',
            href: '/courses/school-of-arts-and-social-sciences/ma-english',
          },
          {
            title: 'BSS in Economics',
            href: '/courses/school-of-arts-and-social-sciences/bss-economics',
          },
          {
            title: 'MSS in Economics',
            href: '/courses/school-of-arts-and-social-sciences/mss-economics',
          },
          {
            title: 'MGDS (1 Year)',
            href: '/courses/school-of-arts-and-social-sciences/mgds-one-year',
          },
          {
            title: 'LLB',
            href: '/courses/school-of-arts-and-social-sciences/llb',
          },
          {
            title: 'LLM',
            href: '/courses/school-of-arts-and-social-sciences/llm',
          },
        ],
      },

      {
        title: 'School of Science and Engineering',
        href: '/courses/school-of-engineering',
        children: [
          {
            title: 'BSc in Civil',
            href: '/courses/school-of-engineering/bsc-civil',
          },
          {
            title: 'BSc in Computer Science',
            href: '/courses/school-of-engineering/bsc-computer-science',
          },
          {
            title: 'BSc in Electrical and Electronics',
            href: '/courses/school-of-engineering/bsc-electrical-and-electronics',
          },
          {
            title: 'BSc in Textile',
            href: '/courses/school-of-engineering/bsc-textile',
          },
          {
            title: 'BSc in Industrial & Production',
            href: '/courses/school-of-engineering/bsc-industrial-and-production',
          },
          {
            title: 'BSc in Mechanical',
            href: '/courses/school-of-engineering/bsc-mechanical',
          },
        ],
      },

      {
        title: 'Miscellaneous',
        children: [
          {
            title: 'Academic Information & Policies',
            href: '/courses/miscellaneous/academic-information-policies',
          },
          {
            title: 'Grading Policy',
            href: '/courses/miscellaneous/grading-policy',
          },
          {
            title: 'Examination Guidelines',
            href: '/courses/miscellaneous/examination-guidelines',
          },
          {
            title: 'Student Records',
            href: '/courses/miscellaneous/student-records',
          },
          {
            title: 'Information about Provisional Certificates',
            href: '/courses/miscellaneous/information-about-provisional-certificates',
          },
        ],
      },
    ],
  },
  {
    title: 'Authorities',
    className: 'gap-2',
    children: [
      {
        title: 'Chancellor',
        href: '/authorities/chancellor',
      },
      {
        title: 'Chairman',
        href: '/authorities/chairman',
      },
      {
        title: 'Syndicate',
        href: '/authorities/syndicate',
      },
      {
        title: 'Academic Council',
        href: '/authorities/academic-council',
      },
      {
        title: 'Academic Council (Demo)',
        href: '/authorities/academic-council-demo',
      },
      {
        title: 'Vice Chancellor',
        href: '/authorities/vice-chancellor',
      },
      {
        title: 'Vice Chancellor (Demo)',
        href: '/authorities/vice-chancellor-demo',
      },
      {
        title: 'Pro Vice Chancellor',
        href: '/authorities/pro-vice-chancellor',
      },
      {
        title: 'Dean',
        href: '/authorities/dean',
      },
      {
        title: 'Treasurer',
        href: '/authorities/treasurer',
      },
      {
        title: 'Director (Coordination)',
        href: '/authorities/director-coordination',
      },
      {
        title: 'Registrar',
        href: '/authorities/registrar',
      },
      {
        title: 'Offices',
        href: '/authorities/offices',
      },
      {
        title: 'Offices (Demo)',
        href: '/authorities/offices-demo',
      },
    ],
  },

  {
    title: 'Admission',
    children: [
      {
        title: 'Admission Information',
        href: '/admission-information',
      },
      {
        title: 'Financial Information',
        href: '/financial-information',
      },
      {
        title: 'Tuition & Other Fees Structure',
        href: '/tuition-and-other-fees-structure',
      },
      {
        title: 'FAQs / Ask',
        href: '/faq',
      },
      {
        title: 'Credit Transfer',
        href: '/credit-transfer',
      },
      {
        title: 'Online Admission',
        href: '/online-admission',
      },
      // {
      //   title: 'Graduate Admission Requirements',
      //   href: '/graduate-admission-requirements',
      // },
    ],
  },
  {
    title: 'IQAC',
    href: '/iqac',
  },
  {
    title: 'Useful Links',
    className: 'gap-0 d:grid-cols-1 xl:grid-cols-1',
    children: [
      {
        title: 'Notices',
        href: '/notices',
      },
      {
        title: 'News & Events',
        href: '/news-events',
      },
      {
        title: 'Student Service Desk',
        href: '/student-service-desk',
        newTab: true,
      },

      {
        title: 'Clubs & Societies',
        href: '/clubs-societies',
      },
      {
        title: 'Online Admission',
        href: '/online-admission',
      },
      {
        title: 'Career',
        href: '/career',
      },
      {
        title: 'Tender',
        href: '/tender',
      },
      {
        title: 'Policy Hub',
        href: '/policy-hub',
      },
    ],
  },
];
