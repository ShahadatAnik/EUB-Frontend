'use server';

import fetchApi from '@/utils/fetchApi';
import { IOffice, IOfficeEntry } from '@/types';

export const getOffices = async (): Promise<IOffice[]> =>
  fetchApi(`/portfolio/office`);

export const getOfficeEntry = async (
  category: string
): Promise<IOfficeEntry[]> =>
  fetchApi(`/portfolio/office-entry?category=${category}`);
