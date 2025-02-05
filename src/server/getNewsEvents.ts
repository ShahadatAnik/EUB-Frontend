"use server";

import { secret } from "@/config/secret";
import { INewsPortal } from "@/types";

export const getNewsEvents = async (): Promise<INewsPortal[]> => {
  const res = await fetch(`${secret.apiBaseUrl}/v1/portfolio/news`);
  return await res.json();
};

export const getNewsById = async (id: string): Promise<INewsPortal> => {
  const res = await fetch(`${secret.apiBaseUrl}/v1/portfolio/news/${id}`);
  return await res.json();
};
