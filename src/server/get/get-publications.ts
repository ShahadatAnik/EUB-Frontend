'use server';

import { IPaginationResponse, ISelectOption } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getPublications = async ({
  page = 1,
  limit = 10,
  q = '',
  filter = '',
}): Promise<IPaginationResponse<ISelectOption>> =>
  fetchApi(
    `/other/portfolio/teachers-publication/value/label?page=${page}&limit=${limit}&q=${q}&filter=${filter}`
  );
