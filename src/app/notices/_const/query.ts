import { getNotices } from '@/server/getNotices';
import { IDataTable } from '@/types';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  initialData: IDataTable[];
}

export function useNotices({ initialData }: IProps) {
  return useQuery({
    queryKey: ['notices'],
    queryFn: getNotices,
    initialData,
  });
}
