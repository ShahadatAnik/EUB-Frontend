'use client';

import { IDataTable } from '@/types';
import { useQuery } from '@tanstack/react-query';

import { getEventCalender } from '@/server/get';

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
