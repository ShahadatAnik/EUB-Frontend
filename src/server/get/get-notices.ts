'use server';

import { secret } from '@/config/secret';
import { IDataTable, IPaginationResponse } from '@/types';

export const getNotices = async ({
  page = 1,
  limit = 10,
  q = '',
}): Promise<IPaginationResponse<IDataTable>> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/info?page_name=notices&is_pagination=true&page=${page}&limit=${limit}&q=${q}`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
