"use client";
import { getOfficeEntry, getOffices } from "@/server/getOffices";
import { IOffice } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface IProps {
	initialData: IOffice[];
}

export function useOffices({ initialData }: IProps) {
	return useQuery({
		queryKey: ["offices"],
		queryFn: getOffices,
		initialData,
	});
}
export function useOfficesWitOutInitialData() {
	return useQuery({
		queryKey: ["offices-without-initial-data"],
		queryFn: getOffices,
	});
}

export function useOfficeEntry(category: string) {
	return useQuery({
		queryKey: ["office-entry", category],
		queryFn: () => getOfficeEntry(category),
	});
}
