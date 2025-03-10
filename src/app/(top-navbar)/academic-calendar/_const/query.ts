import { getAcademicCalender } from '@/server/get';
import { IDataTable } from '@/types';
import { useQuery } from '@tanstack/react-query';

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
