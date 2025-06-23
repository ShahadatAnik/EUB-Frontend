'use server';

import { IFinancial, IFinancialFaculty } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getUndergraduateFinancialInformation = async (): Promise<IFinancial> =>
	fetchApi(`/portfolio/financial-info/category/undergraduate`);

export const getGraduateFinancialInformation = async (): Promise<IFinancial> =>
	fetchApi(`/portfolio/financial-info/category/graduate`);

export const getFinancialInformation = async (): Promise<IFinancialFaculty[]> =>
	fetchApi(`/portfolio/financial-info`);
