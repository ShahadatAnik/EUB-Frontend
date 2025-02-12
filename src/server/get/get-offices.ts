'use server';

import { secret } from '@/config/secret';
import { IOffice, IOfficeEntry } from '@/types';

export const getOffices = async (): Promise<IOffice[]> => {
  const res = await fetch(`${secret.apiBaseUrl}/portfolio/office`, {
    cache: 'no-store',
  });
  return await res.json();
};

export const getOfficeEntry = async (
  category: string
): Promise<IOfficeEntry[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/office-entry?category=${category}`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
