'use server';

import { secret } from '@/config/secret';
import { IDataTable } from '@/types';

export const getEventCalender = async (): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/info?page_name=clubs_and_society`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
