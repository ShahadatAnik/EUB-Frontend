"use server";

import { secret } from "@/config/secret";
import { IClubAndSociety } from "@/types";

export const getFaculties = async (): Promise<IClubAndSociety[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/other/portfolio/faculty/value/label/?page=clubs_and_society`
	);
	return await res.json();
};
