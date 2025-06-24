import {
  eeeBasicScienceCourses,
  eeeCoreCoursesData,
  eeeCoursePrefixes,
  eeeCurriculumSummary,
  eeeElectiveCourses,
  eeeElectiveCoursesIPE,
  eeeEveningProgramDetails,
  eeeEveningSemesterData,
  eeeGeneralEducationCourses,
  eeeInterDisciplinaryCourses,
  eeePerformanceEvaluation,
  eeeProjectCourses,
  eeeRegularProgramDetails,
  eeeRegularSemesterData,
  eeeSemesterInfo,
} from './curriculum-data';

export const getCurriculumData = (type: 'regular' | 'evening') => {
  if (type === 'evening') {
    return {
      semesterInfo: eeeSemesterInfo,
      programDetails: eeeEveningProgramDetails,
      performanceEvaluation: eeePerformanceEvaluation,
      coreCoursesData: eeeCoreCoursesData,
      generalEducationCourses: eeeGeneralEducationCourses,
      basicScienceCourses: eeeBasicScienceCourses,
      interDisciplinaryCourses: eeeInterDisciplinaryCourses,
      electiveCourses: eeeElectiveCourses,
      electiveCoursesIPE: eeeElectiveCoursesIPE,
      projectCourses: eeeProjectCourses,
      coursePrefixes: eeeCoursePrefixes,
      curriculumSummary: eeeCurriculumSummary,
      semesterData: eeeEveningSemesterData,
    };
  }

  return {
    semesterInfo: eeeSemesterInfo,
    programDetails: eeeRegularProgramDetails,
    performanceEvaluation: eeePerformanceEvaluation,
    coreCoursesData: eeeCoreCoursesData,
    generalEducationCourses: eeeGeneralEducationCourses,
    basicScienceCourses: eeeBasicScienceCourses,
    interDisciplinaryCourses: eeeInterDisciplinaryCourses,
    electiveCourses: eeeElectiveCourses,
    electiveCoursesIPE: eeeElectiveCoursesIPE,
    projectCourses: eeeProjectCourses,
    coursePrefixes: eeeCoursePrefixes,
    curriculumSummary: eeeCurriculumSummary,
    semesterData: eeeRegularSemesterData,
  };
};
