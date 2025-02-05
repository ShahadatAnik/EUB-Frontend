"use server";

import { secret } from "@/config/secret";
import { IDataTable, IDepartmentTeacher, INewsPortal } from "@/types";
//* Regular
export const getRegularClassRoutine = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/routine?portfolio_department=${department}&program=regular&type=class_routine `
  );
  return await res.json();
};
export const getRegularExamSchedule = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/routine?portfolio_department=${department}&program=regular&type=exam_schedule`
  );
  return await res.json();
};
//* Evening
export const getEveningClassRoutine = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/routine?portfolio_department=${department}&program=evening&type=class_routine `
  );
  return await res.json();
};
export const getEveningExamSchedule = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/routine?portfolio_department=${department}&program=evening&type=exam_schedule`
  );
  return await res.json();
};

export const getDepartmentTeachers = async (
  department: string
): Promise<IDepartmentTeacher[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/department-teachers?portfolio_department=${department}`
  );
  return await res.json();
};

export const getDepartmentNews = async (
  department?: string,
  latest: boolean = false
): Promise<INewsPortal[]> => {
  const res = await fetch(
    department
      ? `${secret.apiBaseUrl}/v1/portfolio/news?department_name=${department}&latest=${latest}`
      : `${secret.apiBaseUrl}/v1/portfolio/news?latest=${latest}`
  );
  return await res.json();
};
