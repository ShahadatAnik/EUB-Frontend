'use server';

import { INewsPortal, IPaginationResponse } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getNewsEvents = async (
  limit: number = 10,
  page: number = 1
): Promise<IPaginationResponse<INewsPortal>> =>
  fetchApi(`/portfolio/news?limit=${limit}&page=${page}&is_global=true`);

export const getNewsById = async (id: string): Promise<INewsPortal> =>
  fetchApi(`/portfolio/news/${id}`);
