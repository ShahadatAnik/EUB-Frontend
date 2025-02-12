'use server';

import { secret } from '@/config/secret';
import { ICertificateFee, ITuitionFee } from '@/types';

export const getUndergraduateTuitionFees = async (): Promise<ITuitionFee[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/tuition-fee?category=undergraduate`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};

export const getGraduateTuitionFees = async (): Promise<ITuitionFee[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/tuition-fee?category=graduate`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};

export const getCertificateTuitionFees = async (): Promise<
  ICertificateFee[]
> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/certificate-course-fee`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
