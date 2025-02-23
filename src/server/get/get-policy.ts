'use server';

import { secret } from '@/config/secret';
import { IPagination, IPolicy } from '@/types';

export interface IPolicyResponse {
  data: IPolicy[];
  pagination: IPagination;
}

export const getPolicy = async ({
  page = 1,
  limit = 10,
  q = '',
}): Promise<IPolicyResponse> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/policy?page=${page}&limit=${limit}&q=${q}`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
