'use server';

import { IAuthorityInfo, IMemberData } from '@/types/authorities';
import fetchApi from '@/utils/fetchApi';

export const getAuthoritiesChancellor = async (): Promise<IAuthorityInfo> =>
  fetchApi(`/portfolio/authorities/category/chancellor`);

export const getAuthoritiesChairman = async (): Promise<IAuthorityInfo> =>
  fetchApi(`/portfolio/authorities/category/chairman`);

export const getAuthoritiesVC = async (): Promise<IAuthorityInfo> =>
  fetchApi(`/portfolio/authorities/category/vc`);

export const getAuthoritiesProVC = async (): Promise<IAuthorityInfo> =>
  fetchApi(`/portfolio/authorities/category/pro_vc`);

export const getAuthoritiesDean = async (): Promise<IAuthorityInfo> =>
  fetchApi(`/portfolio/authorities/category/dean`);

export const getAuthoritiesTreasurer = async (): Promise<IAuthorityInfo> =>
  fetchApi(`/portfolio/authorities/category/treasurer`);

export const getAuthoritiesDirectorCoordination =
  async (): Promise<IAuthorityInfo> =>
    fetchApi(`/portfolio/authorities/category/director_coordination`);

export const getAuthoritiesRegistrar = async (): Promise<IAuthorityInfo> =>
  fetchApi(`/portfolio/authorities/category/registrar`);

export const getAuthoritiesSyndicate = async (): Promise<IMemberData> =>
  fetchApi(`/portfolio/bot?category=syndicate`);

export const getAuthoritiesAcademicCouncil = async (): Promise<IMemberData> =>
  fetchApi(`/portfolio/bot?category=academic_council`);
