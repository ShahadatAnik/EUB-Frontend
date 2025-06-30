import {
  cseBasicScienceCourses,
  cseCoreCoursesData,
  cseCoursePrefixes,
  cseCurriculumSummary,
  cseElectiveCourses,
  cseEveningProgramDetails,
  cseEveningSemesterData,
  cseFoundationCoursesData,
  cseGeneralEducationCourses,
  cseIndustrialCourses,
  cseOtherEngineeringCourses,
  csePerformanceEvaluation,
  cseProjectCourses,
  cseRegularProgramDetails,
  cseRegularSemesterData,
  cseSemesterInfo,
} from './curriculum-data';

// Assuming the data is in this file

export const getCurriculumData = (type: 'regular' | 'evening') => {
  if (type === 'evening') {
    return {
      semesterInfo: cseSemesterInfo,
      programDetails: cseEveningProgramDetails,
      performanceEvaluation: csePerformanceEvaluation,
      coreCoursesData: cseCoreCoursesData,
      generalEducationCourses: cseGeneralEducationCourses,
      basicScienceCourses: cseBasicScienceCourses,
      interDisciplinaryCourses: cseOtherEngineeringCourses,
      electiveCourses: cseElectiveCourses,
      projectCourses: cseProjectCourses,
      coursePrefixes: cseCoursePrefixes,
      curriculumSummary: cseCurriculumSummary,
      semesterData: cseEveningSemesterData,
      foundationCourses: cseFoundationCoursesData,
      industrialCourses: cseIndustrialCourses,
    };
  }

  return {
    semesterInfo: cseSemesterInfo,
    programDetails: cseRegularProgramDetails,
    performanceEvaluation: csePerformanceEvaluation,
    coreCoursesData: cseCoreCoursesData,
    generalEducationCourses: cseGeneralEducationCourses,
    basicScienceCourses: cseBasicScienceCourses,
    interDisciplinaryCourses: cseOtherEngineeringCourses,
    electiveCourses: cseElectiveCourses,
    projectCourses: cseProjectCourses,
    coursePrefixes: cseCoursePrefixes,
    curriculumSummary: cseCurriculumSummary,
    semesterData: cseRegularSemesterData,
    foundationCourses: cseFoundationCoursesData,
    industrialCourses: cseIndustrialCourses,
  };
};
