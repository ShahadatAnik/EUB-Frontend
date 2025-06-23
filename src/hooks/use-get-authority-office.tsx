import { useEffect, useState } from 'react';

import { IOffice, IOfficeEntry } from '@/types';

import { getOfficeEntry, getOffices } from '@/server/get';

export const useGetOffice = () => {
	const [data, setData] = useState<IOffice[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getOffices();
				setData(result);
			} catch (error) {
				console.error('Error fetching office :', error);
			}
		};

		fetchData();
	}, []);
	return { data };
};

export const useGetOfficeEntry = (category: string) => {
	const [data, setData] = useState<IOfficeEntry[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getOfficeEntry(category);
				setData(result);
			} catch (error) {
				console.error('Error fetching office entry:', error);
			}
		};

		fetchData();
	}, [category]);

	return { data };
};
