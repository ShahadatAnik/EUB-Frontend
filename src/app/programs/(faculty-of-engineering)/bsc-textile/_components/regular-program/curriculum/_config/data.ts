import type {
  Course,
  ElectiveCourse,
  Semester,
  CoursePrefix,
  CurriculumSummary,
  PerformanceEvaluation,
} from './types';

export const semesterInfo = {
  spring: 'January-April',
  summer: 'May-August',
  fall: 'September-December',
};

export const programDetails = {
  duration: {
    years: 4,
    semesters: 12,
  },
  creditHours: 165,
  courseLoad: '16 Weeks/Semester',
  courseLoadDetails:
    '(12 Weeks class + 2 Weeks Exam + 2 Weeks Result Processing)',
  minimumGPA: 2.2,
};

export const performanceEvaluation: PerformanceEvaluation[] = [
  {
    category: '(a) Theory Courses:',
    criteria: [
      { item: 'Class participation (i.e. attendance)', percentage: '20%' },
      { item: 'Class tests, presentations and assignments', percentage: '20%' },
      { item: 'Midterm Examination', percentage: '30%' },
      { item: 'Final Examination', percentage: '30%' },
    ],
  },
  {
    category: '(b) Courses on Laboratory/Sessional/Field Work:',
    criteria: [
      { item: 'Class participation and attendance', percentage: '20%' },
      { item: 'Quiz', percentage: '20%' },
      { item: 'Viva Voce', percentage: '20%' },
      { item: 'Performance/Reports', percentage: '40%' },
    ],
  },
  {
    category: '(c) Project and Thesis:',
    criteria: [
      { item: 'Co-Supervisor', percentage: '20%' },
      { item: 'Presentation', percentage: '20%' },
      { item: 'Attendance / Thesis Book (Attendance)', percentage: '10%' },
      { item: 'Supervisor', percentage: '50%' },
    ],
  },
];

export const textileEngineeringCourses: Course[] = [
  {
    sl: 1,
    code: 'TXE-101',
    title: 'Fundamentals of Textile Engineering',
    credits: 3,
  },
  { sl: 2, code: 'TXE-107', title: 'Textile Raw Materials I', credits: 3 },
  {
    sl: 3,
    code: 'TXE-103',
    title: 'Polymer Science and Engineering',
    credits: 2,
  },
  {
    sl: 4,
    code: 'TXE-201',
    title: 'Yarn Manufacturing Technology I',
    credits: 3,
  },
  {
    sl: 5,
    code: 'TXE-202',
    title: 'Yarn Manufacturing Technology I Lab',
    credits: 1,
  },
  {
    sl: 6,
    code: 'TXE-203',
    title: 'Fabric Manufacturing Technology I',
    credits: 3,
  },
  {
    sl: 7,
    code: 'TXE-204',
    title: 'Fabric Manufacturing Technology I Lab',
    credits: 1,
  },
  { sl: 8, code: 'TXE-207', title: 'Wet Processing Technology I', credits: 3 },
  {
    sl: 9,
    code: 'TXE-208',
    title: 'Wet Processing Technology I Lab',
    credits: 1,
  },
  {
    sl: 10,
    code: 'TXE-209',
    title: 'Apparel Manufacturing Technology I',
    credits: 3,
  },
  {
    sl: 11,
    code: 'TXE-210',
    title: 'Apparel Manufacturing Technology I Lab',
    credits: 1,
  },
  { sl: 12, code: 'TXE-211', title: 'Textile Physics I', credits: 2 },
  {
    sl: 13,
    code: 'CSE-205',
    title: 'Application of Computer in Textiles',
    credits: 3,
  },
  {
    sl: 14,
    code: 'CSE-206',
    title: 'Application of Computer in Textiles Lab',
    credits: 1,
  },
  {
    sl: 15,
    code: 'TXE-217',
    title: 'Fabric Structure and Design Analysis',
    credits: 3,
  },
  {
    sl: 16,
    code: 'TXE-216',
    title: 'Fabric Structure and Design Analysis Lab',
    credits: 1,
  },
  {
    sl: 17,
    code: 'TXE-219',
    title: 'Textile Testing and Quality Control I',
    credits: 3,
  },
  {
    sl: 18,
    code: 'TXE-220',
    title: 'Textile Testing and Quality Control I Lab',
    credits: 1,
  },
  {
    sl: 19,
    code: 'TXE-301',
    title: 'Yarn Manufacturing Technology II',
    credits: 3,
  },
  {
    sl: 20,
    code: 'TXE-302',
    title: 'Yarn Manufacturing Technology II Lab',
    credits: 1,
  },
  {
    sl: 21,
    code: 'TXE-303',
    title: 'Fabric Manufacturing Technology II',
    credits: 3,
  },
  {
    sl: 22,
    code: 'TXE-304',
    title: 'Fabric Manufacturing Technology II Lab',
    credits: 1,
  },
  { sl: 23, code: 'TXE-305', title: 'Textile Raw Materials II', credits: 3 },
  {
    sl: 24,
    code: 'TXE-307',
    title: 'Wet Processing Technology II',
    credits: 3,
  },
  {
    sl: 25,
    code: 'TXE-308',
    title: 'Wet Processing Technology II Lab',
    credits: 1,
  },
  { sl: 26, code: 'TXE-309', title: 'Textile Physics II', credits: 2 },
  {
    sl: 27,
    code: 'TXE-315',
    title: 'Apparel Manufacturing Technology II',
    credits: 3,
  },
  {
    sl: 28,
    code: 'TXE-316',
    title: 'Apparel Manufacturing Technology II Lab',
    credits: 1,
  },
  {
    sl: 29,
    code: 'TXE-317',
    title: 'Economic Issues of Textile and Apparel Business',
    credits: 2,
  },
  {
    sl: 30,
    code: 'TXE-321',
    title: 'Textile Testing and Quality Control II',
    credits: 3,
  },
  {
    sl: 31,
    code: 'TXE-322',
    title: 'Textile Testing and Quality Control II Lab',
    credits: 1,
  },
  {
    sl: 32,
    code: 'TXE-423',
    title: 'Textile Testing and Quality Control III',
    credits: 3,
  },
  {
    sl: 33,
    code: 'TXE-424',
    title: 'Textile Testing and Quality Control III Lab',
    credits: 1,
  },
  { sl: 34, code: 'TXE-433', title: 'Technical Textiles', credits: 2 },
  {
    sl: 35,
    code: 'TXE-411',
    title: 'Maintenance of Textile Machineries',
    credits: 3,
  },
  {
    sl: 36,
    code: 'TXE-413',
    title: 'Forecasting and Trend Analysis of Textile and Apparel Business',
    credits: 2,
  },
  {
    sl: 37,
    code: 'EPC-401',
    title: 'Environment and Pollution Control',
    credits: 2,
  },
];

