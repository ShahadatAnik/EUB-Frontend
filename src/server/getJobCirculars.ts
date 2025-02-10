'use server';

import { secret } from '@/config/secret';
import { ICareer } from '@/types';

export const getJobCirculars = async (): Promise<ICareer[]> => {
  const res = await fetch(`${secret.apiBaseUrl}/portfolio/job-circular`);
  return await res.json();
};
