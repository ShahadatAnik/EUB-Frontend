'use server';

import { secret } from '@/config/secret';
import { IFinancial } from '@/types';

export const getUndergraduateFinancialInformation =
  async (): Promise<IFinancial> => {
    const res = await fetch(
      `${secret.apiBaseUrl}/portfolio/financial-info/category/undergraduate`
    );

    return await res.json();
  };

export const getGraduateFinancialInformation =
  async (): Promise<IFinancial> => {
    const res = await fetch(
      `${secret.apiBaseUrl}/portfolio/financial-info/category/graduate`
    );

    return await res.json();
  };
