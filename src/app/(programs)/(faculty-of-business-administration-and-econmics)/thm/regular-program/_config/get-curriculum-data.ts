import {
  bthmCoreCoursesData,
  bthmCoursePrefixes,
  bthmCurriculumSummary,
  bthmGeneralEducationCourses,
  bthmInternshipCourses,
  bthmPerformanceEvaluation,
  bthmPrerequisiteCourses,
  bthmProgramDetails,
  bthmSemesterData,
  bthmSpecializationCourses,
} from './data';

// Assuming the data is in this file
export const getBthmCurriculumData = () => {
  return {
    programDetails: bthmProgramDetails,
    performanceEvaluation: bthmPerformanceEvaluation,
    generalEducationCourses: bthmGeneralEducationCourses,
    coreCoursesData: bthmCoreCoursesData,
    specializationCourses: bthmSpecializationCourses,
    internshipCourses: bthmInternshipCourses,
    prerequisiteCourses: bthmPrerequisiteCourses,
    coursePrefixes: bthmCoursePrefixes,
    curriculumSummary: bthmCurriculumSummary,
    semesterData: bthmSemesterData,
  };
};
