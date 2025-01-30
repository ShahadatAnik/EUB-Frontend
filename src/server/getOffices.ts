'use server';

import { secret } from '@/config/secret';
import { IOffice } from '@/types';

export const getOffices = async (): Promise<IOffice[]> => {
  const res = await fetch(`${secret.apiBaseUrl}/v1/portfolio/office`);
  return await res.json();
};
