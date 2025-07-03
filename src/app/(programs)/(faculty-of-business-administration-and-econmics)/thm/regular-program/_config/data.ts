// Assuming this is the path to your type definitions
import type {
  Course,
  CoursePrefix,
  CurriculumSummary,
  PerformanceEvaluation,
  Prerequisite,
  ProgramDetails,
  Semester,
} from '@/app/(programs)/_config/curriculum';

// A new interface to handle prerequisite courses as shown in the PDF

export const bthmProgramDetails: ProgramDetails = {
  degreeName: 'Bachelor of Tourism and Hospitality Management',
  duration: {
    years: 4,
    semesters: 12,
  },
  creditHours: 132,
  courseLoad: '16-week classes in a Semester',
  courseLoadDetails:
    'The program consists of 12 semesters (trimesters), each lasting four months. The first 11 trimesters focus on coursework, while the final trimester is designated for an internship.',
  minimumGPA: 2.25,
  waiverInfo:
    'Not applicable; please consult the credit transfer guidelines for eligibility and requirements.',
};

export const bthmPerformanceEvaluation: PerformanceEvaluation[] = [
  {
    category: 'Evaluation Criteria',
    criteria: [
      { item: 'Attendance', percentage: '20%' },
      { item: 'Continuous Assessment', percentage: '20%' },
      { item: 'Mid Term', percentage: '30%' },
      { item: 'Final Exam', percentage: '30%' },
    ],
  },
];

//done
export const bthmGeneralEducationCourses: Course[] = [
  { sl: 1, code: 'ENG 101', title: 'Foundation English', credits: 3 },
  { sl: 2, code: 'BBA 104', title: 'Fundamentals of Mathematics', credits: 3 },
  { sl: 3, code: 'CSE 101', title: 'Computer Fundamentals', credits: 3 },
  { sl: 4, code: 'BBA 207', title: 'Introduction to Statistics', credits: 3 },
  { sl: 5, code: 'THM 111', title: 'Introduction to Finance', credits: 3 },
  {
    sl: 6,
    code: 'BBA 102',
    title: 'Introduction to Business & Environment',
    credits: 3,
  },
  {
    sl: 7,
    code: 'THM 214',
    title: 'Public Speaking and Modern Presentation Techniques',
    credits: 3,
  },
  { sl: 8, code: 'THM 201', title: 'Basic Accounting', credits: 3 },
  { sl: 9, code: 'LAW 303', title: 'Business Law', credits: 3 },
  {
    sl: 10,
    code: 'GED 401',
    title: 'Career Planning and Grooming',
    credits: 3,
  },
];

//done
export const bthmCoreCoursesData: Course[] = [
  { sl: 1, code: 'ΤΗΜ 101', title: 'Introduction to Tourism', credits: 3 },
  {
    sl: 2,
    code: 'ΤΗΜ 107',
    title: 'Introduction to Hospitality Management',
    credits: 3,
  },
  { sl: 3, code: 'BBA 101', title: 'Business Communication', credits: 3 },
  { sl: 4, code: 'BBA 107', title: 'Principles of Management', credits: 3 },
  {
    sl: 5,
    code: 'THM 210',
    title: 'English for Hotel and Tourism',
    credits: 3,
  },
  {
    sl: 6,
    code: 'ΤΗΜ 213',
    title: 'Tourism Economy, Culture & Society',
    credits: 3,
  },
  { sl: 7, code: 'BBA 203', title: 'Organizational Behavior', credits: 3 },
  {
    sl: 8,
    code: 'ΤΗΜ 203',
    title: 'Human Resource Management in Hotel and Tourism',
    credits: 3,
  },
  { sl: 9, code: 'ΤΗΜ 211', title: 'Tourism Economics', credits: 3 },
  { sl: 10, code: 'BBA 201', title: 'Principles of Marketing', credits: 3 },
  { sl: 11, code: 'ΤΗΜ 405', title: 'Geography of Tourism', credits: 3 },
  {
    sl: 12,
    code: 'ΤΗΜ 303',
    title: 'Tourism & Hospitality Marketing',
    credits: 3,
  },
  {
    sl: 13,
    code: 'ΤΗΜ 305',
    title: 'Tourism & Hospitality Consumer Behavior',
    credits: 3,
  },
  { sl: 14, code: 'BBA 301', title: 'Research Methodology', credits: 3 },
  {
    sl: 15,
    code: 'BBA 303',
    title: 'Entrepreneurship Development',
    credits: 3,
  },
  { sl: 16, code: 'BBA 312', title: 'International Business', credits: 3 },
  {
    sl: 17,
    code: 'BBA 212',
    title: 'Management Information System (MIS)',
    credits: 3,
  },
  {
    sl: 18,
    code: 'THM 403',
    title: 'Tourism Planning & Development',
    credits: 3,
  },
  { sl: 19, code: 'THM 108', title: 'French Language', credits: 3 },
  { sl: 20, code: 'THM 407', title: 'Sustainable Tourism', credits: 3 },
  { sl: 21, code: 'THM 313', title: 'Tourism in Bangladesh', credits: 3 },
  {
    sl: 22,
    code: 'THM 409',
    title: 'Destination & Facilities Management',
    credits: 3,
  },
];

