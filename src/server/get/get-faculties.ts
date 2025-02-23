"use server";

import { secret } from "@/config/secret";
import { IClubAndSociety, IFacultyDetails } from "@/types";

export const getFaculties = async (): Promise<IClubAndSociety[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/other/portfolio/faculty/value/label?page='clubs_and_society'`,
		{ cache: "no-store" }
	);
	return await res.json();
};

export const getFacultyDetails = async (
	uuid: string
): Promise<IFacultyDetails> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/portfolio/teacher-details/${uuid}`,
		{ cache: "no-store" }
	);
	return await res.json();
};
