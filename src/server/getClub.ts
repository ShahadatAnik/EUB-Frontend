"use server";
import { secret } from "@/config/secret";
import { IClub } from "@/types";

export const getClubs = async (faculty: string): Promise<IClub[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/club?portfolio_faculty=${faculty}`
	);
	return await res.json();
};
