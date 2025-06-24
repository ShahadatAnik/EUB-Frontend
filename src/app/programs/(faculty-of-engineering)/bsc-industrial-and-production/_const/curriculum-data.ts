import type {
  Course,
  CoursePrefix,
  CurriculumSummary,
  PerformanceEvaluation,
  ProgramDetails,
  // The ElectiveCourse type is no longer needed for this file
  Semester,
} from '@/app/programs/_config/curriculum';

// Assuming this is the path to your type definitions

export const ipeSemesterInfo = {
  spring: 'Spring Semester',
  summer: 'Summer Semester',
  fall: 'Fall Semester',
};

export const ipeRegularProgramDetails: ProgramDetails = {
  degreeName: 'Bachelor of Science in Industrial and Production Engineering',
  duration: {
    years: '4',
    semesters: 12,
  },
  creditHours: 161.75, //
  courseLoad: 'A full-time student can register for a maximum of 15 credits.', //
  courseLoadDetails:
    'Each semester will be 17 weeks duration with 12 weeks for class teaching.', //
  minimumGPA: 2.5, //
  backgroundStudents: 'For Regular (HSC/A-Level) Students',
};

export const ipeEveningProgramDetails: ProgramDetails = {
  degreeName: 'Bachelor of Science in Industrial and Production Engineering',
  duration: {
    years: '4',
    semesters: 12,
  },
  creditHours: 142.75, //
  courseLoad: 'Part-time student can register for a maximum of 9 credits.', //
  courseLoadDetails:
    'All Eligible students for evening section will be enrolled as part-time.', //
  minimumGPA: 2.5,
  backgroundStudents: 'For Diploma Students',
  waiverInfo:
    'A maximum of 13.5 credits may be exempted from the GED group for eligible diploma engineers.', //
};

export const ipePerformanceEvaluation: PerformanceEvaluation[] = [
  {
    category: 'Evaluation Criteria', //
    criteria: [
      { item: 'Class attendance & Participation', percentage: '10' }, //
      { item: 'Continuous Assessment', percentage: '20' }, //
      { item: 'Mid-term Examination', percentage: '30' }, //
      { item: 'Final Examination', percentage: '40' }, //
    ],
  },
];

