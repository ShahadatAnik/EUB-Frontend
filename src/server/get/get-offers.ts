'use server';

import { IOffer } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getOffers = async (): Promise<IOffer[]> => fetchApi(`/portfolio/offer?is_offer=true`);
