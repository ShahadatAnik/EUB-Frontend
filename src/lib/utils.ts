import { clsx, type ClassValue } from 'clsx';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateMetaData = (metaData: Metadata) => metaData;

export const getAllUniqueKeys = (array: Record<string, unknown>[]) => {
  const allKeys: string[] = [];

  array.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      if (!allKeys.includes(key)) {
        allKeys.push(key);
      }
    });
  });

  return allKeys;
};

export const formatDate = (dateString: string | Date) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};