export const ipeCoreCoursesData: Course[] = [
  {
    sl: 1,
    code: 'IPE 101',
    title: 'Introduction to Industrial & Production Engineering',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 2,
    code: 'IPE 104',
    title: 'Engineering Graphics Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 3,
    code: 'IPE 105',
    title: 'Principles of Cost and Management Accounting',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 4,
    code: 'IPE 204',
    title: 'Engineering Graphics and Introduction to CAD Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 5,
    code: 'IPE 205',
    title: 'Manufacturing Process I',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 6,
    code: 'IPE 206',
    title: 'Manufacturing Process I Sessional',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 7,
    code: 'IPE 207',
    title: 'Probability and Statistics',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 8,
    code: 'IPE 209',
    title: 'Engineering Economy',
    credits: 2.0,
    contactHours: 2.0,
  }, //
  {
    sl: 9,
    code: 'IPE 301',
    title: 'Measurement, Instrumentation and Control',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 10,
    code: 'IPE 302',
    title: 'Measurement, Instrumentation and Control Sessional (Practical)',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 11,
    code: 'IPE 303',
    title: 'Product Design I and Development',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 12,
    code: 'IPE 304',
    title: 'Product Design I and Development Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 13,
    code: 'IPE 305',
    title: 'Manufacturing Process II',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 14,
    code: 'IPE 306',
    title: 'Manufacturing Process-II Sessional',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 15,
    code: 'IPE 307',
    title: 'Operations Research',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 16,
    code: 'IPE 311',
    title: 'Materials Handling and Maintenance Management',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 17,
    code: 'IPE 312',
    title: 'Material Handling and Maintenance Management Sessional (Practical)',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 18,
    code: 'IPE 315',
    title: 'Operations & Project Management',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 19,
    code: 'IPE 319',
    title: 'Quality Management',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 20,
    code: 'IPE 320',
    title: 'Quality Management Sessional',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 21,
    code: 'IPE 321',
    title: 'Modern Machinery and Machining Processes',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 22,
    code: 'IPE 322',
    title: 'Business Communication Seminar-1 Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 23,
    code: 'IPE 329',
    title: 'Numerical Analysis',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 24,
    code: 'IPE 401',
    title: 'Machine Tools',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 25,
    code: 'IPE 402',
    title: 'Machine Tools Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 26,
    code: 'IPE 403',
    title: 'Production Planning & Control',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 27,
    code: 'IPE 407',
    title: 'Ergonomics and Safety Management',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 28,
    code: 'IPE 408',
    title: 'Ergonomics and Safety Sessional',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 29,
    code: 'IPE 409',
    title: 'CAD/CAM',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 30,
    code: 'IPE 410',
    title: 'CAD/CAM Sessional',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 31,
    code: 'IPE 411',
    title: 'Industrial and Business Management',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 32,
    code: 'IPE 417',
    title: 'Product Design II and Development',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 33,
    code: 'IPE 418',
    title: 'Product Design II and Development Sessional',
    credits: 1.5,
    contactHours: 1.5,
  }, //
  {
    sl: 34,
    code: 'IPE 419',
    title: 'Computer Integrated Manufacturing',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 35,
    code: 'IPE 423',
    title: 'Environmental & Pollution Control',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 36,
    code: 'IPE 427',
    title: 'Marketing Management',
    credits: 2.0,
    contactHours: 2.0,
  }, //
  {
    sl: 37,
    code: 'IPE 451',
    title: 'Supply Chain Management',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 38,
    code: 'IPE 470',
    title: 'Industrial Simulation Sessional',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 39,
    code: 'SHOP 160',
    title: 'Foundry and Welding Shop Sessional',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 40,
    code: 'SHOP 170',
    title: 'Machine Shop Sessional',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 41,
    code: 'ΜΕ 160',
    title: 'Mechanical Engineering Drawing-I Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 42,
    code: 'ΜΕ 243',
    title: 'Mechanics of Solids',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 43,
    code: 'ΜΕ 244',
    title: 'Mechanics of Solids Sessional',
    credits: 0.75,
    contactHours: 1.5,
  }, //
  {
    sl: 44,
    code: 'ΜΕ 245',
    title: 'Engineering Mechanics and Theory of Mechanics',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 45,
    code: 'ΜΕ 265',
    title: 'Thermodynamics and Heat Transfer',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 46,
    code: 'ΜΕ 266',
    title: 'Thermodynamics and Heat Transfer Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 47,
    code: 'ΜΕ 323',
    title: 'Fluid Mechanics & Machinery',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 48,
    code: 'ΜΕ 324',
    title: 'Fluid Mechanics & Machinery Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 49,
    code: 'MME 295',
    title: 'Engineering Materials I',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 50,
    code: 'MME 296',
    title: 'Engineering Materials Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 51,
    code: 'MME 297',
    title: 'Engineering Materials II',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 52,
    code: 'HUM 101',
    title: 'English Language Practice',
    credits: 2.0,
    contactHours: 2.0,
  }, //
  {
    sl: 53,
    code: 'HUM 103',
    title: 'Sociology',
    credits: 2.0,
    contactHours: 2.0,
  }, //
  {
    sl: 54,
    code: 'CHM 111',
    title: 'Chemistry-I',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 55,
    code: 'CHM 112',
    title: 'Inorganic Quantitative Analysis Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 56,
    code: 'CHM 113',
    title: 'Chemistry-II (Chemistry of Materials)',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 57,
    code: 'PHY 113',
    title: 'Physics-I (Waves and Oscillations, Physical Optics and Mechanics)',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 58,
    code: 'PHY 115',
    title:
      'Physics-II (Structure of Matter, Electricity, Magnetism and Modern Physics)',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 59,
    code: 'PHY 116',
    title: 'Physics Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 60,
    code: 'MTH 121',
    title: 'Differential and Integral Calculus',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 61,
    code: 'MTH 123',
    title: 'Vector, Matrix and Solid Geometry',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 62,
    code: 'MTH 221',
    title: 'Differential Equation, Vector Calculus and Laplace Transformation',
    credits: 3.0,
    contactHours: 3.0,
  }, //
];

