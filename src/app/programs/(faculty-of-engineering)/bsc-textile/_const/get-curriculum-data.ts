// Regular program data
import {
	coursePrefixes as regularCoursePrefixes,
	curriculumSummary as regularCurriculumSummary,
	electiveCourses as regularElectiveCourses,
	nonDepartmentalCourses as regularNonDepartmentalCourses,
	performanceEvaluation as regularPerformanceEvaluation,
	programDetails as regularProgramDetails,
	projectCourses as regularProjectCourses,
	semesterData as regularSemesterData,
	semesterInfo as regularSemesterInfo,
	textileEngineeringCourses as regularTextileEngineeringCourses,
} from './curriculum-data';
// Evening program data
import {
	eveningCoursePrefixes,
	eveningCurriculumSummary,
	eveningElectiveCourses,
	eveningNonDepartmentalCourses,
	eveningPerformanceEvaluation,
	eveningProgramDetails,
	eveningProjectCourses,
	eveningSemesterData,
	eveningSemesterInfo,
	eveningTextileEngineeringCourses,
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
