import { useQuery } from '@tanstack/react-query';

import { getPrograms } from '@/server/get';

export function usePrograms() {
	return useQuery({
		queryKey: ['programs'],
		queryFn: getPrograms,
	});
}
