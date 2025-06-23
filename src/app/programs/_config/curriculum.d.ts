export interface Course {
  sl: number;
  code: string;
  title: string;
  credits: number;
  contactHours?: number;
}

export interface ElectiveCourse {
  sl: number;
  codes: string[];
  titles: string[];
  credits: number;
}

export interface ElectiveCourseGroup {
  title: string;
  courses: Course[];
}

export interface SemesterCourse {
  slNo: number;
  courseCode: string;
  courseTitle: string;
  credit: number;
  contactHours?: number;
}

export interface Semester {
  year: number;
  semester: number;
  title: string;
  courses: SemesterCourse[];
  total: number;
  contactHours?: number;
  isWaived?: boolean;
  isExempted?: boolean;
}

export interface CoursePrefix {
  symbol: string;
  name: string;
}

export interface CurriculumSummary {
  category: string;
  credits: number;
  sessional_courses?: number;
  theory_courses?: number;
  percentage?: string;
}

export interface PerformanceEvaluation {
  category: string;
  criteria: Array<{
    item: string;
    percentage: string;
  }>;
}

export interface ProgramDetails {
  degreeName: string;
  duration: {
    years: number | string;
    semesters: number | string;
  };
  creditHours: number | string;
  courseLoad: string;
  courseLoadDetails?: string;
  minimumGPA: number;
  backgroundStudents?: string;
  waiverInfo?: string;
  additionalInfo?: string;
}

export type ProgramType = 'regular' | 'evening';
export type DepartmentType = 'textile' | 'eee';
export type StudentBackground = 'hsc' | 'diploma';
