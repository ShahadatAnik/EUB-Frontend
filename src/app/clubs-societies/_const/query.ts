'use client';
import { getEventCalender } from '@/server/get';
import { IDataTable } from '@/types';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  initialData: IDataTable[];
}

export function useEventCalendar({ initialData }: IProps) {
  return useQuery({
    queryKey: ['event-calendar'],
    queryFn: getEventCalender,
    initialData,
  });
}
