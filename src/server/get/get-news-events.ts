'use server';

import { secret } from '@/config/secret';
import { INewsPortal, IPaginationResponse } from '@/types';

export const getNewsEvents = async (
  limit: number = 10,
  page: number = 1
): Promise<IPaginationResponse<INewsPortal>> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/news?limit=${limit}&page=${page}`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};

export const getNewsById = async (id: string): Promise<INewsPortal> => {
  const res = await fetch(`${secret.apiBaseUrl}/portfolio/news/${id}`, {
    cache: 'no-store',
  });
  return await res.json();
};
