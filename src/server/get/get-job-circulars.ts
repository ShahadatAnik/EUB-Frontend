'use server';

import { secret } from '@/config/secret';
import { ICareer, IPagination } from '@/types';

export interface IJobCircularResponse {
  data: ICareer[];
  pagination: IPagination;
}

export const getJobCirculars = async ({
  page = 1,
  limit = 10,
  q = '',
}): Promise<IJobCircularResponse> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/job-circular?page=${page}&limit=${limit}&q=${q}`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
