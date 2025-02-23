'use server';

import { secret } from '@/config/secret';
import { IDataTable } from '@/types';

export const getJournal = async (): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/info?page_name=journal`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
