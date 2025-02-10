'use server';

import { secret } from '@/config/secret';
import { IDataTable } from '@/types';

export const getAcademicInformationPolicies = async (): Promise<
  IDataTable[]
> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/info?page_name=academic_information_and_policies`
  );
  return await res.json();
};
