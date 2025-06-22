import {
	getCertificateTuitionFees,
	getGraduateTuitionFees,
	getUndergraduateTuitionFees,
} from './get-tuition-fees';

import {
	getAuthoritiesAcademicCouncil,
	getAuthoritiesChairman,
	getAuthoritiesChancellor,
	getAuthoritiesDean,
	getAuthoritiesDirectorCoordination,
	getAuthoritiesProVC,
	getAuthoritiesRegistrar,
	getAuthoritiesSyndicate,
	getAuthoritiesTreasurer,
	getAuthoritiesVC,
} from './get-authorities';
import { getClubs } from './get-clubs';
import {
	getDepartmentLatestNews,
	getDepartmentNews,
	getDepartmentTeachers,
	getEveningClassRoutine,
	getEveningExamSchedule,
	getRegularClassRoutine,
	getRegularExamSchedule,
} from './get-courses';
import { getEventCalender } from './get-event-calender';
import { getExaminationGuidelines } from './get-examination-guidelines';
import { getFaculties } from './get-faculties';
import {
	getFinancialInformation,
	getGraduateFinancialInformation,
	getUndergraduateFinancialInformation,
} from './get-financial-information';
import { getInformationProvisionalCertificates } from './get-information-provisional-certificates';
import { getJobCirculars } from './get-job-circulars';
import { getNewsById, getNewsEvents } from './get-news-events';
import { getNotices } from './get-notices';
import { getOfficeEntry, getOffices } from './get-offices';
import { getPrograms } from './get-programs';

import { getAcademicCalender } from './get-academic-calendar';
import { getAcademicInformationPolicies } from './get-academic-information-policies';
import { getAboutUs } from './get-courses';
import { getOffers } from './get-offers';
import { getPolicy } from './get-policy';
import { getPublications } from './get-publications';
import { getTenders } from './get-tenders';

export {
	getAboutUs,
	getAcademicCalender,
	getAcademicInformationPolicies,
	getAuthoritiesAcademicCouncil,
	getAuthoritiesChairman,
	getAuthoritiesChancellor,
	getAuthoritiesDean,
	getAuthoritiesDirectorCoordination,
	getAuthoritiesProVC,
	getAuthoritiesRegistrar,
	getAuthoritiesSyndicate,
	getAuthoritiesTreasurer,
	getAuthoritiesVC,
	getCertificateTuitionFees,
	getClubs,
	getDepartmentLatestNews,
	getDepartmentNews,
	getDepartmentTeachers,
	getEveningClassRoutine,
	getEveningExamSchedule,
	getEventCalender,
	getExaminationGuidelines,
	getFaculties,
	getFinancialInformation,
	getGraduateFinancialInformation,
	getGraduateTuitionFees,
	getInformationProvisionalCertificates,
	getJobCirculars,
	getNewsById,
	getNewsEvents,
	getNotices,
	getOffers,
	getOfficeEntry,
	getOffices,
	getPolicy,
	getPrograms,
	getPublications,
	getRegularClassRoutine,
	getRegularExamSchedule,
	getTenders,
	getUndergraduateFinancialInformation,
	getUndergraduateTuitionFees,
};

export * from './get-hero';
