'use server';

import fetchApi from '@/utils/fetchApi';
import { INewsPortal, IPaginationResponse } from '@/types';

export const getNewsEvents = async (
  limit: number = 10,
  page: number = 1
): Promise<IPaginationResponse<INewsPortal>> =>
  fetchApi(`/portfolio/news?limit=${limit}&page=${page}`);

export const getNewsById = async (id: string): Promise<INewsPortal> =>
  fetchApi(`/portfolio/news/${id}`);
