import { getPrograms } from '@/server/get';
import { useQuery } from '@tanstack/react-query';

export function usePrograms() {
  return useQuery({
    queryKey: ['programs'],
    queryFn: getPrograms,
  });
}
