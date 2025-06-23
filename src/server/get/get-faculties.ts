'use server';

import { IClubAndSociety, IFacultyDetails } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getFaculties = async (): Promise<IClubAndSociety[]> =>
	fetchApi(`/other/portfolio/faculty/value/label?page='clubs_and_society'`);

export const getFacultyDetails = async (uuid: string): Promise<IFacultyDetails> =>
	fetchApi(`/portfolio/teacher-details/${uuid}`);