export const ipeGeneralEducationCourses: Course[] = [
  {
    sl: 1,
    code: 'EEE 167',
    title: 'Basic Electrical & Electronic Circuit',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 2,
    code: 'EEE 168',
    title: 'Basic Electrical & Electronic Circuit Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 3,
    code: 'EEE 271',
    title: 'Electrical Machines and Electronics',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 4,
    code: 'EEE 272',
    title: 'Electrical Machines and Electronics Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
  {
    sl: 5,
    code: 'CSE 295',
    title: 'Computer Programming Techniques',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 6,
    code: 'CSE 296',
    title: 'Computer Programming Techniques Sessional',
    credits: 1.5,
    contactHours: 3.0,
  }, //
];

export const ipeProjectCourses: Course[] = [
  {
    sl: 1,
    code: 'IPE 400',
    title: 'Project and Thesis Sessional',
    credits: 6.0,
    contactHours: 12.0,
  }, //
];

// ** CORRECTED ELECTIVE COURSES STRUCTURE **
export const ipeElectiveCourses: Course[] = [
  {
    sl: 1,
    code: 'IPE 415',
    title: 'CNG Machine Tools',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 2,
    code: 'IPE 419',
    title: 'Computer Integrated Manufacturing',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 3,
    code: 'IPE 421',
    title: 'Modern Machinery and Machining Process',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 4,
    code: 'IPE 425',
    title: 'Micro-Manufacturing',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 5,
    code: 'IPE 427',
    title: 'Marketing Management',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 6,
    code: 'IPE 429',
    title: 'Technology Management',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 7,
    code: 'IPE 445',
    title: 'Entrepreneurship Development and Micro Industries',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 8,
    code: 'IPE 453',
    title: 'Information Technology in Business',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 9,
    code: 'IPE 461',
    title: 'Organizational Behavior',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 10,
    code: 'IPE 463',
    title: 'Total Quality Management',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 11,
    code: 'IPE 465',
    title: 'Intelligent Manufacturing',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 12,
    code: 'IPE 467',
    title: 'Energy Management',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 13,
    code: 'IPE 447',
    title: 'Robotics',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 14,
    code: 'ΜΕ 461',
    title: 'Control Engineering',
    credits: 3.0,
    contactHours: 3.0,
  }, //
  {
    sl: 15,
    code: 'CSE 443',
    title: 'Digital Logic and Micro-Processing Technology',
    credits: 3.0,
    contactHours: 3.0,
  }, //
];

export const ipeCoursePrefixes: CoursePrefix[] = [
  { symbol: 'IPE', name: 'Industrial and Production Engineering' },
  { symbol: 'SHOP', name: 'Workshop' },
  { symbol: 'ΜΕ', name: 'Mechanical Engineering' },
  { symbol: 'MME', name: 'Materials and Metallurgical Engineering' },
  { symbol: 'HUM', name: 'Humanities' },
  { symbol: 'CHM', name: 'Chemistry' },
  { symbol: 'PHY', name: 'Physics' },
  { symbol: 'MTH', name: 'Mathematics' },
  { symbol: 'EEE', name: 'Electrical and Electronic Engineering' },
  { symbol: 'CSE', name: 'Computer Science and Engineering' },
];

export const ipeCurriculumSummary: CurriculumSummary[] = [
  { category: 'Core Courses', credits: 139.25 },
  { category: 'General Education Courses', credits: 16.5 },
  { category: 'Project/Thesis', credits: 6.0 },
];

export const ipeSemesterData: Semester[] = [
  // This section contains the full semester-by-semester breakdown and remains unchanged from the previous version.
  // It is included here for completeness.
  {
    year: 1,
    semester: 1,
    title: 'Year-1, Semester-1',
    courses: [
      {
        slNo: 1,
        courseCode: 'IPE 101',
        courseTitle: 'Introduction to Industrial & Production Engineering',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 2,
        courseCode: 'PHY 113',
        courseTitle:
          'Physics-I (Waves and Oscillations, Physical Optics and Mechanics)',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'CHM 111',
        courseTitle: 'Chemistry-I',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'MTH 121',
        courseTitle: 'Differential and Integral Calculus',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 5,
        courseCode: 'ΜΕ 160',
        courseTitle: 'Mechanical Engineering Drawing-I Sessional',
        credit: 1.5,
        contactHours: 3,
      },
      {
        slNo: 6,
        courseCode: 'SHOP 170',
        courseTitle: 'Machine Shop Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
    ],
    total: 14.25,
    contactHours: 16.5,
  },
  {
    year: 1,
    semester: 2,
    title: 'Year-1, Semester-2',
    courses: [
      {
        slNo: 1,
        courseCode: 'HUM 103',
        courseTitle: 'Sociology',
        credit: 2.0,
        contactHours: 2,
      },
      {
        slNo: 2,
        courseCode: 'IPE 105',
        courseTitle: 'Principles of Cost and Management Accounting',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'MTH 123',
        courseTitle: 'Vector, Matrix and Solid Geometry',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'HUM 101',
        courseTitle: 'English Language Practice',
        credit: 2.0,
        contactHours: 2,
      },
      {
        slNo: 5,
        courseCode: 'CHM 112',
        courseTitle: 'Inorganic Quantitative Analysis Sessional',
        credit: 1.5,
        contactHours: 3,
      },
      {
        slNo: 6,
        courseCode: 'PHY 116',
        courseTitle: 'Physics Sessional',
        credit: 1.5,
        contactHours: 3,
      },
    ],
    total: 13.0,
    contactHours: 16.0,
  },
  {
    year: 1,
    semester: 3,
    title: 'Year-1, Semester-3',
    courses: [
      {
        slNo: 1,
        courseCode: 'PHY 115',
        courseTitle:
          'Physics-II (Structure of Matter, Electricity, Magnetism and Modern Physics)',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 2,
        courseCode: 'CHM 113',
        courseTitle: 'Chemistry-II (Chemistry of Materials)',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'EEE 167',
        courseTitle: 'Basic Electrical & Electronic Circuit',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'IPE 104',
        courseTitle: 'Engineering Graphics Sessional',
        credit: 1.5,
        contactHours: 3,
      },
      {
        slNo: 5,
        courseCode: 'EEE 168',
        courseTitle: 'Basic Electrical & Electronic Circuit Sessional',
        credit: 1.5,
        contactHours: 3,
      },
      {
        slNo: 6,
        courseCode: 'SHOP 160',
        courseTitle: 'Foundry and Welding Shop Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
    ],
    total: 12.75,
    contactHours: 16.5,
  },
  {
    year: 2,
    semester: 1,
    title: 'Year-2, Semester-1',
    courses: [
      {
        slNo: 1,
        courseCode: 'MTH 221',
        courseTitle:
          'Differential Equation, Vector Calculus and Laplace Transformation',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 2,
        courseCode: 'EEE 271',
        courseTitle: 'Electrical Machines and Electronics',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'MME 295',
        courseTitle: 'Engineering Materials I',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'CSE 295',
        courseTitle: 'Computer Programming Techniques',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 5,
        courseCode: 'EEE 272',
        courseTitle: 'Electrical Machines and Electronics Sessional',
        credit: 1.5,
        contactHours: 3,
      },
      {
        slNo: 6,
        courseCode: 'MME 296',
        courseTitle: 'Engineering Materials Sessional',
        credit: 1.5,
        contactHours: 3,
      },
      {
        slNo: 7,
        courseCode: 'CSE 296',
        courseTitle: 'Computer Programming Techniques Sessional',
        credit: 1.5,
        contactHours: 3,
      },
    ],
    total: 16.5,
    contactHours: 21.0,
  },
  {
    year: 2,
    semester: 2,
    title: 'Year-2, Semester-2',
    courses: [
      {
        slNo: 1,
        courseCode: 'ΜΕ 245',
        courseTitle: 'Engineering Mechanics and Theory of Machines',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 2,
        courseCode: 'IPE 205',
        courseTitle: 'Manufacturing Process I',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'IPE 207',
        courseTitle: 'Probability and Statistics',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'IPE 204',
        courseTitle: 'Engineering Graphics and Introduction to CAD Sessional',
        credit: 1.5,
        contactHours: 3,
      },
      {
        slNo: 5,
        courseCode: 'IPE 206',
        courseTitle: 'Manufacturing Process I Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
    ],
    total: 11.25,
    contactHours: 13.5,
  },
  {
    year: 2,
    semester: 3,
    title: 'Year-2, Semester-3',
    courses: [
      {
        slNo: 1,
        courseCode: 'IPE 209',
        courseTitle: 'Engineering Economy',
        credit: 2.0,
        contactHours: 2,
      },
      {
        slNo: 2,
        courseCode: 'ΜΕ 243',
        courseTitle: 'Mechanics of Solids',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'ΜΕ 265',
        courseTitle: 'Thermodynamics and Heat Transfer',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'MME 297',
        courseTitle: 'Engineering Materials II',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 5,
        courseCode: 'ΜΕ 244',
        courseTitle: 'Mechanics of Solids Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
      {
        slNo: 6,
        courseCode: 'ΜΕ 266',
        courseTitle: 'Thermodynamics and Heat Transfer Sessional',
        credit: 1.5,
        contactHours: 3,
      },
    ],
    total: 13.25,
    contactHours: 15.5,
  },
  {
    year: 3,
    semester: 1,
    title: 'Year-3, Semester-1',
    courses: [
      {
        slNo: 1,
        courseCode: 'ΜΕ 323',
        courseTitle: 'Fluid Mechanics & Machinery',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 2,
        courseCode: 'IPE 301',
        courseTitle: 'Measurement, Instrumentation and Control',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'IPE 305',
        courseTitle: 'Manufacturing Process-II',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'ΜΕ 324',
        courseTitle: 'Fluid Mechanics & Machinery Sessional',
        credit: 1.5,
        contactHours: 3,
      },
      {
        slNo: 5,
        courseCode: 'IPE 302',
        courseTitle: 'Measurement, Instrumentation and Control Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
      {
        slNo: 6,
        courseCode: 'IPE 306',
        courseTitle: 'Manufacturing Process-II Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
    ],
    total: 12.0,
    contactHours: 15.0,
  },
  {
    year: 3,
    semester: 2,
    title: 'Year-3, Semester-2',
    courses: [
      {
        slNo: 1,
        courseCode: 'IPE 307',
        courseTitle: 'Operations Research',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 2,
        courseCode: 'IPE 303',
        courseTitle: 'Product Design I and Development',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'IPE 311',
        courseTitle: 'Materials Handling and Maintenance Management',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'IPE 321',
        courseTitle: 'Modern Machinery and Machining Processes',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 5,
        courseCode: 'IPE 304',
        courseTitle: 'Product Design I and Development Sessional',
        credit: 1.5,
        contactHours: 3,
      },
      {
        slNo: 6,
        courseCode: 'IPE 312',
        courseTitle: 'Material Handling and Maintenance Management Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
    ],
    total: 14.25,
    contactHours: 16.5,
  },
  {
    year: 3,
    semester: 3,
    title: 'Year-3, Semester-3',
    courses: [
      {
        slNo: 1,
        courseCode: 'IPE 315',
        courseTitle: 'Operations & Project Management',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 2,
        courseCode: 'IPE 319',
        courseTitle: 'Quality Management',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'IPE 329',
        courseTitle: 'Numerical Analysis',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'IPE 320',
        courseTitle: 'Quality Management Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
      {
        slNo: 5,
        courseCode: 'IPE 322',
        courseTitle: 'Business Communication Seminar-1 Sessional',
        credit: 1.5,
        contactHours: 3.0,
      },
    ],
    total: 11.25,
    contactHours: 13.5,
  },
  {
    year: 4,
    semester: 1,
    title: 'Year-4, Semester-1',
    courses: [
      {
        slNo: 1,
        courseCode: 'IPE 417',
        courseTitle: 'Product Design II and Development',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 2,
        courseCode: 'IPE 403',
        courseTitle: 'Production Planning & Control',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'IPE 407',
        courseTitle: 'Ergonomics and Safety Management',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'IPE 427',
        courseTitle: 'Marketing Management',
        credit: 2.0,
        contactHours: 2,
      },
      {
        slNo: 5,
        courseCode: 'IPE 408',
        courseTitle: 'Ergonomics and Safety Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
      {
        slNo: 6,
        courseCode: 'IPE 418',
        courseTitle: 'Product Design II and Development Sessional',
        credit: 1.5,
        contactHours: 3,
      },
      {
        slNo: 7,
        courseCode: 'IPE 470',
        courseTitle: 'Industrial Simulation Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
    ],
    total: 14.0,
    contactHours: 17.0,
  },
  {
    year: 4,
    semester: 2,
    title: 'Year-4, Semester-2',
    courses: [
      {
        slNo: 1,
        courseCode: 'IPE 451',
        courseTitle: 'Supply Chain Management',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 2,
        courseCode: 'IPE 423',
        courseTitle: 'Environmental & Pollution Control',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'IPE 401',
        courseTitle: 'Machine Tools',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'IPE 404',
        courseTitle: 'Industrial Practice Sessional',
        credit: 3.0,
        contactHours: 0,
      },
      {
        slNo: 5,
        courseCode: 'IPE 400',
        courseTitle: 'Project and Thesis Sessional',
        credit: 3.0,
        contactHours: 6,
      },
      {
        slNo: 6,
        courseCode: 'IPE 402',
        courseTitle: 'Machine Tools Sessional',
        credit: 1.5,
        contactHours: 3,
      },
    ],
    total: 16.5,
    contactHours: 18,
  },
  {
    year: 4,
    semester: 3,
    title: 'Year-4, Semester-3',
    courses: [
      {
        slNo: 1,
        courseCode: 'IPE 411',
        courseTitle: 'Industrial and Business Management',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 2,
        courseCode: 'IPE 419',
        courseTitle: 'Computer Integrated Manufacturing',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 3,
        courseCode: 'IPE 409',
        courseTitle: 'CAD/CAM',
        credit: 3.0,
        contactHours: 3,
      },
      {
        slNo: 4,
        courseCode: 'IPE 400',
        courseTitle: 'Project and Thesis Sessional',
        credit: 3.0,
        contactHours: 6,
      },
      {
        slNo: 5,
        courseCode: 'IPE 410',
        courseTitle: 'CAD/CAM Sessional',
        credit: 0.75,
        contactHours: 1.5,
      },
    ],
    total: 12.75,
    contactHours: 16.5,
  },
];
