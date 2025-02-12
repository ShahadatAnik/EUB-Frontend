'use server';

import { secret } from '@/config/secret';
import {
  IAuthoritiesChairman,
  IAuthoritiesChancellor,
  IAuthoritiesDean,
  IAuthoritiesDirectorCoordination,
  IAuthoritiesProVC,
  IAuthoritiesRegistrar,
  IAuthoritiesTreasurer,
  IAuthoritiesVC,
  IMemberData,
} from '@/types/authorities';

export const getAuthoritiesChancellor =
  async (): Promise<IAuthoritiesChancellor> => {
    const res = await fetch(
      `${secret.apiBaseUrl}/portfolio/authorities/category/chancellor`,
      {
        cache: 'no-store',
      }
    );
    return await res.json();
  };

export const getAuthoritiesChairman =
  async (): Promise<IAuthoritiesChairman> => {
    const res = await fetch(
      `${secret.apiBaseUrl}/portfolio/authorities/category/chairman`,
      {
        cache: 'no-store',
      }
    );
    return await res.json();
  };

export const getAuthoritiesVC = async (): Promise<IAuthoritiesVC> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/authorities/category/vc`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};

export const getAuthoritiesProVC = async (): Promise<IAuthoritiesProVC> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/authorities/category/pro_vc`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};

export const getAuthoritiesDean = async (): Promise<IAuthoritiesDean> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/authorities/category/dean`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};

export const getAuthoritiesTreasurer =
  async (): Promise<IAuthoritiesTreasurer> => {
    const res = await fetch(
      `${secret.apiBaseUrl}/portfolio/authorities/category/treasurer`,
      {
        cache: 'no-store',
      }
    );
    return await res.json();
  };

export const getAuthoritiesDirectorCoordination =
  async (): Promise<IAuthoritiesDirectorCoordination> => {
    const res = await fetch(
      `${secret.apiBaseUrl}/portfolio/authorities/category/director_coordination`,
      {
        cache: 'no-store',
      }
    );
    return await res.json();
  };

export const getAuthoritiesRegistrar =
  async (): Promise<IAuthoritiesRegistrar> => {
    const res = await fetch(
      `${secret.apiBaseUrl}/portfolio/authorities/category/registrar`,
      {
        cache: 'no-store',
      }
    );
    return await res.json();
  };

export const getAuthoritiesSyndicate = async (): Promise<IMemberData> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/bot?category=syndicate`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
export const getAuthoritiesAcademicCouncil = async (): Promise<IMemberData> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/bot?category=academic_council`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