//done
export const bthmSpecializationCourses: Course[] = [
  {
    sl: 1,
    code: 'THM 302',
    title: 'Hotel Management & Operations',
    credits: 3,
  },
  { sl: 2, code: 'ΤΗΜ 301', title: 'Tour & Travel Agency', credits: 3 },
  {
    sl: 3,
    code: 'ΤΗΜ 307',
    title: 'Aviation and Flight Management',
    credits: 3,
  },
  { sl: 4, code: 'THM 304', title: 'Front Office Operations', credits: 3 },
  {
    sl: 5,
    code: 'ΤΗΜ 308',
    title: 'Restaurant Management and Operations',
    credits: 3,
  },
  { sl: 6, code: 'THM 205', title: 'Housekeeping', credits: 3 },
  { sl: 7, code: 'ΤΗΜ 404', title: 'Computer Reservation System', credits: 3 },
  {
    sl: 8,
    code: 'THM 402',
    title: 'Resort Development and Management',
    credits: 3,
  },
  { sl: 9, code: 'ΤΗΜ 315', title: 'Culinary Arts', credits: 3 },
  { sl: 10, code: 'ΤΗΜ 314', title: 'Food Service Operations', credits: 3 },
  { sl: 11, code: 'THM 309', title: 'Event Management (MICE)', credits: 3 },
];

//done
export const bthmInternshipCourses: Course[] = [
  { sl: 1, code: 'ΤΗΜ 410', title: 'Internship', credits: 3 },
];

//done
export const bthmPrerequisiteCourses: Prerequisite[] = [
  {
    course: { code: 'ΤΗΜ 404', title: 'Computer Reservation System' },
    prerequisites: [
      { code: 'CSE 101', title: 'Computer Fundamentals', credits: 3 },
    ],
  },
  {
    course: { code: 'BBA 212', title: 'Management Information System (MIS)' },
    prerequisites: [
      { code: 'CSE 101', title: 'Computer Fundamentals', credits: 3 },
    ],
  },
  {
    course: { code: 'ΤΗΜ 303', title: 'Tourism & Hospitality Marketing' },
    prerequisites: [
      { code: 'BBA 201', title: 'Principles of Marketing', credits: 3 },
    ],
  },
  {
    course: {
      code: 'THM 214',
      title: 'Public Speaking and Modern Presentation Techniques',
    },
    prerequisites: [
      { code: 'ENG 101', title: 'Foundation English', credits: 3 },
      { code: 'BBA 101', title: 'Business Communication', credits: 3 },
    ],
  },
  {
    course: { code: 'THM 210', title: 'English for Hotel and Tourism' },
    prerequisites: [
      { code: 'ENG 101', title: 'Foundation English', credits: 3 },
    ],
  },
  {
    course: { code: 'THM 302', title: 'Hotel Management & Operations' },
    prerequisites: [
      { code: 'BBA 107', title: 'Principle of Management', credits: 3 },
    ],
  },
  {
    course: { code: 'ΤΗΜ 308', title: 'Restaurant Management and Operations' },
    prerequisites: [
      { code: 'BBA 107', title: 'Principle of Management', credits: 3 },
    ],
  },
  {
    course: { code: 'ΤΗΜ 402', title: 'Resort Development and Management' },
    prerequisites: [
      { code: 'BBA 107', title: 'Principle of Management', credits: 3 },
    ],
  },
  {
    course: { code: 'ΤΗΜ 409', title: 'Destination & Facilities Management' },
    prerequisites: [
      { code: 'BBA 107', title: 'Principle of Management', credits: 3 },
    ],
  },
];

//done
export const bthmCoursePrefixes: CoursePrefix[] = [
  { symbol: 'ENG', name: 'English' },
  { symbol: 'BBA', name: 'Bachelor of Business Administration' },
  { symbol: 'CSE', name: 'Computer Science and Engineering' },
  { symbol: 'THM', name: 'Tourism and Hospitality Management' },
  { symbol: 'LAW', name: 'Law' },
  { symbol: 'GED', name: 'General Education' },
];

//done
export const bthmCurriculumSummary: CurriculumSummary[] = [
  { category: 'General Education', credits: 30 },
  { category: 'Core Courses', credits: 66 },
  { category: 'Course for Specialization', credits: 33 },
  { category: 'Internship', credits: 3 },
];

