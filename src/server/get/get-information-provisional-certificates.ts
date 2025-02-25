'use server';

import { IDataTable } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getInformationProvisionalCertificates = async (): Promise<
  IDataTable[]
> =>
  fetchApi(
    `/portfolio/info?page_name=information_about_provisional_certificates`
  );
