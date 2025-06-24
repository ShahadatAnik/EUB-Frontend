import { IDataTable } from '@/types';
import { useQuery } from '@tanstack/react-query';

import { getAcademicCalender } from '@/server/get';

interface IProps {
  initialData: IDataTable[];
}

export function useAcademicCalendar({ initialData }: IProps) {
  return useQuery({
    queryKey: ['academic-calendar'],
    queryFn: getAcademicCalender,
    initialData,
  });
}
