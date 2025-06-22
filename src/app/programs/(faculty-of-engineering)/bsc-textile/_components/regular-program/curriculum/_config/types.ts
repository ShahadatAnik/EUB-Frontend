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
