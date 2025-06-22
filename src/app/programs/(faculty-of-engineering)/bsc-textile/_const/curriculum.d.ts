export interface Course {
  sl: number;
  code: string;
  title: string;
  credits: number;
}

export interface ElectiveCourse {
  sl: number;
  codes: string[];
  titles: string[];
  credits: number;
}

export interface SemesterCourse {
  slNo: number;
  courseCode: string;
  courseTitle: string;
  credit: number;
}

export interface Semester {
  year: number;
  semester: number;
  title: string;
  courses: SemesterCourse[];
  total: number;
  isWaived?: boolean;
}

export interface CoursePrefix {
  symbol: string;
  name: string;
}

export interface CurriculumSummary {
  category: string;
  credits: number;
  percentage: string;
}

export interface PerformanceEvaluation {
  category: string;
  criteria: Array<{
    item: string;
    percentage: string;
  }>;
}

export interface ProgramDetails {
  duration: {
    years: number | string;
    semesters: number | string;
  };
  creditHours: number | string;
  courseLoad: string;
  courseLoadDetails: string;
  minimumGPA: number;
  backgroundStudents?: string;
  waiverInfo?: string;
}

export type ProgramType = 'regular' | 'evening';
