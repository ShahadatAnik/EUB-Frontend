import { ISelectOption } from '@/types';

function enumToOptions(enumeration: any): ISelectOption[] {
  return Object.entries(enumeration).map(([key, value]) => ({
    label: key
      .replace(/(?:^|_)([a-zA-Z])/g, (_, letter) => ' ' + letter.toUpperCase())
      .trim(),
    value,
  })) as ISelectOption[];
}

export default enumToOptions;
