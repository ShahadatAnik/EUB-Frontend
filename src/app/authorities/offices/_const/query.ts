'use client';
import { getOffices } from '@/server/get';
import { IOffice } from '@/types';
import { useQuery } from '@tanstack/react-query';

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
