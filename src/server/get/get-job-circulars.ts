'use server';

import fetchApi from '@/utils/fetchApi';
import { ICareer, IPagination } from '@/types';

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
