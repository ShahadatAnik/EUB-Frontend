'use server';

import { secret } from '@/config/secret';
import { ICareer } from '@/types';

export const getJobCirculars = async (): Promise<ICareer[]> => {
  const res = await fetch(`${secret.apiBaseUrl}/v1/portfolio/job-circular`);
  return await res.json();
};
