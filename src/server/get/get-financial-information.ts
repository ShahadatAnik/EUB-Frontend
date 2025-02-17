'use server';

import { secret } from '@/config/secret';
import { IFinancial, IFinancialFaculty } from '@/types';

export const getUndergraduateFinancialInformation =
  async (): Promise<IFinancial> => {
    const res = await fetch(
      `${secret.apiBaseUrl}/portfolio/financial-info/category/undergraduate`,
      {
        cache: 'no-store',
      }
    );

    return await res.json();
  };

export const getGraduateFinancialInformation =
  async (): Promise<IFinancial> => {
    const res = await fetch(
      `${secret.apiBaseUrl}/portfolio/financial-info/category/graduate`,
      {
        cache: 'no-store',
      }
    );

    return await res.json();
  };

export const getFinancialInformation = async (): Promise<
  IFinancialFaculty[]
> => {
  const res = await fetch(`${secret.apiBaseUrl}/portfolio/financial-info`, {
    cache: 'no-store',
  });

  return await res.json();
};
