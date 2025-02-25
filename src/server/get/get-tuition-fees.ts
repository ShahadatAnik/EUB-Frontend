'use server';

import { ICertificateFee, ITuitionFee } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getUndergraduateTuitionFees = async (): Promise<ITuitionFee[]> =>
  fetchApi(`/portfolio/tuition-fee?category=undergraduate`);

export const getGraduateTuitionFees = async (): Promise<ITuitionFee[]> =>
  fetchApi(`/portfolio/tuition-fee?category=graduate`);

export const getCertificateTuitionFees = async (): Promise<ICertificateFee[]> =>
  fetchApi(`/portfolio/certificate-course-fee`);
