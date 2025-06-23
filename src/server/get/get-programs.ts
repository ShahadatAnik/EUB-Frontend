'use server';

import { IProgram } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getPrograms = async (): Promise<IProgram[]> => fetchApi(`/portfolio/program`);
