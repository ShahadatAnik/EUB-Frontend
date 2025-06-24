'use server';

import { IDataTable, IPaginationResponse } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getNotices = async ({
  page = 1,
  limit = 10,
  q = '',
}): Promise<IPaginationResponse<IDataTable>> =>
  fetchApi(
    `/portfolio/info?page_name=notices&is_pagination=true&page=${page}&limit=${limit}&q=${q}`
  );

export const getNoticesByDepartment = async ({
  page = 1,
  limit = 10,
  q = '',
  department,
}: {
  page?: number;
  limit?: number;
  q?: string;
  department: string;
}): Promise<IPaginationResponse<IDataTable>> =>
  fetchApi(
    `/portfolio/routine?type=notices&portfolio_department=${department}&is_pagination=true&page=${page}&limit=${limit}&q=${q}`
  );
