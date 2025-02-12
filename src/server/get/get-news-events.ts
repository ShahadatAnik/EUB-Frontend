'use server';

import { secret } from '@/config/secret';
import { INewsPortal, IPagination } from '@/types';

type getAllNewsEventsProps = {
  data: INewsPortal[];
  pagination: IPagination;
};

export const getNewsEvents = async (
  limit: number = 10,
  page: number = 1
): Promise<getAllNewsEventsProps> => {
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
