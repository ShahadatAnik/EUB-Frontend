import type {
  Course,
  CoursePrefix,
  Semester,
} from '@/app/(programs)/_config/curriculum';

export const llmCoursePrefixes: CoursePrefix[] = [
  { symbol: 'LAW', name: 'Law' },
];

export const llmCoreCoursesData: Course[] = [
  {
    sl: 1,
    code: 'LAW 601',
    title: 'Principles and the Procedures of Civil Litigation',
    credits: 3,
  },
  { sl: 2, code: 'LAW 602', title: 'Environmental Law', credits: 3 },
  { sl: 3, code: 'LAW 603', title: 'Law of the Seas', credits: 3 },
  { sl: 4, code: 'LAW 608', title: 'Gender and Family Law', credits: 3 },
  {
    sl: 5,
    code: 'LAW 607',
    title: 'International Air and Aviation Law',
    credits: 3,
  },
  {
    sl: 6,
    code: 'LAW 613',
    title: 'International and Comparative Human Rights & Humanitarian Law',
    credits: 3,
  },
  {
    sl: 7,
    code: 'LAW 610',
    title: 'Telecommunication and Cyber Laws',
    credits: 3,
  },
  { sl: 8, code: 'LAW 611', title: 'Comparative Law', credits: 3 },
  { sl: 9, code: 'LAW 614', title: 'Private International Law', credits: 3 },
  { sl: 10, code: 'LAW-609', title: 'Immigration and Refugee Law', credits: 3 },
  {
    sl: 11,
    code: 'LAW 612',
    title: 'Legal Research and Monograph',
    credits: 6,
  },
];

export const llmSemesterData: Semester[] = [
  {
    year: 1,
    semester: 1,
    title: '1st Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'LAW 601',
        courseTitle: 'Principles and the Procedures of Civil Litigation',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'LAW 602',
        courseTitle: 'Environmental Law',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'LAW 603',
        courseTitle: 'Law of the Seas',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'LAW 608',
        courseTitle: 'Gender and Family Law',
        credit: 3,
      },
      {
        slNo: 5,
        courseCode: 'LAW 607',
        courseTitle: 'International Air and Aviation Law',
        credit: 3,
      },
    ],
    total: 15,
  },
  {
    year: 1,
    semester: 2,
    title: '2nd Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'LAW 613',
        courseTitle:
          'International and Comparative Human Rights & Humanitarian Law',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'LAW 610',
        courseTitle: 'Telecommunication and Cyber Laws',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'LAW 611',
        courseTitle: 'Comparative Law',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'LAW 614',
        courseTitle: 'Private International Law',
        credit: 3,
      },
      {
        slNo: 5,
        courseCode: 'LAW-609',
        courseTitle: 'Immigration and Refugee Law',
        credit: 3,
      },
      {
        slNo: 6,
        courseCode: 'LAW 612',
        courseTitle: 'Legal Research and Monograph',
        credit: 6,
      },
    ],
    total: 21,
  },
];
