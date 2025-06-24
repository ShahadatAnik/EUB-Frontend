import {
  ipeCoreCoursesData,
  ipeCoursePrefixes,
  ipeCurriculumSummary,
  ipeElectiveCourses,
  ipeEveningProgramDetails,
  ipeGeneralEducationCourses,
  ipePerformanceEvaluation,
  ipeProjectCourses,
  ipeRegularProgramDetails,
  ipeSemesterData,
  ipeSemesterInfo,
} from './curriculum-data';

// Assuming the data is in this file

export const getCurriculumData = (type: 'regular' | 'evening') => {
  // NOTE: The provided PDF does not contain a separate semester-by-semester course plan for the evening/diploma program.
  // It returns the regular semester data for both and relies on the 'programDetails' object to differentiate.
  if (type === 'evening') {
    return {
      semesterInfo: ipeSemesterInfo,
      programDetails: ipeEveningProgramDetails,
      performanceEvaluation: ipePerformanceEvaluation,
      coreCoursesData: ipeCoreCoursesData,
      generalEducationCourses: ipeGeneralEducationCourses,
      projectCourses: ipeProjectCourses,
      electiveCourses: ipeElectiveCourses,
      coursePrefixes: ipeCoursePrefixes,
      curriculumSummary: ipeCurriculumSummary,
      semesterData: ipeSemesterData,
    };
  }

  return {
    semesterInfo: ipeSemesterInfo,
    programDetails: ipeRegularProgramDetails,
    performanceEvaluation: ipePerformanceEvaluation,
    coreCoursesData: ipeCoreCoursesData,
    generalEducationCourses: ipeGeneralEducationCourses,
    projectCourses: ipeProjectCourses,
    electiveCourses: ipeElectiveCourses,
    coursePrefixes: ipeCoursePrefixes,
    curriculumSummary: ipeCurriculumSummary,
    semesterData: ipeSemesterData,
  };
};
