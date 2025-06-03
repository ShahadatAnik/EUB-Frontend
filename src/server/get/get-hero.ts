'use server';

import { IHero } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getHero = async (): Promise<IHero[]> =>
  fetchApi(`/portfolio/feature?feature_type=hero&is_pagination=false&is_active=true`);
