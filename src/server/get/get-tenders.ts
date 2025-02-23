'use server';

import { secret } from '@/config/secret';
import { IPaginationResponse, ITender } from '@/types';

export const getTenders = async ({
  page = 1,
  limit = 10,
  q = '',
  table_name = '',
}): Promise<IPaginationResponse<ITender>> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/tender?table_name=${table_name}&page=${page}&limit=${limit}&q=${q}`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
