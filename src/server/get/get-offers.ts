'use server';

import { secret } from '@/config/secret';
import { IOffer } from '@/types';

export const getOffers = async (): Promise<IOffer[]> => {
  const res = await fetch(`${secret.apiBaseUrl}/portfolio/offer`, {
    cache: 'no-store',
  });
  return await res.json();
};
