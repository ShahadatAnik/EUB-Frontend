import React from 'react';

import type { Metadata } from 'next';

import { IFacultyDetails } from '@/types';
import { convert } from 'html-to-text';

import { getFacultyDetails } from '@/server/get/get-faculties';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData as generatePageMetaData } from '@/lib/utils';

import Content from './_components/content';

type Props = {
  params: Promise<{
    program: string;
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { program, id } = await params;
  const faculty: IFacultyDetails = await getFacultyDetails((await params).id);

  const metadata = generatePageMetaData({
    title:
      faculty.teacher_name +
      ' | ' +
      faculty.teacher_designation +
      ', ' +
      faculty.department_name +
      ' | EUB',
    description: convert(faculty.education, {
      limits: { maxInputLength: 160 },
    }),
    keywords: [
      faculty.teacher_name,
      faculty.teacher_designation,
      faculty.department_name,
      'European University of Bangladesh',
      'EUB',
    ],
    pageUrl: `https://eub.edu.bd/faculty/${program}/${id}`,
  });

  return metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{
    program: string;
    id: string;
  }>;
}) {
  const { id } = await params;
  const faculty: IFacultyDetails = await getFacultyDetails(id);

  return (
    <>
      <PageHeader
        title={faculty?.teacher_name}
        description={
          faculty.teacher_designation + ', ' + faculty.department_name
        }
      />

      <PageContainer>
        <Content faculty={faculty} />
      </PageContainer>
    </>
  );
}
