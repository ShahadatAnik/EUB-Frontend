"use server";

import { secret } from "@/config/secret";
import { IOffice, IOfficeEntry } from "@/types";

export const getOffices = async (): Promise<IOffice[]> => {
	const res = await fetch(`${secret.apiBaseUrl}/v1/portfolio/office`);
	return await res.json();
};

export const getOfficeEntry = async (category: string): Promise<IOfficeEntry[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/office-entry?category=${category}`
	);
	return await res.json();
};
