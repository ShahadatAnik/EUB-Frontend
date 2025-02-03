import React from "react";
import data from "../_const/faculty-members-data";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import ContentWrapper from "./content-wrapper";
import { useGetDepartmentTeachers } from "@/hooks/use-get-course";

const CoreFacultyMembers = () => {
  const { data: teachers } = useGetDepartmentTeachers("BSC-TEXTILE");
  const departmentHead = teachers.find(
    (teacher) => teacher.department_head === true
  );

  return (
    <ContentWrapper title="Core Faculty Members & Staff " className="space-y-4">
      <div className="flex border rounded-md overflow-hidden">
        <div className="">
          <Image
            src={
              departmentHead?.teacher_image
                ? departmentHead?.teacher_image
                : "/person-placeholder.jpg"
            }
            alt={"teacher_image"}
            height={160}
            width={160}
          />
        </div>

        <div className="px-6 py-3 flex flex-col gap-0">
          <div>
            <h3 className="text-xl font-semibold">
              {departmentHead?.teacher_name}
            </h3>
            <p className="mt-1 text-muted-foreground">
              {departmentHead?.teacher_designation}
            </p>
            <p className="text-muted-foreground">
              {departmentHead?.department_name}
            </p>
          </div>
          <div className="mt-2 text-muted-foreground">
            <p className="flex items-center gap-2">
              <Mail className="size-4" />
              {departmentHead?.teacher_email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4" />
              {departmentHead?.teacher_phone}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 ">
        {teachers
          .filter((teacher) => teacher.department_head === false)
          .map((faculty, index) => (
            <div
              key={index}
              className="flex  border rounded-md overflow-hidden"
            >
              <div className="">
                <Image
                  src={
                    faculty.teacher_image
                      ? faculty.teacher_image
                      : "/person-placeholder.jpg"
                  }
                  alt={"teacher_image"}
                  height={160}
                  width={160}
                />
              </div>

              <div className="px-6 py-3 flex flex-col gap-0">
                <div>
                  <h3 className="text-xl font-semibold">{faculty.teacher_name}</h3>
                  <p className="mt-1 text-muted-foreground">
                    {faculty.teacher_designation}
                  </p>
                  <p className="text-muted-foreground">{faculty.department_name}</p>
                </div>
                <div className="mt-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Mail className="size-4" />
                    {faculty.teacher_email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="size-4" />
                    {faculty.teacher_phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </ContentWrapper>
  );
};

export default CoreFacultyMembers;
