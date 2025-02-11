'use server';

import { secret } from '@/config/secret';
import { IDataTable } from '@/types';

export const getExaminationGuidelines = async (): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/info?page_name=examination_guidelines`
  );
  return await res.json();
};
