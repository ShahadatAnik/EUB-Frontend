'use server';

import fetchApi from '@/utils/fetchApi';
import { IPaginationResponse, ITender } from '@/types';

export const getTenders = async ({
  page = 1,
  limit = 10,
  q = '',
  table_name = '',
}): Promise<IPaginationResponse<ITender>> =>
  fetchApi(
    `/portfolio/tender?table_name=${table_name}&page=${page}&limit=${limit}&q=${q}`
  );
