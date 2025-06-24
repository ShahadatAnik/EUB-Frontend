'use client';

import { IOffice } from '@/types';
import { useQuery } from '@tanstack/react-query';

import { getOffices } from '@/server/get';

interface IProps {
  initialData: IOffice[];
}

export function useOffices({ initialData }: IProps) {
  return useQuery({
    queryKey: ['offices'],
    queryFn: getOffices,
    initialData,
  });
}
