"use server";

import { secret } from "@/config/secret";
import { IDataTable } from "@/types";
//* Regular
export const getRegularClassRoutine = async (
	department: string
): Promise<IDataTable[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/info?department=${department}`
	);
	return await res.json();
};
export const getRegularExamSchedule = async (
	department: string
): Promise<IDataTable[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/info?department=${department}`
	);
	return await res.json();
};
//* Evening
export const getEveningClassRoutine = async (
	department: string
): Promise<IDataTable[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/info?department=${department}`
	);
	return await res.json();
};
export const getEveningExamSchedule = async (
	department: string
): Promise<IDataTable[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/info?department=${department}`
	);
	return await res.json();
};
