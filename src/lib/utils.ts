import { Metadata } from 'next';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface IProps extends Metadata {
  title: string;
  description: string;
  keywords?: string[];
  pageUrl?: string;
}

export const generateMetaData = (props: IProps): Metadata => ({
  publisher: 'European University of Bangladesh',
  authors: [{ name: 'European University of Bangladesh' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      props.pageUrl !== undefined
        ? (process.env.LIVE_BASE_URL as string) + props.pageUrl
        : (process.env.LIVE_BASE_URL as string),
  },

  ...props,
});

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
