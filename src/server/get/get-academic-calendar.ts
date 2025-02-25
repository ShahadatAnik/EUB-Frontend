'use server';

import { IDataTable } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getAcademicCalender = async (): Promise<IDataTable[]> =>
  fetchApi(`/portfolio/info?page_name=academic_calendar`);
