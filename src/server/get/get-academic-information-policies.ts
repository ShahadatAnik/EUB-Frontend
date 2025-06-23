'use server';

import { IDataTable } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getAcademicInformationPolicies = async (): Promise<IDataTable[]> =>
	fetchApi(`/portfolio/info?page_name=academic_information_and_policies`);