export const nonDepartmentalCourses: Course[] = [
  { sl: 1, code: 'ENG-101', title: 'Foundation English', credits: 3 },
  { sl: 2, code: 'PHY-109', title: 'Physics I', credits: 3 },
  { sl: 3, code: 'PHY-110', title: 'Physics I Lab', credits: 1 },
  { sl: 4, code: 'MTH-113', title: 'Mathematics I', credits: 3 },
  { sl: 5, code: 'CHM-107', title: 'Chemistry I', credits: 3 },
  { sl: 6, code: 'CHM-108', title: 'Chemistry I Lab', credits: 1 },
  { sl: 7, code: 'PHY-111', title: 'Physics II', credits: 3 },
  { sl: 8, code: 'PHY-112', title: 'Physics II Lab', credits: 1 },
  { sl: 9, code: 'CHM-109', title: 'Chemistry II', credits: 3 },
  { sl: 10, code: 'CHM-110', title: 'Chemistry II Lab', credits: 1 },
  { sl: 11, code: 'TXE-102', title: 'Engineering Drawing', credits: 2 },
  {
    sl: 12,
    code: 'TXE-105',
    title: 'Engineering Materials and Practices',
    credits: 2,
  },
  {
    sl: 13,
    code: 'TXE-104',
    title: 'Engineering Materials and Practices Lab',
    credits: 1,
  },
  {
    sl: 14,
    code: 'BBA-109',
    title: 'Principles of Accounting and Cost Accounting',
    credits: 2,
  },
  {
    sl: 15,
    code: 'BBA-111',
    title: 'Principles of Marketing and Cost Marketing',
    credits: 2,
  },
  { sl: 16, code: 'MTH-115', title: 'Mathematics II', credits: 3 },
  { sl: 17, code: 'CSE-101', title: 'Computer Fundamentals', credits: 2 },
  { sl: 18, code: 'CSE-102', title: 'Computer Fundamentals Lab', credits: 1 },
  {
    sl: 19,
    code: 'TXE-205',
    title: 'Automation and Control Engineering',
    credits: 2,
  },
  { sl: 20, code: 'BBA-207', title: 'Business Statistics', credits: 2 },
  {
    sl: 21,
    code: 'EEE-211',
    title: 'Basic Electrical and Electronic Engineering',
    credits: 3,
  },
  {
    sl: 22,
    code: 'EEE-212',
    title: 'Basic Electrical and Electronic Engineering Lab',
    credits: 1,
  },
  { sl: 23, code: 'MGT-215', title: 'Industrial Management', credits: 2 },
  { sl: 24, code: 'GED-102', title: 'Bangladesh Studies', credits: 2 },
  {
    sl: 25,
    code: 'EME-219',
    title: 'Elements of Mechanical Engineering',
    credits: 3,
  },
  {
    sl: 26,
    code: 'EME-218',
    title: 'Elements of Mechanical Engineering Lab',
    credits: 1,
  },
  { sl: 27, code: 'BBA-313', title: 'Industrial Economics', credits: 2 },
  { sl: 28, code: 'TXE-310', title: 'Elements of Machine Design', credits: 3 },
  { sl: 29, code: 'TXE-311', title: 'Textile Mill Utility', credits: 2 },
  {
    sl: 30,
    code: 'TXE-313',
    title: 'Production Planning and Control',
    credits: 2,
  },
  { sl: 31, code: 'TXE-319', title: 'Consumer Behavior', credits: 2 },
  { sl: 32, code: 'BBA-101', title: 'Business Communication', credits: 2 },
  {
    sl: 33,
    code: 'TXE-409',
    title: 'Industrial Compliance and ISO Certification',
    credits: 2,
  },
];

