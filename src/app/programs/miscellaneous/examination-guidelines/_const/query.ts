import { getExaminationGuidelines } from '@/server/get';
import { IDataTable } from '@/types';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  initialData: IDataTable[];
}

export function useExaminationGuidelines({ initialData }: IProps) {
  return useQuery({
    queryKey: ['examination-guidelines'],
    queryFn: getExaminationGuidelines,
    initialData,
  });
}
