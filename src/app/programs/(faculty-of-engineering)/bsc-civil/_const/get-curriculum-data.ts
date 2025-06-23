import {
  civilBasicScienceCourses,
  civilCoreCoursesData,
  civilCoursePrefixes,
  civilCurriculumSummary,
  civilElectiveCourses,
  civilEveningProgramDetails,
  civilEveningSemesterData,
  civilGeneralEducationCourses,
  civilOtherEngineeringCourses,
  civilPerformanceEvaluation,
  civilProjectCourses,
  civilRegularProgramDetails,
  civilRegularSemesterData,
  civilSemesterInfo,
} from './curriculum-data';

// Assuming the data is in this file

export const getCurriculumData = (type: 'regular' | 'evening') => {
  if (type === 'evening') {
    return {
      semesterInfo: civilSemesterInfo,
      programDetails: civilEveningProgramDetails,
      performanceEvaluation: civilPerformanceEvaluation,
      coreCoursesData: civilCoreCoursesData,
      generalEducationCourses: civilGeneralEducationCourses,
      basicScienceCourses: civilBasicScienceCourses,
      interDisciplinaryCourses: civilOtherEngineeringCourses,
      electiveCourses: civilElectiveCourses,
      projectCourses: civilProjectCourses,
      coursePrefixes: civilCoursePrefixes,
      curriculumSummary: civilCurriculumSummary,
      semesterData: civilEveningSemesterData,
    };
  }

  return {
    semesterInfo: civilSemesterInfo,
    programDetails: civilRegularProgramDetails,
    performanceEvaluation: civilPerformanceEvaluation,
    coreCoursesData: civilCoreCoursesData,
    generalEducationCourses: civilGeneralEducationCourses,
    basicScienceCourses: civilBasicScienceCourses,
    interDisciplinaryCourses: civilOtherEngineeringCourses,
    electiveCourses: civilElectiveCourses,
    projectCourses: civilProjectCourses,
    coursePrefixes: civilCoursePrefixes,
    curriculumSummary: civilCurriculumSummary,
    semesterData: civilRegularSemesterData,
  };
};
