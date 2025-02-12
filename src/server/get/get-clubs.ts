'use server';
import { secret } from '@/config/secret';
import { IClub } from '@/types';

export const getClubs = async (faculty: string): Promise<IClub[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/club?portfolio_faculty=${faculty}`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
