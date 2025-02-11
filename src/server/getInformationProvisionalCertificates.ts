'use server';

import { secret } from '@/config/secret';
import { IDataTable } from '@/types';

export const getInformationProvisionalCertificates = async (): Promise<
  IDataTable[]
> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/info?page_name=information_about_provisional_certificates`
  );
  return await res.json();
};
