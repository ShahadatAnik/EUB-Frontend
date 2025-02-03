import { SystemTableColumn } from "@/components/table/system-table";
import { formatDate } from "@/lib/utils";
import {
  getEveningClassRoutine,
  getEveningExamSchedule,
  getRegularClassRoutine,
  getRegularExamSchedule,
} from "@/server/get-courses";
import { IDataTable } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const columns: SystemTableColumn<any>[] = [
  {
    accessorKey: "description",
    header: "Description",
    cell: (value, row) => (
      <Link href={row.file} className="underline text-primary font-medium">
        {value}
      </Link>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: (value, row) => formatDate(value || row.created_at),
  },
];

export const useGetEveningClassRoutine = (department: string) => {
  const [data, setData] = useState<IDataTable[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getEveningClassRoutine(department);
        setData(result);
      } catch (error) {
        console.error("Error fetching class routine:", error);
      }
    };

    fetchData();
  }, []);

  return { data, columns };
};

export const useGetEveningExamSchedule = (department: string) => {
  const [data, setData] = useState<IDataTable[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getEveningExamSchedule(department);
        setData(result);
      } catch (error) {
        console.error("Error fetching class routine:", error);
      }
    };

    fetchData();
  }, []);

  return { data, columns };
};

export const useGetRegularClassRoutine = (department: string) => {
  const [data, setData] = useState<IDataTable[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRegularClassRoutine(department);
        setData(result);
      } catch (error) {
        console.error("Error fetching class routine:", error);
      }
    };

    fetchData();
  }, []);

  return { data, columns };
};

export const useGetRegularExamSchedule = (department: string) => {
  const [data, setData] = useState<IDataTable[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRegularExamSchedule(department);
        setData(result);
      } catch (error) {
        console.error("Error fetching class routine:", error);
      }
    };

    fetchData();
  }, []);

  return { data, columns };
};
