'use server';

import { IPaginationResponse, ITender } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getTenders = async ({
	page = 1,
	limit = 10,
	q = '',
	table_name = '',
}): Promise<IPaginationResponse<ITender>> =>
	fetchApi(`/portfolio/tender?table_name=${table_name}&page=${page}&limit=${limit}&q=${q}`);
