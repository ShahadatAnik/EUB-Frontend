"use server";

import { secret } from "@/config/secret";
import { IDataTable, IDepartmentTeacher } from "@/types";
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
