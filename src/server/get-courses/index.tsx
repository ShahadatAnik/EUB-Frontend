"use server";

import { secret } from "@/config/secret";
import { IDataTable, IDepartmentTeacher } from "@/types";
//* Regular
export const getRegularClassRoutine = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/routine?department=${department}&program=regular&type=class`
  );
  return await res.json();
};
export const getRegularExamSchedule = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/routine?department=${department}&program=regular&type=exam`
  );
  return await res.json();
};
//* Evening
export const getEveningClassRoutine = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/routine?department=${department}&program=evening&type=class`
  );
  return await res.json();
};
export const getEveningExamSchedule = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/routine?department=${department}&program=evening&type=exam`
  );
  return await res.json();
};

export const getDepartmentTeachers = async (
  department: string
): Promise<IDepartmentTeacher[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/v1/portfolio/department-teachers?department=${department}`
  );
  return await res.json();
};
