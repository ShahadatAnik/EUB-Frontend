import { INavLink, ITopNavLink } from '@/types';

export const topNavLinks: ITopNavLink[] = [
  {
    title: 'Publications',
    href: '/publications',
  },
  {
    title: 'International Partnership',
    href: '/international-partnership',
  },
  {
    title: 'Academic Calendar',
    href: '/academic-calendar',
  },
  {
    title: 'Library',
    href: '/library',
  },
  {
    title: 'News & Events',
    href: '/news-events',
  },
  {
    title: 'Journals',
    href: '/journals',
  },
  {
    title: 'Student Portal',
    href: 'https://iems.eub.edu.bd/',
    newTab: true,
  },
  {
    title: 'Gallery',
    href: '/gallery',
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
  },
];

export const navLinks: INavLink[] = [
  {
    title: 'About',
    children: [
      {
        title: 'About EUB',
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
            title: 'International Advisory Board',
            href: '/about/international-advisory-board',
          },

          {
            title: 'Accreditation',
            href: '/about/accreditation',
          },
          {
            title: 'International Recognition',
            href: '/about/international-recognition',
          },
          {
            title: 'Facts About EUB',
            href: '/about/facts-about-eub',
          },
        ],
      },
      {
        title: 'EUB Trustees',
        children: [
          {
            title: 'Board of Trustees',
            href: '/about/board-of-trustees',
          },
        ],
      },
      {
        title: 'Executive Leaders',
        children: [
          {
            title: 'VC, Pro-VC & Treasures',
            href: '/about/vc-pro-vc-and-treasures',
          },
          {
            title: 'Deans, Chairs & Directors',
            href: '/about/deans-chairs-and-directors',
          },
          {
            title: 'Administrators',
            href: '/about/administrators',
          },
        ],
      },
      {
        title: 'Authorities',
      },
    ],
  },
  {
    title: 'Courses',
    children: [
      {
        title: 'School of Business Administration',
        href: '/academic/school-of-business-and-economics',
        children: [
          {
            title: 'BBA',
            href: '/academic/school-of-business-and-economics/accounting-and-finance',
          },
          {
            title: 'MBA',
            href: '/academic/school-of-business-and-economics/economics',
          },
          {
            title: 'Executive MBA',
            href: '/academic/school-of-business-and-economics/management',
          },
          {
            title: 'MBA (1 Year)',
            href: '/academic/school-of-business-and-economics/marketing-and-international-business',
          },
          {
            title: 'THM',
            href: '/academic/school-of-business-and-economics/mba-and-emba-programs',
          },
        ],
      },
      {
        title: 'School of Arts and Social Sciences',
        href: '/academic/school-of-humanities-and-social-sciences',
        children: [
          {
            title: 'BA in English',
            href: '/academic/school-of-humanities-and-social-sciences/english-language',
          },
          {
            title: 'MA in English',
            href: '/academic/school-of-humanities-and-social-sciences/history',
          },
          {
            title: 'BSS in Economics',
            href: '/academic/school-of-humanities-and-social-sciences/philosophy',
          },
          {
            title: 'MSS in Economics',
            href: '/academic/school-of-humanities-and-social-sciences/social-sciences',
          },
          {
            title: 'MGDS (1 Year)',
            href: '/academic/school-of-humanities-and-social-sciences/social-sciences',
          },
          {
            title: 'LLB',
            href: '/academic/school-of-humanities-and-social-sciences/social-sciences',
          },
          {
            title: 'LLM',
            href: '/academic/school-of-humanities-and-social-sciences/social-sciences',
          },
        ],
      },

      {
        title: 'School of Engineering',
        href: '/academic/school-of-engineering-and-physical-sciences',
        children: [
          {
            title: 'BSc in Civil',
            href: '/academic/school-of-engineering-and-physical-sciences/chemistry',
          },
          {
            title: 'BSc in Computer Science',
            href: '/academic/school-of-engineering-and-physical-sciences/computer-science',
          },
          {
            title: 'BSc in Electrical and Electronics',
            href: '/academic/school-of-engineering-and-physical-sciences/mathematics',
          },
          {
            title: 'BSc in Textile',
            href: '/academic/school-of-engineering-and-physical-sciences/physics',
          },
          {
            title: 'BSc in Industrial & Production',
            href: '/academic/school-of-engineering-and-physical-sciences/chemical-engineering',
          },
          {
            title: 'BSc in Mechanical',
            href: '/academic/school-of-engineering-and-physical-sciences/chemical-engineering',
          },
        ],
      },

      {
        title: 'Miscellaneous',
        children: [
          {
            title: 'Grading Policy',
            href: '/academic/miscellaneous/grading-policy',
          },
          {
            title: 'Student Records',
            href: '/academic/miscellaneous/student-records',
          },
        ],
      },
    ],
  },
  {
    title: 'Authorities',
    children: [
      {
        title: 'Chancellor',
        href: '/authorities/chancellor',
      },
      {
        title: 'Syndicate',
        href: '/authorities/syndicate',
      },
      {
        title: 'Vice Chancellor',
        href: '/authorities/vice-chancellor',
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
        title: 'Offices',
        href: '/authorities/offices',
      },
      {
        title: 'Chairman',
        href: '/authorities/chairman',
      },
      {
        title: 'Academic Council',
        href: '/authorities/academic-council',
      },
      {
        title: 'Pro Vice Chancellor',
        href: '/authorities/pro-vice-chancellor',
      },
      {
        title: 'Deans',
        href: '/authorities/deans',
      },
      {
        title: 'Register',
        href: '/authorities/register',
      },
    ],
  },

  {
    title: 'Admission',
    children: [
      {
        title: 'Graduate Admission Requirements',
        href: '/admission/graduate-admission-requirements',
      },
    ],
  },
  {
    title: 'EUB Online',
  },
  {
    title: 'Alumni',
  },
  {
    title: 'Research',
  },
  {
    title: 'Useful Links',
  },
];
