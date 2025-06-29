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
    title: 'Notices',
    href: '/notices',
  },
  {
    title: 'Degree Verification',
    href: 'https://iems.eub.edu.bd/ResultVerification',
    newTab: true,
  },
  {
    title: 'Apply for Certificate',
    href: 'https://iems.eub.edu.bd/EubApplyCertificate/?step=1',
    newTab: true,
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
    className: 'xl:grid-cols-2 2xl:w-[1200px] 2xl:grid-cols-4',
    children: [
      {
        title: 'Faculty of Business Administration and Economics',
        href: '/bba',
        children: [
          {
            title: 'BBA',
            href: '/bba',
          },
          {
            title: 'MBA',
            href: '/mba',
          },
          {
            title: 'Executive MBA',
            href: '/emba',
          },
          {
            title: 'MBA (1 Year)',
            href: '/mba-one-year',
          },
          {
            title: 'BTHM', //! need to update
            href: '/thm',
          },

          {
            title: 'BSS in Economics',
            href: '/bss-economics',
          },
          {
            title: 'MSS in Economics',
            href: '/mss-economics',
          },
          {
            title: 'MGDS (1 Year)',
            href: '/mgds-one-year',
          },
        ],
      },
      {
        title: 'Faculty of Arts and Social Sciences',
        href: '/ba-english',
        children: [
          {
            title: 'BA in English',
            href: '/ba-english',
          },
          {
            title: 'MA in English',
            href: '/ma-english',
          },
          {
            title: 'LLB',
            href: '/llb',
          },
          {
            title: 'LLM',
            href: '/llm',
          },
        ],
      },

      {
        title: 'Faculty of Engineering',
        href: '/bsc-civil',
        children: [
          {
            title: 'BSc in Civil',
            href: '/bsc-civil',
          },
          {
            title: 'BSc in Computer Science',
            href: '/programs/bsc-computer-science',
          },
          {
            title: 'BSc in Electrical and Electronics',
            href: '/bsc-electrical-and-electronics',
          },
          {
            title: 'BSc in Textile',
            href: '/programs/bsc-textile',
          },
          {
            title: 'BSc in Industrial & Production',
            href: '/programs/bsc-industrial-and-production',
          },
          {
            title: 'BSc in Mechanical',
            href: '/programs/bsc-mechanical',
          },
        ],
      },
      {
        title: 'Faculty of Sciences',
        href: '/programs/physics',
        children: [
          {
            title: 'Physics',
            href: '/programs/physics',
          },
          {
            title: 'Chemistry',
            href: '/programs/chemistry',
          },
          {
            title: 'Mathematics',
            href: '/programs/mathematics',
          },
        ],
      },

      {
        title: 'Miscellaneous',
        children: [
          {
            title: 'Academic Information & Policies',
            href: '/programs/miscellaneous/academic-information-policies',
          },
          {
            title: 'Grading Policy',
            href: '/programs/miscellaneous/grading-policy',
          },
          {
            title: 'Examination Guidelines',
            href: '/programs/miscellaneous/examination-guidelines',
          },
          {
            title: 'Student Records',
            href: '/programs/miscellaneous/student-records',
          },
          {
            title: 'Information about Provisional Certificates',
            href: '/programs/miscellaneous/information-about-provisional-certificates',
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
        title: 'Vice Chancellor',
        href: '/authorities/vice-chancellor',
      },
      // {
      //   title: 'Pro Vice Chancellor',
      //   href: '/authorities/pro-vice-chancellor',
      // },
      {
        title: 'Dean',
        href: '/authorities/dean',
      },
      {
        title: 'Treasurer',
        href: '/authorities/treasurer',
      },
      // {
      //   title: 'Director (Coordination)',
      //   href: '/authorities/director-coordination',
      // },
      {
        title: 'Registrar',
        href: '/authorities/registrar',
      },
      {
        title: 'Offices',
        href: '/authorities/offices',
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
  // {
  // 	title: 'IQAC',
  // 	href: '/iqac',
  // },
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

export const allPrograms = navLinks
  ?.find((navLink) => navLink.title === 'Programs')
  ?.children?.filter(
    (program) =>
      program.title !== 'Miscellaneous' &&
      program.title !== 'Faculty of Sciences'
  )
  .map((program) => program.children)
  .flat();