export const electiveCourses: ElectiveCourse[] = [
  {
    sl: 1,
    codes: ['TXE-401', 'TXE-403', 'TXE-405', 'TXE-407'],
    titles: [
      'Yarn Manufacturing Technology III',
      'Fabric Manufacturing Technology III',
      'Wet Processing Technology III',
      'Apparel Manufacturing Technology III',
    ],
    credits: 3,
  },
  {
    sl: 2,
    codes: ['TXE-402', 'TXE-404', 'TXE-406', 'TXE-408'],
    titles: [
      'Yarn Manufacturing Technology III Lab',
      'Fabric Manufacturing Technology III Lab',
      'Wet Processing Technology III Lab',
      'Apparel Manufacturing Technology III Lab',
    ],
    credits: 1,
  },
  {
    sl: 3,
    codes: ['TXE-415', 'TXE-417', 'TXE-419', 'TXE-421'],
    titles: [
      'Yarn Manufacturing Technology IV',
      'Fabric Manufacturing Technology IV',
      'Wet Processing Technology IV',
      'Apparel Manufacturing Technology IV',
    ],
    credits: 3,
  },
  {
    sl: 4,
    codes: ['TXE-410', 'TXE-412', 'TXE-414', 'TXE-416'],
    titles: [
      'Yarn Manufacturing Technology IV Lab',
      'Fabric Manufacturing Technology IV Lab',
      'Wet Processing Technology IV Lab',
      'Apparel Manufacturing Technology IV Lab',
    ],
    credits: 1,
  },
  {
    sl: 5,
    codes: ['TXE-425', 'TXE-427', 'TXE-429', 'TXE-431'],
    titles: [
      'Special Yarn Manufacturing Technology',
      'Special Fabric Manufacturing Technology',
      'Special Wet Processing Technology',
      'Special Apparel Manufacturing Technology',
    ],
    credits: 2,
  },
];

export const projectCourses: Course[] = [
  { sl: 1, code: 'TXE-439', title: 'Project', credits: 3 },
  { sl: 2, code: 'TXE-442', title: 'Industrial Attachment', credits: 3 },
  { sl: 3, code: 'TXE-444', title: 'Comprehensive Viva', credits: 3 },
];

export const coursePrefixes: CoursePrefix[] = [
  { symbol: 'TXE', name: 'Textile Engineering' },
  { symbol: 'CHM', name: 'Chemistry' },
  { symbol: 'EEE', name: 'Electrical and Electronics Engineering' },
  { symbol: 'ENG', name: 'English' },
  { symbol: 'BBA', name: 'Humanities and Social Sciences' },
  { symbol: 'MTH', name: 'Mathematics' },
  { symbol: 'PHY', name: 'Physics' },
  { symbol: 'CSE', name: 'ICT & Computer Science' },
];