export const bthmSemesterData: Semester[] = [
  {
    year: 1,
    semester: 1,
    title: 'First Year First Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'THM 101',
        courseTitle: 'Introduction to Tourism',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'ΤΗΜ 107',
        courseTitle: 'Introduction to Hospitality Management',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'BBA 101',
        courseTitle: 'Business Communication',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'ENG 101',
        courseTitle: 'Foundation English',
        credit: 3,
      },
    ],
    total: 12,
  },
  {
    year: 1,
    semester: 2,
    title: 'First Year Second Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'ΤΗΜ 111',
        courseTitle: 'Introduction to Finance',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'BBA 102',
        courseTitle: 'Introduction to Business & Environment',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'BBA 104',
        courseTitle: 'Fundamentals of Mathematics',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'GED 401',
        courseTitle: 'Career Planning and Grooming',
        credit: 3,
      },
    ],
    total: 12,
  },
  {
    year: 1,
    semester: 3,
    title: 'First Year Third Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'ΤΗΜ 213',
        courseTitle: 'Tourism Economy, Culture and Society',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'ΤΗΜ 210',
        courseTitle: 'English for Hotel and Tourism',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'BBA 107',
        courseTitle: 'Principle of Management',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'CSE 101',
        courseTitle: 'Computer Fundamentals',
        credit: 3,
      },
    ],
    total: 12,
  },
  {
    year: 2,
    semester: 1,
    title: 'Second Year First Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'BBA 203',
        courseTitle: 'Organizational Behavior',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'ΤΗΜ 203',
        courseTitle: 'Human Resource Management in Hotel and Tourism',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'BBA 201',
        courseTitle: 'Principles of Marketing',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'THM 211',
        courseTitle: 'Tourism Economics',
        credit: 3,
      },
    ],
    total: 12,
  },
  {
    year: 2,
    semester: 2,
    title: 'Second Year Second Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'THM 201',
        courseTitle: 'Basic Accounting',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'ΤΗΜ 214',
        courseTitle: 'Public Speaking & Modern Presentation Techniques',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'ΤΗΜ 303',
        courseTitle: 'Tourism & Hospitality Marketing',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'BBA 207',
        courseTitle: 'Introduction to Statistics',
        credit: 3,
      },
    ],
    total: 12,
  },
  {
    year: 2,
    semester: 3,
    title: 'Second Year Third Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'THM 302',
        courseTitle: 'Hotel Management and Operations',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'THM 301',
        courseTitle: 'Tour & Travel Agency',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'ΤΗΜ 405',
        courseTitle: 'Geography of Tourism',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'ΤΗΜ 305',
        courseTitle: 'Tourism and Hospitality Consumer Behavior',
        credit: 3,
      },
    ],
    total: 12,
  },
  {
    year: 3,
    semester: 1,
    title: 'Third Year First Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'BBA 303',
        courseTitle: 'Entrepreneurship Development',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'ΤΗΜ 304',
        courseTitle: 'Front Office Operations',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'LAW 303',
        courseTitle: 'Business Law',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'THM 307',
        courseTitle: 'Aviation and Flight Management',
        credit: 3,
      },
    ],
    total: 12,
  },
  {
    year: 3,
    semester: 2,
    title: 'Third Year Second Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'ΤΗΜ 404',
        courseTitle: 'Computerized Reservation System',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'BBA 312',
        courseTitle: 'International Business',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'BBA 212',
        courseTitle: 'Management Information System',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'BBA 301',
        courseTitle: 'Research Methodology',
        credit: 3,
      },
    ],
    total: 12,
  },
  {
    year: 3,
    semester: 3,
    title: 'Third Year Third Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'ΤΗΜ 205',
        courseTitle: 'Housekeeping',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'ΤΗΜ 309',
        courseTitle: 'Event Management (MICE)',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'THM 402',
        courseTitle: 'Resort Development and Management',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'ΤΗΜ 315',
        courseTitle: 'Culinary Arts',
        credit: 3,
      },
    ],
    total: 12,
  },
  {
    year: 4,
    semester: 1,
    title: 'Fourth Year First Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'THM 314',
        courseTitle: 'Food Service Operations',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'ΤΗΜ 403',
        courseTitle: 'Tourism Planning & Development',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'THM 108',
        courseTitle: 'French Language',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'THM 308',
        courseTitle: 'Restaurant Management and Operations',
        credit: 3,
      },
    ],
    total: 12,
  },
  {
    year: 4,
    semester: 2,
    title: 'Fourth Year Second Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'THM 407',
        courseTitle: 'Sustainable Tourism',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'THM 313',
        courseTitle: 'Tourism In Bangladesh',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'THM 409',
        courseTitle: 'Destination & Facilities Management',
        credit: 3,
      },
    ],
    total: 9,
  },
  {
    year: 4,
    semester: 3,
    title: 'Fourth Year Third Semester',
    courses: [
      { slNo: 1, courseCode: 'THM 410', courseTitle: 'Internship', credit: 3 },
    ],
    total: 3,
  },
];
