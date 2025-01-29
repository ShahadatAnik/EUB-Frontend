import { secret } from "@/config/secret";
import { IAcademicCalendar } from "@/types";

export const getAcademicCalender = async (): Promise<IAcademicCalendar[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/info?page_name=academic_calendar`
	);
	return await res.json();
};


