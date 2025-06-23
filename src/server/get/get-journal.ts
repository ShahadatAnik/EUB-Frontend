'use server';

import { IDataTable } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getJournal = async (): Promise<IDataTable[]> =>
  fetchApi(`/portfolio/info?page_name=journal`);
