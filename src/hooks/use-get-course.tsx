import { IDataTable } from '@/types';
import { useQuery } from '@tanstack/react-query';

import {
  getDepartmentNews,
  getDepartmentTeachers,
  getEveningClassRoutine,
  getEveningExamSchedule,
  getRegularClassRoutine,
  getRegularExamSchedule,
} from '@/server/get';
import {
  getAboutUs,
  getDepartmentLatestNews,
  getEveningCourseOffer,
  getRegularCourseOffer,
} from '@/server/get/get-courses';

import ClientPdfLink from '@/components/client-pdf';
import { SystemTableColumn } from '@/components/table/system-table';

import { formatDate } from '@/lib/utils';

export const columns: SystemTableColumn<IDataTable>[] = [
  {
    accessorKey: 'description',
    header: 'Description',
    cell: (value, row) => <ClientPdfLink text={value} href={row.file} />,
  },
  {
    accessorKey: 'updated_at',
    header: 'Updated At',
    cell: (value, row) => formatDate(value || row.created_at),
  },
];

export const useGetEveningClassRoutine = (department: string) =>
  useQuery({
    queryKey: ['eveningClassRoutine', department],
    queryFn: () => getEveningClassRoutine(department),
  });
export const useGetEveningCourseOffer = (department: string) =>
  useQuery({
    queryKey: ['eveningCourseOffer', department],
    queryFn: () => getEveningCourseOffer(department),
  });

export const useGetEveningExamSchedule = (department: string) =>
  useQuery({
    queryKey: ['eveningExamSchedule', department],
    queryFn: () => getEveningExamSchedule(department),
  });

export const useGetRegularClassRoutine = (department: string) =>
  useQuery({
    queryKey: ['regularClassRoutine', department],
    queryFn: () => getRegularClassRoutine(department),
  });
export const useGetRegularCourseOffer = (department: string) =>
  useQuery({
    queryKey: ['regularCourseOffer', department],
    queryFn: () => getRegularCourseOffer(department),
  });

export const useGetRegularExamSchedule = (department: string) =>
  useQuery({
    queryKey: ['regularExamSchedule', department],
    queryFn: () => getRegularExamSchedule(department),
  });

export const useGetDepartmentTeachers = (department: string) =>
  useQuery({
    queryKey: ['departmentTeachers', department],
    queryFn: () => getDepartmentTeachers(department),
  });

export const useGetDepartmentNews = (department: string) =>
  useQuery({
    queryKey: ['departmentNews', department],
    queryFn: () => getDepartmentNews(department),
  });

export const useGetDepartmentLatestNews = (department: string) =>
  useQuery({
    queryKey: ['departmentLatestNews', department],
    queryFn: () => getDepartmentLatestNews(department),
  });

export const useGetAboutUs = (department: string) =>
  useQuery({
    queryKey: ['aboutUs', department],
    queryFn: () => getAboutUs(department),
  });
