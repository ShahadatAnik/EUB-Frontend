'use server';

import { secret } from '@/config/secret';
import { IProgram } from '@/types';

export const getPrograms = async (): Promise<IProgram[]> => {
  const res = await fetch(`${secret.apiBaseUrl}/portfolio/program`);
  return await res.json();
};
