'use server';

import { secret } from '@/config/secret';
import { ICertificateFee, ITuitionFee } from '@/types';

export const getUndergraduateTuitionFees = async (): Promise<ITuitionFee[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/tuition-fee?category=undergraduate`
  );
  return await res.json();
};

export const getGraduateTuitionFees = async (): Promise<ITuitionFee[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/tuition-fee?category=graduate`
  );
  return await res.json();
};

export const getCertificateTuitionFees = async (): Promise<
  ICertificateFee[]
> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/certificate-course-fee`
  );
  return await res.json();
};
