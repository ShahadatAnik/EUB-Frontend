import { getAcademicInformationPolicies } from '@/server/getAcademicInformationPolicies';
import { IDataTable } from '@/types';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  initialData: IDataTable[];
}

export function useAcademicInformationPolicies({ initialData }: IProps) {
  return useQuery({
    queryKey: ['academic-information-policies'],
    queryFn: getAcademicInformationPolicies,
    initialData,
  });
}
