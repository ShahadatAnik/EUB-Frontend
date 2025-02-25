'use server';

import fetchApi from '@/utils/fetchApi';
import { IPaginationResponse, ISelectOption } from '@/types';

export const getPublications = async ({
  page = 1,
  limit = 10,
  q = '',
}): Promise<IPaginationResponse<ISelectOption>> =>
  fetchApi(
    `/other/portfolio/department-teachers-publication/value/label?page=${page}&limit=${limit}&q=${q}`
  );
