import { secret } from '@/config/secret';
import { IDataTable } from '@/types';

export const getNotices = async (): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/info?page_name=notices`
  );
  return await res.json();
};
