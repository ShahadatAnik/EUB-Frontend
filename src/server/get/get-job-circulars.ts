'use server';

import { ICareer, IPagination } from '@/types';
import fetchApi from '@/utils/fetchApi';

export interface IJobCircularResponse {
	data: ICareer[];
	pagination: IPagination;
}

export const getJobCirculars = async ({
	page = 1,
	limit = 10,
	q = '',
}): Promise<IJobCircularResponse> =>
	fetchApi(`/portfolio/job-circular?page=${page}&limit=${limit}&q=${q}`);