export const curriculumSummary: CurriculumSummary[] = [
  {
    category:
      'Textile Engineering Core Courses & Lab\n(Including Project work, Industrial Attachment & Comprehensive Viva)',
    credits: 78.0,
    percentage: '47.27%',
  },
  {
    category:
      'General Education Courses (Inter Disciplinary Engineering Courses include ICT/ Computer, Technical Elective Courses, Basic Science), Compulsory Courses, Social Science & Humanities',
    credits: 68.0,
    percentage: '41.21%',
  },
  {
    category: 'Elective Courses\n(Textile Engineering Advanced Courses)',
    credits: 10.0,
    percentage: '6.06%',
  },
  {
    category: 'Project work, Industrial Attachment & Comprehensive Viva',
    credits: 9.0,
    percentage: '5.46%',
  },
];

export const semesterData: Semester[] = [
  {
    year: 1,
    semester: 1,
    title: '1st Year 1st Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'TXE-101',
        courseTitle: 'Fundamentals of Textile Engineering',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'TXE-107',
        courseTitle: 'Textile Raw Materials I',
        credit: 3,
      },
      { slNo: 3, courseCode: 'PHY-109', courseTitle: 'Physics I', credit: 3 },
      {
        slNo: 4,
        courseCode: 'PHY-110',
        courseTitle: 'Physics I Lab',
        credit: 1,
      },
      {
        slNo: 5,
        courseCode: 'MTH-113',
        courseTitle: 'Mathematics I',
        credit: 3,
      },
    ],
    total: 13,
  },
  {
    year: 1,
    semester: 2,
    title: '1st Year 2nd Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'TXE-102',
        courseTitle: 'Engineering Drawing',
        credit: 2,
      },
      {
        slNo: 2,
        courseCode: 'TXE-103',
        courseTitle: 'Polymer Science and Engineering',
        credit: 2,
      },
      {
        slNo: 3,
        courseCode: 'TXE-105',
        courseTitle: 'Engineering Materials and Practices',
        credit: 2,
      },
      {
        slNo: 4,
        courseCode: 'TXE-104',
        courseTitle: 'Engineering Materials and Practices Lab',
        credit: 1,
      },
      { slNo: 5, courseCode: 'CHM-107', courseTitle: 'Chemistry I', credit: 3 },
      {
        slNo: 6,
        courseCode: 'CHM-108',
        courseTitle: 'Chemistry I Lab',
        credit: 1,
      },
      { slNo: 7, courseCode: 'PHY-111', courseTitle: 'Physics II', credit: 3 },
      {
        slNo: 8,
        courseCode: 'PHY-112',
        courseTitle: 'Physics II Lab',
        credit: 1,
      },
    ],
    total: 15,
  },
  {
    year: 1,
    semester: 3,
    title: '1st Year 3rd Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'ENG-101',
        courseTitle: 'Foundation English',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'BBA-109',
        courseTitle: 'Principles of Accounting and Cost Accounting',
        credit: 2,
      },
      {
        slNo: 3,
        courseCode: 'CHM-109',
        courseTitle: 'Chemistry II',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'CHM-110',
        courseTitle: 'Chemistry II Lab',
        credit: 1,
      },
      {
        slNo: 5,
        courseCode: 'BBA-111',
        courseTitle: 'Principles of Marketing and Cost Marketing',
        credit: 2,
      },
      {
        slNo: 6,
        courseCode: 'MTH-115',
        courseTitle: 'Mathematics II',
        credit: 3,
      },
    ],
    total: 14,
  },
  {
    year: 2,
    semester: 1,
    title: '2nd Year 1st Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'CSE-101',
        courseTitle: 'Computer Fundamentals',
        credit: 2,
      },
      {
        slNo: 2,
        courseCode: 'CSE-102',
        courseTitle: 'Computer Fundamentals Lab',
        credit: 1,
      },
      {
        slNo: 3,
        courseCode: 'TXE-201',
        courseTitle: 'Yarn Manufacturing Technology I',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'TXE-202',
        courseTitle: 'Yarn Manufacturing Technology I Lab',
        credit: 1,
      },
      {
        slNo: 5,
        courseCode: 'TXE-203',
        courseTitle: 'Fabric Manufacturing Technology I',
        credit: 3,
      },
      {
        slNo: 6,
        courseCode: 'TXE-204',
        courseTitle: 'Fabric Manufacturing Technology I Lab',
        credit: 1,
      },
      {
        slNo: 7,
        courseCode: 'TXE-205',
        courseTitle: 'Automation and Control Engineering',
        credit: 2,
      },
      {
        slNo: 8,
        courseCode: 'BBA-207',
        courseTitle: 'Business Statistics',
        credit: 2,
      },
    ],
    total: 15,
  },
  {
    year: 2,
    semester: 2,
    title: '2nd Year 2nd Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'TXE-207',
        courseTitle: 'Wet Processing Technology I',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'TXE-208',
        courseTitle: 'Wet Processing Technology I Lab',
        credit: 1,
      },
      {
        slNo: 3,
        courseCode: 'TXE-209',
        courseTitle: 'Apparel Manufacturing Technology I',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'TXE-210',
        courseTitle: 'Apparel Manufacturing Technology I Lab',
        credit: 1,
      },
      {
        slNo: 5,
        courseCode: 'TXE-211',
        courseTitle: 'Textile Physics I',
        credit: 2,
      },
      {
        slNo: 6,
        courseCode: 'EEE-211',
        courseTitle: 'Basic Electrical and Electronic Engineering',
        credit: 3,
      },
      {
        slNo: 7,
        courseCode: 'EEE-212',
        courseTitle: 'Basic Electrical and Electronic Engineering Lab',
        credit: 1,
      },
      {
        slNo: 8,
        courseCode: 'MGT-215',
        courseTitle: 'Industrial Management',
        credit: 2,
      },
    ],
    total: 16,
  },
  {
    year: 2,
    semester: 3,
    title: '2nd Year 3rd Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'GED-102',
        courseTitle: 'Bangladesh Studies',
        credit: 2,
      },
      {
        slNo: 2,
        courseCode: 'CSE-205',
        courseTitle: 'Application of Computer in Textiles',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'CSE-206',
        courseTitle: 'Application of Computer in Textiles Lab',
        credit: 1,
      },
      {
        slNo: 4,
        courseCode: 'TXE-217',
        courseTitle: 'Fabric Structure and Design Analysis',
        credit: 3,
      },
      {
        slNo: 5,
        courseCode: 'TXE-216',
        courseTitle: 'Fabric Structure and Design Analysis Lab',
        credit: 1,
      },
      {
        slNo: 6,
        courseCode: 'EME-219',
        courseTitle: 'Elements of Mechanical Engineering',
        credit: 3,
      },
      {
        slNo: 7,
        courseCode: 'EME-218',
        courseTitle: 'Elements of Mechanical Engineering Lab',
        credit: 1,
      },
      {
        slNo: 8,
        courseCode: 'TXE-219',
        courseTitle: 'Textile Testing and Quality Control I',
        credit: 3,
      },
      {
        slNo: 9,
        courseCode: 'TXE-220',
        courseTitle: 'Textile Testing and Quality Control I Lab',
        credit: 1,
      },
    ],
    total: 18,
  },
  {
    year: 3,
    semester: 1,
    title: '3rd Year 1st Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'TXE-301',
        courseTitle: 'Yarn Manufacturing Technology II',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'TXE-302',
        courseTitle: 'Yarn Manufacturing Technology II Lab',
        credit: 1,
      },
      {
        slNo: 3,
        courseCode: 'TXE-303',
        courseTitle: 'Fabric Manufacturing Technology II',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'TXE-304',
        courseTitle: 'Fabric Manufacturing Technology II Lab',
        credit: 1,
      },
      {
        slNo: 5,
        courseCode: 'TXE-305',
        courseTitle: 'Textile Raw Materials II',
        credit: 3,
      },
      {
        slNo: 6,
        courseCode: 'BBA-313',
        courseTitle: 'Industrial Economics',
        credit: 2,
      },
    ],
    total: 13,
  },
  {
    year: 3,
    semester: 2,
    title: '3rd Year 2nd Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'TXE-307',
        courseTitle: 'Wet Processing Technology II',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'TXE-308',
        courseTitle: 'Wet Processing Technology II Lab',
        credit: 1,
      },
      {
        slNo: 3,
        courseCode: 'TXE-309',
        courseTitle: 'Textile Physics II',
        credit: 2,
      },
      {
        slNo: 4,
        courseCode: 'TXE-310',
        courseTitle: 'Elements of Machine Design',
        credit: 3,
      },
      {
        slNo: 5,
        courseCode: 'TXE-311',
        courseTitle: 'Textile Mill Utility',
        credit: 2,
      },
      {
        slNo: 6,
        courseCode: 'TXE-313',
        courseTitle: 'Production Planning and Control',
        credit: 2,
      },
    ],
    total: 13,
  },
  {
    year: 3,
    semester: 3,
    title: '3rd Year 3rd Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'TXE-315',
        courseTitle: 'Apparel Manufacturing Technology II',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'TXE-316',
        courseTitle: 'Apparel Manufacturing Technology II Lab',
        credit: 1,
      },
      {
        slNo: 3,
        courseCode: 'TXE-317',
        courseTitle: 'Economic Issues of Textile and Apparel Business',
        credit: 2,
      },
      {
        slNo: 4,
        courseCode: 'TXE-319',
        courseTitle: 'Consumer Behavior',
        credit: 2,
      },
      {
        slNo: 5,
        courseCode: 'TXE-321',
        courseTitle: 'Textile Testing and Quality Control II',
        credit: 3,
      },
      {
        slNo: 6,
        courseCode: 'TXE-322',
        courseTitle: 'Textile Testing and Quality Control II Lab',
        credit: 1,
      },
    ],
    total: 12,
  },
  {
    year: 4,
    semester: 1,
    title: '4th Year 1st Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'BBA-101',
        courseTitle: 'Business Communication',
        credit: 2,
      },
      {
        slNo: 2,
        courseCode: 'TXE-401/403/405/407',
        courseTitle:
          'Yarn/Fabric/Wet Processing/Apparel Manufacturing Technology III (Any one)',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'TXE-402/404/406/408',
        courseTitle:
          'Yarn/Fabric/Wet Processing/Apparel Manufacturing Technology III Lab (Any one)',
        credit: 1,
      },
      {
        slNo: 4,
        courseCode: 'TXE-409',
        courseTitle: 'Industrial Compliance and ISO Certification',
        credit: 2,
      },
      {
        slNo: 5,
        courseCode: 'TXE-411',
        courseTitle: 'Maintenance of Textile Machineries',
        credit: 3,
      },
      {
        slNo: 6,
        courseCode: 'TXE-413',
        courseTitle:
          'Forecasting and Trend Analysis of Textile and Apparel Business',
        credit: 2,
      },
    ],
    total: 13,
  },
  {
    year: 4,
    semester: 2,
    title: '4th Year 2nd Semester',
    courses: [
      {
        slNo: 1,
        courseCode: 'TXE-415/417/419/421',
        courseTitle:
          'Yarn/Fabric/Wet Processing/Apparel Manufacturing Technology IV (Any one)',
        credit: 3,
      },
      {
        slNo: 2,
        courseCode: 'TXE-410/412/414/416',
        courseTitle:
          'Yarn/Fabric/Wet Processing/Apparel Manufacturing Technology IV Lab (Any one)',
        credit: 1,
      },
      {
        slNo: 3,
        courseCode: 'TXE-423',
        courseTitle: 'Textile Testing and Quality Control III',
        credit: 3,
      },
      {
        slNo: 4,
        courseCode: 'TXE-424',
        courseTitle: 'Textile Testing and Quality Control III Lab',
        credit: 1,
      },
      {
        slNo: 5,
        courseCode: 'TXE-425/427/429/431',
        courseTitle:
          'Special Yarn/Fabric/Wet Processing/Apparel Manufacturing Technology (Any one)',
        credit: 2,
      },
      {
        slNo: 6,
        courseCode: 'TXE-433',
        courseTitle: 'Technical Textiles',
        credit: 2,
      },
      {
        slNo: 7,
        courseCode: 'EPC-401',
        courseTitle: 'Environment and Pollution Control',
        credit: 2,
      },
    ],
    total: 14,
  },
  {
    year: 4,
    semester: 3,
    title: '4th Year 3rd Semester',
    courses: [
      { slNo: 1, courseCode: 'TXE-439', courseTitle: 'Project', credit: 3 },
      {
        slNo: 2,
        courseCode: 'TXE-442',
        courseTitle: 'Industrial Attachment',
        credit: 3,
      },
      {
        slNo: 3,
        courseCode: 'TXE-444',
        courseTitle: 'Comprehensive Viva',
        credit: 3,
      },
    ],
    total: 9,
  },
];
