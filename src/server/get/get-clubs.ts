'use server';

import { IClub } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getClubs = async (faculty: string): Promise<IClub[]> =>
	fetchApi(`/portfolio/club?portfolio_faculty=${faculty}`);
