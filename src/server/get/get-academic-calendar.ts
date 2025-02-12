'use server';

import { secret } from '@/config/secret';
import { IDataTable } from '@/types';

export const getAcademicCalender = async (): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/info?page_name=academic_calendar`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
