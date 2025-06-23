import { ISelectOption } from '@/types';

function enumToOptions(enumeration: Record<string, string>): ISelectOption[] {
	return Object.entries(enumeration).map(([key, value]) => ({
		label: key.replace(/(?:^|_)([a-zA-Z])/g, (_, letter) => ' ' + letter.toUpperCase()).trim(),
		value,
	})) as ISelectOption[];
}

export default enumToOptions;
