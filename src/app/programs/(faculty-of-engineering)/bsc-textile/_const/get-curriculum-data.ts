// Regular program data
import {
  semesterInfo as regularSemesterInfo,
  programDetails as regularProgramDetails,
  performanceEvaluation as regularPerformanceEvaluation,
  textileEngineeringCourses as regularTextileEngineeringCourses,
  nonDepartmentalCourses as regularNonDepartmentalCourses,
  electiveCourses as regularElectiveCourses,
  projectCourses as regularProjectCourses,
  coursePrefixes as regularCoursePrefixes,
  curriculumSummary as regularCurriculumSummary,
  semesterData as regularSemesterData,
} from './curriculum-data';

// Evening program data
import {
  eveningSemesterInfo,
  eveningProgramDetails,
  eveningPerformanceEvaluation,
  eveningTextileEngineeringCourses,
  eveningNonDepartmentalCourses,
  eveningElectiveCourses,
  eveningProjectCourses,
  eveningCoursePrefixes,
  eveningCurriculumSummary,
  eveningSemesterData,
} from './evening-curriculum-data';

export const getCurriculumData = (type: 'regular' | 'evening') => {
  if (type === 'evening') {
    return {
      semesterInfo: eveningSemesterInfo,
      programDetails: eveningProgramDetails,
      performanceEvaluation: eveningPerformanceEvaluation,
      textileEngineeringCourses: eveningTextileEngineeringCourses,
      nonDepartmentalCourses: eveningNonDepartmentalCourses,
      electiveCourses: eveningElectiveCourses,
      projectCourses: eveningProjectCourses,
      coursePrefixes: eveningCoursePrefixes,
      curriculumSummary: eveningCurriculumSummary,
      semesterData: eveningSemesterData,
    };
  }

  return {
    semesterInfo: regularSemesterInfo,
    programDetails: regularProgramDetails,
    performanceEvaluation: regularPerformanceEvaluation,
    textileEngineeringCourses: regularTextileEngineeringCourses,
    nonDepartmentalCourses: regularNonDepartmentalCourses,
    electiveCourses: regularElectiveCourses,
    projectCourses: regularProjectCourses,
    coursePrefixes: regularCoursePrefixes,
    curriculumSummary: regularCurriculumSummary,
    semesterData: regularSemesterData,
  };
};
