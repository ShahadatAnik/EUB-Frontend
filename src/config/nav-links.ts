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
    title: 'Catalog',
    href: '/catalog',
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
    title: 'Academic',

    children: [
      {
        title: 'School of Business & Economics',
        href: '/academic/school-of-business-and-economics',
        children: [
          {
            title: 'Accounting & Finance',
            href: '/academic/school-of-business-and-economics/accounting-and-finance',
          },
          {
            title: 'Economics',
            href: '/academic/school-of-business-and-economics/economics',
          },
          {
            title: 'Management',
            href: '/academic/school-of-business-and-economics/management',
          },
          {
            title: 'Marketing & International Business',
            href: '/academic/school-of-business-and-economics/marketing-and-international-business',
          },
          {
            title: 'MBA & EMBA Programs',
            href: '/academic/school-of-business-and-economics/mba-and-emba-programs',
          },
          {
            title: 'BBA Program',
            href: '/academic/school-of-business-and-economics/bba-program',
          },
        ],
      },
      {
        title: 'School of Humanities and Social Sciences',
        href: '/academic/school-of-humanities-and-social-sciences',
        children: [
          {
            title: 'English Language',
            href: '/academic/school-of-humanities-and-social-sciences/english-language',
          },
          {
            title: 'History',
            href: '/academic/school-of-humanities-and-social-sciences/history',
          },
          {
            title: 'Philosophy',
            href: '/academic/school-of-humanities-and-social-sciences/philosophy',
          },
          {
            title: 'Social Sciences',
            href: '/academic/school-of-humanities-and-social-sciences/social-sciences',
          },
        ],
      },

      {
        title: 'School of Engineering and Physical Sciences',
        href: '/academic/school-of-engineering-and-physical-sciences',
        children: [
          {
            title: 'Chemistry',
            href: '/academic/school-of-engineering-and-physical-sciences/chemistry',
          },
          {
            title: 'Computer Science',
            href: '/academic/school-of-engineering-and-physical-sciences/computer-science',
          },
          {
            title: 'Mathematics',
            href: '/academic/school-of-engineering-and-physical-sciences/mathematics',
          },
          {
            title: 'Physics',
            href: '/academic/school-of-engineering-and-physical-sciences/physics',
          },
          {
            title: 'Chemical Engineering',
            href: '/academic/school-of-engineering-and-physical-sciences/chemical-engineering',
          },
        ],
      },
      {
        title: 'School of Health & Life Sciences',
        href: '/academic/school-of-health-and-life-sciences',
        children: [
          {
            title: 'Biomedical Sciences',
            href: '/academic/school-of-health-and-life-sciences/biomedical-sciences',
          },
          {
            title: 'Health Sciences',
            href: '/academic/school-of-health-and-life-sciences/health-sciences',
          },
          {
            title: 'Life Sciences',
            href: '/academic/school-of-health-and-life-sciences/life-sciences',
          },
          {
            title: 'Pharmaceutical Sciences',
            href: '/academic/school-of-health-and-life-sciences/pharmaceutical-sciences',
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
    title: 'Faculty',
    children: [
      {
        title: 'School of Business & Economics',
        children: [
          {
            title: 'Accounting & Finance',
            href: '/faculty/school-of-business-and-economics/accounting-and-finance',
          },
          {
            title: 'Economics',
            href: '/faculty/school-of-business-and-economics/economics',
          },
          {
            title: 'Management',
            href: '/faculty/school-of-business-and-economics/management',
          },
          {
            title: 'Marketing & International Business',
            href: '/faculty/school-of-business-and-economics/marketing-and-international-business',
          },
        ],
      },
    ],
  },
  {
    title: 'Offices',
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
