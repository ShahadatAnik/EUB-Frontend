import { IFinancialFaculty } from '@/types';
import { FINANCIAL_INFO_TABLE_TYPE } from '@/types/enum';

export const getFinancialInfoByGroup = (data: IFinancialFaculty[]) => {
	const result: Record<FINANCIAL_INFO_TABLE_TYPE, IFinancialFaculty[]> = {
		[FINANCIAL_INFO_TABLE_TYPE.ENGINEERING_HSC]: [],
		[FINANCIAL_INFO_TABLE_TYPE.ENGINEERING_DIPLOMA]: [],
		[FINANCIAL_INFO_TABLE_TYPE.BBA]: [],
		[FINANCIAL_INFO_TABLE_TYPE.ARTS]: [],
	};

	Object.values(FINANCIAL_INFO_TABLE_TYPE).forEach((value) => {
		result[value] = data.filter((item) => item.table_name === value);
	});

	return result;
};
