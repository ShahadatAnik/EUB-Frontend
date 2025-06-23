'use server';

import { IDataTable } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getEventCalender = async (): Promise<IDataTable[]> =>
	fetchApi(`/portfolio/info?page_name=clubs_and_society`);
