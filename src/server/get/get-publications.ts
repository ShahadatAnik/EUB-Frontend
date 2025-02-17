'use server';

import { secret } from '@/config/secret';
import { IPagination, ISelectOption } from '@/types';

export interface IPublicationResponse {
  data: ISelectOption[];
  pagination: IPagination;
}

export const getPublications = async ({
  page = 1,
  limit = 10,
  q = '',
}): Promise<IPublicationResponse> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/other/portfolio/department-teachers-publication/value/label
?page=${page}&limit=${limit}&q=${q}`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
