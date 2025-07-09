import {
  meBasicScienceCourses,
  meCoreCoursesData,
  meCoursePrefixes,
  meCurriculumSummary,
  meElectiveCourses,
  meElectiveCoursesIPE,
  meEveningProgramDetails,
  // meEveningSemesterData,
  meGeneralEducationCourses,
  meInterDisciplinaryCourses,
  mePerformanceEvaluation,
  meProjectCourses,
  meRegularProgramDetails,
  meSemesterData,
  // meRegularSemesterData,
  meSemesterInfo,
} from './curriculum-data';

export const getCurriculumData = (type: 'regular' | 'evening') => {
  if (type === 'evening') {
    return {
      semesterInfo: meSemesterInfo,
      programDetails: meEveningProgramDetails,
      performanceEvaluation: mePerformanceEvaluation,
      coreCoursesData: meCoreCoursesData,
      generalEducationCourses: meGeneralEducationCourses,
      basicScienceCourses: meBasicScienceCourses,
      interDisciplinaryCourses: meInterDisciplinaryCourses,
      electiveCourses: meElectiveCourses,
      electiveCoursesIPE: meElectiveCoursesIPE,
      projectCourses: meProjectCourses,
      coursePrefixes: meCoursePrefixes,
      curriculumSummary: meCurriculumSummary,
      semesterData: meSemesterData,
    };
  }

  return {
    semesterInfo: meSemesterInfo,
    programDetails: meRegularProgramDetails,
    performanceEvaluation: mePerformanceEvaluation,
    coreCoursesData: meCoreCoursesData,
    generalEducationCourses: meGeneralEducationCourses,
    basicScienceCourses: meBasicScienceCourses,
    interDisciplinaryCourses: meInterDisciplinaryCourses,
    electiveCourses: meElectiveCourses,
    electiveCoursesIPE: meElectiveCoursesIPE,
    projectCourses: meProjectCourses,
    coursePrefixes: meCoursePrefixes,
    curriculumSummary: meCurriculumSummary,
    semesterData: meSemesterData,
  };
};
