'use server';

import {
	IDataTable,
	IDepartmentTeacher,
	INewsPortal,
	IPagination,
} from '@/types';
import fetchApi from '@/utils/fetchApi';

type getAllNewsEventsProps = {
	data: INewsPortal[];
	pagination: IPagination;
};

//* Regular
export const getRegularClassRoutine = async (
	department: string
): Promise<IDataTable[]> =>
	fetchApi(
		`/portfolio/routine?portfolio_department=${department}&program=regular&type=class_routine`
	);
export const getRegularCourseOffer = async (
	department: string
): Promise<IDataTable[]> =>
	fetchApi(
		`/portfolio/routine?portfolio_department=${department}&program=regular&type=course_offer`
	);

export const getRegularExamSchedule = async (
	department: string
): Promise<IDataTable[]> =>
	fetchApi(
		`/portfolio/routine?portfolio_department=${department}&program=regular&type=exam_schedule`
	);

//* Evening
export const getEveningClassRoutine = async (
	department: string
): Promise<IDataTable[]> =>
	fetchApi(
		`/portfolio/routine?portfolio_department=${department}&program=evening&type=class_routine`
	);
export const getEveningCourseOffer = async (
	department: string
): Promise<IDataTable[]> =>
	fetchApi(
		`/portfolio/routine?portfolio_department=${department}&program=evening&type=course_offer`
	);

export const getEveningExamSchedule = async (
	department: string
): Promise<IDataTable[]> =>
	fetchApi(
		`/portfolio/routine?portfolio_department=${department}&program=evening&type=exam_schedule`
	);

export const getDepartmentTeachers = async (
	department: string
): Promise<IDepartmentTeacher[]> =>
	fetchApi(
		`/portfolio/department-teachers?portfolio_department=${department}&is_resign=true`
	);

export const getDepartmentNews = async (
	department?: string,
	latest: boolean = false
): Promise<getAllNewsEventsProps> =>
	fetchApi(
		department
			? `/portfolio/news?department_name=${department}&latest=${latest}`
			: `/portfolio/news?latest=${latest}`
	);

export const getDepartmentLatestNews = async (
	department?: string
): Promise<INewsPortal[]> =>
	fetchApi(
		department
			? `/portfolio/news-latest?department_name=${department}`
			: `/portfolio/news-latest`
	);

export const getAboutUs = async (department: string): Promise<IDataTable[]> =>
	fetchApi(
		`/portfolio/routine?type=about_us&portfolio_department=${department}`
	);
