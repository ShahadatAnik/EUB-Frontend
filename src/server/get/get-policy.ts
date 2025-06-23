'use server';

import { IPagination, IPolicy } from '@/types';
import fetchApi from '@/utils/fetchApi';

export interface IPolicyResponse {
	data: IPolicy[];
	pagination: IPagination;
}

export const getPolicy = async ({ page = 1, limit = 10, q = '' }): Promise<IPolicyResponse> =>
	fetchApi(`/portfolio/policy?page=${page}&limit=${limit}&q=${q}`);
