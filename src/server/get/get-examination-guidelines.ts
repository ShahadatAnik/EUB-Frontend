'use server';

import { IDataTable } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getExaminationGuidelines = async (): Promise<IDataTable[]> =>
	fetchApi(`/portfolio/info?page_name=examination_guidelines`);
